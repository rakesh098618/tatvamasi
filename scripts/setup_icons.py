import os
from PIL import Image, ImageDraw

base_dir = r"C:\Users\rak09\OneDrive\Desktop\tatvamasi"
src_img_path = os.path.join(base_dir, "assets", "ayyappa_swami.png")
res_dir = os.path.join(base_dir, "android", "app", "src", "main", "res")

src_img = Image.open(src_img_path).convert("RGBA")

# 1. Generate ic_launcher_foreground.png for adaptive icons
# Adaptive icon sizes: 108x108 (mdpi), 162x162 (hdpi), 216x216 (xhdpi), 324x324 (xxhdpi), 432x432 (xxxhdpi)
# Safe zone is central 66% (72dp of 108dp)
mipmap_foreground_sizes = {
    "mipmap-mdpi": 108,
    "mipmap-hdpi": 162,
    "mipmap-xhdpi": 216,
    "mipmap-xxhdpi": 324,
    "mipmap-xxxhdpi": 432
}

bg_color = (15, 11, 6, 255) # Deep sacred bronze #0F0B06

for folder, size in mipmap_foreground_sizes.items():
    folder_path = os.path.join(res_dir, folder)
    os.makedirs(folder_path, exist_ok=True)
    
    # Foreground image: transparent or subtle bg, swami centered in safe area (~70% of size)
    fg = Image.new("RGBA", (size, size), (0, 0, 0, 0))
    target_h = int(size * 0.80)
    target_w = int(src_img.width * (target_h / src_img.height))
    if target_w > int(size * 0.80):
        target_w = int(size * 0.80)
        target_h = int(src_img.height * (target_w / src_img.width))
    
    resized_swami = src_img.resize((target_w, target_h), Image.Resampling.LANCZOS)
    x = (size - target_w) // 2
    y = (size - target_h) // 2
    fg.paste(resized_swami, (x, y), resized_swami)
    fg_path = os.path.join(folder_path, "ic_launcher_foreground.png")
    fg.save(fg_path, "PNG")
    print(f"Generated {fg_path} ({size}x{size})")

# 2. Generate standard ic_launcher.png (square) and ic_launcher_round.png (circle)
# mdpi: 48, hdpi: 72, xhdpi: 96, xxhdpi: 144, xxxhdpi: 192
legacy_sizes = {
    "mipmap-mdpi": 48,
    "mipmap-hdpi": 72,
    "mipmap-xhdpi": 96,
    "mipmap-xxhdpi": 144,
    "mipmap-xxxhdpi": 192
}

for folder, size in legacy_sizes.items():
    folder_path = os.path.join(res_dir, folder)
    
    # Square icon
    sq = Image.new("RGBA", (size, size), bg_color)
    target_h = size
    target_w = int(src_img.width * (target_h / src_img.height))
    if target_w < size:
        # scale so it fills height, and center horizontally
        resized = src_img.resize((target_w, target_h), Image.Resampling.LANCZOS)
        x = (size - target_w) // 2
        sq.paste(resized, (x, 0), resized)
    else:
        target_w = size
        target_h = int(src_img.height * (target_w / src_img.width))
        resized = src_img.resize((target_w, target_h), Image.Resampling.LANCZOS)
        y = (size - target_h) // 2
        sq.paste(resized, (0, y), resized)
    
    sq_path = os.path.join(folder_path, "ic_launcher.png")
    sq.save(sq_path, "PNG")
    
    # Round icon
    round_img = Image.new("RGBA", (size, size), (0, 0, 0, 0))
    mask = Image.new("L", (size, size), 0)
    draw = ImageDraw.Draw(mask)
    draw.ellipse((0, 0, size - 1, size - 1), fill=255)
    round_img.paste(sq, (0, 0), mask)
    
    round_path = os.path.join(folder_path, "ic_launcher_round.png")
    round_img.save(round_path, "PNG")
    print(f"Generated {sq_path} and {round_path}")

# 3. Generate splashscreen_logo.png for drawable and drawable-*
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
    
    # Swami centered in splash
    target_h = int(h * 0.55)
    target_w = int(src_img.width * (target_h / src_img.height))
    if target_w > int(w * 0.85):
        target_w = int(w * 0.85)
        target_h = int(src_img.height * (target_w / src_img.width))
    
    resized = src_img.resize((target_w, target_h), Image.Resampling.LANCZOS)
    x = (w - target_w) // 2
    y = (h - target_h) // 2
    splash.paste(resized, (x, y), resized)
    
    splash_path = os.path.join(folder_path, "splashscreen_logo.png")
    splash.save(splash_path, "PNG")
    print(f"Generated {splash_path} ({w}x{h})")

# 4. Also update assets/icon.png and assets/android-icon-foreground.png
assets_dir = os.path.join(base_dir, "assets")
icon_1024 = Image.new("RGBA", (1024, 1024), bg_color)
target_h = int(1024 * 0.85)
target_w = int(src_img.width * (target_h / src_img.height))
resized = src_img.resize((target_w, target_h), Image.Resampling.LANCZOS)
x = (1024 - target_w) // 2
y = (1024 - target_h) // 2
icon_1024.paste(resized, (x, y), resized)
icon_1024.save(os.path.join(assets_dir, "icon.png"), "PNG")
icon_1024.save(os.path.join(assets_dir, "android-icon-foreground.png"), "PNG")

# Splash icon 1024
splash_icon = Image.new("RGBA", (1024, 1024), (0, 0, 0, 0))
target_h = int(1024 * 0.70)
target_w = int(src_img.width * (target_h / src_img.height))
resized = src_img.resize((target_w, target_h), Image.Resampling.LANCZOS)
x = (1024 - target_w) // 2
y = (1024 - target_h) // 2
splash_icon.paste(resized, (x, y), resized)
splash_icon.save(os.path.join(assets_dir, "splash-icon.png"), "PNG")

print("All icons and splash screens successfully generated!")

