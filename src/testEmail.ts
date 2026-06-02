
import { sendEmail } from './utils/emailService';
import dotenv from 'dotenv';
dotenv.config();

async function main() {
    console.log("Sending test email to rakshahubballi08@gmail.com...");
    const result = await sendEmail(
        "rakshahubballi08@gmail.com",
        "This is a test message body. Your certificate is attached below.", // message
        "", // attachmentData (empty for test)
        "test_certificate.png", // attachmentName
        'template_73rhufh', // templateId
        {
            student_name: "Raksha Hubballi",
            course_name: "Test Course 101",
            certificate_id: "TEST-CERT-001",
            certificate_link: "https://quantxai.com/verify/TEST-CERT-001",
            verify_link: "https://quantxai.com/verify",
            company_name: "Genesys Quantis",
            company_email: "info@quant-xai.com",
            logo_url: "https://quantxai.com/logo.png"
        }
    );
    console.log("Result:", result);
}

main().catch(console.error);
