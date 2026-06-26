# 🌌 AetherData Landing Page

A premium, high-converting SaaS landing page built from scratch using **Next.js 16**, **React 19**, **Tailwind CSS v4**, and **TypeScript**. Designed for modern, high-performance data engineering platforms, AetherData showcases a seamless user experience with modern design systems and advanced state management patterns.

---

## ✨ Features & Capabilities

### 1. 🚀 Immersive Hero & Social Validation
- **Neon Radial Atmosphere**: Built with high-fidelity vanilla CSS gradients, neon backdrops, and active animated pulses.
- **Interactive CTA**: Integrated email signup form with simulated loading and validation states.
- **Enterprise Credibility**: Clean brand social proof section featuring modern typography and client logos.

### 2. 🧩 Bento-Grid-to-Accordion Showcase
- **Responsive Layout Transition**: Renders as an interactive bento grid on desktop displays and collapses into an accordion on mobile devices.
- **State Persistence Across Resize**: Transfers the active feature index (e.g., *Schema Self-Healing*, *Cognitive Routing*, *Edge Pipelines*, *Sentinel Security*) seamlessly when crossing the mobile/desktop viewport breakpoints.
- **Optimized Resize Listener**: Uses React `useRef` to maintain active index state across events without stale closures, throttled using `requestAnimationFrame`.

### 3. 💳 Isolated-State Pricing Matrix
- **State Isolation via Pub/Sub**: Utilizes React's modern `useSyncExternalStore` hook combined with a custom lightweight pub/sub store (`PricingStore`) to update regional currencies and billing frequencies. This prevents unnecessary parent component re-renders.
- **Multi-Dimensional Pricing Matrix**: 
  - **Billing Cycles**: Monthly and Annual (includes a 20% annual discount).
  - **Regional Currencies**: Supports USD ($), EUR (€, with minor regional adjustments), and INR (₹, incorporating a purchasing power parity discount).
- **Zero Hydration Mismatch**: Structured with server/client safe snapshots ensuring SSR safety in Next.js.

---

## 🛠️ Technology Stack

- **Framework**: [Next.js 16 (App Router)](https://nextjs.org/)
- **Library**: [React 19](https://react.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **State Hook**: `useSyncExternalStore` (custom pub/sub)
- **Formatting**: ESLint

---

## 📂 Project Architecture

```filepath
.
├── src/
│   ├── app/
│   │   ├── favicon.ico
│   │   ├── globals.css         # Core CSS variables, animations, and typography
│   │   ├── layout.tsx          # Main HTML structure, metadata, and fonts
│   │   └── page.tsx            # Composition page pulling layout + sections
│   └── components/
│       ├── features/
│       │   └── BentoAccordion.tsx # Responsive bento showcase / mobile accordion
│       ├── hero/
│       │   └── Hero.tsx           # Launch tags, headers, and signup CTA
│       ├── layout/
│       │   ├── Header.tsx         # Fixed navigation with backdrop blur
│       │   └── Footer.tsx         # Site directory, socials, and legal elements
│       ├── pricing/
│       │   └── PricingMatrix.tsx  # Isolated Pricing Matrix with useSyncExternalStore
│       └── social/
│           └── SocialProof.tsx    # Partner validation logos & stats
├── package.json
└── tsconfig.json
```

---

## ⚙️ Development & Scripts

### Installation
Install the project dependencies using `npm`:
```bash
npm install
```

### Running the Development Server
Spin up the local development server at `http://localhost:3000`:
```bash
npm run dev
```

### Building for Production
Compile a production-ready optimized build:
```bash
npm run build
```

### Starting the Production Build
Run the compiled build locally:
```bash
npm run start
```

### Linting
Validate the codebase rules using ESLint:
```bash
npm run lint
```
