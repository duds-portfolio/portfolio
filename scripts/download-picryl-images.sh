#!/bin/bash

# Script to download images from Picryl using direct image URLs
# Picryl images are served from cache.getarchive.net
# Format: https://cache.getarchive.net/Prod/[path-to-image]

set -e

# Colors
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m'

# Picryl image base URL pattern
# Images are typically at: https://cache.getarchive.net/Prod/thumb/[id] or https://cache.getarchive.net/Prod/img/[id]
# Full resolution: https://cache.getarchive.net/Prod/img/[id]/full

echo -e "${YELLOW}Note: Picryl requires manual image selection and download.${NC}"
echo -e "${YELLOW}This script provides a helper to download once you have the image URLs.${NC}"
echo ""

if [ -z "$1" ]; then
    echo -e "${RED}Usage: $0 <picryl-image-url> <output-file>${NC}"
    echo ""
    echo "Example:"
    echo "  $0 'https://cache.getarchive.net/Prod/img/abc123/full' output.jpg"
    echo ""
    echo "To find image URLs:"
    echo "  1. Search Picryl.com for your image"
    echo "  2. Click on the image"
    echo "  3. Right-click the image and 'Copy image address'"
    echo "  4. Use that URL with this script"
    exit 1
fi

IMAGE_URL="$1"
OUTPUT_FILE="${2:-downloaded-image.jpg}"

echo -e "${YELLOW}Downloading from Picryl...${NC}"
echo "URL: $IMAGE_URL"
echo "Output: $OUTPUT_FILE"

# Download with proper user agent
curl -L -A "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36" \
     -H "Referer: https://picryl.com/" \
     "$IMAGE_URL" -o "$OUTPUT_FILE"

if [ $? -eq 0 ] && [ -f "$OUTPUT_FILE" ]; then
    SIZE=$(du -h "$OUTPUT_FILE" | cut -f1)
    echo -e "${GREEN}✓ Downloaded: $OUTPUT_FILE ($SIZE)${NC}"
else
    echo -e "${RED}✗ Download failed${NC}"
    exit 1
fi

