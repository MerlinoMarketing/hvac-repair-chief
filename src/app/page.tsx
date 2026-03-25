import { Shield, Award, Clock, Users, CheckCircle2 } from "lucide-react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { MobileCallBar } from "@/components/layout/mobile-call-bar";
import { Hero } from "@/components/home/hero";
import { EmergencyBanner } from "@/components/home/emergency-banner";
import { ServicesPreview } from "@/components/home/services-preview";
import { AboutPreview } from "@/components/home/about-preview";
import { ReviewsSection } from "@/components/home/reviews-section";
import { FaqSection } from "@/components/home/faq-section";
import { CtaSection } from "@/components/shared/cta-section";
import { getAllServicesSchema, getOrganizationSchema, getWebSiteSchema } from "@/lib/schema";
import { brand } from "@/config/brand";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <Hero />
        <div className="chevron-divider" />

        {/* Credentials Bar */}
        <section className="border-y-2 border-border bg-white py-4">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-gray-600">
              <span className="flex items-center gap-2">
                <Shield className="size-4 text-primary" />
                <strong>FL License #CAC1816259</strong>
              </span>
              <span className="hidden h-4 w-px bg-gray-300 sm:block" aria-hidden="true" />
              <span className="flex items-center gap-2">
                <CheckCircle2 className="size-4 text-primary" />
                EPA Section 608 Certified
              </span>
              <span className="hidden h-4 w-px bg-gray-300 sm:block" aria-hidden="true" />
              <span className="flex items-center gap-2">
                <Award className="size-4 text-accent" />
                BBB A+ Accredited
              </span>
              <span className="hidden h-4 w-px bg-gray-300 sm:block" aria-hidden="true" />
              <span className="flex items-center gap-2">
                <Shield className="size-4 text-primary" />
                Fully Insured &mdash; Liability + Workers&apos; Comp
              </span>
            </div>
          </div>
        </section>

        <ServicesPreview />
        <div className="chevron-divider" />

        {/* Authority Stats — Trusted by South Florida Homeowners */}
        <section className="section-shell bg-secondary">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">
                Proven Track Record
              </p>
              <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
                Trusted by South Florida Homeowners
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-gray-600">
                Our numbers speak for themselves. {brand.name} has earned the trust of families
                and businesses across Boca Raton, Fort Lauderdale, and the surrounding communities.
              </p>
            </div>
            <div className="mt-10 grid grid-cols-2 gap-6 lg:grid-cols-4">
              {[
                { value: `${brand.yearsInBusiness}+`, label: "Years Serving South Florida", icon: Clock },
                { value: "2,500+", label: "Projects Completed", icon: CheckCircle2 },
                { value: `${brand.rating}/5`, label: `Star Rating (${brand.reviewCount}+ Reviews)`, icon: Award },
                { value: "<60 min", label: "Average Emergency Response", icon: Users },
              ].map(({ value, label, icon: Icon }) => (
                <div key={label} className="chief-card rounded-md bg-white p-6 text-center">
                  <Icon className="mx-auto size-6 text-primary" />
                  <p className="mt-3 font-display text-3xl font-bold text-gray-900">{value}</p>
                  <p className="mt-1 text-sm text-gray-500">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="chevron-divider" />

        {/* Industry Associations & Certifications */}
        <section className="section-shell">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">
                Industry Recognized
              </p>
              <h2 className="mt-3 font-display text-2xl font-semibold tracking-tight text-gray-900 sm:text-3xl">
                Certified Professionals You Can Count On
              </h2>
            </div>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  title: "ACCA Member",
                  description: "Air Conditioning Contractors of America — the leading HVAC trade association",
                },
                {
                  title: "NATE Certified",
                  description: "All technicians hold North American Technician Excellence certifications",
                },
                {
                  title: "EPA 608 Certified",
                  description: "Fully certified for refrigerant handling per EPA federal regulations",
                },
                {
                  title: "Carrier Authorized",
                  description: "Factory Authorized Dealer with advanced training on Carrier systems",
                },
              ].map(({ title, description }) => (
                <div key={title} className="chief-card rounded-md bg-white p-5 text-center">
                  <div className="mx-auto flex size-12 items-center justify-center rounded-md bg-primary/10">
                    <Shield className="size-6 text-primary" />
                  </div>
                  <h3 className="mt-4 font-display text-sm font-semibold uppercase tracking-wide text-gray-900">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-gray-500">{description}</p>
                </div>
              ))}
            </div>

            {/* Affiliated With */}
            <div className="mt-12 text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gray-400">
                Affiliated With
              </p>
              <div className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-sm font-medium text-gray-400">
                <span>ACCA</span>
                <span className="hidden h-4 w-px bg-gray-200 sm:block" aria-hidden="true" />
                <span>NATE</span>
                <span className="hidden h-4 w-px bg-gray-200 sm:block" aria-hidden="true" />
                <span>Better Business Bureau</span>
                <span className="hidden h-4 w-px bg-gray-200 sm:block" aria-hidden="true" />
                <span>Carrier</span>
                <span className="hidden h-4 w-px bg-gray-200 sm:block" aria-hidden="true" />
                <span>Trane</span>
                <span className="hidden h-4 w-px bg-gray-200 sm:block" aria-hidden="true" />
                <span>Lennox</span>
              </div>
            </div>
          </div>
        </section>

        <div className="chevron-divider" />
        <AboutPreview />
        <div className="chevron-divider" />
        <ReviewsSection />
        <EmergencyBanner />
        <div className="chevron-divider" />
        <FaqSection />
        <div className="chevron-divider" />
        <CtaSection />
      </main>
      <Footer />
      <MobileCallBar />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getAllServicesSchema()) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getOrganizationSchema()) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getWebSiteSchema()) }}
      />
    </>
  );
}
