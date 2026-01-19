# Parthian Marketplace

A modern marketplace UI for buying and selling batteries. Built with Next.js App Router, TypeScript, Tailwind CSS, and a rich set of accessible UI primitives. It includes a polished landing experience, buyer/seller flows, and reusable components you can extend into a full product.

## Table of contents
- Overview
- Tech stack
- Features
- Project structure
- Getting started
- Available scripts
- Styling and design system
- UI components
- Routing
- Configuration
- Deployment
- Contributing
- License

## Overview
Parthian Marketplace connects battery sellers and buyers with a clean, performant interface and thoughtful UX:
- Animated, on-brand hero with ambient background effects
- Clear sections for features, how it works, testimonials, FAQ, and CTA
- Buyer and seller navigation scaffolding (pages are present to extend)
- Component library with headless/accessibility-first primitives

Note: The marketplace route and Pricing section are currently disabled/hidden by design and can be re-enabled later.

## Tech stack
- Next.js 14 (App Router)
- React 18 + TypeScript
- Tailwind CSS
- Radix UI primitives (via shadcn-style components)
- lucide-react icons

## Features
- Hero background effect reused across sections (grid, animated blobs, cursor-reactive highlight)
- Sections: Features, How It Works, Benefits, Testimonials, FAQ, CTA
- Buyer/Seller page scaffolding (dashboard, products, orders, profile)
- Modular UI components under `src/components/ui`
- Sensible defaults for project layout and DX

## Project structure
```
src/
  app/
    buyer/…                # Buyer pages (orders, profile)
    cart/…                 # Cart page (currently hidden in header)
    checkout/…             # Checkout page
    marketplace/…          # Marketplace (currently returns 404 via notFound())
    product/[id]/…         # Product detail
    seller/…               # Seller pages (dashboard, products, orders, profile)
    layout.tsx             # Global layout (Header, Footer, metadata)
    page.tsx               # Landing page
  components/
    ui/…                   # Reusable UI primitives (Radix-based)
    Header.tsx, Footer.tsx # Site chrome
    Hero.tsx, …            # Landing sections
  styles/
    globals.css            # Global styles
index.html                 # Present for historical/dev usage
next.config.mjs            # Next.js config
package.json               # Scripts and deps
tsconfig.json              # TypeScript config
```

## Getting started
Prerequisites:
- Node.js 18+
- npm

Install and run:
```bash
npm install
npm run dev
# open http://localhost:3000
```

Build and serve:
```bash
npm run build
npm start
```

## Available scripts
- `npm run dev` – Start the Next.js dev server
- `npm run build` – Create a production build
- `npm start` – Run the production server

## Styling and design system
- Tailwind CSS for utility-first styling
- Consistent spacing, rounded shapes, and subtle shadows
- Animated background effect (grid + blobs + cursor-reactive glow) applied to multiple sections
  - To reuse: wrap a section with a `relative overflow-hidden` container and include the `bg-grid-pattern`, three `hero-blob` divs, and the `cursor-spot` layer. See `src/components/Hero.tsx` for the full pattern.

## UI components
Located in `src/components/ui`. Highlights:
- Accordion, Dialog, Drawer, Dropdown Menu, Sheet, Tooltip
- Button, Input, Select, Checkbox, Switch, Radio, Textarea
- Card, Tabs, Table, Pagination, Progress, Scroll Area
- Menubar, Navigation Menu, Command (cmdk)

These are Radix-based, accessible-by-default primitives suitable for production.

## Routing
Key routes (App Router):
- `/` – Landing page
- `/marketplace` – Currently deactivated via `notFound()`
- `/product/[id]` – Product detail
- `/buyer/orders`, `/buyer/profile`
- `/seller/dashboard`, `/seller/products`, `/seller/orders`, `/seller/profile`

## Configuration
No environment variables are required to run the UI locally. As you integrate backend/auth/payments, add vars to `.env.local` and never commit them.

## Deployment
Recommended: Vercel
- Connect this repo
- Set framework to Next.js
- Build command: (default) `next build`
- Output: `.next`

You can also deploy to any Node-capable host:
```bash
npm run build
npm start -- -p 3000
```

## Contributing
1. Create a feature branch
2. Implement changes with clear commits
3. Open a PR to `main` with a brief summary and screenshots

## License
License not specified yet. All rights reserved by the project owner. Add a license of your choice (e.g. MIT) when ready.

  # Parthian Marketplace
  ## Running the code

  Run `npm i` to install the dependencies.

  Run `npm run dev` to start the development server.
  # Parthian-Marketplace
# Parthian-Marketplace
