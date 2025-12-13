# Apna UI Assignment

A modern, responsive Next.js application recreating the UI of Apna.co homepage and employer landing page.

## Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **React 18**

## Features

- 🎨 Clean, maintainable component architecture
- 📱 Mobile-first responsive design
- 🎯 Reusable UI components
- 🎨 Design system with color tokens, typography, and spacing
- ⚡ Fast and optimized

## Project Structure

```
├── app/
│   ├── (pages)/
│   │   ├── home/          # Homepage route
│   │   └── employer/      # Employer landing page
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Homepage
│   └── globals.css        # Global styles
├── components/
│   ├── common/            # Shared components
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── FeatureCard.tsx
│   │   └── CTASection.tsx
│   └── ui/                # Base UI components
│       ├── Button.tsx
│       └── Card.tsx
├── lib/
│   └── utils.ts           # Utility functions
└── styles/
    └── globals.css         # Global CSS with Tailwind
```

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
npm run build
```

### Start Production Server

```bash
npm start
```

## Design System

### Colors

- **Primary**: Blue shades (primary-50 to primary-900)
- **Accent**: Amber/Yellow shades (accent-50 to accent-900)
- **Gray**: Neutral grays (gray-50 to gray-900)

### Typography

- **Font Family**: Inter (Google Fonts)
- **Sizes**: xs, sm, base, lg, xl, 2xl, 3xl, 4xl, 5xl, 6xl

### Spacing

- Standard Tailwind spacing scale
- Custom values: 18 (4.5rem), 88 (22rem), 128 (32rem)

## Components

### Button

Reusable button component with variants:
- `primary`: Blue background
- `secondary`: Amber background
- `outline`: Outlined style
- `ghost`: Minimal style

Sizes: `sm`, `md`, `lg`

### Card

Flexible card component with optional hover effects.

### Hero

Hero section component for landing pages with title, subtitle, and CTAs.

### FeatureCard

Card component for displaying features with icon, title, and description.

## Pages

### Homepage (`/`)

Recreates the Apna.co homepage with:
- Hero section
- Features section
- Job categories
- How it works
- CTA section

### Employer Page (`/employer`)

Recreates the employer landing page with:
- Hero section
- Features for employers
- Pricing plans
- Success stories
- CTA section

## Notes

- All components are built with TypeScript for type safety
- Mobile-first responsive design
- Clean, readable code structure
- Production-ready configuration


