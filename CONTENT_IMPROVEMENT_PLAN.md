# Content Improvement Implementation Plan

**Based on:** CONTENT_AUDIT_REPORT.md  
**Created:** 29 December 2024  
**Status:** Planning Phase

---

## Overview

This plan implements the recommendations from the Content Audit Report to improve tags, styling, and MDX component usage across all articles and case studies.

**Total Files to Update:** 29+ files  
**Estimated Effort:** 3-4 phases over 1-2 weeks

---

## Phase 1: High Priority - Tags and Critical Fixes

**Status:** Not Started  
**Priority:** High  
**Estimated Effort:** 4-6 hours

### 1.1 Add Missing Tags (10 files)

#### Articles - Blog Collection (1 file)

- [ ] `src/content/blog/offline-first-architecture-guide.md`
  - Add tags field: `["Architecture", "Offline-First", "PWA", "Progressive Web Apps", "Technical Guide", "Antarctic", "Service Design"]`
  - **Note:** This is a 933-line technical guide that would also benefit from visual separators and Card components

#### Articles - Pages (2 files)

- [ ] `src/pages/articles/service-design-in-the-era-of-remote-work.mdx`
  - Add tags: `["Service Design", "Remote Work", "Digital Transformation", "Workplace Design"]`
- [ ] `src/pages/articles/the-ethics-of-service-design.mdx`
  - Add tags: `["Service Design", "Ethics", "Design Ethics", "Responsible Design"]`

#### Case Studies - Content Collection (3 files)

- [ ] `src/content/case-studies/dcceew-regulatory-solutions-framework.md`
  - Add tags: `["Service Design", "Regulatory Services", "Government", "Framework Design", "Policy"]`
- [ ] `src/content/case-studies/icon-water-unit-metering-service-concept.md`
  - Add tags: `["Service Design", "Water Services", "Utility Services", "Service Concept", "User Research"]`
- [ ] `src/content/case-studies/murray-darling-basin-plan-service-concept.md`
  - Add tags: `["Service Design", "Water Management", "Environmental Services", "Service Concept", "Policy"]`

#### Case Studies - Pages (4 files)

- [ ] `src/pages/case-studies/designing-a-quality-solution-to-an-airbag-problem.mdx`
  - Add tags: `["Service Design", "Quality Control", "Manufacturing", "Automotive", "Process Improvement"]`
- [ ] `src/pages/case-studies/developing-a-robust-doctrine-application-for-the-antarctic.mdx`
  - Add tags: `["Service Design", "Government", "Policy", "Doctrine", "Antarctic"]`
- [ ] `src/pages/case-studies/improving-digital-agility-in-higher-education.mdx`
  - Add tags: `["Service Design", "Higher Education", "Digital Transformation", "Agility", "Change Management"]`
- [ ] `src/pages/case-studies/making-travel-simple.mdx`
  - Add tags: `["Service Design", "Travel Services", "Higher Education", "Journey Mapping", "User Experience"]`

### 1.2 Fix Duplicate Blockquotes (3 files)

- [ ] `src/content/blog/considerations-for-trauma-informed-design.md`
  - Remove duplicate blockquote (lines 16-18)
  - Convert remaining blockquote to Alert component (line 48-50)
  - Import Alert component at top of file
- [ ] `src/content/blog/designing-intentional-culture.md`
  - Convert blockquote to Alert component
  - Import Alert component at top of file
- [ ] `src/content/blog/embracing-gemba-in-service-design-for-effective-problem-solving.md`
  - Convert blockquote to Alert component
  - Import Alert component at top of file

### 1.3 Verification

- [ ] Verify all tags are properly formatted (Title Case)
- [ ] Test that Alert components render correctly
- [ ] Check for any frontmatter syntax errors
- [ ] Run build to ensure no breaking changes

**Phase 1 Completion Criteria:**

- ✅ All 9 files have tags added
- ✅ All 3 files have blockquotes replaced with Alerts
- ✅ No build errors
- ✅ All changes committed

---

## Phase 2: Medium Priority - MDX Component Integration

**Status:** Not Started  
**Priority:** Medium  
**Estimated Effort:** 6-8 hours

### 2.1 Add Alert Components for Impact Metrics (Case Studies)

**Target Files:** All case studies with impact metrics sections

#### Content Collection Case Studies (10 files)

- [ ] `src/content/case-studies/asic-fit-and-proper-person-test.md`
  - Replace Impact section with Success Alert
- [ ] `src/content/case-studies/border-security-digital-verification.md`
  - Replace Impact section with Success Alert
- [ ] `src/content/case-studies/dcceew-regulatory-solutions-framework.md`
  - Add Success Alert for impact metrics (if present)
- [ ] `src/content/case-studies/holden-airbag-quality-control.md`
  - Replace Impact section with Success Alert
- [ ] `src/content/case-studies/icon-water-unit-metering-service-concept.md`
  - Add Success Alert for impact metrics (if present)
- [ ] `src/content/case-studies/murray-darling-basin-plan-service-concept.md`
  - Add Success Alert for impact metrics (if present)
- [ ] `src/content/case-studies/rio-tinto-bespoke-pmo.md`
  - Replace Impact section with Success Alert
- [ ] `src/content/case-studies/university-canberra-digital-agility.md`
  - Replace Impact section with Success Alert
- [ ] `src/content/case-studies/university-canberra-travel-management.md`
  - Replace Impact section with Success Alert
- [ ] `src/content/case-studies/antarctic-doctrine-application.md`
  - Replace Impact section with Success Alert

#### Case Study Pages (7 files)

- [ ] `src/pages/case-studies/a-better-fit-and-proper-person-test.mdx`
  - Replace Impact section with Success Alert
- [ ] `src/pages/case-studies/designing-a-quality-solution-to-an-airbag-problem.mdx`
  - Replace Impact section with Success Alert
- [ ] `src/pages/case-studies/developing-a-bespoke-pmo-as-a-service-for-rio-tinto-aluminium.mdx`
  - Replace Impact section with Success Alert
- [ ] `src/pages/case-studies/developing-a-robust-doctrine-application-for-the-antarctic.mdx`
  - Replace Impact section with Success Alert
- [ ] `src/pages/case-studies/improving-digital-agility-in-higher-education.mdx`
  - Replace Impact section with Success Alert
- [ ] `src/pages/case-studies/making-travel-simple.mdx`
  - Replace Impact section with Success Alert
- [ ] `src/pages/case-studies/protecting-our-borders-with-digital-verification.mdx`
  - Replace Impact section with Success Alert

### 2.2 Add Card Components for Key Concepts (5+ files)

- [ ] `src/content/blog/offline-first-architecture-guide.md` ⚠️ **PRIORITY** (933 lines)
  - Wrap "Core Principles" section in Card components (one card per principle)
  - Wrap "Architecture Patterns" section in Card components (one card per pattern)
  - Wrap "Best Practices" section in Card components (one card per practice)
  - Consider wrapping "Case Studies" section in Card components
- [ ] `src/pages/articles/service-blueprinting.md`
  - Wrap "Key Components" section in Card component
  - Wrap "Creating a Service Blueprint" section in Card component
- [ ] `src/pages/articles/how-the-design-thinking-process-works-in-government.mdx`
  - Wrap each phase (Discover, Define, Design, Delivery) in Card components
- [ ] `src/pages/articles/five-elements-of-service-design-for-government.mdx`
  - Wrap each of the 5 elements in Card components
- [ ] `src/content/case-studies/asic-fit-and-proper-person-test.md`
  - Wrap "Key Service Design Learnings" section in Card components (one card per learning)
- [ ] `src/content/case-studies/university-canberra-travel-management.md`
  - Wrap "Key Service Design Learnings" section in Card components

### 2.3 Add Visual Separators (Long Articles)

**Target:** Articles exceeding 200 lines or 5 major sections

- [ ] `src/content/blog/offline-first-architecture-guide.md` ⚠️ **PRIORITY** (933 lines)
  - Add Separator components between major sections:
    - After "What is Offline-First?"
    - After "Core Principles"
    - After "Technical Stack Recommendations"
    - After "Architecture Patterns"
    - After "Implementation Guide"
    - After "Best Practices"
    - After "Real-World Patterns"
- [ ] `src/pages/articles/what-is-service-design.mdx`
  - Add Separator components between major sections
- [ ] `src/pages/articles/poka-yoke-in-service-design-and-user-experience.mdx`
  - Add Separator components between major sections
- [ ] `src/content/case-studies/asic-fit-and-proper-person-test.md`
  - Add Separator components between major sections
- [ ] `src/content/case-studies/university-canberra-travel-management.md`
  - Add Separator components between major sections

### 2.4 Verification

- [ ] Test all Alert components render correctly
- [ ] Test all Card components render correctly
- [ ] Test Separator components provide visual breaks
- [ ] Verify responsive design (mobile/tablet/desktop)
- [ ] Check dark mode compatibility
- [ ] Run build to ensure no breaking changes

**Phase 2 Completion Criteria:**

- ✅ All case studies have Alert components for impact metrics
- ✅ 5+ articles have Card components for key concepts
- ✅ Long articles have visual separators
- ✅ No build errors
- ✅ All changes committed

---

## Phase 3: Low Priority - Standardisation and Polish

**Status:** Not Started  
**Priority:** Low  
**Estimated Effort:** 4-6 hours

### 3.1 Standardise Tag Formatting

**Review all tags for consistency:**

- [ ] Review all article tags for Title Case consistency
- [ ] Review all case study tags for Title Case consistency
- [ ] Ensure consistent terminology (e.g., "User Research" not "user research")
- [ ] Update any inconsistent tags found

**Tag Categories to Verify:**

- Domain Tags: Service Design, User Experience, Government, Higher Education
- Method Tags: Journey Mapping, Service Blueprinting, User Research, Co-Design
- Industry Tags: Government, Education, Healthcare, Financial Services
- Process Tags: Agile, Design Thinking, Continuous Improvement

### 3.2 Enhance Typography

- [ ] Review heading hierarchy (H1 → H2 → H3) across all content
- [ ] Ensure consistent use of `<strong>` for emphasis
- [ ] Add `<mark>` tags for highlights where appropriate
- [ ] Review paragraph length (break up paragraphs > 6 lines)

### 3.3 Content Quality Improvements

- [ ] Review and fix inconsistent list formatting
- [ ] Ensure consistent use of bold/italics
- [ ] Break up dense content blocks with Cards or Alerts
- [ ] Add visual hierarchy improvements where needed

### 3.4 Final Verification

- [ ] Run full site build
- [ ] Test all pages render correctly
- [ ] Verify tag filtering works correctly
- [ ] Check all MDX components work in production build
- [ ] Review responsive design across all updated pages
- [ ] Test dark mode on all updated pages

**Phase 3 Completion Criteria:**

- ✅ All tags standardised
- ✅ Typography enhanced and consistent
- ✅ Content quality improvements applied
- ✅ Full site build successful
- ✅ All changes committed

---

## Phase 4: Documentation and Maintenance

**Status:** Not Started  
**Priority:** Low  
**Estimated Effort:** 2-3 hours

### 4.1 Update Documentation

- [ ] Create MDX component usage guide for content creators
- [ ] Document tag standards and categories
- [ ] Update content creation checklist
- [ ] Add examples of Alert, Card, and Separator usage

### 4.2 Create Templates

- [ ] Create article template with MDX component examples
- [ ] Create case study template with MDX component examples
- [ ] Include tag recommendations in templates

### 4.3 Maintenance Plan

- [ ] Establish review process for new content
- [ ] Create checklist for content quality
- [ ] Set up periodic audits (quarterly recommended)

---

## Implementation Guidelines

### Tag Formatting Standards

```yaml
tags:
  - "Service Design" # Title Case
  - "User Research" # Not "user research"
  - "Government" # Single word, capitalised
  - "Higher Education" # Multi-word, Title Case
```

### Alert Component Usage

```mdx
import Alert from '@/components/ui/Alert.astro';

<!-- For quotes and insights -->

<Alert 
  type="info" 
  title="Designer Insight" 
  message="Your quote or insight here" 
/>

<!-- For impact metrics -->

<Alert 
  type="success" 
  title="Service Impact" 
  message="45% reduction in processing time, 78% increase in satisfaction" 
/>

<!-- For warnings -->

<Alert 
  type="warning" 
  title="Consideration" 
  message="Important note here" 
/>
```

### Card Component Usage

```mdx
import Card from '@/components/ui/Card.astro';

<Card title="Key Principle: Framework Name">
## Section Heading

Content here...

</Card>
```

### Separator Component Usage

```mdx
import { Separator } from '@/components/ui/separator';

<!-- Between major sections -->

<Separator />
```

---

## Testing Checklist

Before marking any phase complete:

- [ ] All files build without errors
- [ ] All MDX components render correctly
- [ ] Tags display correctly in tag pages
- [ ] Responsive design works on mobile/tablet/desktop
- [ ] Dark mode works correctly
- [ ] No console errors in browser
- [ ] All links work correctly
- [ ] Images load correctly
- [ ] Typography is readable and consistent

---

## Progress Tracking

### Phase 1: High Priority

- **Status:** Not Started
- **Files Updated:** 0/12
- **Estimated Completion:** TBD

### Phase 2: Medium Priority

- **Status:** Not Started
- **Files Updated:** 0/22
- **Estimated Completion:** TBD

### Phase 3: Low Priority

- **Status:** Not Started
- **Files Updated:** 0/29
- **Estimated Completion:** TBD

### Phase 4: Documentation

- **Status:** Not Started
- **Tasks Completed:** 0/3
- **Estimated Completion:** TBD

---

## Notes

- All changes should be tested in development before committing
- Use semantic commit messages: `content(tags): add missing tags to 9 files`
- Consider creating a branch for each phase
- Review changes with stakeholders before merging

---

## Next Steps

1. **Review this plan** and adjust priorities if needed
2. **Start Phase 1** with tag additions
3. **Test incrementally** - don't wait until the end to test
4. **Commit frequently** - small, focused commits
5. **Update this plan** as tasks are completed

---

**Last Updated:** 29 December 2024  
**Next Review:** After Phase 1 completion
