# Churn & Grain Co. — Premium Ecommerce UI

A responsive, frontend-only Next.js storefront for Churn & Grain Co. The homepage extends the approved `centered-range-v7` visual system into a premium ecommerce experience while preserving its palette, typography, exact wordmark treatment and centered circular product showcase.

## Homepage direction

- Two-tier, 4700BC-inspired navigation with the Churn & Grain wordmark centered in the mango capsule
- Poppins display typography paired with Manrope body text
- Approved warm cream, mango, coral, lime, berry and espresso palette
- Centred circular product slider with arrows, pagination, colour transitions and quick-add interaction
- Image-led hero, ingredient texture, pantry campaign and Odisha origin sections
- Restrained Pattachitra linework used as a supporting traditional detail
- Smooth entrance, parallax, ticker and scroll-linked animations with reduced-motion support
- Responsive desktop and mobile layouts with no horizontal overflow

## New campaign assets

The homepage uses four original campaign images in `public/images`:

- `home-hero-ghee-v2.png` — sculptural golden ghee pour hero
- `home-ghee-texture-v2.png` — luminous macro ghee spiral
- `home-odisha-bilona-v2.png` — Odisha bilona scene with restrained Pattachitra detail
- `home-complete-pantry-v2.png` — colourful premium pantry collection

## Included routes

- `/` — premium editorial homepage and colour-changing product showcase
- `/shop` — filterable product catalogue
- `/story` — brand origin story
- `/product/[slug]` — six static product detail pages
- `/checkout` — responsive two-step delivery and payment UI demonstration
- `/account`, `/shipping`, `/returns`, `/contact`, `/privacy` — customer-facing UI pages

Search, mobile navigation, product sizing, quantity selection, persistent local cart, delivery validation and payment-method selection are interface-only demonstrations. No database, authentication, payment gateway or commerce backend is connected.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Production check

```bash
npm run build
npm run start
```

Product and brand content is centralized in `lib/products.ts`. Production packshots can replace the generated campaign assets without changing the layout.
