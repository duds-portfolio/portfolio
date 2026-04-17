# Picryl Image Sourcing Guide - Content-Specific Images

This guide provides specific Picryl search terms and image requirements for each case study and article, ensuring images reflect the actual content.

## Important Notes

- **All images must reflect the content** - Generic images won't work
- Use these specific search terms to find relevant images
- Download Original or Medium size (1024x683 or larger)
- Convert all to WebP format after downloading

## Hero Carousel Images

### 1. Service Blueprint Workshop (hero.webp)
**Content**: Workshop session mapping service delivery across touchpoints
**Picryl Search Terms**:
- "workshop whiteboard service design"
- "business meeting planning"
- "collaboration workshop"
- "service blueprint diagram"
- "team meeting whiteboard"

**What to Look For**: People around whiteboards, service design workshops, collaborative planning sessions

### 2. Journey Mapping Session (hero2.webp)
**Content**: User research and journey mapping for regulatory services
**Picryl Search Terms**:
- "user research workshop"
- "customer journey mapping"
- "personas design thinking"
- "user experience workshop"
- "design workshop"

**What to Look For**: Design workshops, user research sessions, journey mapping activities

### 3. Stakeholder Engagement (hero3.webp)
**Content**: Co-design workshop with government and community stakeholders
**Picryl Search Terms**:
- "government meeting workshop"
- "community engagement"
- "stakeholder meeting"
- "public consultation"
- "co-design workshop"

**What to Look For**: Government/public meetings, community workshops, stakeholder engagement

## Case Study Cover Images

### 1. DCCEEW Regulatory Solutions Framework
**Content**: Regulatory framework for environmental regulation programs
**Picryl Search Terms**:
- "government building environmental"
- "federal building regulation"
- "environmental regulation"
- "government office building"
- "regulatory framework"

**What to Look For**: Government buildings, environmental/regulatory contexts

### 2. ASIC Fit and Proper Person Test
**Content**: Financial services regulatory assessment
**Picryl Search Terms**:
- "financial regulation"
- "government building financial"
- "compliance office"
- "regulatory compliance"
- "financial services building"

**What to Look For**: Financial/government buildings, compliance contexts

### 3. DAWE Biosecurity Digital Verification
**Content**: Field verification service for biosecurity officers
**Picryl Search Terms**:
- "biosecurity agriculture inspection"
- "field inspection agriculture"
- "agricultural inspection"
- "biosecurity field operations"
- "agriculture verification"

**What to Look For**: Agricultural field inspections, biosecurity operations, field work
**Note**: Found image: "U.S. Marines with Marine Rotational Force – Darwin" (biosecurity inspection) - URL: https://picryl.com/media/us-marines-with-marine-rotational-force-darwin-c6c069

### 4. Holden Airbag Quality Control
**Content**: Manufacturing quality control for automotive safety
**Picryl Search Terms**:
- "automotive manufacturing"
- "quality control production"
- "car manufacturing"
- "production line automotive"
- "manufacturing quality"

**What to Look For**: Automotive manufacturing, production lines, quality control

### 5. Icon Water Unit Metering
**Content**: Water utilities and metering services
**Picryl Search Terms**:
- "water utilities"
- "water meter infrastructure"
- "utilities water"
- "water infrastructure"
- "water metering"

**What to Look For**: Water infrastructure, utilities, metering equipment

### 6. Murray Darling Basin Plan
**Content**: Water management and environmental planning
**Picryl Search Terms**:
- "water management river"
- "river basin landscape"
- "water resources"
- "environmental water"
- "river system"

**What to Look For**: River landscapes, water management, environmental contexts

### 7. Rio Tinto Bespoke PMO
**Content**: Mining operations and project management
**Picryl Search Terms**:
- "mining operations"
- "bauxite mining"
- "mining resources"
- "industrial mining"
- "mining site"

**What to Look For**: Mining operations, industrial sites, resources

### 8. University of Canberra Digital Agility
**Content**: Higher education digital transformation
**Picryl Search Terms**:
- "university campus"
- "higher education"
- "university building"
- "education campus"
- "university digital"

**What to Look For**: University campuses, educational buildings

### 9. University of Canberra Travel Management
**Content**: Travel management system for university
**Picryl Search Terms**:
- "travel booking"
- "travel management"
- "university travel"
- "booking system"
- "travel office"

**What to Look For**: Travel/booking contexts, office environments

### 10. Antarctic Doctrine Application
**Content**: Antarctic expedition and extreme environment operations
**Picryl Search Terms**:
- "antarctic expedition"
- "antarctic research"
- "snow ice antarctic"
- "antarctic station"
- "polar expedition"

**What to Look For**: Antarctic landscapes, expeditions, research stations

## Case Study Content Images

Each case study should also have 1-3 images within the content that illustrate:
- Service blueprints or diagrams
- Process flows
- Workshop photos
- User research activities
- Implementation examples

**Search Strategy**: Use the case study title + specific terms like:
- "[case study topic] diagram"
- "[case study topic] process"
- "[case study topic] workshop"
- "[case study topic] blueprint"

## Article Images

Articles need images that match their specific topics:

### Service Design Articles
- "service design workshop"
- "design thinking process"
- "user experience design"
- "service blueprint"

### Government Articles
- "government service design"
- "public service"
- "government policy"
- "regulatory design"

### Remote Work Articles
- "remote work collaboration"
- "virtual workshop"
- "online collaboration"
- "remote team"

### Architecture Articles
- "system architecture"
- "technology architecture"
- "offline architecture"
- "application architecture"

## Download Instructions

1. **Search Picryl** using the specific terms above
2. **Select images** that match the content description
3. **Click Download** → Select "Original" or "Medium" size
4. **Save** to `downloads/` folder with descriptive name
5. **Convert** using: `./scripts/convert-images-to-webp.sh downloads/[file] public/images/[location]/[name].webp [quality] [width] [height]`

## Image URL Pattern

Picryl images are typically served from:
- `https://cache.getarchive.net/Prod/img/[id]/full` (original)
- `https://cache.getarchive.net/Prod/img/[id]/1024` (medium)

You can extract the image ID from the Picryl media page URL:
- URL: `https://picryl.com/media/[slug]-[id]`
- Image ID is the last part after the final hyphen

## Next Steps

1. Replace all Unsplash images with Picryl images
2. Ensure images match content (not generic)
3. Add images within case study content (not just covers)
4. Verify all images reflect their respective topics

