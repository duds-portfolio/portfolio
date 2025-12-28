# Pre-Deployment Checklist

## Build & Testing

- [ ] Run `npm run build` - verify build succeeds without errors
- [ ] Run `npm run preview` - test production build locally
- [ ] Verify all pages generate correctly
- [ ] Check for console errors in browser
- [ ] Test all interactive features

## Content Review

- [ ] Verify all case studies render correctly
- [ ] Check all internal links work
- [ ] Validate markdown formatting
- [ ] Ensure images load properly
- [ ] Check for broken external links
- [ ] Verify all text uses Australian English spelling

## Functionality Testing

- [ ] Test navigation (desktop and mobile)
- [ ] Test mobile menu toggle
- [ ] Test form submission (contact form)
- [ ] Test portfolio filtering functionality
- [ ] Test case study page navigation
- [ ] Verify smooth scrolling works
- [ ] Test all buttons and CTAs

## Responsive Design

- [ ] Test on mobile devices (320px+)
- [ ] Test on tablet devices (768px+)
- [ ] Test on desktop (1024px+)
- [ ] Test on large screens (1280px+)
- [ ] Verify images scale correctly
- [ ] Check text readability at all sizes
- [ ] Verify navigation works on all sizes

## Accessibility

- [ ] Run accessibility audit (Lighthouse)
- [ ] Test keyboard navigation
- [ ] Verify ARIA labels are present
- [ ] Check colour contrast ratios
- [ ] Test with screen reader
- [ ] Verify focus indicators are visible
- [ ] Check skip navigation link works
- [ ] Ensure all images have alt text

## Performance

- [ ] Check Lighthouse performance score (aim for 90+)
- [ ] Verify images are optimized (WebP format)
- [ ] Check bundle sizes are reasonable
- [ ] Test page load times
- [ ] Verify lazy loading works
- [ ] Check Core Web Vitals

## SEO

- [ ] Verify meta tags on all pages
- [ ] Check Open Graph images
- [ ] Verify canonical URLs
- [ ] Test structured data (if implemented)
- [ ] Check sitemap generates correctly
- [ ] Verify robots.txt is correct

## Configuration

- [ ] Update `astro.config.mjs` with correct site URL
- [ ] Verify sitemap configuration
- [ ] Check RSS feed (if applicable)
- [ ] Update environment variables if needed
- [ ] Verify build output directory

## Security

- [ ] Review form validation
- [ ] Check for sensitive data exposure
- [ ] Verify HTTPS configuration
- [ ] Check CSP headers (if implemented)
- [ ] Review dependencies for vulnerabilities

## Browser Testing

- [ ] Test in Chrome (latest)
- [ ] Test in Firefox (latest)
- [ ] Test in Safari (latest)
- [ ] Test in Edge (latest)
- [ ] Check for browser-specific issues

## Documentation

- [ ] Update README if needed
- [ ] Document any new features
- [ ] Update deployment instructions
- [ ] Note any breaking changes

## Final Checks

- [ ] Review git status - ensure no unwanted files
- [ ] Check `.gitignore` is correct
- [ ] Verify no old CSS files are included
- [ ] Ensure all theme styling is applied
- [ ] Check for TODO comments
- [ ] Remove console.log statements
- [ ] Verify no test/debug code remains

## Deployment Steps

1. **Build for production**
   ```bash
   npm run build
   ```

2. **Test preview build**
   ```bash
   npm run preview
   ```

3. **Review build output**
   - Check `dist/` directory
   - Verify all assets are included
   - Check file sizes

4. **Deploy to hosting platform**
   - Follow platform-specific deployment steps
   - Configure environment variables
   - Set up custom domain (if applicable)

5. **Post-deployment**
   - Test live site
   - Verify all functionality
   - Check analytics tracking
   - Monitor error logs

## Rollback Plan

- [ ] Document rollback procedure
- [ ] Keep previous deployment accessible
- [ ] Test rollback process

## Notes

Add any deployment-specific notes or considerations here:

