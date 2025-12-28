# Navigation & Information Architecture Recommendation

## Executive Summary

**Recommendation: Use "Case Studies" as the primary navigation label**

After analysis from marketing and information architecture perspectives, "Case Studies" is the optimal choice for your portfolio.

---

## Marketing Analysis

### Why "Case Studies" Over "Work"

1. **Professional Services Standard**
   - "Case Studies" is the industry standard for B2B consulting portfolios
   - Government and regulatory clients expect "Case Studies" terminology
   - Aligns with how consulting firms present their work

2. **Content Depth Alignment**
   - Your content includes detailed project documentation:
     - Challenge statements
     - Approach/methodology
     - Results and impact
     - Client context
   - This depth matches "Case Studies" expectations, not a simple "Work" gallery

3. **SEO & Discoverability**
   - "Case Studies" is a more specific, searchable keyword
   - Better for long-tail searches like "service design case studies"
   - More likely to match how potential clients search

4. **User Expectations**
   - "Case Studies" sets expectation for analytical, detailed content
   - "Work" is ambiguous—could be anything from portfolio pieces to blog posts
   - Clients evaluating consultants expect to see "Case Studies"

5. **Competitive Analysis**
   - Leading service design and consulting firms use "Case Studies"
   - Government contractors typically use "Case Studies" or "Projects"
   - "Work" is more common in creative/design agency portfolios

---

## Information Architecture Analysis

### Current State

**URL Structure:**
- Individual case studies: `/case-studies/[slug]` ✅
- Hub page: `/case-studies/index.astro` ✅
- Legacy page: `/work.astro` (duplicate) ❌

**Content Collection:**
- Collection name: `caseStudies` ✅
- Schema includes: challenge, approach, results, client, industry ✅

**Navigation:**
- Header: "Case Studies" → `/case-studies` ✅
- Footer: Mixed ("Work" and "Case Studies") ❌
- Internal links: Mixed references ❌

### Recommended Structure

**Primary Navigation:**
- "Case Studies" → `/case-studies`

**URL Hierarchy:**
```
/case-studies/              (hub page - all case studies)
/case-studies/[slug]/       (individual case study)
```

**Content Organization:**
- Category filtering: Government, Regulatory, Enterprise, Service Design, Policy
- Sorting: Featured first, then by year (newest first)
- Search: Integrated with articles

---

## Implementation Plan

### Phase 1: Consolidation ✅
- [x] Create `/case-studies/index.astro` hub page
- [x] Update navbar to "Case Studies"
- [x] Update all internal links to `/case-studies`

### Phase 2: Cleanup ✅
- [x] Remove or redirect `/work` page (redirected to `/case-studies`)
- [x] Standardize all "Work" references to "Case Studies"
- [x] Update section IDs and anchors (`#work` → `#case-studies`)

### Phase 3: Consistency ✅
- [x] Review all CTAs and button labels (all updated to "Case Studies")
- [x] Ensure footer navigation matches header (both use "Case Studies")
- [x] Update meta descriptions and titles (all use "Case Studies")

---

## Best Practices Applied

1. **Semantic URLs**: `/case-studies/` clearly indicates content type
2. **Consistent Labeling**: Single term used throughout site
3. **User Mental Models**: Matches how B2B clients expect to find project examples
4. **SEO Optimization**: Specific keyword in URL and navigation
5. **Content-URL Alignment**: URL structure matches content collection name

---

## Conclusion

**Use "Case Studies" throughout the portfolio** because it:
- Aligns with professional services industry standards
- Matches your detailed content depth
- Improves SEO and discoverability
- Sets correct user expectations
- Maintains consistency with existing URL structure

The term "Work" should be removed from navigation and replaced with "Case Studies" for consistency and professionalism.

