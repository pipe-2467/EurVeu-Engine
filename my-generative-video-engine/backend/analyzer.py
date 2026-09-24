import json
import numpy as np
from PIL import Image

def analyze_image_to_rules():
    img = Image.open('data_raw/city_sample.jpg').resize((36, 64)) # สเกลลงเพื่อดึง Matrix พิกเซล
    img_np = np.array(img)
    
    # คำนวณค่าเฉลี่ยสี (Color Palette Matrix)
    avg_color_per_row = img_np.mean(axis=1).tolist()
    
    data_rules = {
        "canvas_width": 360,
        "canvas_height": 640,
        "sky_color": [10, 10, 25],
        "building_colors": [[30, 30, 45], [50, 50, 70]],
        "cabbage_rgb_base": [40, 200, 60],
        "palette_matrix": avg_color_per_row,
        "base_frequencies": [220.0, 440.0, 523.25, 880.0]
    }
    
    with open('backend/data_rules.json', 'w') as f:
        json.dump(data_rules, f, indent=4)
        
    print("Matrix extraction complete! Saved to data_rules.json")

if __name__ == "__main__":
    analyze_image_to_rules()
