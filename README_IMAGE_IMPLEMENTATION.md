# Image Implementation - Complete Guide

## Overview

This document provides a complete guide for implementing all images required for the portfolio website. All images will be sourced from [Picryl.com](https://picryl.com) (public domain/CC0) and converted to WebP format.

## Current Status

- ✅ **Infrastructure Created**: Scripts, directories, and documentation
- ⏳ **Hero Images**: 3 images exist (need verification)
- ❌ **Case Study Covers**: 0/10 images exist
- ❌ **Article Images**: 0/15 images exist

## Quick Start

1. **Review the checklist**: `scripts/image-sourcing-checklist.md`
2. **Source images from Picryl**: Use search terms provided in checklist
3. **Convert images**: Use `scripts/convert-images-to-webp.sh`
4. **Verify**: Check images display correctly
5. **Update checklist**: Mark items as complete

## Files Created

### Scripts
- `scripts/convert-images-to-webp.sh` - Single image conversion
- `scripts/batch-convert-images.sh` - Batch conversion for multiple images

### Documentation
- `scripts/image-sourcing-checklist.md` - Detailed checklist with search terms
- `scripts/IMAGE_SOURCING_GUIDE.md` - Complete sourcing and conversion guide
- `IMAGE_IMPLEMENTATION_STATUS.md` - Current implementation status

### Directories
- `public/images/case-studies/` - For case study cover images
- `public/images/articles/` - For article hero images
- `public/images/case-studies/diagrams/` - For case study diagrams (future)

## Image Requirements Summary

### Hero Carousel (3 images)
- **Location**: `public/images/homepage/`
- **Files**: `hero.webp`, `hero2.webp`, `hero3.webp`
- **Size**: 1920x1200px
- **Status**: Files exist, verify content

### Case Study Covers (10 images)
- **Location**: `public/images/case-studies/`
- **Naming**: `[case-study-slug]-cover.webp`
- **Size**: 1920x1080px
- **Status**: All need to be sourced

### Article Images (15 images)
- **Location**: `public/images/articles/`
- **Naming**: `[article-slug].webp`
- **Size**: 1920x1200px (featured) or 1600x900px (cards)
- **Status**: All need to be sourced

## Conversion Workflow

### Single Image
```bash
./scripts/convert-images-to-webp.sh \
  downloads/image.jpg \
  public/images/case-studies/dcceew-cover.webp \
  80 1920 1080
```

### Batch Conversion
```bash
./scripts/batch-convert-images.sh \
  ./downloads \
  ./public/images/case-studies \
  80 1920 1080
```

## Next Steps

1. **Verify Hero Images**
   - Check if `public/images/homepage/hero.webp` is valid
   - Verify all three hero images contain appropriate content
   - Replace if they're placeholders

2. **Source Case Study Images** (Priority)
   - Download 10 images from Picryl using search terms in checklist
   - Convert to WebP format
   - Place in `public/images/case-studies/`
   - Update case study components to use cover images

3. **Source Article Images**
   - Download 15 images from Picryl
   - Convert to WebP format
   - Place in `public/images/articles/`
   - Update article frontmatter if needed

4. **Update Components** (After images are added)
   - Update `portfolio-case-studies-category.tsx` to use cover images
   - Update `portfolio-featured-work.tsx` to use cover images
   - Verify all image references are correct

## Component Updates Needed

Once images are added, update these components to use cover images instead of gradient placeholders:

1. **`src/components/sections/portfolio-case-studies-category.tsx`**
   - Line 59: Replace gradient placeholder with image
   - Add fallback to gradient if image doesn't exist

2. **`src/components/sections/portfolio-featured-work.tsx`**
   - Line 49: Replace gradient placeholder with image
   - Add fallback to gradient if image doesn't exist

## Testing Checklist

After adding images:

- [ ] Hero carousel displays all 3 images correctly
- [ ] Case study cards show cover images (not gradient placeholders)
- [ ] Article cards show hero images
- [ ] Featured article displays large hero image
- [ ] All images are WebP format
- [ ] Images are optimized (reasonable file sizes)
- [ ] Images display correctly on mobile devices
- [ ] No broken image links in browser console

## Troubleshooting

### Images Not Displaying
- Check file paths are correct (case-sensitive)
- Verify images are in `public/images/` directory
- Check browser console for 404 errors
- Ensure file extensions match (.webp)

### Conversion Issues
- Install required tools: `brew install imagemagick webp`
- Check file permissions: `chmod +x scripts/*.sh`
- Verify input image format is supported

### Quality Issues
- Adjust quality parameter (70-90)
- Check original image resolution
- Ensure proper aspect ratio before conversion

## Resources

- **Picryl**: https://picryl.com
- **WebP Documentation**: https://developers.google.com/speed/webp
- **ImageMagick**: https://imagemagick.org

## Support

For questions or issues:
1. Check `scripts/IMAGE_SOURCING_GUIDE.md` for detailed instructions
2. Review `scripts/image-sourcing-checklist.md` for search terms
3. Check `IMAGE_IMPLEMENTATION_STATUS.md` for current status

