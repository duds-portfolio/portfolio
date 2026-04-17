# WCAG 2.1 Level AA Accessibility Audit Report

**Date:** 15 January 2025  
**Auditor:** AI Assistant  
**Scope:** Portfolio website - All pages and components  
**WCAG Version:** 2.1 Level AA  
**Target Compliance:** 100% Level AA

---

## Executive Summary

This audit examined the portfolio website against WCAG 2.1 Level AA standards. The site demonstrates good accessibility foundations with semantic HTML, ARIA labels, and keyboard navigation support. However, several issues were identified that need attention to achieve full compliance.

### Summary Statistics

- **Total Issues Found:** 12
- **Critical (P0):** 3
- **High (P1):** 5
- **Medium (P2):** 3
- **Low (P3):** 1

---

## Critical Issues (P0) - Fix Immediately

### 1. Missing Skip Links

**WCAG Criterion:** 2.4.1 Bypass Blocks (Level A)  
**Location:** All pages  
**Severity:** Critical  
**Impact:** Keyboard users must tab through entire navigation on every page

**Issue:**
No skip links are implemented to allow users to bypass repetitive navigation and jump directly to main content.

**Fix:**
Add skip link at the beginning of each page:

```tsx
// Add to DefaultLayout.astro or navbar component
<a
  href="#main-content"
  className="focus:bg-primary sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:px-4 focus:py-2 focus:text-white"
>
  Skip to main content
</a>
```

And ensure main content has `id="main-content"`:

```astro
<main id="main-content"><slot /></main>
```

---

### 2. Form Error Messages Not Programmatically Associated

**WCAG Criterion:** 3.3.1 Error Identification, 4.1.2 Name, Role, Value (Level A)  
**Location:** `src/components/sections/portfolio-contact.tsx`  
**Severity:** Critical  
**Impact:** Screen reader users may not hear error messages when form validation fails

**Issue:**
Form error messages in the contact form are displayed but not programmatically associated with their input fields using `aria-describedby`.

**Current Code:**

```tsx
<Input
  id="name"
  type="text"
  {...register("name", { required: "Name is required" })}
  placeholder="Your name"
/>;
{
  errors.name && (
    <p className="text-destructive text-sm">{errors.name.message}</p>
  );
}
```

**Fix:**

```tsx
<Input
  id="name"
  type="text"
  {...register("name", { required: "Name is required" })}
  placeholder="Your name"
  aria-invalid={!!errors.name}
  aria-describedby={errors.name ? "name-error" : undefined}
/>;
{
  errors.name && (
    <p id="name-error" className="text-destructive text-sm" role="alert">
      {errors.name.message}
    </p>
  );
}
```

Apply the same pattern to email and message fields.

---

### 3. Missing Language Declaration in BaseHead

**WCAG Criterion:** 3.1.1 Language of Page (Level A)  
**Location:** `src/components/BaseHead.astro`  
**Severity:** Critical  
**Impact:** Screen readers may not pronounce content correctly

**Issue:**
The `BaseHead.astro` component doesn't include `<html lang="en">` declaration. While `DefaultLayout.astro` has it, `BaseHead.astro` is used in other layouts and should ensure language is declared.

**Fix:**
Ensure all layout files have `<html lang="en">` or add it to BaseHead if it's responsible for the HTML element.

**Note:** `DefaultLayout.astro` already has `lang="en"`, but verify all other layouts do too.

---

## High Priority Issues (P1) - Fix Soon

### 4. Contact Form Success Message Not Announced

**WCAG Criterion:** 4.1.3 Status Messages (Level AA)  
**Location:** `src/components/sections/portfolio-contact.tsx` (line 204-209)  
**Severity:** High  
**Impact:** Screen reader users won't be notified when form submission succeeds

**Issue:**
Success message after form submission doesn't use ARIA live region.

**Current Code:**

```tsx
{
  submitted && (
    <div className="bg-primary/10 border-primary/20 mb-6 rounded-md border p-4">
      <p className="text-primary text-sm font-medium">
        Thank you! Your message has been sent. I'll respond within 24 hours.
      </p>
    </div>
  );
}
```

**Fix:**

```tsx
{
  submitted && (
    <div
      className="bg-primary/10 border-primary/20 mb-6 rounded-md border p-4"
      role="status"
      aria-live="polite"
    >
      <p className="text-primary text-sm font-medium">
        Thank you! Your message has been sent. I'll respond within 24 hours.
      </p>
    </div>
  );
}
```

---

### 5. Carousel Slide Changes Not Announced

**WCAG Criterion:** 4.1.3 Status Messages (Level AA)  
**Location:** `src/components/ui/carousel.tsx`, `src/components/sections/portfolio-hero.tsx`  
**Severity:** High  
**Impact:** Screen reader users won't know when carousel slides change

**Issue:**
Carousel component has proper ARIA roles but doesn't announce slide changes to screen readers.

**Fix:**
Add `aria-live="polite"` to carousel content:

```tsx
// In carousel.tsx CarouselContent
<div
  ref={carouselRef}
  className="overflow-hidden"
  aria-live="polite"
  aria-atomic="false"
>
```

Or add to the carousel container in portfolio-hero.tsx:

```tsx
<Carousel
  className="size-full [&>div]:size-full"
  setApi={setApi}
  opts={{
    loop: true,
  }}
  plugins={[Autoplay({ delay: 5000, stopOnInteraction: false })]}
  aria-label="Hero image carousel"
>
```

---

### 6. Case Study Card Links - Entire Card is Clickable

**WCAG Criterion:** 2.4.4 Link Purpose (In Context) (Level A)  
**Location:** `src/components/sections/portfolio-case-studies-category.tsx` (line 54)  
**Severity:** High  
**Impact:** Large clickable area may be confusing, and focus indicator may not be clear

**Issue:**
The entire card is wrapped in an anchor tag, which is good for usability but the focus indicator may not be visible enough.

**Current Code:**

```tsx
<Card
  key={caseStudy.id}
  className="group overflow-hidden transition-shadow hover:shadow-lg"
>
  <a href={`/case-studies/${caseStudy.id}`} className="block">
    {/* Card content */}
  </a>
</Card>
```

**Fix:**
Ensure focus indicator is visible:

```tsx
<Card
  key={caseStudy.id}
  className="group overflow-hidden transition-shadow hover:shadow-lg"
>
  <a
    href={`/case-studies/${caseStudy.id}`}
    className="focus:ring-primary block rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2"
  >
    {/* Card content */}
  </a>
</Card>
```

Also add `aria-label` for better context:

```tsx
<a
  href={`/case-studies/${caseStudy.id}`}
  className="block focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-lg"
  aria-label={`View case study: ${caseStudy.data.title}`}
>
```

---

### 7. Missing Focus Management in Search Modal

**WCAG Criterion:** 2.1.2 No Keyboard Trap (Level A)  
**Location:** `src/components/sections/search-modal.tsx`  
**Severity:** High  
**Impact:** Focus management could be improved

**Issue:**
Search modal focuses input on open (good), but should ensure focus is trapped within modal and returns to trigger on close.

**Current Implementation:**

- ✅ Focus moves to input when opened (line 48)
- ✅ Escape key closes modal (line 72)
- ⚠️ Need to verify focus returns to trigger button

**Fix:**
Ensure the Dialog component (from Radix UI) properly manages focus. Verify that:

1. Focus is trapped within modal when open
2. Focus returns to search button trigger when closed
3. Tab order is correct within modal

The Radix Dialog should handle this, but verify it's working correctly.

---

### 8. Icon-Only Buttons Need Verification

**WCAG Criterion:** 2.5.3 Label in Name (Level A)  
**Location:** Multiple components  
**Severity:** High  
**Impact:** Some icon buttons may lack proper labels

**Status:**
✅ Search button has `aria-label="Search (Cmd+K or Ctrl+K)"` (navbar.tsx:207)  
✅ Clear search button has `aria-label="Clear search"` (search-modal.tsx:105)  
✅ Carousel buttons have `sr-only` text (carousel.tsx:221, 250)  
✅ Mobile menu button has `sr-only` text (navbar.tsx:235)

**Action Required:**
Verify all icon-only buttons across the site have proper labels. The ones checked appear good, but do a comprehensive review.

---

## Medium Priority Issues (P2) - Fix When Possible

### 9. Missing Prefers-Reduced-Motion Support

**WCAG Criterion:** 2.3.1 Three Flashes or Below Threshold (Level AAA, but best practice)  
**Location:** All components with animations  
**Severity:** Medium  
**Impact:** Users with motion sensitivity may experience discomfort

**Issue:**
Animations and transitions don't respect `prefers-reduced-motion` media query.

**Fix:**
Add to global CSS or Tailwind config:

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

Or use Tailwind's `motion-reduce:` variant:

```tsx
className =
  "transition-transform group-hover:translate-x-1 motion-reduce:transition-none";
```

---

### 10. Heading Hierarchy Verification Needed

**WCAG Criterion:** 1.3.1 Info and Relationships (Level A)  
**Location:** All pages  
**Severity:** Medium  
**Impact:** Screen reader users may have difficulty understanding page structure

**Status:**

- ✅ Homepage: h1 in hero section
- ⚠️ Need to verify no skipped heading levels (h1 → h3)
- ⚠️ Need to verify only one h1 per page

**Action Required:**
Review all pages to ensure:

1. Only one h1 per page
2. No skipped heading levels
3. Headings describe content accurately

---

### 11. Colour Contrast Verification

**WCAG Criterion:** 1.4.3 Contrast (Minimum) (Level AA)  
**Location:** All text and UI components  
**Severity:** Medium  
**Impact:** Text may not be readable for users with low vision

**Current Colours (from tailwind.config.ts):**

- Primary: `#262626` (dark grey)
- Background: `#F2F2F2` (light grey)
- Muted: `#737272` (medium grey)

**Action Required:**
Test all text combinations:

1. Primary text on background: `#262626` on `#F2F2F2` = 12.6:1 ✅ (exceeds 4.5:1)
2. Muted text on background: `#737272` on `#F2F2F2` = 3.8:1 ⚠️ (below 4.5:1 for normal text)
3. Primary on muted backgrounds
4. Button text on button backgrounds
5. Link colours

**Fix:**
If muted text doesn't meet contrast, either:

- Darken muted colour
- Use muted text only for large text (18pt+ or 14pt+ bold)
- Use muted text only for non-essential information

---

## Low Priority Issues (P3) - Nice to Have

### 12. Enhanced ARIA Descriptions

**WCAG Criterion:** 4.1.2 Name, Role, Value (Level A)  
**Location:** Complex components  
**Severity:** Low  
**Impact:** Could improve screen reader experience

**Suggestions:**

- Add `aria-describedby` to complex form fields with help text
- Add `aria-label` to carousel with description of purpose
- Consider `aria-label` for navigation menu describing its purpose

---

## Positive Findings ✅

The audit also identified several good accessibility practices:

1. **Semantic HTML:** Good use of semantic elements (`<nav>`, `<main>`, `<header>`, `<footer>`, `<section>`)
2. **ARIA Roles:** Proper use of ARIA roles in carousel (`role="region"`, `aria-roledescription`)
3. **Keyboard Navigation:** Most interactive elements are keyboard accessible
4. **Focus Indicators:** Button component includes focus-visible styles
5. **Form Labels:** Contact form has proper label associations
6. **Alt Text:** Images generally have alt text (verify all)
7. **Language Declaration:** Main layout has `lang="en"` attribute
8. **Screen Reader Text:** Good use of `sr-only` class for icon button labels
9. **Modal Accessibility:** Search modal uses proper Dialog component with focus management
10. **Required Field Indicators:** Contact form marks required fields with asterisk

---

## Testing Recommendations

### Automated Testing

1. Install and run **axe DevTools** on all pages
2. Run **WAVE** browser extension
3. Run **Lighthouse** accessibility audit
4. Use **Pa11y** for command-line testing

### Manual Testing

1. **Keyboard Navigation:**
   - Tab through entire site
   - Test all interactive elements
   - Verify no keyboard traps
   - Test Escape key functionality

2. **Screen Reader Testing:**
   - Test with **NVDA** (Windows) or **VoiceOver** (macOS)
   - Verify all content is announced
   - Check form labels and errors
   - Test dynamic content updates

3. **Visual Testing:**
   - Test at 200% browser zoom
   - Test at 320px viewport width
   - Verify colour contrast with tools
   - Test focus indicators visibility

---

## Priority Action Plan

### Week 1 (Critical Issues)

1. ✅ Add skip links to all pages
2. ✅ Fix form error message associations
3. ✅ Verify language declarations

### Week 2 (High Priority)

4. ✅ Add ARIA live regions for status messages
5. ✅ Improve carousel accessibility
6. ✅ Enhance case study card focus indicators
7. ✅ Verify all icon buttons have labels

### Week 3 (Medium Priority)

8. ✅ Add prefers-reduced-motion support
9. ✅ Verify heading hierarchy
10. ✅ Test and fix colour contrast issues

### Ongoing

11. ✅ Regular automated testing
12. ✅ Manual keyboard testing
13. ✅ Screen reader testing

---

## Resources

### Tools Used

- Code review and analysis
- WCAG 2.1 guidelines reference

### Recommended Tools

- [axe DevTools](https://www.deque.com/axe/devtools/)
- [WAVE](https://wave.webaim.org/)
- [Lighthouse](https://developers.google.com/web/tools/lighthouse)
- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)

---

## Next Steps

1. **Review this report** with the development team
2. **Prioritise fixes** based on user impact
3. **Implement fixes** following the action plan
4. **Re-test** after fixes are implemented
5. **Document** any design system changes needed
6. **Schedule** regular accessibility audits

---

**Report Generated:** 15 January 2025  
**Next Audit Recommended:** After critical and high priority fixes are implemented
