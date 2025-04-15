// tailwind.config.ts
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/utils/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@shadcn/ui/dist/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '1rem',
      screens: {
        sm: '100%',
        md: '100%',
        lg: '1240px',
        xl: '1420px',
      },
    },
    screens: {
      sm: '576px',
      md: '768px',
      lg: '992px',
    },
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        serif: ['var(--font-suranna)', 'serif'],
        fragmentSans: ['PP Fragment Sans', 'sans-serif'],
        fragmentSerif: ['PP Fragment Serif Light', 'serif'],
        spaceGrotesk: ['Space Grotesk', 'sans-serif'],
      },
      fontSize: {
        h1: 'clamp(3.5rem, 4.6vw, 5.2rem)',
        h2: 'clamp(2.5rem, 3.6vw, 4.2rem)',
        h3: 'clamp(1.5rem, 2vw, 2.8rem)',
        h4: 'clamp(0.96rem, 1.2vw, 1.44rem)',
        h5: 'clamp(1.8rem, 4.8vw, 3.3rem)',
      },
      colors: {
        'gold-light': '#A78952',
        'gold-dark': '#DFC383',
        'projects-colorstyles-mainbody-veig': '#f8f7f3',
        'projects-colorstyles-hero-dark': '#1e2123',
        bg: '#ff5733',
        light: '#fff',
        dark: '#0e100f',
        muted: '#a1a1a6',
        link: '#2997ff',
        primary: '#D4AF37',
        white: '#FFFFFF',
        black: '#0F0F0F',
        dark2: '#1D1D1D',
        gray: {
          dark: '#282828',
          light: '#F0F0F0',
        },
        'bg-color-dark': '#121212',
        'body-color': {
          DEFAULT: '#B8B8B8',
          dark: '#E0E0E0',
        },
        stroke: {
          stroke: '#303030',
          dark: '#404040',
        },
        gold: '#D4AF37',
        'h1-color': '#DAC48B',
      },
      spacing: {
        header: '4rem',
        xs: '0.8rem',
        sm: '1.6rem',
        md: '2.4rem',
        lg: '3.2rem',
        xl: '4.8rem',
      },
      transitionDuration: {
        base: '300ms',
      },
      zIndex: {
        '1': '1',
        '2': '2',
        '3': '3',
        '4': '4',
        '5': '5',
        '6': '6',
        '7': '7',
        '8': '8',
        '9': '9',
        '10': '10',
        '15': '15',
        '20': '20',
      },
      transformStyle: {
        'preserve-3d': 'preserve-3d',
      },
      willChange: {
        opacity: 'opacity',
        transform: 'transform',
        'transform-opacity': 'transform, opacity',
        'filter-transform': 'filter, transform',
      },
      boxShadow: {
        signUp: '0px 5px 10px rgba(0, 0, 0, 0.2)',
        one: '0px 2px 3px rgba(0, 0, 0, 0.05)',
        two: '0px 5px 10px rgba(0, 0, 0, 0.1)',
        three: '0px 5px 15px rgba(0, 0, 0, 0.05)',
        sticky: 'inset 0 -1px 0 0 rgba(0, 0, 0, 0.1)',
        'sticky-dark': 'inset 0 -1px 0 0 rgba(255, 255, 255, 0.1)',
        'feature-2': '0px 10px 40px rgba(48, 86, 211, 0.12)',
        submit: '0px 5px 20px rgba(0, 0, 0, 0.1)',
        'submit-dark': '0px 5px 20px rgba(0, 0, 0, 0.1)',
        btn: '0px 1px 2px rgba(0, 0, 0, 0.15)',
        'btn-hover': '0px 1px 2px rgba(0, 0, 0, 0.15)',
        'btn-light': '0px 1px 2px rgba(0, 0, 0, 0.1)',
      },
      dropShadow: {
        three: '0px 5px 15px rgba(0, 0, 0, 0.05)',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
  safelist: [
    'transform-style-preserve-3d',
    'will-change-opacity',
    'will-change-transform',
    'will-change-transform-opacity',
    'will-change-filter-transform',
  ],
};

export default config;
