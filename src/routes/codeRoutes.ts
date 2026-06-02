import express from 'express';
import { exec } from 'child_process';
import fs from 'fs';
import path from 'path';
import { v4 as uuidv4 } from 'uuid';

const router = express.Router();

router.post('/execute', (req, res) => {
    const { code, language, image } = req.body;

    if (!code) {
        return res.status(400).json({ output: "No code provided" });
    }

    // Only supporting Python for now as per the course context
    if (language !== 'python') {
        return res.status(400).json({ output: "Only Python language is supported currently." });
    }

    const tempDir = process.env.VERCEL
        ? '/tmp'
        : path.join(__dirname, '../../temp');
    if (!fs.existsSync(tempDir)) {
        fs.mkdirSync(tempDir);
    }

    const runId = uuidv4();
    const fileName = `${runId}.py`;
    const filePath = path.join(tempDir, fileName);

    let inputImagePath = '';
    const outputImagePath = path.join(tempDir, `${runId}_out.png`);

    if (image) {
        // Handle base64 image
        inputImagePath = path.join(tempDir, `${runId}_in.png`);
        try {
            const matches = image.match(/^data:image\/([A-Za-z-+\/]+);base64,(.+)$/);
            if (matches && matches.length === 3) {
                const buffer = Buffer.from(matches[2], 'base64');
                fs.writeFileSync(inputImagePath, buffer);
            } else {
                // Try direct base64 if no prefix
                const buffer = Buffer.from(image, 'base64');
                fs.writeFileSync(inputImagePath, buffer);
            }
        } catch (e) {
            console.error("Error saving input image:", e);
        }
    }

    // Inject paths and helper function into the code
    const backendSetupCode = `
import os
import sys

# Pre-defined paths for the lab
input_image_path = r"${inputImagePath.replace(/\\/g, '\\\\')}"
output_image_path = r"${outputImagePath.replace(/\\/g, '\\\\')}"

# Helper to save output easily
def show_image(img):
    try:
        import cv2
        cv2.imwrite(output_image_path, img)
        print("Image saved successfully.")
    except Exception as e:
        print(f"Error saving image: {e}")

`;

    const finalCode = backendSetupCode + code;

    fs.writeFileSync(filePath, finalCode);

    // Timeout after 60 seconds (increased for ML/DL ops)
    exec(`python "${filePath}"`, { timeout: 60000 }, (error, stdout, stderr) => {
        // Cleanup temp file
        try {
            if (fs.existsSync(filePath)) fs.unlinkSync(filePath);
            if (fs.existsSync(inputImagePath)) fs.unlinkSync(inputImagePath);
        } catch (e) {
            console.error("Error deleting temp files:", e);
        }

        let outputImageBase64 = null;
        try {
            if (fs.existsSync(outputImagePath)) {
                const bitmap = fs.readFileSync(outputImagePath);
                outputImageBase64 = "data:image/png;base64," + bitmap.toString('base64');
                fs.unlinkSync(outputImagePath);
            }
        } catch (e) {
            console.error("Error reading output image:", e);
        }

        if (error) {
            // If it was a timeout
            if (error.killed) {
                return res.json({ output: "Error: Execution timed out (limit: 10s)", image: outputImageBase64 });
            }
            // If it was a runtime error, stderr usually has the info
            if (stderr) {
                return res.json({ output: stderr, image: outputImageBase64 });
            }
            return res.json({ output: error.message, image: outputImageBase64 });
        }

        if (stderr) {
            return res.json({ output: stderr, image: outputImageBase64 });
        }

        res.json({ output: stdout, image: outputImageBase64 });
    });
});

export default router;
