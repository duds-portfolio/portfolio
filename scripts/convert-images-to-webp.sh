#!/bin/bash

# Image Conversion Script for Portfolio
# Converts images to WebP format with optimization
# Usage: ./convert-images-to-webp.sh <input-file> [output-file] [quality] [width] [height]

set -e

# Default values
QUALITY=80
WIDTH=""
HEIGHT=""

# Colors for output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Check if input file is provided
if [ -z "$1" ]; then
    echo -e "${RED}Error: No input file provided${NC}"
    echo "Usage: $0 <input-file> [output-file] [quality] [width] [height]"
    echo "Example: $0 image.jpg image.webp 80 1920 1200"
    exit 1
fi

INPUT_FILE="$1"
OUTPUT_FILE="${2:-${INPUT_FILE%.*}.webp}"
QUALITY="${3:-$QUALITY}"

# Check if input file exists
if [ ! -f "$INPUT_FILE" ]; then
    echo -e "${RED}Error: Input file '$INPUT_FILE' does not exist${NC}"
    exit 1
fi

# Check for required tools
if ! command -v convert &> /dev/null && ! command -v cwebp &> /dev/null; then
    echo -e "${RED}Error: Neither ImageMagick (convert) nor cwebp is installed${NC}"
    echo "Install ImageMagick: brew install imagemagick"
    echo "Install WebP tools: brew install webp"
    exit 1
fi

# Determine which tool to use
if command -v convert &> /dev/null; then
    CONVERTER="imagemagick"
elif command -v cwebp &> /dev/null; then
    CONVERTER="cwebp"
fi

echo -e "${YELLOW}Converting: $INPUT_FILE -> $OUTPUT_FILE${NC}"

# Convert based on available tool
if [ "$CONVERTER" = "imagemagick" ]; then
    if [ -n "$4" ] && [ -n "$5" ]; then
        # Resize and convert
        convert "$INPUT_FILE" -resize "${4}x${5}" -quality "$QUALITY" "$OUTPUT_FILE"
        echo -e "${GREEN}Resized to ${4}x${5} and converted to WebP${NC}"
    else
        # Just convert
        convert "$INPUT_FILE" -quality "$QUALITY" "$OUTPUT_FILE"
        echo -e "${GREEN}Converted to WebP${NC}"
    fi
elif [ "$CONVERTER" = "cwebp" ]; then
    if [ -n "$4" ] && [ -n "$5" ]; then
        # cwebp doesn't resize, so use a temp file with ImageMagick if available
        if command -v convert &> /dev/null; then
            TEMP_FILE=$(mktemp).jpg
            convert "$INPUT_FILE" -resize "${4}x${5}" "$TEMP_FILE"
            cwebp -q "$QUALITY" "$TEMP_FILE" -o "$OUTPUT_FILE"
            rm "$TEMP_FILE"
            echo -e "${GREEN}Resized to ${4}x${5} and converted to WebP${NC}"
        else
            echo -e "${YELLOW}Warning: Resize requested but ImageMagick not available. Converting without resize.${NC}"
            cwebp -q "$QUALITY" "$INPUT_FILE" -o "$OUTPUT_FILE"
        fi
    else
        cwebp -q "$QUALITY" "$INPUT_FILE" -o "$OUTPUT_FILE"
        echo -e "${GREEN}Converted to WebP${NC}"
    fi
fi

# Get file sizes
INPUT_SIZE=$(du -h "$INPUT_FILE" | cut -f1)
OUTPUT_SIZE=$(du -h "$OUTPUT_FILE" | cut -f1)

echo -e "${GREEN}✓ Conversion complete!${NC}"
echo "  Input:  $INPUT_SIZE ($INPUT_FILE)"
echo "  Output: $OUTPUT_SIZE ($OUTPUT_FILE)"

