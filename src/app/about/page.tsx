import type { Metadata } from "next";
import Image from "next/image";
import { Award, BadgeCheck, Building2, CheckCircle2, Clock3, MapPin, Shield, ThumbsUp, Users, XCircle } from "lucide-react";

import { brand } from "@/config/brand";
import { locations } from "@/config/locations";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { MobileCallBar } from "@/components/layout/mobile-call-bar";
import { CtaSection } from "@/components/shared/cta-section";
import { Breadcrumb } from "@/components/shared/breadcrumb";
import { getBreadcrumbSchema, getAboutPageSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "About Us | 12 Years of Chief-Level HVAC Expertise",
  description: `Meet the ${brand.name} team — ${brand.yearsInBusiness} years of FL-licensed HVAC service in Boca Raton & Fort Lauderdale. EPA-certified, fully insured crews.`,
};

export default function AboutPage() {
  const breadcrumbSchema = getBreadcrumbSchema([{ label: "About" }]);
  const aboutPageSchema = getAboutPageSchema();

  return (
    <>
      <Navbar />
      <main id="main-content">
        <section className="relative overflow-hidden border-b-2 border-border pb-16 pt-32 sm:pt-36">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.04] via-transparent to-accent/[0.03]" aria-hidden="true" />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Breadcrumb items={[{ label: "About" }]} />
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">
              Our Story
            </p>
            <h1 className="mt-4 max-w-3xl font-display text-balance font-semibold tracking-tight text-gray-900">
              {brand.yearsInBusiness} years of chief-level HVAC expertise in South Florida.
            </h1>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-gray-600">
              {brand.name} was built on a straightforward principle: diagnose honestly, price transparently, and fix it right the first time. That approach earned us the trust of homeowners across Broward and Palm Beach counties — and it still drives every service call today.
            </p>
          </div>
        </section>

        <section className="section-shell">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2">
              <div className="space-y-8">
                <div className="space-y-4">
                  <h2 className="font-display text-2xl font-semibold text-gray-900">From one truck to a two-county operation</h2>
                  <p className="text-base leading-8 text-gray-600">
                    In {new Date().getFullYear() - brand.yearsInBusiness}, our founder — a 15-year HVAC field veteran — launched {brand.name} out of a single service van in Boca Raton. The early jobs came from neighbors and word-of-mouth referrals, earned by showing up on time, diagnosing accurately, and never padding an invoice. That reputation spread quickly through Palm Beach County, and within three years we expanded into Fort Lauderdale and greater Broward County.
                  </p>
                  <p className="text-base leading-8 text-gray-600">
                    Today we field a team of Florida-licensed, EPA 608-certified technicians with dedicated crews in each market. Every technician is trained to handle South Florida&apos;s specific HVAC challenges — coastal salt-air corrosion that eats through condenser coils, 75-80% ambient humidity that overloads compressors, and cooling loads that run 10 months a year. We stock OEM parts on every truck so most repairs are completed in one visit.
                  </p>
                </div>

                <div className="shield-accent space-y-4 pl-6">
                  <h3 className="text-lg font-semibold text-gray-900">The chief-level difference</h3>
                  <ul className="space-y-3">
                    {[
                      "Live dispatchers answer every call — 24 hours, 7 days, no voicemail loops",
                      "Written estimates presented before work starts, with itemized parts and labor",
                      "EPA 608-certified, background-checked technicians on every service call",
                      "Fully stocked trucks carry OEM parts for Carrier, Trane, Lennox, Rheem, and Goodman",
                      "Written warranty covering all labor and installed materials",
                    ].map((item) => (
                      <li key={item} className="text-sm leading-7 text-gray-600">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="space-y-6">
                <div className="chief-card relative overflow-hidden rounded-md">
                  <div className="relative min-h-[320px]">
                    <Image
                      src={brand.images.about}
                      alt={`${brand.name} team`}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover"
                    />
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  {[
                    { icon: BadgeCheck, title: brand.license, desc: "FL mechanical contractor credentials" },
                    { icon: Shield, title: brand.insurance, desc: "General liability + workers' comp" },
                    { icon: Building2, title: "Two-County Coverage", desc: "Broward & Palm Beach dedicated crews" },
                    { icon: ThumbsUp, title: `${brand.rating}★ Google Rating`, desc: `${brand.reviewCount}+ verified homeowner reviews` },
                    { icon: Clock3, title: "24/7 Emergency Dispatch", desc: "Sub-60-minute average response" },
                    { icon: Users, title: `${brand.yearsInBusiness} Years in Business`, desc: "South Florida climate specialists" },
                  ].map(({ icon: Icon, title, desc }) => (
                    <div key={title} className="chief-card rounded-md bg-white p-4 pl-5">
                      <div className="flex items-center gap-3">
                        <Icon className="size-5 text-primary" />
                        <div>
                          <p className="text-sm font-semibold text-gray-900">{title}</p>
                          <p className="text-xs text-gray-500">{desc}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Certifications & Credentials */}
        <section className="section-shell border-t-2 border-border">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">
              Credentials &amp; Certifications
            </p>
            <h2 className="mt-4 font-display text-2xl font-semibold text-gray-900">
              Verified qualifications you can count on.
            </h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[
                { icon: BadgeCheck, title: "FL State HVAC License", desc: "Licensed mechanical contractor in the State of Florida, meeting all bonding and insurance requirements." },
                { icon: Award, title: "EPA 608 Certified", desc: "All technicians hold EPA Section 608 Universal certification for safe refrigerant handling." },
                { icon: Shield, title: "NATE Certified Techs", desc: "North American Technician Excellence certified — the industry gold standard for HVAC competency." },
                { icon: ThumbsUp, title: "BBB A+ Rating", desc: "Accredited by the Better Business Bureau with an A+ rating and zero unresolved complaints." },
                { icon: Building2, title: "Full Insurance Coverage", desc: "General liability and workers' compensation coverage protects your home and our crew on every job." },
                { icon: Clock3, title: `${brand.yearsInBusiness}+ Years in Business`, desc: "Established track record serving Broward and Palm Beach County homeowners." },
              ].map(({ icon: Icon, title, desc }) => (
                <div key={title} className="chief-card rounded-md bg-white p-5">
                  <div className="flex items-start gap-3">
                    <div className="flex size-10 shrink-0 items-center justify-center rounded-md bg-primary/10">
                      <Icon className="size-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-900">{title}</p>
                      <p className="mt-1 text-xs leading-5 text-gray-500">{desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us comparison */}
        <section className="section-shell border-t-2 border-border bg-secondary">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <p className="text-center text-sm font-semibold uppercase tracking-[0.3em] text-primary">
              The Difference
            </p>
            <h2 className="mt-4 text-center font-display text-2xl font-semibold text-gray-900">
              Why homeowners choose {brand.name}.
            </h2>
            <div className="mt-10 grid gap-6 lg:grid-cols-2">
              {/* Us column */}
              <div className="chief-card rounded-md border-2 border-primary/20 bg-white p-6">
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary">{brand.name}</p>
                <ul className="mt-4 space-y-3">
                  {[
                    "Written estimates before work begins — no surprises",
                    "FL licensed, EPA certified, NATE-trained technicians",
                    "Same-day service with sub-60-minute emergency response",
                    "24/7 live dispatchers — no voicemail loops",
                    "OEM parts stocked on every truck",
                    "Written warranty on all labor and materials",
                    "Transparent pricing with no hidden fees",
                    `${brand.rating}★ Google rating from ${brand.reviewCount}+ verified reviews`,
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
                      <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-green-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              {/* Others column */}
              <div className="chief-card rounded-md bg-white p-6">
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-gray-400">Typical HVAC Companies</p>
                <ul className="mt-4 space-y-3">
                  {[
                    "Verbal quotes that change once work starts",
                    "Unlicensed or under-certified technicians",
                    "Multi-day wait times for service appointments",
                    "Automated phone systems and long hold times",
                    "Aftermarket parts that void manufacturer warranties",
                    "Limited or no labor warranty",
                    "Hidden diagnostic fees and trip charges",
                    "Few or unverified online reviews",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-gray-400">
                      <XCircle className="mt-0.5 size-4 shrink-0 text-gray-300" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Cities we serve */}
        <section className="section-shell border-t-2 border-border bg-secondary">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="font-display text-2xl font-semibold text-gray-900">Cities we serve</h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {locations.map((loc) => (
                <a
                  key={loc.slug}
                  href={`/locations/${loc.slug}`}
                  className="chief-card group flex items-center gap-3 rounded-md bg-white p-4 transition hover:border-primary/30"
                >
                  <MapPin className="size-5 text-primary" />
                  <div>
                    <p className="text-sm font-medium text-gray-900">{loc.city}</p>
                    <p className="text-xs text-gray-500">{loc.phone.replace("+1 ", "")}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        <CtaSection />
      </main>
      <Footer />
      <MobileCallBar />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPageSchema) }}
      />
    </>
  );
}
