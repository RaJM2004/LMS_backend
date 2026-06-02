
import os
import sys

# Pre-defined paths for the lab
input_image_path = r""
output_image_path = r"C:\\Users\\rajma\\OneDrive\\Desktop\\User_Dashboard\\backend\\temp\\4859c16e-999d-40ca-9d3c-b69a0f29bd39_out.png"

# Helper to save output easily
def show_image(img):
    try:
        import cv2
        cv2.imwrite(output_image_path, img)
        print("Image saved successfully.")
    except Exception as e:
        print(f"Error saving image: {e}")

import nltk
from nltk.tokenize import word_tokenize

# Example for Bag of Words & TF-IDF
text = "Natural Language Processing is fascinating."
print("Processing: " + text)