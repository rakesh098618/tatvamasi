"""Generate launcher sizes from the existing Guru Swami portrait (Pillow)."""
from pathlib import Path
from PIL import Image, ImageDraw

BASE = Path(__file__).resolve().parents[1]
ASSETS = BASE / 'assets'
RES = BASE / 'android/app/src/main/res'
PHOTO = Image.open(ASSETS / 'guruswami.png').convert('RGB')
BACKGROUND = '#0F0B06'


def portrait(size):
    return PHOTO.resize((size, size), Image.Resampling.LANCZOS)


def round_portrait(size):
    result = Image.new('RGBA', (size, size))
    mask = Image.new('L', (size, size))
    ImageDraw.Draw(mask).ellipse((0, 0, size - 1, size - 1), fill=255)
    result.paste(portrait(size), (0, 0), mask)
    return result


def foreground(size):
    # Keep the entire portrait inside Android's central 66 dp safe circle.
    result = Image.new('RGBA', (size, size))
    diameter = int(size * 66 / 108)
    photo = round_portrait(diameter)
    offset = (size - diameter) // 2
    result.paste(photo, (offset, offset), photo)
    return result


portrait(1024).save(ASSETS / 'icon.png')
portrait(48).save(ASSETS / 'favicon.png')
foreground(1024).save(ASSETS / 'android-icon-foreground.png')
foreground(1024).save(ASSETS / 'splash-icon.png')
Image.new('RGB', (1024, 1024), BACKGROUND).save(ASSETS / 'android-icon-background.png')

for density, legacy, adaptive in [
    ('mdpi', 48, 108), ('hdpi', 72, 162), ('xhdpi', 96, 216),
    ('xxhdpi', 144, 324), ('xxxhdpi', 192, 432),
]:
    folder = RES / f'mipmap-{density}'
    folder.mkdir(parents=True, exist_ok=True)
    portrait(legacy).save(folder / 'ic_launcher.png')
    round_portrait(legacy).save(folder / 'ic_launcher_round.png')
    foreground(adaptive).save(folder / 'ic_launcher_foreground.png')

print('Generated Guru Swami launcher icons for Expo and Android.')
