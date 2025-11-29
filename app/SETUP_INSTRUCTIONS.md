# KasaMD Marketing Site - File Organization

## Directory Structure

Organize your Next.js project like this:

```
your-nextjs-project/
├── app/
│   ├── layout.tsx          (Root layout - use the one I provided)
│   ├── page.tsx            (Home page - use the one I provided)
│   ├── globals.css         (Tailwind CSS - use the one I provided)
│   ├── components/         (Create this folder)
│   │   ├── AnnouncementBanner.tsx
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── FeaturesOverview.tsx
│   │   └── Footer.tsx
│   ├── features/
│   │   └── page.tsx       (Create later)
│   ├── pricing/
│   │   └── page.tsx       (Create later)
│   └── about/
│       └── page.tsx       (Create later)
├── public/
│   └── (your images and assets)
└── package.json
```

## Setup Steps

1. **Move Components**
   - Copy all `.tsx` component files into `app/components/`
   - Copy `layout.tsx`, `page.tsx`, and `globals.css` into `app/`

2. **Install Dependencies**
   You'll need Heroicons for the icons in FeaturesOverview:
   ```bash
   npm install @heroicons/react
   ```

3. **Tailwind Configuration**
   Make sure your `tailwind.config.js` includes:
   ```js
   module.exports = {
     content: [
       './app/**/*.{js,ts,jsx,tsx,mdx}',
       './components/**/*.{js,ts,jsx,tsx,mdx}',
     ],
     // ... rest of config
   }
   ```

4. **TypeScript Configuration**
   Ensure your `tsconfig.json` has path aliases:
   ```json
   {
     "compilerOptions": {
       "paths": {
         "@/*": ["./app/*"]
       }
     }
   }
   ```

## What You've Got

### Components (all in `app/components/`)
- **AnnouncementBanner.tsx** - Yellow banner at top with demo CTA
- **Navbar.tsx** - Sticky navigation with mobile menu
- **Hero.tsx** - Main hero section with headline and CTAs
- **FeaturesOverview.tsx** - Feature grid with icons
- **Footer.tsx** - Site footer with links

### Pages
- **layout.tsx** - Root layout with navbar/footer
- **page.tsx** - Home page assembling Hero + Features
- **globals.css** - Tailwind setup with smooth scrolling

## Next Steps

1. Run `npm install` to ensure all dependencies are installed
2. Run `npm run dev` to start the development server
3. Visit `http://localhost:3000` to see your site

## Customization

- **Colors**: The announcement banner uses `amber-400` - change this to match your brand
- **Logo**: Update the "KasaMD" text in Navbar.tsx with your actual logo
- **Links**: Update `app.kasamd.com` URLs when your app is deployed
- **Content**: Modify headline, descriptions, and features to match your messaging

## Mobile Responsiveness

All components are fully responsive:
- Navbar collapses to hamburger menu on mobile
- Hero text sizes responsively
- Features grid goes from 2 columns to 1 on mobile
- Footer adapts to stacked layout on small screens
