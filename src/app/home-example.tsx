/**
 * EXAMPLE HOME PAGE USING LANDING COMPONENTS
 *
 * This file demonstrates how to integrate all the landing page components
 * into your main page.tsx file.
 *
 * To use this:
 * 1. Import the components from '@/components/landing'
 * 2. Add them in the order shown below for optimal conversion flow
 * 3. Customize the content in each component file as needed
 */

import {
  Navigation,
  Hero,
  Services,
  WhyChooseUs,
  Testimonials,
  ServiceAreas,
  Contact,
  Footer
} from '@/components/landing';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Fixed Navigation Bar */}
      <Navigation />

      {/* Hero Section - First Impression */}
      {/* Contains: Headline, CTAs, Trust Badges, Social Proof */}
      <Hero />

      {/* Services Section */}
      {/* Grid of service offerings with icons and descriptions */}
      <Services />

      {/* Why Choose Us Section */}
      {/* Stats, differentiators, and key benefits */}
      <WhyChooseUs />

      {/* Testimonials Section */}
      {/* Customer reviews and ratings */}
      <Testimonials />

      {/* Service Areas Section */}
      {/* Geographic coverage map and city list */}
      <ServiceAreas />

      {/* Contact Section */}
      {/* Contact form and direct contact information */}
      <Contact />

      {/* Footer */}
      {/* Navigation links, contact info, legal, social */}
      <Footer />
    </main>
  );
}
