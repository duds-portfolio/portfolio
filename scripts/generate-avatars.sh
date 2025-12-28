#!/bin/bash
# Usage: ./generate-avatars.sh [output-dir]
# Always uses public/images/DaleRogersAvatar-original.png as the source

SRC=public/images/DaleRogersAvatar-original.png
OUTDIR=${1:-public/images}

mkdir -p "$OUTDIR"

convert "$SRC" -resize 96x96 -filter Lanczos "$OUTDIR/DaleRogersAvatar.png"
echo "Generated $OUTDIR/DaleRogersAvatar.png (96x96)"

convert "$SRC" -resize 192x192 -filter Lanczos "$OUTDIR/DaleRogersAvatar@2x.png"
echo "Generated $OUTDIR/DaleRogersAvatar@2x.png (192x192)"

convert "$SRC" -resize 288x288 -filter Lanczos "$OUTDIR/DaleRogersAvatar@3x.png"
echo "Generated $OUTDIR/DaleRogersAvatar@3x.png (288x288)" 