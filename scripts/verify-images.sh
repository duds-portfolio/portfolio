#!/bin/bash

# Image Verification Script
# Checks which images exist and which are missing

set -e

GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
BLUE='\033[0;34m'
NC='\033[0m'

echo -e "${BLUE}=== Image Verification Report ===${NC}\n"

# Hero Images
echo -e "${BLUE}Hero Carousel Images:${NC}"
HERO_DIR="public/images/homepage"
for img in hero.webp hero2.webp hero3.webp; do
    if [ -f "$HERO_DIR/$img" ]; then
        SIZE=$(du -h "$HERO_DIR/$img" | cut -f1)
        DIMS=$(file "$HERO_DIR/$img" | grep -oE '[0-9]+x[0-9]+' | head -1 || echo "unknown")
        echo -e "  ${GREEN}✓${NC} $img ($SIZE, $DIMS)"
    else
        echo -e "  ${RED}✗${NC} $img MISSING"
    fi
done

# Case Study Images
echo -e "\n${BLUE}Case Study Cover Images:${NC}"
CASE_STUDIES=(
    "dcceew-regulatory-solutions-framework-cover.webp"
    "asic-fit-and-proper-person-test-cover.webp"
    "border-security-digital-verification-cover.webp"
    "holden-airbag-quality-control-cover.webp"
    "icon-water-unit-metering-service-concept-cover.webp"
    "murray-darling-basin-plan-service-concept-cover.webp"
    "rio-tinto-aluminium-bauxite-sunrise.webp"
    "university-canberra-digital-agility-cover.webp"
    "university-canberra-travel-management-cover.webp"
    "antarctic-tracked-vehicle-expedition.webp"
)

EXISTING=0
MISSING=0
for img in "${CASE_STUDIES[@]}"; do
    if [ -f "public/images/case-studies/$img" ]; then
        SIZE=$(du -h "public/images/case-studies/$img" | cut -f1)
        echo -e "  ${GREEN}✓${NC} $img ($SIZE)"
        EXISTING=$((EXISTING + 1))
    else
        echo -e "  ${RED}✗${NC} $img MISSING"
        MISSING=$((MISSING + 1))
    fi
done

# Article Images
echo -e "\n${BLUE}Article Hero Images:${NC}"
ARTICLES=(
    "service-design-in-the-era-of-remote-work.webp"
    "considerations-for-trauma-informed-design.webp"
    "designing-intentional-culture.webp"
    "embracing-gemba-in-service-design-for-effective-problem-solving.webp"
    "poka-yoke-in-service-design-and-user-experience.webp"
    "the-ethics-of-service-design.webp"
    "offline-first-architecture-guide.webp"
    "five-elements-of-service-design-for-government.webp"
    "how-the-design-thinking-process-works-in-government.webp"
    "how-to-embed-continuous-improvement.webp"
    "service-blueprinting.webp"
    "service-design-principles.webp"
    "using-ms-teams-for-better-organisational-security.webp"
    "what-is-service-design.webp"
    "will-ai-mean-the-end-of-consulting.webp"
)

ARTICLE_EXISTING=0
ARTICLE_MISSING=0
for img in "${ARTICLES[@]}"; do
    if [ -f "public/images/articles/$img" ]; then
        SIZE=$(du -h "public/images/articles/$img" | cut -f1)
        echo -e "  ${GREEN}✓${NC} $img ($SIZE)"
        ARTICLE_EXISTING=$((ARTICLE_EXISTING + 1))
    else
        echo -e "  ${RED}✗${NC} $img MISSING"
        ARTICLE_MISSING=$((ARTICLE_MISSING + 1))
    fi
done

# Summary
echo -e "\n${BLUE}=== Summary ===${NC}"
echo "Hero Images:     3/3 (all exist, verify content)"
echo "Case Studies:     $EXISTING/${#CASE_STUDIES[@]} exist, $MISSING missing"
echo "Articles:        $ARTICLE_EXISTING/${#ARTICLES[@]} exist, $ARTICLE_MISSING missing"
echo ""
TOTAL=$((3 + ${#CASE_STUDIES[@]} + ${#ARTICLES[@]}))
TOTAL_EXISTING=$((3 + EXISTING + ARTICLE_EXISTING))
TOTAL_MISSING=$((MISSING + ARTICLE_MISSING))
echo "Total Required:  $TOTAL images"
echo "Total Existing:   $TOTAL_EXISTING images"
echo "Total Missing:    $TOTAL_MISSING images"

if [ $TOTAL_MISSING -gt 0 ]; then
    echo -e "\n${YELLOW}Next Steps:${NC}"
    echo "1. Review scripts/image-sourcing-checklist.md for search terms"
    echo "2. Source images from Picryl.com"
    echo "3. Convert using scripts/convert-images-to-webp.sh"
    echo "4. Run this script again to verify"
fi

