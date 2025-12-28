# Brand Style Guide

> **Note:** All layouts use a shared `site-body` class on the `<body>` tag, defined in `global.css`, to set the background and text colour according to the brand palette. This ensures consistent theming and replaces previous inline body styles.

## Colour Palette

| Name              | Hex      | Usage                       |
|-------------------|----------|-----------------------------|
| dale_portfolio-1  | #D9D8D7  | Frosted glass, backgrounds  |
| dale_portfolio-2  | #737272  | Muted text, icons, borders  |
| dale_portfolio-3  | #F2F2F2  | Light backgrounds, overlays |
| dale_portfolio-4  | #262626  | Headings, strong text       |
| dale_portfolio-5  | #0D0D0D  | Deep backgrounds, contrast  |

## Glassmorphism
- Use `.glass` utility for frosted glass backgrounds
- Backdrop blur, semi-transparent backgrounds, subtle border and shadow

## Buttons
- Use `rounded-full px-6 py-2` for all pill-shaped buttons
- **Primary:** `bg-[#262626] text-[#f2f2f2]`
- **Secondary:** `bg-[#d9d8d7] glass border-2 border-[#262626] text-[#262626] shadow-sm`
- **Hero:** `bg-[#262626] text-[#f2f2f2] rainbow-shadow-btn rainbow-sparkle-btn font-semibold text-lg` (includes animated rainbow shadow and sparkles)

## Rainbow Shadow & Sparkle
- `.rainbow-shadow-btn` adds a subtle, pill-shaped rainbow drop shadow below the button
- `.rainbow-sparkle-btn` adds animated, randomly positioned sparkles above the shadow
- Both are encapsulated in the `hero` variant of the Button component

## Typography
- Font: Inter, sans-serif
- Hero: 3rem, Heading: 2rem, Body: 1.125rem

## Example Usage
```astro
<Button href="/contact" label="Start your project" variant="hero" />
```
```html
<button class="btn-pill bg-primary text-background">Primary Button</button>
<button class="btn-pill bg-background text-primary border border-primary">Secondary Button</button>
<div class="glass p-8">Glassmorphism Card</div>
``` 