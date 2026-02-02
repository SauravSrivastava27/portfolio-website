# Saurav Srivastava | Portfolio

A modern, responsive portfolio website for a Senior Front-End Developer & Data Engineer with 8+ years of experience.

## Technologies Used

### Framework & Runtime
- **Next.js 16** - React framework with App Router
- **React 19** - UI library
- **TypeScript** - Type-safe JavaScript

### Styling
- **Tailwind CSS v4** - Utility-first CSS framework
- **CSS Variables** - Custom theming with design tokens
- **tw-animate-css** - Animation utilities

### UI Components
- **shadcn/ui** - Accessible component library
- **Lucide React** - Icon library

### Features & Integrations
- **EmailJS** - Contact form email functionality
- **Responsive Design** - Mobile-first approach with adaptive layouts

### Development Tools
- **Biome** - Linting and formatting
- **ESLint** - Code quality

## Project Structure

```
├── app/
│   ├── layout.tsx        # Root layout with metadata
│   ├── page.tsx          # Main portfolio page
│   ├── globals.css       # Global styles and theme tokens
│   └── icon.svg          # Favicon
├── components/
│   ├── portfolio/        # Portfolio-specific components
│   │   ├── navigation.tsx
│   │   ├── hero.tsx
│   │   ├── about.tsx
│   │   ├── experience.tsx
│   │   ├── skills.tsx
│   │   ├── certifications.tsx
│   │   ├── contact.tsx
│   │   ├── footer.tsx
│   │   └── logo.tsx
│   └── ui/               # Reusable UI components
└── lib/
    └── utils.ts          # Utility functions
```

## Features

- Dark theme with teal (#00CC85) accent color
- Smooth scroll navigation without URL hash changes
- Responsive mobile menu with animations
- Interactive work experience tabs
- Contact form with EmailJS integration
- Custom SVG logo with brand colors
- Scroll-spy navigation highlighting

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

## License

MIT
