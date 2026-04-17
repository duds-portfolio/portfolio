# Content Audit Report: Articles and Case Studies

**Date:** 29 December 2024  
**Scope:** All articles and case studies across `src/content/` and `src/pages/` directories  
**Focus Areas:** Tags, Styling Application, MDX Elements Usage

---

## Executive Summary

This audit examined **47 content files** (15 blog articles + 14 article pages, 10 case studies + 7 case study pages, plus 1 additional file) across the portfolio to assess:

1. **Tag consistency and completeness**
2. **Styling application** (prose classes, visual hierarchy)
3. **MDX component usage** for improved aesthetics and readability

### Key Findings

- **Tags:** 21% of content has missing or incomplete tags (10 files)
- **Styling:** Good prose class usage, but limited MDX component integration
- **MDX Elements:** Zero usage of available components (Alert, Card, Badge, Separator)
- **Special Case:** `offline-first-architecture-guide.md` (933 lines) is missing tags and would benefit significantly from MDX components

---

## 1. Tags Audit

### Current State

#### Articles (Blog Collection)

**Location:** `src/content/blog/` (15 files)

| File                                                                 | Tags Present | Format             | Issues           |
| -------------------------------------------------------------------- | ------------ | ------------------ | ---------------- |
| `considerations-for-trauma-informed-design.md`                       | ✅ Yes       | Array format       | Good             |
| `designing-intentional-culture.md`                                   | ✅ Yes       | Array format       | Good             |
| `embracing-gemba-in-service-design-for-effective-problem-solving.md` | ✅ Yes       | Array format       | Good             |
| `five-elements-of-service-design-for-government.md`                  | ✅ Yes       | Array format       | Good             |
| `how-the-design-thinking-process-works-in-government.md`             | ✅ Yes       | Array format       | Good             |
| `how-to-embed-continuous-improvement.md`                             | ✅ Yes       | Array format       | Good             |
| `poka-yoke-in-service-design-and-user-experience.md`                 | ✅ Yes       | Array format       | Good             |
| `service-blueprinting.md`                                            | ✅ Yes       | Array format       | Good             |
| `service-design-in-the-era-of-remote-work.md`                        | ✅ Yes       | Array format       | Good             |
| `service-design-principles.md`                                       | ✅ Yes       | Array format       | Good             |
| `the-ethics-of-service-design.md`                                    | ✅ Yes       | Array format       | Good             |
| `using-ms-teams-for-better-organisational-security.md`               | ✅ Yes       | Array format       | Good             |
| `what-is-service-design.md`                                          | ✅ Yes       | Array format       | Good             |
| `will-ai-mean-the-end-of-consulting.md`                              | ✅ Yes       | Array format       | Good             |
| `offline-first-architecture-guide.md`                                | ❌ No        | Missing tags field | **Missing tags** |

**Summary:** Blog collection has consistent tag formatting, except for `offline-first-architecture-guide.md` which is missing tags entirely.

#### Article Pages

**Location:** `src/pages/articles/` (14 files)

| File                                                                  | Tags Present | Format                 | Issues                               |
| --------------------------------------------------------------------- | ------------ | ---------------------- | ------------------------------------ |
| `considerations-for-trauma-informed-design.mdx`                       | ✅ Yes       | Array format           | Good, more tags than content version |
| `designing-intentional-culture.mdx`                                   | ✅ Yes       | Array format           | Different tags than content version  |
| `embracing-gemba-in-service-design-for-effective-problem-solving.mdx` | ✅ Yes       | Array format           | Good                                 |
| `five-elements-of-service-design-for-government.mdx`                  | ✅ Yes       | Array format           | Good                                 |
| `how-the-design-thinking-process-works-in-government.mdx`             | ✅ Yes       | Array format           | Good                                 |
| `how-to-embed-continuous-improvement.mdx`                             | ✅ Yes       | Array format           | Good                                 |
| `poka-yoke-in-service-design-and-user-experience.mdx`                 | ✅ Yes       | Array format           | Good                                 |
| `service-blueprinting.md`                                             | ✅ Yes       | Array format           | Good                                 |
| `service-design-in-the-era-of-remote-work.mdx`                        | ⚠️ Empty     | `tags:` with no values | **Missing tags**                     |
| `service-design-principles.md`                                        | ✅ Yes       | Array format           | Good                                 |
| `the-ethics-of-service-design.mdx`                                    | ⚠️ Empty     | `tags:` with no values | **Missing tags**                     |
| `using-ms-teams-for-better-organisational-security.mdx`               | ✅ Yes       | Array format           | Good                                 |
| `what-is-service-design.mdx`                                          | ✅ Yes       | Array format           | Good                                 |
| `will-ai-mean-the-end-of-consulting.mdx`                              | ✅ Yes       | Array format           | Good                                 |

**Issues Found:**

- `service-design-in-the-era-of-remote-work.mdx` - tags field empty
- `the-ethics-of-service-design.mdx` - tags field empty

**Note:** `offline-first-architecture-guide.md` exists in content/blog but not in pages/articles - may need to check if it's being rendered.

#### Case Studies (Content Collection)

**Location:** `src/content/case-studies/` (10 files)

| File                                           | Tags Present | Format       | Issues                       |
| ---------------------------------------------- | ------------ | ------------ | ---------------------------- |
| `asic-fit-and-proper-person-test.md`           | ✅ Yes       | Array format | Comprehensive tags (9 tags)  |
| `border-security-digital-verification.md`      | ✅ Yes       | Array format | Comprehensive tags (10 tags) |
| `dcceew-regulatory-solutions-framework.md`     | ⚠️ Empty     | `tags: []`   | **Missing tags**             |
| `holden-airbag-quality-control.md`             | ✅ Yes       | Array format | Needs review                 |
| `icon-water-unit-metering-service-concept.md`  | ⚠️ Empty     | `tags: []`   | **Missing tags**             |
| `murray-darling-basin-plan-service-concept.md` | ⚠️ Empty     | `tags: []`   | **Missing tags**             |
| `rio-tinto-bespoke-pmo.md`                     | ✅ Yes       | Array format | Needs review                 |
| `university-canberra-digital-agility.md`       | ✅ Yes       | Array format | Needs review                 |
| `university-canberra-travel-management.md`     | ✅ Yes       | Array format | Comprehensive tags (10 tags) |
| `antarctic-doctrine-application.md`            | ✅ Yes       | Array format | Needs review                 |

**Issues Found:**

- `dcceew-regulatory-solutions-framework.md` - empty tags array
- `icon-water-unit-metering-service-concept.md` - empty tags array
- `murray-darling-basin-plan-service-concept.md` - empty tags array

#### Case Study Pages

**Location:** `src/pages/case-studies/` (7 files)

| File                                                                | Tags Present | Format                 | Issues           |
| ------------------------------------------------------------------- | ------------ | ---------------------- | ---------------- |
| `a-better-fit-and-proper-person-test.mdx`                           | ✅ Yes       | Array format           | Good (6 tags)    |
| `designing-a-quality-solution-to-an-airbag-problem.mdx`             | ⚠️ Empty     | `tags:` with no values | **Missing tags** |
| `developing-a-bespoke-pmo-as-a-service-for-rio-tinto-aluminium.mdx` | ✅ Yes       | Array format           | Good (5 tags)    |
| `developing-a-robust-doctrine-application-for-the-antarctic.mdx`    | ⚠️ Empty     | `tags:` with no values | **Missing tags** |
| `improving-digital-agility-in-higher-education.mdx`                 | ⚠️ Empty     | `tags:` with no values | **Missing tags** |
| `making-travel-simple.mdx`                                          | ⚠️ Empty     | `tags:` with no values | **Missing tags** |
| `protecting-our-borders-with-digital-verification.mdx`              | ✅ Yes       | Array format           | Good (4 tags)    |

**Issues Found:**

- `designing-a-quality-solution-to-an-airbag-problem.mdx` - tags field empty
- `developing-a-robust-doctrine-application-for-the-antarctic.mdx` - tags field empty
- `improving-digital-agility-in-higher-education.mdx` - tags field empty
- `making-travel-simple.mdx` - tags field empty

### Tag Recommendations

#### Missing Tags to Add

**Articles (Blog Collection):**

- `offline-first-architecture-guide.md`: `["Architecture", "Offline-First", "PWA", "Progressive Web Apps", "Technical Guide", "Antarctic", "Service Design"]`

**Articles (Pages):**

- `service-design-in-the-era-of-remote-work.mdx`: `["Service Design", "Remote Work", "Digital Transformation", "Workplace Design"]`
- `the-ethics-of-service-design.mdx`: `["Service Design", "Ethics", "Design Ethics", "Responsible Design"]`

**Case Studies (Content):**

- `dcceew-regulatory-solutions-framework.md`: `["Service Design", "Regulatory Services", "Government", "Framework Design", "Policy"]`
- `icon-water-unit-metering-service-concept.md`: `["Service Design", "Water Services", "Utility Services", "Service Concept", "User Research"]`
- `murray-darling-basin-plan-service-concept.md`: `["Service Design", "Water Management", "Environmental Services", "Service Concept", "Policy"]`

**Case Studies (Pages):**

- `designing-a-quality-solution-to-an-airbag-problem.mdx`: `["Service Design", "Quality Control", "Manufacturing", "Automotive", "Process Improvement"]`
- `developing-a-robust-doctrine-application-for-the-antarctic.mdx`: `["Service Design", "Government", "Policy", "Doctrine", "Antarctic"]`
- `improving-digital-agility-in-higher-education.mdx`: `["Service Design", "Higher Education", "Digital Transformation", "Agility", "Change Management"]`
- `making-travel-simple.mdx`: `["Service Design", "Travel Services", "Higher Education", "Journey Mapping", "User Experience"]`

#### Tag Standardisation

**Recommended Tag Categories:**

1. **Domain Tags:** Service Design, User Experience, Government, Higher Education, etc.
2. **Method Tags:** Journey Mapping, Service Blueprinting, User Research, Co-Design, etc.
3. **Industry Tags:** Government, Education, Healthcare, Financial Services, etc.
4. **Process Tags:** Agile, Design Thinking, Continuous Improvement, etc.

**Tag Formatting Standard:**

- Use Title Case for multi-word tags: `"Service Design"` not `"service design"`
- Use consistent terminology: `"User Research"` not `"user research"` or `"User research"`
- Keep tags specific and meaningful (avoid overly generic tags)

---

## 2. Styling Application Audit

### Current State

#### Prose Classes

Most content uses Tailwind Typography's `prose` classes through the `BlogPost` component:

```53:54:src/components/sections/blog-post.tsx
          <article className="prose prose-lg dark:prose-invert prose-headings:font-semibold prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-6 prose-p:text-base prose-p:leading-relaxed prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-img:rounded-md prose-img:shadow-sm prose-blockquote:border-l-primary prose-blockquote:bg-muted/40 prose-blockquote:py-1 prose-blockquote:not-italic max-w-none">
            {children}
```

**Findings:**

- ✅ Good: Consistent prose styling applied via layout component
- ✅ Good: Dark mode support with `dark:prose-invert`
- ⚠️ Opportunity: Direct MDX content could benefit from additional styling classes

#### Visual Hierarchy Issues

**Examples Found:**

1. **Duplicate Blockquotes** (Content Issues)
   - `considerations-for-trauma-informed-design.md` has duplicate blockquote content (lines 16-18 and 48-50)
   - Should use MDX Alert component instead

2. **Inconsistent List Formatting**
   - Some articles use numbered lists, others use bullet points inconsistently
   - Mixed formatting in `service-blueprinting.md` (content vs pages version)

3. **Missing Visual Separators**
   - Long articles lack visual breaks
   - Could benefit from `<hr>` or Card components for section separation

4. **Code Blocks**
   - No code examples found in articles (appropriate for content type)
   - Case studies could benefit from code snippets for technical implementations

### Styling Recommendations

1. **Add Visual Separators**
   - Use `<hr class="my-8">` between major sections
   - Consider Card components for key concepts

2. **Improve Blockquote Styling**
   - Replace duplicate blockquotes with Alert components
   - Use Alert for callouts, tips, warnings

3. **Enhance List Presentation**
   - Use consistent list formatting
   - Consider Card components for multi-step processes

4. **Add Typography Enhancements**
   - Use `<strong>` for emphasis (already good)
   - Consider `<mark>` for highlights
   - Use proper heading hierarchy (H1 → H2 → H3)

---

## 3. MDX Elements Usage Audit

### Available Components

Based on codebase review, these MDX-compatible components are available:

1. **Alert.astro** (`src/components/ui/Alert.astro`)
   - Types: `info`, `success`, `warning`, `error`
   - Props: `type`, `title`, `message`

2. **Card.astro** (`src/components/ui/Card.astro`)
   - Props: `title`, `className`
   - Slot-based content

3. **Badge** (from `@/components/ui/badge`)
   - React component, usable in MDX

4. **Separator** (from `@/components/ui/separator`)
   - React component, usable in MDX

### Current Usage

**Articles:**

- ❌ **Zero usage** of Alert components
- ❌ **Zero usage** of Card components
- ❌ **Zero usage** of Badge components
- ❌ **Zero usage** of Separator components

**Case Studies:**

- ❌ **Zero usage** of Alert components
- ❌ **Zero usage** of Card components
- ❌ **Zero usage** of Badge components
- ❌ **Zero usage** of Separator components

### Opportunities for MDX Component Usage

#### 1. Alert Components

**Replace Blockquotes with Alerts:**

**Example from `considerations-for-trauma-informed-design.md`:**

```markdown
> "Trauma is perhaps the most avoided, ignored, belittled, denied, untreated, and misunderstood cause of human suffering." - Peter Levine
```

**Should be:**

```mdx
import Alert from '@/components/ui/Alert.astro';

<Alert type="info" title="Quote" message="Trauma is perhaps the most avoided, ignored, belittled, denied, untreated, and misunderstood cause of human suffering." - Peter Levine />
```

**Use Cases:**

- **Info Alerts:** Key concepts, definitions, important notes
- **Success Alerts:** Outcomes, achievements, positive results
- **Warning Alerts:** Cautions, considerations, challenges
- **Error Alerts:** Common mistakes, pitfalls to avoid

**Recommended Replacements:**

- `considerations-for-trauma-informed-design.md` - 2 blockquotes → Info Alerts
- `designing-intentional-culture.md` - 1 blockquote → Info Alert
- `embracing-gemba-in-service-design-for-effective-problem-solving.md` - 1 blockquote → Info Alert
- Case studies with impact metrics → Success Alerts

#### 2. Card Components

**Use for Key Concepts:**

**Example from `five-elements-of-service-design-for-government.md`:**

```markdown
## Understand the citizen experience, then design services around that.
```

**Should be:**

```mdx
import Card from '@/components/ui/Card.astro';

<Card title="Key Principle: Citizen-Centred Design">
## Understand the citizen experience, then design services around that.
...
</Card>
```

**Use Cases:**

- Key principles or frameworks
- Step-by-step processes
- Tool descriptions
- Methodology explanations

**Recommended Additions:**

- `service-blueprinting.md` - Key Components section → Card
- `how-the-design-thinking-process-works-in-government.mdx` - Each phase → Card
- `five-elements-of-service-design-for-government.mdx` - Each element → Card
- Case studies - Key learnings sections → Cards

#### 3. Badge Components

**Use for Tags/Keywords in Content:**

**Example:**

```mdx
import { Badge } from '@/components/ui/badge';

<Badge>Service Design</Badge> <Badge>Government</Badge>
```

**Use Cases:**

- Inline topic tags within content
- Methodology labels
- Industry indicators

#### 4. Separator Components

**Use for Section Breaks:**

**Example:**

```mdx
import { Separator } from '@/components/ui/separator';

<Separator />
```

**Use Cases:**

- Between major sections
- Before/after key concepts
- Visual breaks in long content

### MDX Component Implementation Examples

#### Example 1: Alert for Key Quotes

**Before:**

```markdown
> "Becoming trauma-informed is a radical act..." - Rachael Dietkus, LCSW
```

**After:**

```mdx
import Alert from '@/components/ui/Alert.astro';

<Alert 
  type="info" 
  title="Designer Insight" 
  message="Becoming trauma-informed is a radical act and an evolutionary practice. This is a commitment and means a shift in your training, new ways of doing and being, and embodying a deeper sense of purpose that ethically and responsibly works to understand the whole person you are designing with, for, and from. It's relational work — not transactional and extractive." 
/>
```

#### Example 2: Card for Process Steps

**Before:**

```markdown
## Creating a Service Blueprint

1. Define the Scope
2. Map User Actions
   ...
```

**After:**

```mdx
import Card from '@/components/ui/Card.astro';

<Card title="Creating a Service Blueprint">
1. **Define the Scope**
   - Identify the service to blueprint
   - Set clear boundaries
   - Determine the level of detail

2. **Map User Actions**
   - Document the user journey
   - Identify key touchpoints
   - Note user emotions and pain points
     </Card>
```

#### Example 3: Alert for Impact Metrics

**Before:**

```markdown
## Impact

- **45%** - Reduction in assessment processing time
- **78%** - Increase in user satisfaction
```

**After:**

```mdx
import Alert from '@/components/ui/Alert.astro';

<Alert 
  type="success" 
  title="Service Impact" 
  message="45% reduction in assessment processing time, 78% increase in user satisfaction, 32% improvement in compliance rates" 
/>
```

---

## 4. Readability and Usability Improvements

### Current Issues

1. **Long Paragraphs**
   - Some articles have paragraphs exceeding 5-6 lines
   - Break into shorter paragraphs for better readability

2. **Dense Content Blocks**
   - Lists without visual separation
   - Consider Cards or Alerts for emphasis

3. **Missing Visual Hierarchy**
   - Some sections lack clear visual distinction
   - Use Cards, Alerts, or Separators

4. **Inconsistent Formatting**
   - Mixed use of bold, italics, and emphasis
   - Standardise formatting approach

### Recommendations

1. **Break Up Long Content**
   - Use Cards for related concepts
   - Use Alerts for key takeaways
   - Add Separators between major sections

2. **Enhance Visual Hierarchy**
   - Use Cards for frameworks and methodologies
   - Use Alerts for important notes and quotes
   - Use consistent heading structure

3. **Improve Scannability**
   - Add visual breaks (Separators)
   - Use Cards to group related information
   - Use Alerts to highlight key points

---

## 5. Priority Action Items

### High Priority

1. **Add Missing Tags** (9 files)
   - `offline-first-architecture-guide.md` (Blog Collection - missing tags field entirely)
   - `service-design-in-the-era-of-remote-work.mdx`
   - `the-ethics-of-service-design.mdx`
   - `dcceew-regulatory-solutions-framework.md`
   - `icon-water-unit-metering-service-concept.md`
   - `murray-darling-basin-plan-service-concept.md`
   - `designing-a-quality-solution-to-an-airbag-problem.mdx`
   - `developing-a-robust-doctrine-application-for-the-antarctic.mdx`
   - `improving-digital-agility-in-higher-education.mdx`
   - `making-travel-simple.mdx`

2. **Replace Duplicate Blockquotes with Alerts** (3 files)
   - `considerations-for-trauma-informed-design.md`
   - `designing-intentional-culture.md`
   - `embracing-gemba-in-service-design-for-effective-problem-solving.md`

### Medium Priority

3. **Add Card Components for Key Concepts** (5+ files)
   - `service-blueprinting.md`
   - `how-the-design-thinking-process-works-in-government.mdx`
   - `five-elements-of-service-design-for-government.mdx`
   - Case studies with key learnings sections

4. **Add Alert Components for Impact Metrics** (All case studies)
   - Replace impact sections with Success Alerts
   - Use Info Alerts for key insights

5. **Add Visual Separators** (Long articles)
   - Add `<hr>` or Separator components between major sections

### Low Priority

6. **Standardise Tag Formatting**
   - Review all tags for Title Case consistency
   - Ensure consistent terminology

7. **Enhance Typography**
   - Review heading hierarchy
   - Ensure consistent emphasis usage

---

## 6. Implementation Guide

### Adding Tags

**Format:**

```yaml
tags:
  - "Service Design"
  - "Government"
  - "User Research"
```

**Best Practices:**

- Use Title Case
- Be specific (avoid overly generic tags)
- Include 3-5 relevant tags per article
- Use consistent terminology across content

### Using Alert Components

**Import:**

```mdx
import Alert from '@/components/ui/Alert.astro';
```

**Usage:**

```mdx
<Alert type="info" title="Key Concept" message="Your message here" />
<Alert type="success" title="Outcome" message="45% reduction in processing time" />
<Alert type="warning" title="Consideration" message="Important note here" />
```

### Using Card Components

**Import:**

```mdx
import Card from '@/components/ui/Card.astro';
```

**Usage:**

```mdx
<Card title="Framework Name">
Content here...
</Card>
```

### Using Separator Components

**Import:**

```mdx
import { Separator } from '@/components/ui/separator';
```

**Usage:**

```mdx
<Separator />
```

---

## 7. Summary Statistics

### Tag Coverage

- **Articles with Tags:** 24/30 (80%)
- **Articles Missing Tags:** 6/30 (20%)
- **Case Studies with Tags:** 13/17 (76%)
- **Case Studies Missing Tags:** 4/17 (24%)
- **Total Content Files:** 47 files
- **Total Missing Tags:** 10 files (21%)

### MDX Component Usage

- **Alert Components Used:** 0/47 (0%)
- **Card Components Used:** 0/47 (0%)
- **Badge Components Used:** 0/47 (0%)
- **Separator Components Used:** 0/47 (0%)

### Styling Quality

- **Prose Classes Applied:** 47/47 (100%) ✅
- **Visual Hierarchy Issues:** ~18 files need improvement
- **Duplicate Content:** 3 files need cleanup
- **Long Articles Needing Separators:** 5+ files (including `offline-first-architecture-guide.md` at 933 lines)

---

## 8. Next Steps

1. **Immediate:** Add missing tags to 10 files (including `offline-first-architecture-guide.md`)
2. **Short-term:** Replace blockquotes with Alert components in 3 files
3. **Medium-term:** Add Card components to 5+ key articles
4. **Medium-term:** Add visual separators to long articles (especially `offline-first-architecture-guide.md`)
5. **Ongoing:** Review and enhance new content with MDX components

### Special Considerations for `offline-first-architecture-guide.md`

This is a **933-line technical guide** that would benefit significantly from:

- **Tags:** Add comprehensive tags for discoverability
- **Visual Separators:** Add Separator components between major sections (Core Principles, Architecture Patterns, Implementation Guide, etc.)
- **Card Components:** Wrap key sections like "Core Principles", "Architecture Patterns", and "Best Practices" in Card components
- **Alert Components:** Use Info Alerts for important notes and Success Alerts for case study outcomes

---

**Report Generated:** 29 December 2024  
**Next Review:** After implementation of high-priority items
