import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowRight, CheckCircle2, MapPin, Phone, Quote, Star } from "lucide-react";

import { brand } from "@/config/brand";
import { services } from "@/config/services";
import { locations, getLocationBySlug } from "@/config/locations";
import { getServiceIcon } from "@/lib/icons";
import { toTel } from "@/lib/utils";
import { getLocalBusinessSchema, getFaqSchema, getBreadcrumbSchema } from "@/lib/schema";
import { Breadcrumb } from "@/components/shared/breadcrumb";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { MobileCallBar } from "@/components/layout/mobile-call-bar";
import { CtaSection } from "@/components/shared/cta-section";
import { Button } from "@/components/ui/button";

export function generateStaticParams() {
  return locations.map((loc) => ({
    city: loc.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ city: string }>;
}): Promise<Metadata> {
  const { city } = await params;
  const location = getLocationBySlug(city);
  if (!location) return {};
  return {
    title: location.metaTitle,
    description: location.metaDescription,
  };
}

export default async function LocationDetailPage({
  params,
}: {
  params: Promise<{ city: string }>;
}) {
  const { city } = await params;
  const location = getLocationBySlug(city);
  if (!location) notFound();

  const otherLocations = locations.filter((l) => l.slug !== city);
  const localBusinessSchema = getLocalBusinessSchema(location);
  const faqSchema = getFaqSchema(location.faq);
  const breadcrumbSchema = getBreadcrumbSchema([
    { label: "Locations", href: "/locations" },
    { label: location.city },
  ]);

  return (
    <>
      <Navbar />
      <main id="main-content">
        <section className="relative overflow-hidden border-b-2 border-border">
          <div className="absolute inset-0">
            <Image
              src={location.image}
              alt={`${location.city}, Florida`}
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/80 to-white/60" />
          </div>

          <div className="relative mx-auto max-w-7xl px-4 pb-16 pt-32 sm:px-6 sm:pt-36 lg:px-8">
            <Breadcrumb
              items={[
                { label: "Locations", href: "/locations" },
                { label: location.city },
              ]}
            />
            <div className="grid gap-10 lg:grid-cols-[1fr_auto]">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">
                  {location.city}, Florida
                </p>
                <h1 className="mt-4 max-w-3xl font-display text-balance font-semibold tracking-tight text-gray-900">
                  Trusted HVAC in {location.city}.
                </h1>
                <p className="mt-4 max-w-2xl text-lg leading-8 text-gray-600">
                  {location.description}
                </p>
                <div className="mt-6 flex flex-wrap gap-3 text-sm text-gray-500">
                  <span className="inline-flex items-center gap-1.5 rounded-md border border-border bg-white/80 px-3 py-1 backdrop-blur-sm">
                    <Star className="size-3.5 fill-amber-400 text-amber-400" />
                    {brand.rating}-Star Rated
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-md border border-border bg-white/80 px-3 py-1 backdrop-blur-sm">
                    <CheckCircle2 className="size-3.5 text-accent" />
                    {brand.license}
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-md border border-border bg-white/80 px-3 py-1 backdrop-blur-sm">
                    <MapPin className="size-3.5" />
                    {location.serviceAreas.length}+ areas served
                  </span>
                </div>
              </div>
              <div className="flex flex-col gap-3 lg:pt-10">
                <Button
                  render={
                    <a href={toTel(location.phone)} className="min-h-12 rounded-md px-6 text-base" />
                  }
                  className="rounded-md bg-accent px-6 font-bold text-gray-900 shadow-lg hover:bg-accent/90"
                >
                  <Phone className="size-4" />
                  Call {location.phone}
                </Button>
                <Button
                  render={
                    <Link href="/contact" className="min-h-12 rounded-md px-6 text-base" />
                  }
                  variant="outline"
                  className="rounded-md border-2 border-primary/30 bg-white/90 text-gray-900 backdrop-blur-sm hover:bg-white"
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
                    HVAC services available in {location.city}
                  </h2>
                  <p className="text-base leading-8 text-gray-600">
                    Whether you need routine maintenance, a major installation, or an emergency repair, our {location.city} service team is ready to help. We keep our response times fast so you&apos;re never waiting long.
                  </p>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  {services.map((service) => {
                    const Icon = getServiceIcon(service.icon);
                    return (
                      <Link
                        key={service.slug}
                        href={`/services/${service.slug}`}
                        className="chief-card group flex items-start gap-4 rounded-md bg-white p-4 transition hover:border-primary/30 hover:shadow-sm"
                      >
                        <div className="flex size-10 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary">
                          <Icon className="size-5" />
                        </div>
                        <div>
                          <p className="font-medium text-gray-900 group-hover:text-primary">{service.name}</p>
                          <p className="mt-1 text-sm leading-6 text-gray-600">{service.shortDescription}</p>
                        </div>
                      </Link>
                    );
                  })}
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-900">
                    Why {location.city} residents choose us
                  </h3>
                  <ul className="space-y-3">
                    {[
                      `Fast response times throughout ${location.city}`,
                      `${brand.yearsInBusiness}+ years serving the local community`,
                      `${brand.reviewCount}+ five-star reviews from satisfied customers`,
                      `${brand.license} with ${brand.insurance.toLowerCase()} coverage`,
                      "Upfront pricing with no hidden fees",
                      "Same-day service available for emergencies",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-accent" />
                        <span className="text-sm leading-7 text-gray-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {location.reviews.length > 0 && (
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-gray-900">
                      What {location.city} customers say
                    </h3>
                    <div className="space-y-4">
                      {location.reviews.map((review) => (
                        <div key={review.name} className="chief-card rounded-md bg-white p-5">
                          <div className="flex items-center gap-2">
                            <div className="flex gap-0.5">
                              {Array.from({ length: review.rating }).map((_, i) => (
                                <Star key={i} className="size-4 fill-amber-400 text-amber-400" />
                              ))}
                            </div>
                            <Quote className="ml-auto size-4 text-primary/30" />
                          </div>
                          <p className="mt-3 text-sm leading-7 text-gray-600">&ldquo;{review.quote}&rdquo;</p>
                          <p className="mt-3 text-sm font-semibold text-gray-900">{review.name} — {review.service}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-900">Find us on Google Maps</h3>
                  <div className="chief-card overflow-hidden rounded-md">
                    <iframe
                      src={`https://www.google.com/maps?q=${brand.name}+${location.city}&output=embed`}
                      width="100%"
                      height="300"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title={`${brand.name} ${location.city} on Google Maps`}
                    />
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {location.city} HVAC FAQ
                  </h3>
                  <div className="space-y-4">
                    {location.faq.map((item) => (
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
                    {location.city} Service Info
                  </p>
                  <dl className="mt-4 space-y-4">
                    {[
                      { label: "Company", value: brand.name },
                      { label: "Phone", value: location.phone },
                      { label: "Hours", value: brand.hours },
                      { label: "Rating", value: `${brand.rating}/5 (${brand.reviewCount}+ reviews)` },
                      { label: "Emergency", value: brand.emergencyLabel },
                    ].map(({ label, value }) => (
                      <div key={label} className="border-b border-border pb-3 last:border-0 last:pb-0">
                        <dt className="text-xs uppercase tracking-[0.2em] text-gray-500">{label}</dt>
                        <dd className="mt-1 text-sm font-medium text-gray-700">{value}</dd>
                      </div>
                    ))}
                  </dl>
                </div>

                <div className="chief-card rounded-md border-2 border-primary/20 bg-primary/[0.04] p-6">
                  <p className="text-lg font-semibold text-gray-900">Your {location.city} HVAC Chief</p>
                  <p className="mt-2 text-sm leading-7 text-gray-600">
                    Deploy a local technician today — same-day appointments available.
                  </p>
                  <a
                    href={toTel(location.phone)}
                    aria-label={`Call ${location.phone} for HVAC service in ${location.city}`}
                    className="mt-4 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-md bg-accent text-sm font-bold text-gray-900 transition hover:bg-accent/90"
                  >
                    <Phone className="size-4" aria-hidden="true" />
                    Call {location.phone}
                  </a>
                  <a
                    href="/contact"
                    className="mt-2 inline-flex min-h-10 w-full items-center justify-center gap-2 rounded-md border-2 border-primary/30 bg-white text-sm font-medium text-gray-900 transition hover:border-primary/50 hover:bg-primary/[0.03]"
                  >
                    Request Your Chief Online
                  </a>
                </div>

                <div className="chief-card rounded-md bg-white p-6">
                  <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">
                    Areas Covered
                  </p>
                  <ul className="mt-4 space-y-2">
                    {location.serviceAreas.map((area) => (
                      <li key={area} className="flex items-center gap-2 text-sm text-gray-600">
                        <MapPin className="size-3.5 text-gray-400" />
                        {area}
                      </li>
                    ))}
                  </ul>
                </div>
              </aside>
            </div>
          </div>
        </section>

        {otherLocations.length > 0 && (
          <section className="section-shell border-t-2 border-border bg-secondary">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <h2 className="font-display text-2xl font-semibold text-gray-900">
                Other cities we serve
              </h2>
              <div className="mt-8 grid gap-5 sm:grid-cols-2">
                {otherLocations.map((loc) => (
                  <Link
                    key={loc.slug}
                    href={`/locations/${loc.slug}`}
                    className="chief-card group relative overflow-hidden rounded-md bg-white transition-all duration-300 hover:-translate-y-1 hover:border-primary/20 hover:shadow-lg"
                  >
                    <div className="relative h-36 overflow-hidden">
                      <Image
                        src={loc.image}
                        alt={`HVAC service in ${loc.city}, FL`}
                        fill
                        sizes="(max-width: 640px) 100vw, 50vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-gray-900/20 to-transparent" />
                      <div className="absolute bottom-3 left-4 font-display text-lg font-bold text-white drop-shadow-sm">
                        {loc.city}
                      </div>
                    </div>
                    <div className="flex items-center justify-between p-4">
                      <span className="flex items-center gap-2 text-sm font-semibold text-primary">
                        <Phone className="size-3.5" />
                        {loc.phone.replace("+1 ", "")}
                      </span>
                      <ArrowRight className="size-4 text-gray-400 transition-transform group-hover:translate-x-1 group-hover:text-primary" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        <CtaSection />
      </main>
      <Footer />
      <MobileCallBar />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
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
