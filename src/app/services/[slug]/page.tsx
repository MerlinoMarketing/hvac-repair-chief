import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CheckCircle2, Phone, Shield, Star, Lightbulb, Award, ArrowRight } from "lucide-react";

import { brand } from "@/config/brand";
import { services } from "@/config/services";
import { locations } from "@/config/locations";
import { renderServiceIcon, getServiceIcon } from "@/lib/icons";
import { toTel } from "@/lib/utils";
import { getServiceSchema, getFaqSchema, getBreadcrumbSchema } from "@/lib/schema";
import { Breadcrumb } from "@/components/shared/breadcrumb";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { MobileCallBar } from "@/components/layout/mobile-call-bar";
import { CtaSection } from "@/components/shared/cta-section";
import { Button } from "@/components/ui/button";

const mainPhone = locations[0].phone;

export function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return {};
  return {
    title: `${service.name} | Expert HVAC Service in South Florida`,
    description: `${service.shortDescription} Trusted ${service.name.toLowerCase()} by ${brand.name} in Boca Raton & Fort Lauderdale. Free estimates, same-day scheduling.`,
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  const otherServices = services.filter((s) => s.slug !== slug);
  const serviceSchema = getServiceSchema(slug);
  const faqSchema = getFaqSchema(service.faq);
  const breadcrumbSchema = getBreadcrumbSchema([
    { label: "Services", href: "/services" },
    { label: service.name },
  ]);

  return (
    <>
      <Navbar />
      <main id="main-content">
        {/* Service hero with background image */}
        <section className="relative overflow-hidden border-b-2 border-border pb-16 pt-32 sm:pt-36">
          <div className="absolute inset-0">
            <Image
              src={service.image}
              alt={service.name}
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/90 to-white/70" />
          </div>
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Breadcrumb
              items={[
                { label: "Services", href: "/services" },
                { label: service.name },
              ]}
            />
            <div className="grid gap-10 lg:grid-cols-[1fr_auto]">
              <div>
                <div className="flex size-16 items-center justify-center rounded-md bg-primary/10 text-primary backdrop-blur-sm">
                  {renderServiceIcon(service.icon, "size-7")}
                </div>
                <h1 className="mt-6 max-w-3xl font-display text-balance font-semibold tracking-tight text-gray-900">
                  {service.name}
                </h1>
                <p className="mt-4 max-w-2xl text-lg leading-8 text-gray-600">
                  {service.shortDescription}
                </p>
                {/* Inline trust signals */}
                <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-gray-500">
                  <span className="flex items-center gap-1.5">
                    <Star className="size-4 fill-amber-400 text-amber-400" />
                    <strong className="text-gray-700">{brand.rating}/5</strong> ({brand.reviewCount}+ reviews)
                  </span>
                  <span className="hidden h-4 w-px bg-gray-300 sm:block" />
                  <span className="flex items-center gap-1.5">
                    <Shield className="size-4 text-primary" />
                    FL Licensed &amp; Insured
                  </span>
                  <span className="hidden h-4 w-px bg-gray-300 sm:block" />
                  <span>{brand.yearsInBusiness}+ Years Experience</span>
                </div>
              </div>
              <div className="flex flex-col gap-3 lg:pt-10">
                <Button
                  render={
                    <a href={toTel(mainPhone)} className="min-h-12 rounded-md px-6 text-base" />
                  }
                  className="rounded-md bg-primary px-6 text-white hover:bg-primary/90"
                >
                  <Phone className="size-4" />
                  Call {mainPhone}
                </Button>
                <Button
                  render={
                    <Link href="/contact" className="min-h-12 rounded-md px-6 text-base" />
                  }
                  variant="outline"
                  className="rounded-md border-2 border-gray-300 text-gray-700 hover:bg-gray-50"
                >
                  Request Free Estimate
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="section-shell">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-[1fr_380px]">
              <div className="space-y-10">
                <div className="space-y-4">
                  <h2 className="font-display text-2xl font-semibold text-gray-900">
                    Why choose {brand.name} for {service.name.toLowerCase()}?
                  </h2>
                  <p className="text-base leading-8 text-gray-600">
                    {service.intro}
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-900">What you can expect</h3>
                  <ul className="space-y-3">
                    {service.benefits.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-accent" />
                        <span className="text-sm leading-7 text-gray-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-900">Our process</h3>
                  <div className="space-y-6 border-l-2 border-primary/20 pl-6">
                    {service.process.map((step, i) => (
                      <div key={step.step} className="relative">
                        <div className="absolute -left-[calc(1.5rem+1px)] flex size-6 items-center justify-center rounded-full bg-primary text-xs font-bold text-white">
                          {i + 1}
                        </div>
                        <h4 className="font-semibold text-gray-900">{step.step}</h4>
                        <p className="mt-1 text-sm leading-7 text-gray-600">{step.description}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Our Experience — E-E-A-T authority signal */}
                <div className="rounded-md border-2 border-primary/10 bg-primary/[0.03] p-6 space-y-4">
                  <div className="flex items-center gap-3">
                    <Award className="size-6 text-primary" />
                    <h3 className="text-lg font-semibold text-gray-900">Our {service.name} Experience</h3>
                  </div>
                  <p className="text-sm leading-7 text-gray-600">
                    With {brand.yearsInBusiness}+ years of dedicated HVAC service in South Florida, our team has
                    completed thousands of {service.name.toLowerCase()} jobs across Boca Raton, Fort Lauderdale, and
                    surrounding communities. Every technician on our crew undergoes rigorous manufacturer training
                    and holds active NATE certification, ensuring your {service.name.toLowerCase()} is handled by
                    qualified professionals who understand South Florida&apos;s unique climate demands.
                  </p>
                </div>

                {/* Certifications for This Service */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-900">Certifications for {service.name}</h3>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {[
                      { cert: "FL HVAC License #CAC1816259", detail: "State-licensed contractor" },
                      { cert: "EPA Section 608 Certified", detail: "Federal refrigerant handling" },
                      { cert: "NATE Certified Technicians", detail: "Industry knowledge verified" },
                      { cert: "Manufacturer Trained", detail: "Carrier, Trane, Lennox authorized" },
                    ].map(({ cert, detail }) => (
                      <div key={cert} className="flex items-start gap-3 chief-card rounded-md bg-white p-4">
                        <Shield className="mt-0.5 size-5 shrink-0 text-primary" />
                        <div>
                          <p className="text-sm font-semibold text-gray-900">{cert}</p>
                          <p className="text-xs text-gray-500">{detail}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Pro Tip Callout */}
                <div className="rounded-md border-l-4 border-accent bg-accent/10 p-5">
                  <div className="flex items-center gap-2">
                    <Lightbulb className="size-5 text-accent" />
                    <p className="text-sm font-bold text-gray-900">Pro Tip from Our Technicians</p>
                  </div>
                  <p className="mt-2 text-sm leading-7 text-gray-600">
                    {service.slug === "ac-repair"
                      ? "Before calling for AC repair, check your thermostat batteries and make sure the breaker hasn't tripped. Also inspect your air filter — a clogged filter is the #1 cause of AC problems we see in South Florida homes."
                      : service.slug === "ac-installation"
                      ? "When choosing a new AC system, focus on SEER2 rating rather than just tonnage. In South Florida's climate, a higher-efficiency unit pays for itself within 3-5 years through lower electric bills."
                      : service.slug === "heating-repair"
                      ? "During Florida's mild winters, run your heat pump in heating mode for 10-15 minutes at least once a month. This keeps the reversing valve from seizing up, which is the most common heating failure we see."
                      : service.slug === "duct-cleaning-sealing"
                      ? "After duct cleaning, replace your air filter and run the system for 30 minutes. If you notice musty odors returning within weeks, it may indicate a humidity issue in the duct system that needs sealing."
                      : service.slug === "maintenance-plans"
                      ? "Schedule your spring tune-up before April — that's when our books fill up. A pre-season check catches refrigerant leaks and worn capacitors before they become expensive mid-summer emergencies."
                      : "For any HVAC emergency, turn off your system at the thermostat immediately if you smell burning or see sparking. This prevents further damage and keeps your family safe until our crew arrives."}
                  </p>
                </div>

                {/* Related Resources — internal linking */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-900">Related Resources</h3>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {otherServices.slice(0, 4).map((s) => (
                      <Link
                        key={s.slug}
                        href={`/services/${s.slug}`}
                        className="chief-card group flex items-center justify-between rounded-md bg-white p-4 transition hover:border-primary/30"
                      >
                        <span className="text-sm font-medium text-gray-700 group-hover:text-gray-900">{s.name}</span>
                        <ArrowRight className="size-4 text-gray-400 transition group-hover:text-primary" />
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-900">Available in these cities</h3>
                  <div className="flex flex-wrap gap-2">
                    {locations.map((loc) => (
                      <Link
                        key={loc.slug}
                        href={`/locations/${loc.slug}`}
                        className="chief-card rounded-md bg-white px-3 py-2 text-sm text-gray-600 transition hover:border-primary/30 hover:text-primary"
                      >
                        {loc.city}
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-900">Frequently asked questions</h3>
                  <div className="space-y-4">
                    {service.faq.map((item) => (
                      <div key={item.question} className="chief-card rounded-md bg-white p-5">
                        <h4 className="font-semibold text-gray-900">{item.question}</h4>
                        <p className="mt-2 text-sm leading-7 text-gray-600">{item.answer}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <aside className="space-y-6">
                <div className="chief-card rounded-md bg-secondary p-6">
                  <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">
                    Quick Facts
                  </p>
                  <dl className="mt-4 space-y-4">
                    {[
                      { label: "Experience", value: `${brand.yearsInBusiness}+ years` },
                      { label: "Rating", value: `${brand.rating}/5 (${brand.reviewCount}+ reviews)` },
                      { label: "Licensing", value: brand.license },
                      { label: "Coverage", value: brand.insurance },
                      { label: "Hours", value: brand.hours },
                    ].map(({ label, value }) => (
                      <div key={label} className="border-b border-border pb-3 last:border-0 last:pb-0">
                        <dt className="text-xs uppercase tracking-[0.2em] text-gray-500">{label}</dt>
                        <dd className="mt-1 text-sm font-medium text-gray-700">{value}</dd>
                      </div>
                    ))}
                  </dl>
                </div>

                <div className="chief-card rounded-md border-2 border-primary/20 bg-primary/[0.04] p-6">
                  <p className="text-lg font-semibold text-gray-900">Need {service.name.toLowerCase()}?</p>
                  <p className="mt-2 text-sm leading-7 text-gray-600">
                    Deploy a technician today — same-day service available across South Florida.
                  </p>
                  <a
                    href={toTel(mainPhone)}
                    aria-label={`Call ${mainPhone} for ${service.name.toLowerCase()}`}
                    className="mt-4 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-md bg-accent text-sm font-bold text-gray-900 transition hover:bg-accent/90"
                  >
                    <Phone className="size-4" aria-hidden="true" />
                    Call {mainPhone}
                  </a>
                  <a
                    href="/contact"
                    className="mt-2 inline-flex min-h-10 w-full items-center justify-center gap-2 rounded-md border-2 border-primary/30 bg-white text-sm font-medium text-gray-900 transition hover:border-primary/50 hover:bg-primary/[0.03]"
                  >
                    Request Your Chief Online
                  </a>
                </div>
              </aside>
            </div>
          </div>
        </section>

        {otherServices.length > 0 && (
          <section className="section-shell border-t-2 border-border bg-secondary">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <h2 className="font-display text-2xl font-semibold text-gray-900">
                Other services we offer
              </h2>
              <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {otherServices.map((s) => {
                  const Icon = getServiceIcon(s.icon);
                  return (
                    <Link
                      key={s.slug}
                      href={`/services/${s.slug}`}
                      className="chief-card group flex items-center gap-4 rounded-md bg-white p-4 transition hover:border-primary/30"
                    >
                      <div className="flex size-10 items-center justify-center rounded-md bg-primary/10 text-primary">
                        <Icon className="size-5" />
                      </div>
                      <span className="text-sm font-medium text-gray-700 group-hover:text-gray-900">
                        {s.name}
                      </span>
                    </Link>
                  );
                })}
              </div>
            </div>
          </section>
        )}

        <CtaSection />
      </main>
      <Footer />
      <MobileCallBar />
      {serviceSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
        />
      )}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  );
}
