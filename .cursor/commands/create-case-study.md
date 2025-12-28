# Create New Case Study

## Template

Create a new markdown file in `/src/content/case-studies/` with the following structure:

```markdown
---
title: "Case Study Title"
description: "Brief description for SEO and preview cards"
keywords: "keyword1, keyword2, keyword3"
ogImage: "/images/case-studies/case-study-og.jpg"
client: "Client Name"
industry: "Industry Name"
duration: "Duration (e.g., '6 months')"
year: "2024"
challenge: "Brief challenge statement"
tags:
  - "tag1"
  - "tag2"
  - "tag3"
featured: false
category: "government" # Options: government, regulatory, education, enterprise, service-design, policy
---

# Case Study Title

**Client:** Client Name  
**Industry:** Industry Name  
**Duration:** Duration  
**Year:** Year  
**Challenge:** Full challenge description

## Challenge

Detailed challenge description...

## Solution

### Strategic Approach

1. **First approach point**
   - Detail
   - Detail

2. **Second approach point**
   - Detail
   - Detail

## Implementation

Implementation details...

## Outcomes

### Impact

- Outcome 1
- Outcome 2
- Outcome 3

### Metrics

- Metric 1: Value
- Metric 2: Value
- Metric 3: Value

## Key Learnings

1. Learning point 1
2. Learning point 2
3. Learning point 3

## Conclusion

Summary conclusion...

---

**Tags:** Tag1, Tag2, Tag3
```

## Steps

1. **Create the markdown file**
   - Use kebab-case for filename (e.g., `new-case-study.md`)
   - Place in `/src/content/case-studies/`

2. **Add frontmatter**
   - Fill in all required fields
   - Match schema exactly
   - Use appropriate category
   - Add relevant tags

3. **Write content**
   - Follow structure above
   - Use clear headings
   - Include metrics where possible
   - Add images as needed

4. **Add images**
   - Place in `/public/images/case-studies/`
   - Use WebP format when possible
   - Optimize images before adding
   - Reference in content: `![Alt text](/images/case-studies/image.webp)`

5. **Test**
   - Run `npm run dev`
   - Navigate to case study page
   - Verify rendering
   - Check links and images
   - Test responsive design

6. **Update portfolio page**
   - Case study will appear automatically if schema is correct
   - Verify filtering works
   - Check featured status if applicable

## Required Fields

- `title` - Case study title
- `description` - SEO description
- `client` - Client name
- `industry` - Industry sector
- `duration` - Project duration
- `year` - Project year
- `challenge` - Brief challenge statement
- `tags` - Array of relevant tags
- `category` - One of: government, regulatory, education, enterprise, service-design, policy

## Optional Fields

- `featured` - Boolean, set to true for hero projects
- `keywords` - SEO keywords
- `ogImage` - Open Graph image path

## Content Guidelines

- Use Australian English spelling
- Write in clear, professional language
- Include specific metrics and outcomes
- Use proper heading hierarchy
- Add images to support content
- Keep paragraphs concise
- Use bullet points for lists

