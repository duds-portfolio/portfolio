# SEO Audit Checklist

This document provides a comprehensive checklist for auditing the portfolio website's search engine optimisation (SEO). Use this checklist systematically to ensure optimal visibility and ranking in search engines.

## How to Use This Audit

1. **Automated Testing**: Run automated SEO tools first (Google Search Console, Lighthouse, SEMrush, Ahrefs)
2. **Manual Review**: Go through each section manually
3. **Technical Testing**: Verify technical SEO elements
4. **Content Analysis**: Review on-page SEO factors
5. **Document Findings**: Note any issues found and their severity

## Testing Tools

### Automated Tools

- **Google Search Console** - Monitor search performance and indexing
- **Google Lighthouse** - SEO score and Core Web Vitals
- **Google PageSpeed Insights** - Performance and SEO metrics
- **SEMrush Site Audit** - Comprehensive SEO analysis
- **Ahrefs Site Audit** - Technical SEO issues
- **Screaming Frog** - Crawl and analyse site structure
- **Google Rich Results Test** - Test structured data
- **Mobile-Friendly Test** - Verify mobile optimisation

### Manual Testing

- **Browser DevTools** - Inspect meta tags and structured data
- **View Page Source** - Verify HTML structure
- **Manual Google searches** - Test actual search results
- **Mobile device testing** - Verify mobile experience
- **Competitor analysis** - Compare with similar sites

---

## 1. Technical SEO

### 1.1 Site Configuration

#### 1.1.1 Site URL and Domain

- [ ] Site URL is correctly configured in `astro.config.mjs`
- [ ] Site uses HTTPS (not HTTP)
- [ ] Preferred domain is set (www vs non-www)
- [ ] All HTTP redirects to HTTPS
- [ ] No duplicate content issues between www and non-www

**Check These Files:**

- `astro.config.mjs` - Site URL configuration
- `.htaccess` or hosting redirects (if applicable)

**Current Status:**

```12:12:astro.config.mjs
  site: "https://example.com",
```

**Issue:** Site URL is set to placeholder "https://example.com" - needs to be updated to actual production URL

**Fix:** Update to actual domain:
```javascript
site: "https://dalerogers.com.au", // Or your actual domain
```

---

#### 1.1.2 Sitemap

- [ ] XML sitemap exists and is accessible
- [ ] Sitemap is submitted to Google Search Console
- [ ] Sitemap includes all important pages
- [ ] Sitemap includes lastmod dates
- [ ] Sitemap includes priority values (optional)
- [ ] Sitemap is referenced in robots.txt
- [ ] Sitemap is linked in BaseHead component
- [ ] Sitemap index exists if multiple sitemaps needed

**Check These Files:**

- `astro.config.mjs` - Sitemap integration
- `src/components/BaseHead.astro` - Sitemap link
- `dist/sitemap-index.xml` - Generated sitemap
- `dist/sitemap-0.xml` - Individual sitemaps

**Current Status:**

```73:73:src/components/BaseHead.astro
<link rel="sitemap" href="/sitemap-index.xml" />
```

**Note:** Sitemap is linked in BaseHead. Verify sitemap is generated correctly in build output.

---

#### 1.1.3 Robots.txt

- [ ] robots.txt file exists in public directory
- [ ] robots.txt allows search engine crawling (if desired)
- [ ] robots.txt references sitemap location
- [ ] robots.txt blocks access to admin/login pages
- [ ] robots.txt blocks access to development/staging URLs
- [ ] robots.txt is accessible at `/robots.txt`

**Check These Files:**

- `public/robots.txt` - Should exist

**Current Status:**

**Issue:** robots.txt file not found in public directory

**Fix:** Create `public/robots.txt`:
```
User-agent: *
Allow: /

Sitemap: https://yourdomain.com/sitemap-index.xml
```

---

#### 1.1.4 Canonical URLs

- [ ] Every page has a canonical URL
- [ ] Canonical URLs use absolute URLs (not relative)
- [ ] Canonical URLs point to preferred version (HTTPS, trailing slash consistency)
- [ ] No self-referencing canonical URLs
- [ ] Canonical URLs match the actual page content

**Check These Files:**

- `src/components/BaseHead.astro` - Canonical URL implementation

**Current Status:**

```82:83:src/components/BaseHead.astro
<!-- Canonical URL -->
<link rel="canonical" href={canonicalURL} />
```

**Note:** Canonical URLs are implemented. Verify they use correct site URL.

---

### 1.2 Page Speed & Performance

#### 1.2.1 Core Web Vitals

- [ ] Largest Contentful Paint (LCP) < 2.5 seconds
- [ ] First Input Delay (FID) < 100 milliseconds
- [ ] Cumulative Layout Shift (CLS) < 0.1
- [ ] First Contentful Paint (FCP) < 1.8 seconds
- [ ] Time to Interactive (TTI) < 3.8 seconds
- [ ] Total Blocking Time (TBT) < 200 milliseconds
- [ ] Speed Index < 3.4 seconds

**Tools:**

- Google PageSpeed Insights
- Lighthouse in Chrome DevTools
- WebPageTest

**Check:**

- All pages, especially homepage
- Mobile and desktop versions
- Network throttling (slow 3G)

---

#### 1.2.2 Image Optimisation

- [ ] Images use WebP format where supported
- [ ] Images have appropriate file sizes (< 200KB for hero images)
- [ ] Images use lazy loading (`loading="lazy"`)
- [ ] Images have proper dimensions (width/height attributes)
- [ ] Responsive images use `srcset` or `picture` element
- [ ] Images are compressed without visible quality loss

**Check:**

- All images in `public/images/`
- Image components in `src/components/`
- Hero images, case study images, blog post images

**Common Issues:**

- Large file sizes (> 500KB)
- Missing width/height attributes
- No lazy loading
- PNG/JPG instead of WebP

---

#### 1.2.3 Code Optimisation

- [ ] JavaScript is minified
- [ ] CSS is minified
- [ ] Unused CSS is removed
- [ ] JavaScript is deferred or async where appropriate
- [ ] Critical CSS is inlined
- [ ] Fonts are optimised (preload, display swap)
- [ ] Third-party scripts are optimised or deferred

**Check:**

- Build output in `dist/`
- `src/styles/global.css`
- Font loading in `BaseHead.astro`

---

### 1.3 Mobile Optimisation

#### 1.3.1 Mobile-Friendly Design

- [ ] Viewport meta tag is set correctly
- [ ] Site is responsive (no horizontal scrolling)
- [ ] Touch targets are at least 44x44px
- [ ] Text is readable without zooming (minimum 16px)
- [ ] Content fits mobile screen width
- [ ] Mobile navigation is accessible
- [ ] Forms are mobile-friendly

**Check:**

```32:32:src/components/BaseHead.astro
<meta name="viewport" content="width=device-width,initial-scale=1" />
```

**Tools:**

- Google Mobile-Friendly Test
- Chrome DevTools device emulation
- Physical mobile device testing

---

#### 1.3.2 AMP (Optional)

- [ ] AMP pages created if needed
- [ ] AMP pages validate correctly
- [ ] AMP pages are indexed

**Note:** AMP is optional and may not be necessary for all sites.

---

### 1.4 Security & HTTPS

- [ ] Site uses HTTPS exclusively
- [ ] SSL certificate is valid
- [ ] No mixed content (HTTP resources on HTTPS pages)
- [ ] Security headers are configured (HSTS, CSP, etc.)
- [ ] No security warnings in browser

---

## 2. On-Page SEO

### 2.1 Title Tags

#### 2.1.1 Title Tag Requirements

- [ ] Every page has a unique title tag
- [ ] Title tags are 50-60 characters long
- [ ] Title tags include primary keyword
- [ ] Title tags are descriptive and compelling
- [ ] Title tags don't use keyword stuffing
- [ ] Brand name is included (usually at end)
- [ ] Title tags match page content

**Check These Files:**

- `src/components/BaseHead.astro` - Title implementation
- `src/layouts/DefaultLayout.astro` - Title prop
- All page files in `src/pages/`

**Current Status:**

```17:17:src/components/BaseHead.astro
const finalTitle = title || SITE_METADATA.title.default;
```

**Example from homepage:**

```18:18:src/pages/index.astro
  title="Dale Rogers | Service Design"
```

**Issues to Check:**

- Verify all pages have unique titles
- Check title length (should be 50-60 characters)
- Ensure titles are descriptive and keyword-rich

---

### 2.2 Meta Descriptions

#### 2.2.1 Meta Description Requirements

- [ ] Every page has a unique meta description
- [ ] Meta descriptions are 150-160 characters long
- [ ] Meta descriptions include primary keyword
- [ ] Meta descriptions are compelling and action-oriented
- [ ] Meta descriptions accurately describe page content
- [ ] Meta descriptions don't use keyword stuffing
- [ ] Meta descriptions encourage clicks

**Check These Files:**

- `src/components/BaseHead.astro` - Meta description implementation
- All page files - Description props

**Current Status:**

```17:18:src/components/BaseHead.astro
const finalDescription = description || SITE_METADATA.description;
```

**Example from homepage:**

```19:19:src/pages/index.astro
  description="Service design for government and complex organisations. Translating strategy into executable service models—policy, regulation, and frameworks for consistent delivery. Canberra-based service designer with 15 years experience."
```

**Good:** Homepage description is descriptive and keyword-rich (157 characters)

**Issues to Check:**

- Verify all pages have unique descriptions
- Check description length (150-160 characters)
- Ensure descriptions are compelling

---

### 2.3 Heading Tags (H1-H6)

#### 2.3.1 Heading Structure

- [ ] Each page has exactly one H1 tag
- [ ] H1 tag includes primary keyword
- [ ] Heading hierarchy is logical (H1 → H2 → H3)
- [ ] Headings are used for structure, not styling
- [ ] Headings accurately describe content sections
- [ ] No skipped heading levels (H1 → H3)
- [ ] Headings are descriptive and keyword-rich

**Check:**

- All page templates
- Component files with headings
- Blog posts and case studies
- Article layouts

**Common Issues:**

- Multiple H1 tags on a page
- Skipped heading levels
- Headings used for styling only
- Generic headings ("Section 1", "Content")

---

### 2.4 URL Structure

#### 2.4.1 URL Best Practices

- [ ] URLs are descriptive and readable
- [ ] URLs include relevant keywords
- [ ] URLs use hyphens to separate words
- [ ] URLs are short and concise
- [ ] URLs use lowercase letters
- [ ] URLs don't include unnecessary parameters
- [ ] URLs reflect site hierarchy
- [ ] Trailing slash usage is consistent

**Check:**

- All page routes in `src/pages/`
- Case study URLs
- Blog post URLs
- Category/tag URLs

**Example Good URLs:**

- `/case-studies/university-canberra-digital-transformation`
- `/articles/service-design-fundamentals`
- `/about`

**Example Bad URLs:**

- `/page?id=123`
- `/Case-Studies/University`
- `/articles/2024/01/15/post`

---

### 2.5 Internal Linking

#### 2.5.1 Internal Link Strategy

- [ ] Important pages have internal links pointing to them
- [ ] Internal links use descriptive anchor text
- [ ] Internal links are contextually relevant
- [ ] Navigation menu links to key pages
- [ ] Footer contains important links
- [ ] Related content is linked
- [ ] No orphaned pages (pages with no internal links)
- [ ] Breadcrumb navigation is implemented (if applicable)

**Check:**

- Navigation components
- Footer components
- Content pages (case studies, blog posts)
- Related content sections

---

### 2.6 Image SEO

#### 2.6.1 Image Optimisation for SEO

- [ ] All images have descriptive alt text
- [ ] Alt text includes relevant keywords (naturally)
- [ ] Alt text accurately describes image content
- [ ] Decorative images use empty alt (`alt=""`)
- [ ] Images have descriptive filenames
- [ ] Image file names use hyphens (kebab-case)
- [ ] Images are optimised for file size

**Check:**

- All image components
- Case study images
- Blog post images
- Hero images
- Client logo images

**Example Good Alt Text:**

- `alt="University of Canberra student using online learning platform"`
- `alt="Service design process diagram showing user journey mapping"`

**Example Bad Alt Text:**

- `alt="image"`
- `alt="photo"`
- `alt="Image of a website"` (redundant)

---

## 3. Meta Tags & Open Graph

### 3.1 Open Graph Tags

#### 3.1.1 Open Graph Requirements

- [ ] og:title is set for all pages
- [ ] og:description is set for all pages
- [ ] og:image is set with proper dimensions (1200x630px)
- [ ] og:url is set with canonical URL
- [ ] og:type is set (website, article, etc.)
- [ ] og:site_name is set
- [ ] og:image:alt is set for accessibility

**Check These Files:**

```90:99:src/components/BaseHead.astro
<!-- Open Graph / Facebook -->
<meta property="og:type" content="website" />
<meta property="og:url" content={Astro.url} />
<meta property="og:site_name" content={SITE_METADATA.openGraph.siteName} />
<meta property="og:title" content={finalTitle} />
<meta property="og:description" content={finalDescription} />
<meta property="og:image" content={imageURL} />
<meta property="og:image:width" content={SITE_METADATA.openGraph.images[0].width.toString()} />
<meta property="og:image:height" content={SITE_METADATA.openGraph.images[0].height.toString()} />
<meta property="og:image:alt" content={SITE_METADATA.openGraph.images[0].alt} />
```

**Issues to Check:**

- Verify og:image exists and is accessible
- Check og:image dimensions (should be 1200x630px)
- Ensure og:image:alt is descriptive
- Verify og:url uses absolute URLs

---

### 3.2 Twitter Card Tags

#### 3.2.1 Twitter Card Requirements

- [ ] twitter:card is set (summary_large_image or summary)
- [ ] twitter:title is set
- [ ] twitter:description is set
- [ ] twitter:image is set
- [ ] twitter:creator is set (if applicable)
- [ ] twitter:site is set (if applicable)

**Check These Files:**

```101:107:src/components/BaseHead.astro
<!-- Twitter -->
<meta property="twitter:card" content={SITE_METADATA.twitter.card} />
<meta property="twitter:url" content={Astro.url} />
<meta property="twitter:title" content={finalTitle} />
<meta property="twitter:description" content={finalDescription} />
<meta property="twitter:image" content={imageURL} />
<meta property="twitter:creator" content={SITE_METADATA.twitter.creator} />
```

**Note:** Using `property` instead of `name` for Twitter tags. Consider using `name` attribute as well for better compatibility.

---

### 3.3 Other Meta Tags

#### 3.3.1 Additional Meta Tags

- [ ] robots meta tag is set appropriately
- [ ] author meta tag is set
- [ ] keywords meta tag exists (less important now)
- [ ] language/geo tags if applicable
- [ ] generator meta tag (optional)

**Check:**

```33:37:src/components/BaseHead.astro
<meta name="robots" content={`${SITE_METADATA.robots.index ? 'index' : 'noindex'}, ${SITE_METADATA.robots.follow ? 'follow' : 'nofollow'}`} />
<meta name="keywords" content={SITE_METADATA.keywords.join(', ')} />
<meta name="author" content={SITE_METADATA.authors[0].name} />
<meta name="creator" content={SITE_METADATA.creator} />
<meta name="publisher" content={SITE_METADATA.publisher} />
```

**Note:** Keywords meta tag has minimal SEO value but doesn't hurt. Ensure robots tag is set correctly for production vs staging.

---

## 4. Structured Data (Schema.org)

### 4.1 Schema Markup

#### 4.1.1 Structured Data Implementation

- [ ] Organisation schema is implemented (homepage)
- [ ] Person schema is implemented (about page)
- [ ] Article schema is implemented (blog posts)
- [ ] BreadcrumbList schema is implemented (if breadcrumbs exist)
- [ ] WebSite schema with SearchAction (if search exists)
- [ ] Service schema is implemented (services page)
- [ ] Review/Rating schema (if testimonials exist)
- [ ] Structured data validates in Google Rich Results Test

**Check:**

- `src/components/BaseHead.astro` - No structured data found
- Page templates and layouts
- Individual content pages

**Current Status:**

**Issue:** No structured data (JSON-LD or microdata) found in the codebase

**Fix:** Implement structured data using JSON-LD in BaseHead or page templates. Example:

```astro
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Dale Rogers",
  "jobTitle": "Service Designer",
  "url": "https://yourdomain.com",
  "sameAs": [
    "https://linkedin.com/in/dalerogers",
    "https://twitter.com/dalerogers"
  ]
}
</script>
```

**Schema Types to Consider:**

- **Person** - For about page
- **Organization** - For homepage
- **Article** - For blog posts
- **Service** - For services pages
- **BreadcrumbList** - For navigation
- **WebSite** - For site-wide search

---

## 5. Content SEO

### 5.1 Content Quality

#### 5.1.1 Content Requirements

- [ ] Content is original and unique
- [ ] Content provides value to users
- [ ] Content is well-written and error-free
- [ ] Content is comprehensive and in-depth
- [ ] Content is regularly updated
- [ ] Content answers user queries
- [ ] Content uses natural language
- [ ] Content includes relevant keywords naturally

**Check:**

- All blog posts
- Case studies
- Service pages
- About page

---

### 5.2 Keyword Optimisation

#### 5.2.1 Keyword Strategy

- [ ] Primary keywords are identified
- [ ] Primary keywords are in title tag
- [ ] Primary keywords are in H1 tag
- [ ] Primary keywords are in meta description
- [ ] Primary keywords are in URL (if appropriate)
- [ ] Primary keywords are in first paragraph
- [ ] Keywords are used naturally (no stuffing)
- [ ] Related keywords and synonyms are used
- [ ] Long-tail keywords are targeted

**Primary Keywords to Consider:**

- Service design
- Service designer
- Canberra service designer
- Digital transformation
- User experience design
- Government service design

---

### 5.3 Content Length

- [ ] Homepage has sufficient content (> 300 words)
- [ ] Service pages have detailed content (> 500 words)
- [ ] Blog posts are comprehensive (> 1000 words for long-form)
- [ ] Case studies have detailed descriptions
- [ ] About page has sufficient content

**Note:** Quality over quantity, but longer content often ranks better if it's valuable.

---

## 6. Local SEO (If Applicable)

### 6.1 Local Business Information

- [ ] Business name, address, phone (NAP) is consistent
- [ ] Local schema markup is implemented
- [ ] Google Business Profile is set up (if applicable)
- [ ] Location information is on contact page
- [ ] Local keywords are included
- [ ] Location pages exist (if multiple locations)

**For Canberra-based business:**

- Include "Canberra" in relevant content
- Mention "Australia" or "ACT" where appropriate
- Include location in meta descriptions for local pages

---

## 7. Analytics & Monitoring

### 7.1 Analytics Setup

- [ ] Google Analytics is installed (if desired)
- [ ] Google Search Console is set up
- [ ] Site is verified in Search Console
- [ ] Sitemap is submitted to Search Console
- [ ] Performance monitoring is in place
- [ ] Error tracking is configured

**Check:**

- Analytics scripts in BaseHead or layout
- Search Console verification meta tag or file

**Current Status:**

**Issue:** No analytics tracking found. Consider implementing Google Analytics 4 or privacy-friendly alternative.

---

## 8. RSS Feed

### 8.1 RSS Feed Setup

- [ ] RSS feed exists and is accessible
- [ ] RSS feed is linked in BaseHead
- [ ] RSS feed includes all blog posts/articles
- [ ] RSS feed has proper metadata
- [ ] RSS feed validates correctly

**Check:**

```73:79:src/components/BaseHead.astro
<link rel="sitemap" href="/sitemap-index.xml" />
<link
	rel="alternate"
	type="application/rss+xml"
	title={SITE_TITLE}
	href={new URL('rss.xml', Astro.site)}
/>
```

**Current Status:**

RSS feed is linked. Verify it exists in build output (`dist/rss.xml`).

---

## Testing Checklist

### Automated Testing

- [ ] Run Google Lighthouse SEO audit (score > 90)
- [ ] Run Google PageSpeed Insights
- [ ] Run Screaming Frog crawl
- [ ] Test with Google Mobile-Friendly Test
- [ ] Validate structured data with Rich Results Test
- [ ] Check sitemap with XML sitemap validator
- [ ] Verify robots.txt with robots.txt tester

### Manual Testing

- [ ] View page source on all key pages
- [ ] Test sharing on Facebook (Open Graph)
- [ ] Test sharing on Twitter (Twitter Cards)
- [ ] Test sharing on LinkedIn
- [ ] Verify canonical URLs are correct
- [ ] Check title tags in search results (Google Search Console)
- [ ] Test mobile experience on real devices
- [ ] Verify all internal links work
- [ ] Check for broken external links

### Content Review

- [ ] Review all title tags for uniqueness and length
- [ ] Review all meta descriptions for uniqueness and length
- [ ] Review heading hierarchy on all pages
- [ ] Review URL structure
- [ ] Review image alt text
- [ ] Review keyword usage (natural, not stuffed)
- [ ] Review content quality and value

---

## Common Issues and Fixes

### Missing Title Tags

**Issue:** Page missing title tag or using default
**Fix:** Add unique title prop to page layout

### Duplicate Meta Descriptions

**Issue:** Multiple pages share the same meta description
**Fix:** Create unique descriptions for each page

### Missing Alt Text

**Issue:** Images without alt attributes
**Fix:** Add descriptive alt text to all images

### Slow Page Speed

**Issue:** Low Lighthouse performance score
**Fix:** Optimise images, minify code, lazy load images, use CDN

### No Structured Data

**Issue:** Missing schema markup
**Fix:** Implement JSON-LD structured data for key entities

### Broken Internal Links

**Issue:** Internal links return 404
**Fix:** Fix broken links, implement proper redirects

### Missing Sitemap

**Issue:** No XML sitemap or not submitted to Search Console
**Fix:** Generate sitemap, submit to Search Console

### Incorrect Canonical URLs

**Issue:** Canonical URLs point to wrong domain or use relative URLs
**Fix:** Ensure canonical URLs use absolute URLs with correct domain

### Mobile Issues

**Issue:** Site not mobile-friendly
**Fix:** Implement responsive design, test on mobile devices

---

## Priority Levels

### Critical (P0) - Fix Immediately

- Incorrect or missing site URL configuration
- Missing or incorrect robots.txt
- Missing canonical URLs
- No XML sitemap
- Missing title tags on pages
- Duplicate title tags
- Site not mobile-friendly
- Major page speed issues (LCP > 4s)

### High (P1) - Fix Soon

- Missing meta descriptions
- Duplicate meta descriptions
- Missing alt text on images
- No structured data
- Poor URL structure
- Missing Open Graph tags
- No internal linking strategy
- Missing H1 tags

### Medium (P2) - Fix When Possible

- Title tags too long/short
- Meta descriptions too long/short
- Missing Twitter Cards
- No breadcrumb navigation
- Limited keyword optimisation
- Missing author information
- No RSS feed

### Low (P3) - Nice to Have

- Enhanced structured data
- Additional schema types
- Extended keyword research
- Local SEO optimisation
- Enhanced analytics setup

---

## Resources

### SEO Tools

- [Google Search Console](https://search.google.com/search-console)
- [Google PageSpeed Insights](https://pagespeed.web.dev/)
- [Google Lighthouse](https://developers.google.com/web/tools/lighthouse)
- [Google Rich Results Test](https://search.google.com/test/rich-results)
- [Google Mobile-Friendly Test](https://search.google.com/test/mobile-friendly)
- [Screaming Frog SEO Spider](https://www.screamingfrog.co.uk/seo-spider/)
- [SEMrush](https://www.semrush.com/)
- [Ahrefs](https://ahrefs.com/)

### Schema Markup

- [Schema.org](https://schema.org/)
- [Google Structured Data Guidelines](https://developers.google.com/search/docs/appearance/structured-data)
- [Schema Markup Validator](https://validator.schema.org/)

### SEO Guidelines

- [Google SEO Starter Guide](https://developers.google.com/search/docs/beginner/seo-starter-guide)
- [Google Search Central](https://developers.google.com/search)
- [Moz Beginner's Guide to SEO](https://moz.com/beginners-guide-to-seo)

### Analytics

- [Google Analytics](https://analytics.google.com/)
- [Google Search Console](https://search.google.com/search-console)
- [Google Tag Manager](https://tagmanager.google.com/)

---

## Audit Report Template

```markdown
# SEO Audit Report

**Date:** [Date]
**Auditor:** [Name]
**Scope:** [Pages/Components tested]
**Tools Used:** [List of tools]

## Executive Summary

- Overall SEO Score: [Score/100]
- Critical Issues: [Number]
- High Priority Issues: [Number]
- Medium Priority Issues: [Number]
- Low Priority Issues: [Number]

## Critical Issues

1. [Issue description]
   - Location: [File/Page]
   - Impact: [High/Medium/Low]
   - Fix: [Solution]
   - Priority: [P0/P1/P2/P3]

## High Priority Issues

[Same format]

## Technical SEO

### Site Configuration
- Site URL: [Status]
- Sitemap: [Status]
- Robots.txt: [Status]
- Canonical URLs: [Status]

### Performance
- Lighthouse SEO Score: [Score]
- PageSpeed Score: [Score]
- Core Web Vitals: [Status]

## On-Page SEO

### Title Tags
- Unique titles: [X/Y pages]
- Optimal length: [X/Y pages]
- Includes keywords: [X/Y pages]

### Meta Descriptions
- Unique descriptions: [X/Y pages]
- Optimal length: [X/Y pages]
- Compelling: [X/Y pages]

### Headings
- Proper H1 usage: [X/Y pages]
- Logical hierarchy: [X/Y pages]

## Recommendations

[Overall recommendations]

## Next Steps

[Action items with priorities]
```

---

## Maintenance

### Regular Audits

- Run automated SEO audits monthly
- Review Google Search Console weekly
- Monitor keyword rankings monthly
- Full SEO audit quarterly
- Technical SEO check before major releases

### When to Audit

- Before major site launches
- After adding new pages or content
- When search rankings drop
- After site migrations or redesigns
- When Google algorithm updates occur
- Before major marketing campaigns

### Monitoring

- Track organic search traffic
- Monitor keyword rankings
- Watch for crawl errors in Search Console
- Monitor page speed trends
- Track Core Web Vitals
- Monitor backlinks (if applicable)

---

**Last Updated:** [Date]
**SEO Standards:** Google Search Central Guidelines
**Target Score:** 90+ Lighthouse SEO Score

