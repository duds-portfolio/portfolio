# Image Sourcing Checklist

This document tracks the progress of sourcing images from Picryl.com and converting them to WebP format.

## Phase 1: Hero Carousel Images

**Location**: `public/images/homepage/`

- [x] **hero.webp** - Service Blueprint workshop
  - Status: EXISTS (verify if placeholder or actual image)
  - Dimensions: Check needed
  - Source: N/A
  - Notes: File exists, verify content

- [x] **hero2.webp** - Journey Mapping session  
  - Status: EXISTS (2360x1491, VP8 encoded)
  - Dimensions: 2360x1491
  - Source: N/A
  - Notes: Valid WebP file

- [x] **hero3.webp** - Stakeholder Engagement
  - Status: EXISTS (2360x1491, VP8 encoded)
  - Dimensions: 2360x1491
  - Source: N/A
  - Notes: Valid WebP file

**Action Required**: Verify hero.webp is valid, and check if all three images are appropriate content or need replacement.

## Phase 2: Case Study Cover Images

**Location**: `public/images/case-studies/`

### Existing Images (Verify)

- [ ] **rio-tinto-aluminium-bauxite-sunrise.png**
  - Status: NEEDS VERIFICATION
  - Expected location: `public/images/case-studies/`
  - Action: Verify exists, convert to WebP if PNG

- [ ] **antarctic-tracked-vehicle-expedition.png**
  - Status: NEEDS VERIFICATION
  - Expected location: `public/images/case-studies/`
  - Action: Verify exists, convert to WebP if PNG

### Missing Images (Source from Picryl)

- [ ] **dcceew-regulatory-solutions-framework-cover.webp**
  - Client: DCCEEW
  - Search terms: "government building", "federal building", "regulation", "environmental"
  - Target size: 1920x1080px
  - Status: PENDING

- [ ] **asic-fit-and-proper-person-test-cover.webp**
  - Client: ASIC
  - Search terms: "financial regulation", "compliance", "government", "legal"
  - Target size: 1920x1080px
  - Status: PENDING

- [ ] **border-security-digital-verification-cover.webp**
  - Client: DAWE Biosecurity Division
  - Search terms: "biosecurity", "agriculture", "field inspection", "verification", "government", "agricultural inspection"
  - Target size: 1920x1080px
  - Status: PENDING

- [ ] **holden-airbag-quality-control-cover.webp**
  - Client: Holden
  - Search terms: "automotive", "manufacturing", "quality control", "production"
  - Target size: 1920x1080px
  - Status: PENDING

- [ ] **icon-water-unit-metering-service-concept-cover.webp**
  - Client: Icon Water
  - Search terms: "water", "utilities", "infrastructure", "metering"
  - Target size: 1920x1080px
  - Status: PENDING

- [ ] **murray-darling-basin-plan-service-concept-cover.webp**
  - Client: MDBA
  - Search terms: "water management", "environment", "landscape", "river"
  - Target size: 1920x1080px
  - Status: PENDING

- [ ] **university-canberra-digital-agility-cover.webp**
  - Client: University of Canberra
  - Search terms: "university", "education", "campus", "digital"
  - Target size: 1920x1080px
  - Status: PENDING

- [ ] **university-canberra-travel-management-cover.webp**
  - Client: University of Canberra
  - Search terms: "travel", "booking", "management", "university"
  - Target size: 1920x1080px
  - Status: PENDING

## Phase 3: Blog Article Hero Images

**Location**: `public/images/articles/`

### Existing Images (Verify)

- [ ] **service-design-in-the-era-of-remote-work.webp**
  - Status: NEEDS VERIFICATION
  - Action: Verify exists

- [ ] **considerations-for-trauma-informed-design.webp**
  - Status: NEEDS VERIFICATION
  - Action: Verify exists

- [ ] **designing-intentional-culture.webp**
  - Status: NEEDS VERIFICATION
  - Action: Verify exists

- [ ] **embracing-gemba-in-service-design-for-effective-problem-solving.webp**
  - Status: NEEDS VERIFICATION
  - Action: Verify exists

- [ ] **poka-yoke-in-service-design-and-user-experience.webp**
  - Status: NEEDS VERIFICATION
  - Action: Verify exists

- [ ] **the-ethics-of-service-design.webp**
  - Status: NEEDS VERIFICATION
  - Action: Verify exists

- [ ] **offline-first-architecture-guide.webp**
  - Status: NEEDS REPLACEMENT
  - Current: External Unsplash URL
  - Action: Source from Picryl, replace URL

### Missing Images (Source from Picryl)

- [ ] **five-elements-of-service-design-for-government.webp**
  - Search terms: "service design", "government", "public service", "policy"
  - Target size: 1920x1200px (featured) or 1600x900px (cards)
  - Status: PENDING

- [ ] **how-the-design-thinking-process-works-in-government.webp**
  - Search terms: "design thinking", "government", "process", "workshop"
  - Target size: 1920x1200px (featured) or 1600x900px (cards)
  - Status: PENDING

- [ ] **how-to-embed-continuous-improvement.webp**
  - Search terms: "continuous improvement", "process", "workplace", "improvement"
  - Target size: 1920x1200px (featured) or 1600x900px (cards)
  - Status: PENDING

- [ ] **service-blueprinting.webp**
  - Search terms: "service blueprint", "blueprint", "design", "workshop"
  - Target size: 1920x1200px (featured) or 1600x900px (cards)
  - Status: PENDING

- [ ] **service-design-principles.webp**
  - Search terms: "service design", "principles", "design thinking", "user experience"
  - Target size: 1920x1200px (featured) or 1600x900px (cards)
  - Status: PENDING

- [ ] **using-ms-teams-for-better-organisational-security.webp**
  - Search terms: "security", "technology", "collaboration", "team"
  - Target size: 1920x1200px (featured) or 1600x900px (cards)
  - Status: PENDING

- [ ] **what-is-service-design.webp**
  - Search terms: "service design", "design thinking", "user experience", "workshop"
  - Target size: 1920x1200px (featured) or 1600x900px (cards)
  - Status: PENDING

- [ ] **will-ai-mean-the-end-of-consulting.webp**
  - Search terms: "artificial intelligence", "AI", "consulting", "technology", "future"
  - Target size: 1920x1200px (featured) or 1600x900px (cards)
  - Status: PENDING

## Conversion Workflow

1. Download image from Picryl (ensure public domain/CC0 license)
2. Save to temporary location with descriptive name
3. Use conversion script: `./scripts/convert-images-to-webp.sh <input> <output> <quality> <width> <height>`
4. Move converted WebP to appropriate directory
5. Delete original file
6. Update this checklist

## Example Conversion Commands

```bash
# Convert with resize (hero carousel)
./scripts/convert-images-to-webp.sh downloaded-image.jpg public/images/homepage/hero.webp 80 1920 1200

# Convert case study cover
./scripts/convert-images-to-webp.sh downloaded-image.jpg public/images/case-studies/dcceew-regulatory-solutions-framework-cover.webp 80 1920 1080

# Convert article image (featured size)
./scripts/convert-images-to-webp.sh downloaded-image.jpg public/images/articles/service-design-principles.webp 80 1920 1200
```

