# WCAG 2.1 Level AA Accessibility Audit

This document provides a comprehensive checklist for auditing the portfolio website against WCAG 2.1 Level AA standards. Use this checklist systematically to ensure full accessibility compliance.

## How to Use This Audit

1. **Automated Testing**: Run automated accessibility tools first (axe DevTools, WAVE, Lighthouse)
2. **Manual Testing**: Go through each section manually
3. **Keyboard Testing**: Test all functionality with keyboard only (no mouse)
4. **Screen Reader Testing**: Test with NVDA (Windows), JAWS (Windows), or VoiceOver (macOS)
5. **Document Findings**: Note any issues found and their severity

## Testing Tools

### Automated Tools

- **axe DevTools** (browser extension)
- **WAVE** (Web Accessibility Evaluation Tool)
- **Lighthouse** (Chrome DevTools)
- **Pa11y** (command-line tool)
- **Accessibility Insights** (Microsoft)

### Manual Testing

- **Keyboard navigation** (Tab, Shift+Tab, Enter, Space, Arrow keys)
- **Screen readers**: NVDA, JAWS, VoiceOver
- **Browser zoom** (200% zoom test)
- **Colour contrast analyser**

---

## 1. Perceivable

### 1.1 Text Alternatives (Level A)

#### 1.1.1 Non-text Content

- [ ] All images have appropriate `alt` attributes
- [ ] Decorative images use empty `alt=""` or `aria-hidden="true"`
- [ ] Informative images have descriptive alt text
- [ ] Complex images (charts, graphs) have long descriptions or `aria-describedby`
- [ ] Icons used as buttons have `aria-label` or visible text
- [ ] Logo images have descriptive alt text (e.g., "Dale Rogers logo")
- [ ] Background images that convey information have text alternatives

**Check These Files:**

- `src/components/sections/navbar.tsx` - Logo alt text
- `src/components/sections/portfolio-hero.tsx` - Hero images
- `src/components/sections/blog-posts.tsx` - Featured post images
- `src/components/sections/portfolio-trust-strip.tsx` - Client logos
- All Astro components with images

**Common Issues:**

- Missing alt text
- Generic alt text ("image", "photo")
- Alt text that starts with "Image of..." (redundant)
- Decorative images without empty alt

---

### 1.2 Time-based Media (Level A)

#### 1.2.1 Audio-only and Video-only (Prerecorded)

- [ ] If audio-only content exists, provide transcripts
- [ ] If video-only content exists, provide audio description or text alternative

#### 1.2.2 Captions (Prerecorded)

- [ ] All prerecorded video content has captions
- [ ] Captions are synchronised with audio
- [ ] Captions identify speakers when relevant

#### 1.2.3 Audio Description or Media Alternative

- [ ] Video content has audio descriptions or text alternative

**Note:** Check if any video/audio content exists in the portfolio.

---

### 1.3 Adaptable (Level A)

#### 1.3.1 Info and Relationships

- [ ] Headings are used in proper hierarchy (h1 → h2 → h3)
- [ ] Lists use proper `<ul>`, `<ol>`, or `<dl>` elements
- [ ] Form fields are properly associated with labels
- [ ] Form fields have `aria-describedby` for error messages
- [ ] Related form fields are grouped with `<fieldset>` and `<legend>`
- [ ] Tables use proper `<th>` and `<td>` elements with scope attributes
- [ ] Navigation landmarks use semantic HTML (`<nav>`, `<main>`, `<header>`, `<footer>`)

**Check These Files:**

- All page layouts in `src/layouts/`
- Form components in `src/components/sections/portfolio-contact.tsx`
- Navigation in `src/components/sections/navbar.tsx`
- Content sections for heading hierarchy

**Common Issues:**

- Skipped heading levels (h1 → h3)
- Multiple h1 elements on a page
- Form inputs without associated labels
- Missing form error associations

---

#### 1.3.2 Meaningful Sequence

- [ ] Content order makes sense when CSS is disabled
- [ ] Tab order follows visual order
- [ ] Content is not dependent on layout for meaning

---

#### 1.3.3 Sensory Characteristics (Level A)

- [ ] Instructions don't rely solely on shape, size, or location
- [ ] Instructions don't rely solely on sound
- [ ] Error messages don't rely solely on colour

**Example Issues:**

- "Click the red button" (relies on colour)
- "The button on the right" (relies on location)
- "Listen for the beep" (relies on sound)

---

### 1.4 Distinguishable (Level A)

#### 1.4.1 Use of Colour (Level A)

- [ ] Information is not conveyed by colour alone
- [ ] Links are distinguishable from regular text (underline or other indicator)
- [ ] Form errors are indicated by more than just colour
- [ ] Required fields are indicated by more than just colour

**Check:**

- Link styles in `src/styles/` or Tailwind config
- Form validation in contact forms
- Error states in UI components

---

#### 1.4.2 Audio Control (Level A)

- [ ] If audio plays automatically, users can pause/stop it
- [ ] Audio doesn't play for more than 3 seconds without user control

---

#### 1.4.3 Contrast (Minimum) (Level AA)

- [ ] Text has contrast ratio of at least 4.5:1 for normal text
- [ ] Large text (18pt+ or 14pt+ bold) has contrast ratio of at least 3:1
- [ ] UI components and graphical objects have contrast ratio of at least 3:1
- [ ] Focus indicators are visible (contrast ratio 3:1)

**Tools:**

- WebAIM Contrast Checker
- Colour Contrast Analyser (CCA)
- Chrome DevTools contrast checker

**Check:**

- All text colours in Tailwind config
- Button text and backgrounds
- Link colours
- Form input borders and text
- Focus ring colours

**Common Issues:**

- Light grey text on white background
- Primary colour text on light backgrounds
- Muted text that's too light
- Focus indicators that blend with background

---

#### 1.4.4 Resize Text (Level AA)

- [ ] Text can be resized up to 200% without loss of content or functionality
- [ ] No horizontal scrolling required at 200% zoom
- [ ] Text doesn't get cut off or overlap at larger sizes
- [ ] Responsive design works at all zoom levels

**Test:**

- Browser zoom to 200%
- Check all pages and components
- Test on mobile devices

---

#### 1.4.5 Images of Text (Level AA)

- [ ] Avoid using images of text where possible
- [ ] If images of text are used, they can be customised (CSS)
- [ ] Essential images of text have proper alt text

**Note:** Prefer actual text over images of text.

---

#### 1.4.10 Reflow (Level AA)

- [ ] Content reflows without requiring horizontal scrolling at 320px width
- [ ] No loss of content or functionality at narrow widths
- [ ] Text doesn't require horizontal scrolling

**Test:**

- Viewport width of 320px
- All pages and components
- Mobile device testing

---

#### 1.4.11 Non-text Contrast (Level AA)

- [ ] UI components have contrast ratio of at least 3:1
- [ ] Graphical objects (icons, charts) have contrast ratio of at least 3:1
- [ ] Focus indicators are clearly visible

**Check:**

- Button borders and backgrounds
- Icon colours
- Form input borders
- Focus rings
- Badge colours

---

#### 1.4.12 Text Spacing (Level AA)

- [ ] Users can adjust text spacing without loss of content
- [ ] Test with these CSS overrides:
  ```css
  * {
    line-height: 1.5 !important;
    letter-spacing: 0.12em !important;
    word-spacing: 0.16em !important;
    margin-bottom: 2em !important;
  }
  ```

**Test:**

- Apply text spacing bookmarklet or browser extension
- Verify content remains readable and functional

---

#### 1.4.13 Content on Hover or Focus (Level AA)

- [ ] Hover/focus content can be dismissed (move pointer away or press Escape)
- [ ] Hover/focus content doesn't obscure other content
- [ ] Hover/focus content remains visible until dismissed or trigger loses focus
- [ ] Tooltips and popovers are accessible

**Check:**

- Navigation dropdowns in `navbar.tsx`
- Search modal in `search-modal.tsx`
- Any tooltips or popovers
- Hover states on cards and buttons

---

## 2. Operable

### 2.1 Keyboard Accessible (Level A)

#### 2.1.1 Keyboard

- [ ] All functionality is available via keyboard
- [ ] No keyboard traps (users can navigate away from all components)
- [ ] Custom interactive elements are keyboard accessible
- [ ] Drag-and-drop (if any) has keyboard alternatives

**Test:**

- Tab through entire page
- Use Enter/Space to activate buttons
- Use Arrow keys for navigation menus
- Ensure no keyboard traps

**Check:**

- Navigation menu (`navbar.tsx`)
- Search modal (`search-modal.tsx`)
- Carousels (`carousel.tsx`)
- All buttons and links
- Form elements

---

#### 2.1.2 No Keyboard Trap (Level A)

- [ ] Users can navigate away from all components using keyboard
- [ ] Modal dialogs trap focus correctly but allow escape
- [ ] Custom components don't trap keyboard focus

**Test:**

- Tab through modals
- Ensure Escape closes modals
- Verify focus returns to trigger after closing

**Check:**

- Search modal
- Any dialog components
- Navigation dropdowns

---

#### 2.1.4 Character Key Shortcuts (Level A)

- [ ] If single-key shortcuts exist, they can be turned off, remapped, or only active when component has focus
- [ ] Document keyboard shortcuts

**Check:**

- Search modal (Cmd/Ctrl+K) - verify it's documented
- Any other keyboard shortcuts

---

### 2.2 Enough Time (Level A)

#### 2.2.1 Timing Adjustable

- [ ] No time limits on content (or user can adjust/extend)
- [ ] Auto-updating content can be paused, stopped, or hidden

**Check:**

- Carousels (should auto-advance but allow pause)
- Any auto-refreshing content
- Session timeouts (if any)

---

#### 2.2.2 Pause, Stop, Hide

- [ ] Moving, blinking, or scrolling content can be paused, stopped, or hidden
- [ ] Auto-updating content (carousels, tickers) has controls

**Check:**

- Carousel components
- Any animated content
- Marquee or ticker components

---

### 2.3 Seizures and Physical Reactions (Level AAA)

#### 2.3.1 Three Flashes or Below Threshold

- [ ] No content flashes more than 3 times per second
- [ ] Animations respect `prefers-reduced-motion`

**Check:**

- CSS animations
- Transition effects
- Respect `@media (prefers-reduced-motion: reduce)`

---

### 2.4 Navigable (Level A)

#### 2.4.1 Bypass Blocks (Level A)

- [ ] Skip links to main content
- [ ] Landmarks are properly used (`<main>`, `<nav>`, etc.)
- [ ] ARIA landmarks where semantic HTML isn't sufficient

**Check:**

- Skip link implementation
- Main content landmark
- Navigation landmarks

---

#### 2.4.2 Page Titled (Level A)

- [ ] Each page has a descriptive, unique `<title>`
- [ ] Title describes page content and purpose
- [ ] Title changes for dynamic content updates

**Check:**

- `BaseHead.astro` or layout files
- All page titles
- Dynamic title updates

---

#### 2.4.3 Focus Order (Level A)

- [ ] Tab order follows logical sequence
- [ ] Focus order matches visual order
- [ ] Custom components maintain logical focus order

**Test:**

- Tab through entire page
- Verify focus order makes sense
- Check modals and dropdowns

---

#### 2.4.4 Link Purpose (In Context) (Level A)

- [ ] Link purpose is clear from link text alone or context
- [ ] Avoid generic link text like "click here", "read more"
- [ ] Links with same text go to same destination
- [ ] Icon-only links have `aria-label`

**Check:**

- All links in components
- "Read more" or "Learn more" links
- Icon buttons
- Navigation links

**Common Issues:**

- "Click here" links
- "Read more" without context
- Icon-only buttons without labels

---

#### 2.4.5 Multiple Ways (Level AA)

- [ ] Multiple ways to find pages (navigation, search, sitemap)
- [ ] Search functionality is available
- [ ] Site map or table of contents

**Check:**

- Navigation menu
- Search functionality
- Sitemap (if exists)
- Breadcrumbs (if used)

---

#### 2.4.6 Headings and Labels (Level AA)

- [ ] Headings describe topic or purpose
- [ ] Form labels describe purpose
- [ ] Labels are programmatically associated with inputs

**Check:**

- Heading hierarchy and clarity
- Form labels in contact forms
- Input-label associations

---

#### 2.4.7 Focus Visible (Level AA)

- [ ] Keyboard focus indicator is visible
- [ ] Focus indicator has sufficient contrast (3:1)
- [ ] Focus indicator is at least 2px thick
- [ ] Custom focus styles are implemented

**Check:**

- Focus ring styles in Tailwind config
- Button focus states
- Link focus states
- Form input focus states

**Common Issues:**

- `outline: none` without replacement
- Low contrast focus indicators
- Thin focus rings

---

### 2.5 Input Modalities (Level A)

#### 2.5.1 Pointer Gestures

- [ ] Multi-point or path-based gestures have single-point alternatives
- [ ] Functionality doesn't require path-based gestures

---

#### 2.5.2 Pointer Cancellation

- [ ] Clickable areas are at least 44x44 CSS pixels
- [ ] No accidental activation (down-event activation)
- [ ] Users can abort pointer operations

**Check:**

- Button sizes
- Touch target sizes
- Mobile navigation
- Icon button sizes

---

#### 2.5.3 Label in Name (Level A)

- [ ] Accessible name contains visible text
- [ ] Icon buttons have matching visible and accessible names

**Check:**

- Icon-only buttons
- Buttons with icons and text
- `aria-label` matches visible text

---

#### 2.5.4 Motion Actuation (Level A)

- [ ] Functionality triggered by device motion can be disabled
- [ ] Alternative input method available

---

## 3. Understandable

### 3.1 Readable (Level A)

#### 3.1.1 Language of Page (Level A)

- [ ] Page language is declared (`<html lang="en">`)
- [ ] Language changes are marked (`lang` attribute on elements)

**Check:**

- Root HTML element
- Layout files
- Any foreign language content

---

#### 3.1.2 Language of Parts (Level AA)

- [ ] Language changes within page are marked
- [ ] Foreign phrases have `lang` attribute

---

### 3.2 Predictable (Level A)

#### 3.2.1 On Focus (Level A)

- [ ] Changing focus doesn't trigger unexpected context changes
- [ ] No automatic form submissions on focus
- [ ] No automatic navigation on focus

**Check:**

- Form inputs
- Navigation menus
- Modal triggers

---

#### 3.2.2 On Input (Level A)

- [ ] Changing input settings doesn't cause unexpected context changes
- [ ] Form submissions require explicit user action
- [ ] No automatic page refreshes on input change

**Check:**

- Contact forms
- Search inputs
- Filter components

---

#### 3.2.3 Consistent Navigation (Level AA)

- [ ] Navigation is consistent across pages
- [ ] Navigation order is consistent
- [ ] Navigation items appear in same relative order

**Check:**

- Navigation menu consistency
- Footer links consistency
- Breadcrumb patterns

---

#### 3.2.4 Consistent Identification (Level AA)

- [ ] Components with same functionality are identified consistently
- [ ] Icons with same function look the same
- [ ] Labels are consistent

**Check:**

- Button styles
- Icon usage
- Link styles
- Form labels

---

### 3.3 Input Assistance (Level A)

#### 3.3.1 Error Identification (Level A)

- [ ] Errors are identified and described to user
- [ ] Error messages are programmatically associated with fields
- [ ] Error messages are visible and clear

**Check:**

- Contact form validation
- Form error messages
- `aria-invalid` and `aria-describedby` usage

**Files to Check:**

- `src/components/sections/portfolio-contact.tsx`
- Form components in `src/components/ui/`

---

#### 3.3.2 Labels or Instructions (Level A)

- [ ] Form fields have labels or instructions
- [ ] Required fields are indicated
- [ ] Format requirements are explained
- [ ] Labels are programmatically associated

**Check:**

- All form inputs
- Label associations
- Required field indicators
- Input format hints

---

#### 3.3.3 Error Suggestion (Level AA)

- [ ] Error messages suggest corrections when possible
- [ ] Suggestions are helpful and accurate

**Check:**

- Form validation messages
- Error handling

---

#### 3.3.4 Error Prevention (Legal, Financial, Data) (Level AA)

- [ ] Forms that cause legal/financial commitments have confirmation
- [ ] User can review, correct, and confirm before submission
- [ ] Submissions can be reversed or corrected

**Check:**

- Contact form submission
- Any payment or commitment forms

---

## 4. Robust

### 4.1 Compatible (Level A)

#### 4.1.1 Parsing (Level A)

- [ ] HTML is valid (no duplicate IDs)
- [ ] Elements have complete start and end tags
- [ ] Elements are nested properly
- [ ] No duplicate attributes

**Tools:**

- W3C HTML Validator
- Browser DevTools

---

#### 4.1.2 Name, Role, Value (Level A)

- [ ] All UI components have accessible names
- [ ] Roles are correctly implemented
- [ ] States and properties are communicated
- [ ] Custom components expose proper ARIA attributes

**Check:**

- Custom button components
- Navigation menus
- Modal dialogs
- Form components
- Carousels

**Common Issues:**

- Missing `aria-label` on icon buttons
- Incorrect `role` attributes
- Missing `aria-expanded` on collapsible content
- Missing `aria-current` on active navigation items

---

#### 4.1.3 Status Messages (Level AA)

- [ ] Status messages are programmatically determined
- [ ] Status messages use appropriate ARIA live regions
- [ ] Screen readers announce status changes

**Check:**

- Form submission messages
- Search results updates
- Dynamic content updates
- Error messages

**ARIA Live Regions:**

- `aria-live="polite"` for non-urgent updates
- `aria-live="assertive"` for urgent updates
- `role="status"` or `role="alert"`

---

## Component-Specific Checks

### Navigation Menu (`navbar.tsx`)

- [ ] Mobile menu is keyboard accessible
- [ ] Dropdown menus have `aria-expanded`
- [ ] Menu items have proper roles
- [ ] Focus management when opening/closing menus
- [ ] Escape key closes menus
- [ ] Focus returns to trigger after closing

### Search Modal (`search-modal.tsx`)

- [ ] Modal traps focus correctly
- [ ] Focus moves to input when opened
- [ ] Escape key closes modal
- [ ] Focus returns to trigger after closing
- [ ] Search results are announced
- [ ] Clear button has proper label

### Carousel (`carousel.tsx`)

- [ ] Previous/next buttons are keyboard accessible
- [ ] Indicators are keyboard accessible
- [ ] Auto-play can be paused
- [ ] Current slide is indicated
- [ ] `aria-live="polite"` for slide changes
- [ ] Proper `role="region"` and `aria-roledescription`

### Forms

- [ ] All inputs have labels
- [ ] Required fields are indicated
- [ ] Error messages are associated with fields
- [ ] Error messages are announced
- [ ] Form submission is keyboard accessible
- [ ] Success messages are announced

### Cards and Links

- [ ] Card links are keyboard accessible
- [ ] Focus indicators are visible
- [ ] Link text is descriptive
- [ ] Images in cards have alt text

### Buttons

- [ ] All buttons have accessible names
- [ ] Icon-only buttons have `aria-label`
- [ ] Button states are communicated
- [ ] Disabled buttons are properly indicated

---

## Testing Checklist

### Automated Testing

- [ ] Run axe DevTools on all pages
- [ ] Run WAVE on all pages
- [ ] Run Lighthouse accessibility audit
- [ ] Fix all critical and serious issues
- [ ] Document moderate and minor issues

### Keyboard Testing

- [ ] Tab through entire site
- [ ] Test all interactive elements
- [ ] Verify no keyboard traps
- [ ] Test Escape key functionality
- [ ] Test Arrow key navigation
- [ ] Test Enter/Space activation

### Screen Reader Testing

- [ ] Test with NVDA (Windows) or VoiceOver (macOS)
- [ ] Verify all content is announced
- [ ] Check form labels and errors
- [ ] Verify navigation landmarks
- [ ] Test dynamic content updates
- [ ] Verify button and link purposes

### Visual Testing

- [ ] Test at 200% zoom
- [ ] Test at 320px width
- [ ] Verify colour contrast
- [ ] Test focus indicators
- [ ] Verify text spacing
- [ ] Test with high contrast mode

### Browser Testing

- [ ] Test in Chrome
- [ ] Test in Firefox
- [ ] Test in Safari
- [ ] Test in Edge
- [ ] Verify cross-browser consistency

---

## Common Issues and Fixes

### Missing Alt Text

**Issue:** Image without alt attribute
**Fix:** Add descriptive `alt` text or `alt=""` for decorative images

### Low Contrast

**Issue:** Text doesn't meet 4.5:1 contrast ratio
**Fix:** Adjust text or background colours in Tailwind config

### Missing Focus Indicators

**Issue:** `outline: none` without replacement
**Fix:** Add visible focus ring styles

### Missing Labels

**Issue:** Form input without associated label
**Fix:** Add `<label>` element or `aria-label`

### Keyboard Traps

**Issue:** User can't navigate away from component
**Fix:** Ensure Escape key closes modals, proper focus management

### Missing ARIA Labels

**Issue:** Icon-only button without label
**Fix:** Add `aria-label` attribute

### Incorrect Heading Hierarchy

**Issue:** Skipped heading levels
**Fix:** Use proper h1 → h2 → h3 sequence

### Generic Link Text

**Issue:** "Click here" or "Read more"
**Fix:** Use descriptive link text or add context

---

## Priority Levels

### Critical (P0) - Fix Immediately

- Missing alt text on informative images
- Keyboard traps
- Missing form labels
- No focus indicators
- Low contrast text (< 4.5:1)

### High (P1) - Fix Soon

- Missing ARIA labels on icon buttons
- Incorrect heading hierarchy
- Generic link text
- Missing error associations
- Status messages not announced

### Medium (P2) - Fix When Possible

- Missing skip links
- Inconsistent navigation
- Minor contrast issues
- Missing language attributes

### Low (P3) - Nice to Have

- Enhanced ARIA descriptions
- Additional landmarks
- Extended keyboard shortcuts

---

## Resources

### WCAG Guidelines

- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [WCAG 2.1 Understanding Docs](https://www.w3.org/WAI/WCAG21/Understanding/)

### Testing Tools

- [axe DevTools](https://www.deque.com/axe/devtools/)
- [WAVE](https://wave.webaim.org/)
- [Lighthouse](https://developers.google.com/web/tools/lighthouse)
- [Pa11y](https://pa11y.org/)
- [Accessibility Insights](https://accessibilityinsights.io/)

### Colour Contrast

- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [Colour Contrast Analyser](https://www.tpgi.com/color-contrast-checker/)

### Screen Readers

- [NVDA](https://www.nvaccess.org/) (Windows, free)
- [JAWS](https://www.freedomscientific.com/products/software/jaws/) (Windows, paid)
- [VoiceOver](https://www.apple.com/accessibility/vision/) (macOS/iOS, built-in)

### Documentation

- [MDN Accessibility](https://developer.mozilla.org/en-US/docs/Web/Accessibility)
- [ARIA Authoring Practices](https://www.w3.org/WAI/ARIA/apg/)
- [WebAIM](https://webaim.org/)

---

## Audit Report Template

```markdown
# Accessibility Audit Report

**Date:** [Date]
**Auditor:** [Name]
**Scope:** [Pages/Components tested]

## Summary

- Total Issues Found: [Number]
- Critical: [Number]
- High: [Number]
- Medium: [Number]
- Low: [Number]

## Critical Issues

1. [Issue description]
   - Location: [File/Component]
   - WCAG Criterion: [Number]
   - Fix: [Solution]

## High Priority Issues

[Same format]

## Recommendations

[Overall recommendations]

## Next Steps

[Action items]
```

---

## Maintenance

### Regular Audits

- Run automated tests before each release
- Manual keyboard testing monthly
- Screen reader testing quarterly
- Full audit annually

### When to Audit

- Before major releases
- After adding new components
- When accessibility issues are reported
- After design system updates
- When WCAG guidelines are updated

---

**Last Updated:** [Date]
**WCAG Version:** 2.1 Level AA
**Target Compliance:** 100% Level AA
