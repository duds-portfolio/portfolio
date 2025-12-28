import type { Config } from 'tailwindcss';

const config: Config = {
  safelist: ['shadow-rainbow'],
  content: [
    './src/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte,md,mdx}',
    './public/**/*.html',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
      },
      colors: {
        primary: {
          DEFAULT: '#262626', // dale_portfolio-4
        },
        background: {
          DEFAULT: '#F2F2F2', // dale_portfolio-3
        },
        glass: {
          DEFAULT: '#D9D8D7', // dale_portfolio-1
        },
        muted: {
          DEFAULT: '#737272', // dale_portfolio-2
        },
        dark: {
          DEFAULT: '#0D0D0D', // dale_portfolio-5
        },
        neutral: {
          DEFAULT: '#111111',
          50: '#F6F6F6',
          100: '#E5E5E5',
        },
      },
      fontSize: {
        hero: ['3rem', { lineHeight: '1.1', letterSpacing: '-0.01em' }],
        heading: ['2rem', { lineHeight: '1.2' }],
        body: ['1.125rem', { lineHeight: '1.75' }],
      },
      maxWidth: {
        prose: '65ch',
        content: '72rem',
      },
      spacing: {
        section: '8rem',
        '2section': '16rem',
        'half-section': '4rem',
        'quarter-section': '2rem',
        'gutter': '2.5rem',
        'lg-gutter': '4rem',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
};

export default config;
