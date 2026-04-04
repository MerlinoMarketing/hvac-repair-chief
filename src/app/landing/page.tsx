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

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <Services />
      <WhyChooseUs />
      <Testimonials />
      <ServiceAreas />
      <Contact />
      <Footer />
    </main>
  );
}
