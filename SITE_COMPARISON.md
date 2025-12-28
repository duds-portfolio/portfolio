# Site Comparison: dalerogers.com.au vs New Portfolio

## Overview
This document compares the current live site (dalerogers.com.au) with the new portfolio implementation.

---

## Navigation & Structure

### Current Site (dalerogers.com.au)
- **Navigation**: Work, Articles, Contact
- **Additional Pages**: About, Services (404), Scratch, Values, Colophon, Terms, Privacy, Cookie Policy
- **Search**: Has search functionality in header
- **Theme Toggle**: Dark/light mode available

### New Portfolio
- **Navigation**: Services, Work, Approach, Articles, About, Contact
- **Additional Pages**: Case Studies hub, Articles hub
- **Search**: Implemented with Cmd/Ctrl+K shortcut, searches both articles and case studies
- **Theme Toggle**: Dark/light mode available

**Status**: ✅ New portfolio has more comprehensive navigation and better search

---

## Homepage Comparison

### Current Site Homepage Sections:
1. **Hero**: "Service Design Strategy" with brief intro and "View Work" CTA
2. **Service Cards Grid**: 7 service cards (Digital Transformation, Citizen Services Portal, Service Blueprint, UX Research, Service Integration, Design System, Accessibility Audit)
3. **About Section**: Brief intro with "Get to know me" link
4. **Case Studies Preview**: 3 featured case studies
5. **Services Section**: 4 service types with "See how it works" link
6. **Values/Philosophy Section**: Personal approach statement with "Let's Talk" CTA
7. **My Values Section**: "Designing with empathy, accessibility and inclusivity" with image and "Explore My Values" link
8. **Trusted By**: Client logos (Tasmanian Dept Education, BHP, Holden, Rio Tinto, Transport for NSW, University of Canberra)

### New Portfolio Homepage Sections:
1. **Hero**: "From Policy to Practice" with carousel, feature highlights, and CTAs
2. **Trust Strip**: Client logos marquee
3. **Services**: 3 core services with icons and keywords
4. **Case Studies by Category**: One case study per category (Government, Regulatory, Enterprise)
5. **Approach**: 4-phase methodology with visual timeline
6. **Results**: 6 key metrics
7. **Testimonials**: Client testimonials carousel
8. **About**: Brief intro with expertise areas
9. **CTA**: "Ready to transform your service delivery?"

**Status**: ✅ New portfolio has more comprehensive homepage with better visual hierarchy

---

## Work/Case Studies Page

### Current Site
- **Title**: "Work & Case Studies"
- **Description**: "Explore my portfolio of successful projects..."
- **Status**: Shows "Loading case studies" (appears to be client-side rendered)
- **Filtering**: Not visible in snapshot

### New Portfolio
- **Title**: "Work"
- **Description**: "Service design case studies for government, regulatory, and complex organisations..."
- **Features**:
  - Category filtering (Government, Regulatory, Enterprise, Service Design, Policy)
  - Portfolio Impact Stats section
  - Service Design Capabilities section
  - Industry Experience section
  - CTA section
- **Sorting**: By year (newest first), then featured, then title

**Status**: ✅ New portfolio has better filtering, stats, and organization

---

## About Page

### Current Site
- **Sections**:
  1. Personal intro: "I'm a dreamer, designer, tinkerer and doer..."
  2. Service Design Philosophy
  3. Location: "I'm in Canberra, Australia" with Local/Global expertise
  4. "What I care about": 6 values (Collaboration, Push further, Be good to work with, Details matter, Work with brightest, Always get it done)
  5. My Service Design Approach: 3 phases (Research & Discovery, Strategy & Design, Implementation)
  6. "Ready to collaborate?" CTA

### New Portfolio
- **Sections**:
  1. Brief intro: "15 years translating strategy..."
  2. Philosophy paragraph
  3. 3 Expertise Areas (Systems Thinking, Policy Translation, Technology as Enabler)
  4. Location and contact info

**Status**: ⚠️ Current site has more detailed content (values, approach details). New portfolio is more concise.

**Recommendation**: Consider migrating the "What I care about" values section and "My Service Design Approach" details to the new portfolio.

---

## Articles/Blog

### Current Site
- **URL**: `/articles` (with pagination: `/articles/1`, `/articles/2`, `/articles/3`)
- **Total Articles**: 18 articles (6 per page, 3 pages)
- **Features**: Search, tags, pagination

### New Portfolio
- **URL**: `/articles`
- **Total Articles**: 15 articles (includes all scraped articles)
- **Features**: Search (Cmd/Ctrl+K), tags, featured article, article cards with avatars

**Status**: ✅ New portfolio has better search integration and article display

**Note**: 3 articles may be missing from the new portfolio. Need to verify if all 18 were scraped.

---

## Contact Page

### Current Site
- Not fully visible in snapshot, but has contact form

### New Portfolio
- **Contact 11 Block**: Dual-panel design
  - Left: Contact information (Email, Phone, Location, Response Time) + Social links
  - Right: Contact form (Name, Email, Organisation, Message)
- **Styling**: Matches theme with cards and proper spacing

**Status**: ✅ New portfolio has better contact page design

---

## Services Page

### Current Site
- **Status**: 404 error (page doesn't exist)
- **Individual Service Pages**: Exist (e.g., `/services/service-design`, `/services/digital-strategy`)

### New Portfolio
- **Services**: Integrated into homepage and navigation
- **No dedicated services page**: Services are shown on homepage

**Status**: ⚠️ Current site has individual service detail pages. New portfolio doesn't have a services hub page.

**Recommendation**: Consider creating a services hub page or individual service pages if needed.

---

## Content Differences

### Missing from New Portfolio:
1. **Values Page** (`/values`) - "Designing with empathy, accessibility and inclusivity"
2. **Scratch Page** (`/scratch`) - Unknown content
3. **Individual Service Pages** - Detailed service descriptions
4. **Colophon Page** - Site credits/technical details
5. **Legal Pages** - Terms, Privacy, Cookie Policy (may not be needed)

### Additional in New Portfolio:
1. **Approach Page/Section** - 4-phase methodology with visual timeline
2. **Results/Stats Section** - Key metrics display
3. **Testimonials Section** - Client testimonials
4. **Better Search** - Unified search across articles and case studies

---

## Design & UX

### Current Site
- Clean, minimal design
- Good use of whitespace
- Client logos in footer
- Consistent navigation

### New Portfolio
- Modern Shadcn/UI components
- Better visual hierarchy
- Carousel on hero
- Trust strip with marquee
- More visual elements (icons, cards, timelines)
- Better responsive design

**Status**: ✅ New portfolio has more modern, polished design

---

## Technical Stack

### Current Site
- Appears to be Astro-based (based on error messages)
- Client-side rendering for case studies
- Azure Static Web Apps hosting

### New Portfolio
- Astro with React components
- Content collections for articles and case studies
- Static site generation
- Type-safe content with Zod schemas

**Status**: ✅ New portfolio has better content management and type safety

---

## Recommendations

### High Priority:
1. ✅ **Migrate "What I care about" values** to About page
2. ✅ **Add "My Service Design Approach" details** to About or Approach section
3. ⚠️ **Verify all 18 articles** are migrated (currently 15 in new portfolio)
4. ⚠️ **Create Services hub page** if individual service pages are important
5. ✅ **Add Values page** if it's important for SEO/branding

### Medium Priority:
1. Consider adding "Scratch" page if it has valuable content
2. Add Colophon page if you want to showcase technical details
3. Review and migrate any missing case studies

### Low Priority:
1. Legal pages (Terms, Privacy, Cookie Policy) - only if legally required
2. Individual service detail pages - only if they drive conversions

---

## Summary

**Strengths of New Portfolio:**
- ✅ Better visual design and modern components
- ✅ Better search functionality
- ✅ Better content organization (content collections)
- ✅ More comprehensive homepage
- ✅ Better case studies filtering and display
- ✅ Type-safe content management

**Areas to Enhance:**
- ⚠️ Add more detailed About page content (values, approach details)
- ⚠️ Verify all articles are migrated
- ⚠️ Consider services hub page
- ⚠️ Add Values page if important

**Overall**: The new portfolio is a significant improvement in design, functionality, and content management. With a few content additions, it will be superior to the current site.

