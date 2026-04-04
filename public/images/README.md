# Roofing Site Images

All images are stored locally and optimized by Next.js Image component.

## Directory Structure

```
public/images/
├── hero/
│   └── hvac-hero.jpg (2400px, 844KB) - Main hero background
│
├── services/
│   ├── commercial-hvac.jpg (1200px, 198KB)
│   ├── duct-cleaning.jpg (1200px, 83KB)
│   ├── hvac-maintenance.jpg (1200px, 102KB)
│   ├── ac-repair.jpg (1200px, 123KB)
│   ├── ac-installation.jpg (1200px, 226KB)
│   └── emergency-hvac.jpg (1200px, 230KB)
│
├── testimonials/
│   ├── houses/
│   │   ├── house-1.jpg through house-6.jpg (800px, ~100KB each)
│   │   └── Used for testimonial project images
│   │
│   └── avatars/
│       ├── avatar-1.jpg through avatar-6.jpg (150px, ~10KB each)
│       └── Customer profile pictures
│
├── about/
│   ├── team-hero.jpg (2000px, 786KB) - About page hero
│   └── office.jpg (1200px, 277KB) - Company office/team
│
├── contact/
│   ├── office-hero.jpg (2000px, 204KB) - Contact page hero
│   └── service-area.jpg (1200px, 224KB) - Service area map
│
└── general/
    └── why-choose-us.jpg (2000px, 213KB) - Why Choose Us section background
```

## Total Storage
- **24 images**
- **~4.3 MB total** (uncompressed JPEGs)
- Next.js automatically creates optimized versions (WebP, AVIF) at build time

## Image Optimization

All images are processed by Next.js Image component which:
- Automatically generates WebP and AVIF versions
- Creates responsive sizes (320w, 640w, 750w, 828w, 1080w, 1200w, 1920w, 2048w, 3840w)
- Lazy loads images below the fold
- Serves optimal format based on browser support

## Original Sources

Images were downloaded from Unsplash and are stored locally to:
- Eliminate external dependencies
- Improve performance (no third-party requests)
- Enable Next.js optimization features
- Ensure reliability (no broken links)

## Adding New Images

When adding new images:
1. Place in appropriate directory
2. Use descriptive filenames (kebab-case)
3. Optimize before upload (use TinyPNG or similar)
4. Update this README with new images
5. Reference using `/images/category/filename.jpg` in components
