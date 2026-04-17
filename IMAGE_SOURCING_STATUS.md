# Image Sourcing Status - Content-Specific Images from Picryl

## Current Status

✅ **Completed:**
- Removed all generic Unsplash images
- Created comprehensive Picryl search guide with content-specific terms
- Identified specific Picryl URLs matching case study content
- Created conversion scripts for WebP format

🔄 **In Progress:**
- Sourcing content-specific images from Picryl
- Manual download process (Picryl requires browser interaction)

## Key Finding: Picryl Download Process

Picryl's download system requires:
- **Medium/Small sizes (640x427, 1024x683)**: FREE, no donation required
- **Original/High-res**: Requires donation ($5-$20+)
- **Direct cache URLs**: Require authentication, not accessible via curl

**Recommended Approach**: Use browser to download Medium size images (free, sufficient for web)

## Content-Specific Image Requirements

### Hero Carousel (3 images needed)

1. **Service Blueprint Workshop** (`hero.webp`)
   - Content: Workshop session mapping service delivery
   - Picryl Search: https://picryl.com/search?q=workshop+whiteboard+service+design
   - Found: HUD SES officials meeting, Office of Community Planning workshops
   - Status: ⏳ Need to select and download

2. **Journey Mapping Session** (`hero2.webp`)
   - Content: User research and journey mapping
   - Picryl Search: https://picryl.com/search?q=user+research+workshop
   - Status: ⏳ Need to search and download

3. **Stakeholder Engagement** (`hero3.webp`)
   - Content: Co-design workshop with government stakeholders
   - Picryl Search: https://picryl.com/search?q=government+community+engagement
   - Status: ⏳ Need to search and download

### Case Study Cover Images (10 needed)

1. **DCCEEW Regulatory Solutions Framework**
   - Content: Environmental regulation programs
   - Picryl URL: https://picryl.com/media/epa-set-6-2003-08ec01
   - Match: ✅ EPA environmental regulation image
   - Status: ⏳ Download Medium size (1024x683)

2. **ASIC Fit and Proper Person Test**
   - Content: Financial services regulatory assessment
   - Picryl Search: https://picryl.com/search?q=financial+regulation+government+building
   - Found Images:
     - Board of Finance building: https://picryl.com/media/board-of-finance-building-fe8af0
     - Federal Reserve Building: https://picryl.com/media/federal-reserve-building-kitchen-corridor-federal-reserve-building-542faa
     - Senate Finance Corp: https://picryl.com/media/senate-finance-corp-550a9c
   - Status: ⏳ Select and download appropriate image

3. **DAWE Biosecurity Digital Verification** ⭐ PERFECT MATCH FOUND
   - Content: Field verification for biosecurity officers
   - Picryl URL: https://picryl.com/media/us-marines-with-marine-rotational-force-darwin-c6c069
   - Image ID: `94e9c758e62a28b34e23768ea2c444bc`
   - Description: "U.S. Marines with Marine Rotational Force – Darwin undergo biosecurity inspection at Royal Australian Air Force Base Darwin in NT, Australia, June 18, 2020. A COVID-19 test was also administered to each Marine."
   - **Perfect Match**: Shows actual biosecurity field inspection operations
   - Status: ⏳ Download Medium size (1024x683)

4. **Holden Airbag Quality Control** ⭐ EXCELLENT MATCHES FOUND
   - Content: Manufacturing quality control for automotive
   - Picryl Search: https://picryl.com/search?q=automotive+manufacturing+production+line
   - Found Images (Quality Control Focus):
     - Detroit, Michigan. Assembly of Rolls Royce engines - Inspecting piston rings: https://picryl.com/media/detroit-michigan-assembly-of-rolls-royce-engines-at-the-packard-motor-car-company-51
     - Detroit, Michigan. Assembly of Rolls Royce engines - Checking hardness of valve stem: https://picryl.com/media/detroit-michigan-assembly-of-rolls-royce-engines-at-the-packard-motor-car-company-61
     - Detroit, Michigan. Assembly of Rolls Royce engines - Inspecting retaining nut with micrometer: https://picryl.com/media/detroit-michigan-assembly-of-rolls-royce-engines-at-the-packard-motor-car-company-34
     - Detroit, Michigan. Assembly of Rolls Royce engines - Quality stamping parts: https://picryl.com/media/detroit-michigan-assembly-of-rolls-royce-engines-at-the-packard-motor-car-company-16
     - Airplane seat production - precision gauge checking: https://picryl.com/media/airplane-seat-production-each-piece-of-aluminum-necessary-to-the-manufacture-002202
   - **Perfect Matches**: Show quality control inspections, precision measurements, and quality assurance processes
   - Status: ⏳ Select best quality control image and download

5. **Icon Water Unit Metering**
   - Content: Water utilities and metering services
   - Picryl Search: https://picryl.com/search?q=water+utilities+infrastructure
   - Status: ⏳ Need to search and download

6. **Murray Darling Basin Plan**
   - Content: Water management and environmental planning
   - Picryl Search: https://picryl.com/search?q=water+management+river+basin
   - Status: ⏳ Need to search and download

7. **Rio Tinto Bespoke PMO**
   - Content: Mining operations and project management
   - Picryl Search: https://picryl.com/search?q=mining+operations+bauxite
   - Status: ⏳ Need to search and download

8. **University of Canberra Digital Agility**
   - Content: Higher education digital transformation
   - Picryl Search: https://picryl.com/search?q=university+campus+higher+education
   - Status: ⏳ Need to search and download

9. **University of Canberra Travel Management**
   - Content: Travel management system
   - Picryl Search: https://picryl.com/search?q=travel+booking+management
   - Status: ⏳ Need to search and download

10. **Antarctic Doctrine Application**
    - Content: Antarctic expedition and extreme environment
    - Picryl Search: https://picryl.com/search?q=antarctic+expedition+research
    - Status: ⏳ Need to search and download

### Article Images (15 needed)

All article images need to match their specific topics:
- Service design articles → service design workshops
- Government articles → government service design
- Remote work articles → remote collaboration
- Architecture articles → system architecture diagrams

Status: ⏳ Need systematic search and download for each

## Manual Download Instructions

### Step 1: Visit Picryl URL
Open the Picryl media page in your browser

### Step 2: Click Download
Click the "Download" button on the image page

### Step 3: Select Medium Size
Choose "Medium" (1024x683) - this is FREE, no donation required

### Step 4: Save to Downloads Folder
Save the image to `downloads/` with a descriptive name

### Step 5: Convert to WebP
```bash
./scripts/convert-images-to-webp.sh downloads/[filename] public/images/[location]/[name].webp 80 1920 1080
```

### Step 6: Update MDX Files
Update the frontmatter in case study/article MDX files to reference the new image paths

## Next Steps

1. **Continue Picryl searches** for remaining images
2. **Download Medium size images** (free, sufficient quality)
3. **Convert all to WebP** format
4. **Add images within case study content** (not just covers)
5. **Update all MDX frontmatter** to reference new images

## Important Notes

- ✅ All images MUST reflect the actual content (not generic)
- ✅ Medium size (1024x683) is sufficient for web use
- ✅ WebP format for optimal performance
- ✅ Add images within case study content to illustrate processes
- ⚠️ Picryl requires browser interaction for downloads (can't fully automate)

