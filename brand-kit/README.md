# HVAC Repair Chief -- Brand Kit

**Generated:** 2026-03-25
**Color Mode:** LIGHT
**Aesthetic:** Command Authority

---

## Brand Identity

| Field | Value |
|---|---|
| Name | HVAC Repair Chief |
| Legal Name | HVAC Repair Chief LLC |
| Tagline | Commanding Comfort Across South Florida |
| Category | HVAC |
| Tone | Authoritative, leader, chief-level expertise |
| Voice | Professional |
| Years in Business | 12 |
| Rating | 4.8 stars (85 verified reviews) |
| License | FL State Licensed |
| Insurance | Fully Insured |
| Emergency | 24/7 Emergency HVAC |
| Hours | Mon-Sat: 7AM-8PM, Sun: 9AM-5PM |
| Website | https://hvac-repair-chief.vercel.app |

---

## Locations

### Boca Raton
- **Phone:** +1 561-556-4233
- **ZIP:** 33431
- **Service Areas:** Boca Raton, West Boca Raton, East Boca Raton, Deerfield Beach, Delray Beach, Highland Beach, Boca Del Mar, Sandalfoot Cove

### Fort Lauderdale
- **Phone:** +1 954-601-7788
- **ZIP:** 33301
- **Service Areas:** Fort Lauderdale, Wilton Manors, Oakland Park, Lauderdale Lakes, Lauderhill, Plantation, Davie, Sunrise

---

## Services

1. **AC Repair** -- Fast diagnosis and repair for central AC, mini-splits, and heat pumps
2. **AC Installation** -- New system installation with Manual J load calculation
3. **Heating Repair** -- Heat pumps, electric furnaces, and heat strip systems
4. **Duct Cleaning & Sealing** -- Inspection, HEPA cleaning, antimicrobial treatment, mastic sealing
5. **Maintenance Plans** -- Two seasonal tune-ups/year, priority scheduling, 15% repair discount
6. **Emergency HVAC** -- 24/7/365 dispatch, under 60-minute average response

---

## Colors (LIGHT Mode)

All colors meet the LIGHT mode requirement (primary L >= 0.55, accent L >= 0.60, background L >= 0.96).

| Token | Value | Hex (approx) | Usage |
|---|---|---|---|
| Primary | `oklch(0.62 0.04 200)` | #7BA3B3 | Headers, nav, primary buttons, icons |
| Primary Dark | `oklch(0.52 0.05 200)` | -- | Hover/active states |
| Primary Light | `oklch(0.72 0.03 200)` | -- | Tint backgrounds, badge fills |
| Accent | `oklch(0.66 0.12 60)` | #C4A44F | CTAs, trust badges, gold insignia |
| Accent Dark | `oklch(0.56 0.13 60)` | -- | Hover on accent elements |
| Accent Light | `oklch(0.76 0.08 60)` | -- | Light gold washes, badge glow |
| Background | `oklch(0.975 0.003 200)` | -- | Page background |
| Surface | `oklch(0.96 0.004 200)` | -- | Card backgrounds |
| Text Primary | `oklch(0.20 0.02 200)` | -- | Body text |
| Text Secondary | `oklch(0.40 0.02 200)` | -- | Supporting text |

**Source:** Light primary from `brands-index.json` (L=0.62), NOT the dark `brand.ts` value (L=0.40).

---

## Typography

| Role | Font | Source | Weights |
|---|---|---|---|
| Display | Bricolage Grotesque | Google Fonts | 400, 500, 600, 700, 800 |
| Body | Geist | Vercel (next/font) | 400, 500, 600 |

### Type Scale
- **h1:** clamp(2.5rem, 5vw, 4rem)
- **h2:** clamp(1.75rem, 3.5vw, 2.5rem)
- **h3:** clamp(1.25rem, 2.5vw, 1.75rem)
- **body:** 1rem (16px)

---

## Design System

| Property | Value |
|---|---|
| Hero Layout | 5 (Asymmetric grid) |
| Section Order | hero, services, about, reviews, emergency-banner, faq, contact |
| Card Style | rounded-md, double-border, hover:scale-101 |
| Animation | slide-up-stagger |
| Nav Style | 1 |
| Differentiator | Badge/rank-inspired layout, steel blue + warm gold, chevron decorative elements |

---

## 3D Elements (Three.js / React Three Fiber)

| Element | Description |
|---|---|
| **Hero** | Rotating 3D HVAC condenser unit with floating temperature readouts (72F, 45% Humidity, SEER 24) |
| **Service Cards** | Per-service 3D tool icons: wrench, thermometer, flame, fan blade, gauge, siren |
| **Trust Badges** | Embossed gold chief's badge with metallic material, subtle rotation on hover |
| **CTA** | Particle system (200 particles) flowing like airflow using Perlin noise vector field |

Style: clean-geometric. All elements include static image/SVG fallbacks.

---

## Remotion Video Specs

### Intro (15s)
Badge/emblem reveal (4s) -> service highlights with TradeShot images (6s) -> trust stats counters (3s) -> CTA with phone numbers (2s)

### Service Explainers (30s each)
- **AC Repair:** System failure diagram -> dispatch/diagnosis -> quote/repair -> verify/CTA
- **HVAC Installation:** Manual J assessment -> system selection -> installation day -> commissioning/CTA
- **Duct Cleaning:** Hidden contaminants -> camera inspection -> clean/treat/seal -> results/CTA
- **Emergency Repair:** Night failure -> immediate dispatch -> on-site resolution -> peace-of-mind CTA

### Social Clips (15s, 1080x1920 vertical)
- Before/After AC Repair
- 60-Second Emergency Response
- Duct Cleaning Reveal

All videos: 30fps, 1920x1080 (landscape) or 1080x1920 (vertical), h264 codec, chevron-wipe transitions.

---

## Stitch Design Co Deliverables

### Logo
- **Style:** Emblem with wordmark -- chief's badge/shield containing brand name
- **Font:** Bricolage Grotesque, weight 700
- **Versions:** Primary (steel blue on transparent), Reverse (white on transparent), Monochrome
- **Formats:** SVG, PNG @1x/@2x/@3x, ICO, PDF

### Pattern: Chief's Chevron
- Repeating upward-pointing chevron stripes at 60-degree angles
- 64x64px seamless tile
- Used at 3-5% opacity for backgrounds, 100% for dividers

### Color Application
- Primary steel blue on white (light mode)
- Accent warm gold for emphasis only
- Print CMYK values included in JSON

### Collateral
- Business cards (front: logo + contact; back: chevron pattern + phone numbers)
- Vehicle wrap (white base, oversized badge, gold chevron stripe)
- Uniform polo (embroidered badge left chest)
- Yard sign (white corrugated, badge top-center)
- Invoice/letterhead (badge top-left, chevron watermark)

---

## Content Direction

### Headlines
- Pattern: Command statement + location qualifier
- Examples: "[City]'s Commanding HVAC Authority", "Chief-Level HVAC Service in [City]"

### CTAs
- Primary: "Deploy a Technician Now", "Request Your Chief"
- Emergency: "Emergency Dispatch Now", "Call the Chief 24/7"

### About Narrative
Leadership and command-level expertise. 12 years commanding comfort in South Florida. The "chief" as the highest rank of HVAC mastery. Emphasis on first-visit resolution and South Florida climate expertise (salt air, humidity, year-round cooling).

### Review Personas
6 real reviewers across both locations covering: emergency response speed, system upgrade ROI, maintenance trust, after-hours emergency, air quality improvement, honest pricing.

### FAQ Topics
Service area coverage, emergency response time, repair vs. replace, maintenance ROI, South Florida HVAC challenges, duct cleaning frequency, financing, permitting, brands serviced, commercial vs. residential.

---

## File Reference

```
hvac-repair-chief/
  brand-kit/
    brand-kit.json    <-- Complete machine-readable brand kit
    README.md         <-- This file (human-readable summary)
  src/config/
    brand.ts          <-- Source: brand identity + dark theme (DO NOT use dark colors)
    services.ts       <-- Source: 6 service definitions with process steps + FAQ
    locations/
      index.ts        <-- LocationData interface + getLocationBySlug helper
      boca-raton.ts   <-- Boca Raton location data + reviews
      fort-lauderdale.ts  <-- Fort Lauderdale location data + reviews
```
