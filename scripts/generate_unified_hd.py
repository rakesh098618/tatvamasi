import os
from PIL import Image, ImageEnhance, ImageFilter, ImageDraw

src_path = r"C:/Users/rak09/.gemini/antigravity/brain/5bd14d0d-2a92-4ada-84de-02e2ba30f457/.user_uploaded/media_1794889740044_5f37c005.jpg"
base_dir = r"C:\Users\rak09\OneDrive\Desktop\tatvamasi"
assets_dir = os.path.join(base_dir, "assets")
res_dir = os.path.join(base_dir, "android", "app", "src", "main", "res")

# 1. Open and Enhance to HD
orig = Image.open(src_path).convert("RGBA")

# Upscale to 1005x1791 (3x) using high-quality Lanczos
hd_w = orig.width * 3
hd_h = orig.height * 3
hd = orig.resize((hd_w, hd_h), Image.Resampling.LANCZOS)

# Apply subtle UnsharpMask for crisp details (Shiva's trishul, Swami's jewels & garlands)
hd = hd.filter(ImageFilter.UnsharpMask(radius=2, percent=125, threshold=3))

# Enhance contrast and sharpness slightly for rich temple golden glow
enh_c = ImageEnhance.Contrast(hd)
hd = enh_c.enhance(1.08)

enh_s = ImageEnhance.Sharpness(hd)
hd = enh_s.enhance(1.15)

enh_col = ImageEnhance.Color(hd)
hd = enh_col.enhance(1.06)

# Save Master HD images in assets
master_path = os.path.join(assets_dir, "ayyappa_swami_master.png")
hd.save(master_path, "PNG")
hd.save(os.path.join(assets_dir, "ayyappa_swami.png"), "PNG")
hd.save(os.path.join(assets_dir, "ayyappa_welcome.png"), "PNG")
print("Saved Master HD image:", master_path, f"({hd_w}x{hd_h})")

bg_color = (10, 6, 3, 255) # Deep sacred bronze-black #0A0603

# 2. Generate 1024x1024 Assets (icon.png, android-icon-foreground.png, splash-icon.png)
icon_1024 = Image.new("RGBA", (1024, 1024), bg_color)
# Center swami inside 1024x1024 with safe margins
scale = 1024 / hd_h
w_fit = int(hd_w * scale)
resized_for_icon = hd.resize((w_fit, 1024), Image.Resampling.LANCZOS)
x_off = (1024 - w_fit) // 2
icon_1024.paste(resized_for_icon, (x_off, 0), resized_for_icon)
icon_1024.save(os.path.join(assets_dir, "icon.png"), "PNG")

# Adaptive Foreground (1024x1024) safe zone central 66% (approx 720px)
fg_1024 = Image.new("RGBA", (1024, 1024), (0, 0, 0, 0))
target_h = int(1024 * 0.82)
target_w = int(hd_w * (target_h / hd_h))
resized_fg = hd.resize((target_w, target_h), Image.Resampling.LANCZOS)
x_off = (1024 - target_w) // 2
y_off = (1024 - target_h) // 2
fg_1024.paste(resized_fg, (x_off, y_off), resized_fg)
fg_1024.save(os.path.join(assets_dir, "android-icon-foreground.png"), "PNG")
fg_1024.save(os.path.join(assets_dir, "splash-icon.png"), "PNG")
print("Saved 1024x1024 assets")

# 3. Generate Android Mipmap Adaptive Foregrounds
mipmap_foreground_sizes = {
    "mipmap-mdpi": 108,
    "mipmap-hdpi": 162,
    "mipmap-xhdpi": 216,
    "mipmap-xxhdpi": 324,
    "mipmap-xxxhdpi": 432
}

for folder, size in mipmap_foreground_sizes.items():
    folder_path = os.path.join(res_dir, folder)
    os.makedirs(folder_path, exist_ok=True)
    
    fg = Image.new("RGBA", (size, size), (0, 0, 0, 0))
    target_h = int(size * 0.82)
    target_w = int(hd_w * (target_h / hd_h))
    if target_w > int(size * 0.82):
        target_w = int(size * 0.82)
        target_h = int(hd_h * (target_w / hd_w))
    
    resized = hd.resize((target_w, target_h), Image.Resampling.LANCZOS)
    x = (size - target_w) // 2
    y = (size - target_h) // 2
    fg.paste(resized, (x, y), resized)
    fg.save(os.path.join(folder_path, "ic_launcher_foreground.png"), "PNG")

# 4. Generate Standard ic_launcher.png (Square) and ic_launcher_round.png (Circular)
legacy_sizes = {
    "mipmap-mdpi": 48,
    "mipmap-hdpi": 72,
    "mipmap-xhdpi": 96,
    "mipmap-xxhdpi": 144,
    "mipmap-xxxhdpi": 192
}

for folder, size in legacy_sizes.items():
    folder_path = os.path.join(res_dir, folder)
    
    # Square
    sq = Image.new("RGBA", (size, size), bg_color)
    target_h = size
    target_w = int(hd_w * (target_h / hd_h))
    resized = hd.resize((target_w, target_h), Image.Resampling.LANCZOS)
    x = (size - target_w) // 2
    sq.paste(resized, (x, 0), resized)
    sq.save(os.path.join(folder_path, "ic_launcher.png"), "PNG")
    
    # Round
    round_img = Image.new("RGBA", (size, size), (0, 0, 0, 0))
    mask = Image.new("L", (size, size), 0)
    draw = ImageDraw.Draw(mask)
    draw.ellipse((0, 0, size - 1, size - 1), fill=255)
    round_img.paste(sq, (0, 0), mask)
    round_img.save(os.path.join(folder_path, "ic_launcher_round.png"), "PNG")

print("Generated all mipmap icons (foreground, square, round)")

# 5. Generate Android Splashscreen Drawables
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
    
    splash = Image.new("RGBA", (w, h), bg_color)
    target_h = int(h * 0.62)
    target_w = int(hd_w * (target_h / hd_h))
    if target_w > int(w * 0.88):
        target_w = int(w * 0.88)
        target_h = int(hd_h * (target_w / hd_w))
    
    resized = hd.resize((target_w, target_h), Image.Resampling.LANCZOS)
    x = (w - target_w) // 2
    y = (h - target_h) // 2
    splash.paste(resized, (x, y), resized)
    splash.save(os.path.join(folder_path, "splashscreen_logo.png"), "PNG")

print("Generated all splashscreen drawables successfully!")

