# Portfolio Development Rules

## Project Overview

This is a professional service design portfolio built with:
- **Astro 5.x** - Static site generator
- **Tailwind CSS 4** - Utility-first CSS framework
- **shadcn/ui** - Component library
- **React 19** - For interactive components
- **TypeScript** - Type safety

## Development Guidelines

### Code Style

1. **TypeScript Best Practices**
   - Use strict type checking
   - Avoid `any` types - use proper interfaces and types
   - Use Astro content collection schemas for type safety
   - Implement type guards where appropriate

2. **React Component Guidelines**
   - Use functional components with hooks
   - Implement proper prop types/interfaces
   - Use proper state management (useState, useReducer)
   - Follow component composition patterns
   - Implement error boundaries where needed

3. **Astro Best Practices**
   - Use `.astro` files for static content
   - Use React components (`.tsx`) for interactive features
   - Leverage Astro's content collections for case studies
   - Use `client:*` directives appropriately for hydration
   - Minimise JavaScript sent to client

4. **Styling Rules**
   - **ALWAYS use Tailwind CSS classes** - never create custom CSS files
   - Use theme's shadcn/ui components for UI elements
   - Follow theme's design patterns and spacing
   - Use Australian English spelling throughout
   - Maintain WCAG 2.1 AA accessibility standards

### Content Structure

1. **Case Studies**
   - Located in `/src/content/case-studies/`
   - Use Astro content collection schema
   - Frontmatter must match schema exactly
   - Markdown content should be well-structured
   - Use semantic HTML in markdown where needed

2. **Pages**
   - Static pages in `/src/pages/`
   - Use theme's layout components
   - Follow theme's page structure patterns
   - Ensure proper SEO metadata

3. **Components**
   - Reusable components in `/src/components/`
   - UI components in `/src/components/ui/`
   - Section components in `/src/components/sections/`
   - Use TypeScript for all components

### File Naming Conventions

- **Astro files**: `kebab-case.astro` (e.g., `case-study.astro`)
- **React components**: `PascalCase.tsx` (e.g., `CaseStudyCard.tsx`)
- **Content files**: `kebab-case.md` (e.g., `antarctic-doctrine-application.md`)
- **Type definitions**: `PascalCase.ts` (e.g., `CaseStudy.ts`)

### Accessibility Requirements

1. **WCAG 2.1 Level AA Compliance**
   - Full keyboard navigation support
   - Screen reader compatible with ARIA labels
   - High contrast colour ratios
   - Semantic HTML structure
   - Reduced motion preferences respected

2. **Implementation**
   - Use semantic HTML5 elements
   - Add proper ARIA labels where needed
   - Ensure focus indicators are visible
   - Test with keyboard navigation
   - Verify screen reader compatibility

### Regional Settings

1. **Language and Localization**
   - Use Australian English spelling
   - Follow Australian date format (DD/MM/YYYY)
   - Use 24-hour time format
   - Use metric units (km, m, kg, etc.)
   - Use Australian currency format ($AUD)

### Git Practices

1. **Commit Messages**
   - Use semantic commit messages
   - Format: `type(scope): description`
   - Types: `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`
   - Example: `feat(case-studies): add filtering functionality`

2. **Branching**
   - Use feature branches for new work
   - Keep commits atomic
   - Submit pull requests for review

### Testing Requirements

1. **Before Committing**
   - Run `npm run build` to verify build succeeds
   - Test responsive design (mobile, tablet, desktop)
   - Verify all links work
   - Check accessibility with keyboard navigation
   - Test form submissions

2. **Before Deployment**
   - Run production build
   - Test preview build
   - Verify all pages generate correctly
   - Check for console errors
   - Validate HTML and accessibility

### Performance Guidelines

1. **Optimization**
   - Optimize images (WebP format preferred)
   - Use lazy loading for images
   - Minimise JavaScript bundle size
   - Use Astro's built-in optimizations

2. **Monitoring**
   - Check bundle sizes
   - Monitor Core Web Vitals
   - Ensure fast page loads

### Content Guidelines

1. **Writing Style**
   - Professional and clear
   - Australian English spelling
   - Accessible language
   - Proper heading hierarchy

2. **Case Studies**
   - Include: Challenge, Approach, Outcomes
   - Use metrics and data where possible
   - Include client and industry information
   - Add relevant tags for filtering

### Component Usage Patterns

1. **Theme Components**
   - Use shadcn/ui components from `/src/components/ui/`
   - Don't modify theme components directly
   - Extend components through composition
   - Follow theme's component patterns

2. **Custom Components**
   - Create in `/src/components/` when needed
   - Use TypeScript interfaces for props
   - Follow theme's styling patterns
   - Document component usage

### Error Handling

1. **Implementation**
   - Use custom error classes where appropriate
   - Implement proper error messages
   - Add error logging for debugging
   - Provide user-friendly error displays
   - Implement error recovery strategies

### Security Requirements

1. **Best Practices**
   - Validate all form inputs
   - Sanitize outputs
   - Use proper authentication (if needed)
   - Follow security best practices
   - Keep dependencies updated

## Development Workflow

1. **Starting Work**
   - Pull latest changes
   - Create feature branch
   - Install dependencies if needed

2. **During Development**
   - Run `npm run dev` for development server
   - Test changes in browser
   - Check console for errors
   - Verify accessibility

3. **Before Committing**
   - Run `npm run build`
   - Test all functionality
   - Check for linting errors
   - Verify responsive design

4. **Committing**
   - Write clear commit message
   - Keep commits atomic
   - Don't commit build artifacts

## Common Tasks

### Adding a New Case Study

1. Create markdown file in `/src/content/case-studies/`
2. Add frontmatter matching schema
3. Write content following structure
4. Add images to `/public/images/case-studies/`
5. Test rendering on case study page

### Modifying Navigation

1. Update navigation component in `/src/components/sections/navbar.tsx`
2. Update active state logic if needed
3. Test mobile menu functionality
4. Verify all links work

### Adding a New Page

1. Create `.astro` file in `/src/pages/`
2. Use appropriate layout component
3. Add to navigation if needed
4. Update sitemap configuration
5. Test page rendering

## Resources

- [Astro Documentation](https://docs.astro.build)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [shadcn/ui Documentation](https://ui.shadcn.com)
- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)

