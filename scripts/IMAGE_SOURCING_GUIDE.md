# Image Sourcing Guide

This guide explains how to source images from Picryl.com and convert them to WebP format for the portfolio website.

## Quick Start

1. **Search Picryl**: Go to [picryl.com](https://picryl.com) and search for images using the keywords provided in the checklist
2. **Download Images**: Download images (ensure they're public domain/CC0 licensed)
3. **Convert to WebP**: Use the conversion scripts to process images
4. **Place in Correct Location**: Move converted images to the appropriate directory

## Directory Structure

```
public/images/
├── homepage/
│   ├── hero.webp (1920x1200px)
│   ├── hero2.webp (1920x1200px)
│   └── hero3.webp (1920x1200px)
├── case-studies/
│   ├── [case-study-name]-cover.webp (1920x1080px)
│   └── diagrams/
│       └── [diagram-name].svg
└── articles/
    └── [article-slug].webp (1920x1200px or 1600x900px)
```

## Conversion Scripts

### Single Image Conversion

```bash
./scripts/convert-images-to-webp.sh <input-file> [output-file] [quality] [width] [height]
```

**Examples**:
```bash
# Convert hero image with resize
./scripts/convert-images-to-webp.sh downloads/workshop.jpg public/images/homepage/hero.webp 80 1920 1200

# Convert case study cover
./scripts/convert-images-to-webp.sh downloads/government.jpg public/images/case-studies/dcceew-cover.webp 80 1920 1080

# Convert article image (featured size)
./scripts/convert-images-to-webp.sh downloads/design.jpg public/images/articles/service-design-principles.webp 80 1920 1200
```

### Batch Conversion

```bash
./scripts/batch-convert-images.sh <input-directory> <output-directory> [quality] [width] [height]
```

**Example**:
```bash
# Convert all images in downloads folder
./scripts/batch-convert-images.sh ./downloads ./public/images/homepage 80 1920 1200
```

## Image Specifications

### Hero Carousel Images
- **Format**: WebP
- **Size**: 1920x1200px (16:10 aspect ratio)
- **Quality**: 80
- **Location**: `public/images/homepage/`
- **Files**: `hero.webp`, `hero2.webp`, `hero3.webp`

### Case Study Cover Images
- **Format**: WebP
- **Size**: 1920x1080px (16:9 aspect ratio)
- **Quality**: 80
- **Location**: `public/images/case-studies/`
- **Naming**: `[case-study-slug]-cover.webp`

### Article Hero Images
- **Format**: WebP
- **Size**: 
  - Featured: 1920x1200px (16:10)
  - Cards: 1600x900px (16:9)
- **Quality**: 80
- **Location**: `public/images/articles/`
- **Naming**: `[article-slug].webp`

## Picryl Search Strategy

### General Tips
- Use specific keywords related to the content
- Filter by "Public Domain" or "CC0" license
- Look for high-resolution images (at least 1920px width)
- Consider composition and relevance to the topic

### Search Terms by Category

See `scripts/image-sourcing-checklist.md` for detailed search terms for each image.

## Workflow Example

1. **Search and Download**:
   ```
   - Go to picryl.com
   - Search: "workshop collaboration"
   - Filter: Public Domain
   - Download: workshop-image.jpg
   ```

2. **Convert**:
   ```bash
   ./scripts/convert-images-to-webp.sh \
     workshop-image.jpg \
     public/images/homepage/hero.webp \
     80 1920 1200
   ```

3. **Verify**:
   ```bash
   file public/images/homepage/hero.webp
   # Should show: WebP image
   ```

4. **Test**: Check the image displays correctly in the browser

5. **Cleanup**: Delete the original downloaded file

## Troubleshooting

### Script Not Executable
```bash
chmod +x scripts/convert-images-to-webp.sh
chmod +x scripts/batch-convert-images.sh
```

### Missing Tools
```bash
# Install ImageMagick (macOS)
brew install imagemagick

# Install WebP tools (macOS)
brew install webp
```

### Image Quality Issues
- Adjust quality parameter (70-90 range)
- Higher quality = larger file size
- Recommended: 80 for good balance

### Aspect Ratio Issues
- Script maintains aspect ratio when resizing
- If image doesn't match target ratio, it will be cropped/fitted
- Consider pre-cropping images to match target aspect ratio

## License Verification

**Important**: Always verify images from Picryl are:
- Public Domain, OR
- CC0 (Creative Commons Zero)

These licenses allow commercial use without attribution. Document source URLs in the checklist for reference.

## Progress Tracking

Update `scripts/image-sourcing-checklist.md` as you complete each image:
- Mark items as complete
- Add source URLs
- Note any issues or special considerations

