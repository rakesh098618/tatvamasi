import os
from PIL import Image

base_dir = r"D:\tatvamasi"
assets_dir = os.path.join(base_dir, "assets")
res_dir = os.path.join(base_dir, "android", "app", "src", "main", "res")

src_img_path = os.path.join(assets_dir, "ayyappa_swami_master.png")
if not os.path.exists(src_img_path):
    src_img_path = os.path.join(assets_dir, "ayyappa_swami.png")

swami_img = Image.open(src_img_path).convert("RGBA")
bg_color = (15, 11, 6, 255) # Deep sacred bronze-black #0F0B06

def make_clean_splash(w, h):
    im = Image.new("RGBA", (w, h), bg_color)
    
    # Target height is around 40% of the screen height, maintaining exact aspect ratio
    target_h = int(h * 0.40)
    aspect_ratio = swami_img.width / swami_img.height
    target_w = int(target_h * aspect_ratio)
    
    # Ensure it also doesn't exceed 65% of the screen width
    if target_w > int(w * 0.65):
        target_w = int(w * 0.65)
        target_h = int(target_w / aspect_ratio)
        
    resized_swami = swami_img.resize((target_w, target_h), Image.Resampling.LANCZOS)
    
    # Center perfectly horizontally and vertically
    x = (w - target_w) // 2
    y = (h - target_h) // 2
    
    im.paste(resized_swami, (x, y), resized_swami)
    return im

drawable_sizes = {
    "drawable": (480, 800),
    "drawable-mdpi": (320, 480),
    "drawable-hdpi": (480, 800),
    "drawable-xhdpi": (720, 1280),
    "drawable-xxhdpi": (1080, 1920),
    "drawable-xxxhdpi": (1440, 2560)
}

for folder, (w, h) in drawable_sizes.items():
    folder_path = os.path.join(res_dir, folder)
    os.makedirs(folder_path, exist_ok=True)
    splash = make_clean_splash(w, h)
    out_path = os.path.join(folder_path, "splashscreen_logo.png")
    splash.save(out_path, "PNG")
    print(f"Generated {out_path} ({w}x{h})")

# 1024x1024 square splash-icon for Expo
splash_1024 = make_clean_splash(1024, 1024)
splash_1024.save(os.path.join(assets_dir, "splash-icon.png"), "PNG")
print("Generated assets/splash-icon.png")

splash_full = make_clean_splash(1080, 1920)
splash_full.save(os.path.join(assets_dir, "splash.png"), "PNG")
print("Generated assets/splash.png")

print("SUCCESS: Clean, text-free, un-stretched splash screens generated!")
