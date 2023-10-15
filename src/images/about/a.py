import os
from PIL import Image

def calculate_aspect_ratio(image_path):
    with Image.open(image_path) as img:
        width, height = img.size
        gcd = greatest_common_divisor(width, height)
        return width // gcd, height // gcd

def greatest_common_divisor(a, b):
    while b:
        a, b = b, a % b
    return a

def main():
    folder_path = '.'  # Current directory. Change to desired path if necessary

    for filename in os.listdir(folder_path):
        if filename.lower().endswith(('.png', '.jpg', '.jpeg', '.gif', '.bmp', '.tiff')):
            path = os.path.join(folder_path, filename)
            aspect_ratio = calculate_aspect_ratio(path)
            print(f"Aspect Ratio of {filename}: {aspect_ratio[0]}:{aspect_ratio[1]}")

if __name__ == "__main__":
    main()
