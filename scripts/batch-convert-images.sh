#!/bin/bash

# Batch Image Conversion Script
# Processes multiple images from a directory and converts them to WebP
# Usage: ./batch-convert-images.sh <input-directory> <output-directory> [quality] [width] [height]

set -e

# Colors
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
BLUE='\033[0;34m'
NC='\033[0m'

if [ -z "$1" ] || [ -z "$2" ]; then
    echo -e "${RED}Error: Missing required arguments${NC}"
    echo "Usage: $0 <input-directory> <output-directory> [quality] [width] [height]"
    echo "Example: $0 ./downloads ./public/images/homepage 80 1920 1200"
    exit 1
fi

INPUT_DIR="$1"
OUTPUT_DIR="$2"
QUALITY="${3:-80}"
WIDTH="$4"
HEIGHT="$5"

# Check if input directory exists
if [ ! -d "$INPUT_DIR" ]; then
    echo -e "${RED}Error: Input directory '$INPUT_DIR' does not exist${NC}"
    exit 1
fi

# Create output directory if it doesn't exist
mkdir -p "$OUTPUT_DIR"

# Check for conversion tool
if ! command -v convert &> /dev/null && ! command -v cwebp &> /dev/null; then
    echo -e "${RED}Error: Neither ImageMagick (convert) nor cwebp is installed${NC}"
    exit 1
fi

# Find all image files
IMAGE_FILES=$(find "$INPUT_DIR" -type f \( -iname "*.jpg" -o -iname "*.jpeg" -o -iname "*.png" -o -iname "*.gif" \))

if [ -z "$IMAGE_FILES" ]; then
    echo -e "${YELLOW}No image files found in $INPUT_DIR${NC}"
    exit 0
fi

COUNT=0
SUCCESS=0
FAILED=0

echo -e "${BLUE}Batch converting images...${NC}"
echo "Input:  $INPUT_DIR"
echo "Output: $OUTPUT_DIR"
echo "Quality: $QUALITY"
if [ -n "$WIDTH" ] && [ -n "$HEIGHT" ]; then
    echo "Resize: ${WIDTH}x${HEIGHT}"
fi
echo ""

# Process each image
while IFS= read -r IMAGE_FILE; do
    COUNT=$((COUNT + 1))
    
    # Get filename without extension
    BASENAME=$(basename "$IMAGE_FILE")
    FILENAME="${BASENAME%.*}"
    
    # Output file
    OUTPUT_FILE="$OUTPUT_DIR/${FILENAME}.webp"
    
    echo -e "${YELLOW}[$COUNT] Processing: $BASENAME${NC}"
    
    # Convert using the single-image script
    if ./scripts/convert-images-to-webp.sh "$IMAGE_FILE" "$OUTPUT_FILE" "$QUALITY" "$WIDTH" "$HEIGHT" 2>/dev/null; then
        SUCCESS=$((SUCCESS + 1))
        echo -e "${GREEN}  ✓ Saved to: $OUTPUT_FILE${NC}"
    else
        FAILED=$((FAILED + 1))
        echo -e "${RED}  ✗ Failed to convert${NC}"
    fi
    echo ""
done <<< "$IMAGE_FILES"

echo -e "${BLUE}=== Summary ===${NC}"
echo "Total:   $COUNT"
echo -e "${GREEN}Success: $SUCCESS${NC}"
if [ $FAILED -gt 0 ]; then
    echo -e "${RED}Failed:  $FAILED${NC}"
fi

