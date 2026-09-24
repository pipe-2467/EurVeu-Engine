import os
import requests
from bs4 import BeautifulSoup

def download_sample_data():
    os.makedirs('data_raw', exist_ok=True)
    print("Fetching internet data samples...")
    
    # ตัวอย่าง: ดึงภาพเมืองดิบจาก Unsplash API / Source
    img_url = "https://images.unsplash.com/photo-1477959858617-67f30ac4ce78?auto=format&fit=crop&w=300&q=80"
    img_data = requests.get(img_url).content
    with open('data_raw/city_sample.jpg', 'wb') as f:
        f.write(img_data)
        
    print("Data download completed!")

if __name__ == "__main__":
    download_sample_data()
