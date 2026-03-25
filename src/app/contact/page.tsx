import type { Metadata } from "next";
import { Clock3, Lock, Mail, MapPin, Phone, Shield, Siren, Star } from "lucide-react";

import { brand } from "@/config/brand";
import { locations } from "@/config/locations";
import { toTel } from "@/lib/utils";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { MobileCallBar } from "@/components/layout/mobile-call-bar";
import { Breadcrumb } from "@/components/shared/breadcrumb";
import { ContactForm } from "@/components/shared/contact-form";
import { SectionHeading } from "@/components/shared/section-heading";
import { getBreadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Contact Us | Free HVAC Estimate in South Florida",
  description: `Request a free HVAC estimate from ${brand.name}. Same-day appointments in Boca Raton & Fort Lauderdale. Call or submit our online form now.`,
};

export default function ContactPage() {
  const breadcrumbSchema = getBreadcrumbSchema([{ label: "Contact" }]);

  return (
    <>
      <Navbar />
      <main id="main-content">
        <section className="relative overflow-hidden border-b-2 border-border pb-16 pt-32 sm:pt-36">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.04] via-transparent to-accent/[0.03]" aria-hidden="true" />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Breadcrumb items={[{ label: "Contact" }]} />
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">
              Get In Touch
            </p>
            <h1 className="mt-4 max-w-3xl font-display text-balance font-semibold tracking-tight text-gray-900">
              Get your free HVAC estimate today.
            </h1>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-gray-600">
              Call your local crew for same-day scheduling in Boca Raton or Fort Lauderdale, or submit the form below. We respond within one business hour during office hours.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              {locations.map((loc) => (
                <a
                  key={loc.slug}
                  href={toTel(loc.phone)}
                  className="inline-flex min-h-12 items-center gap-2 rounded-md bg-accent px-5 text-sm font-bold text-gray-900 shadow-md shadow-accent/25 transition hover:bg-accent/90 hover:shadow-lg"
                >
                  <Phone className="size-4" />
                  {loc.city} — {loc.phone.replace("+1 ", "")}
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="section-shell">
          <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(320px,0.9fr)] lg:px-8">
            <div className="space-y-8">
              <SectionHeading
                eyebrow="Online Form"
                title={`Get a free estimate from ${brand.name}.`}
                description="Fill out the form and we'll respond within 1 business hour during office hours."
              />
              <div className="stagger-up">
                <ContactForm />
              </div>
              {/* Security & trust badge below form */}
              <div className="flex flex-wrap items-center gap-4 rounded-md border border-gray-100 bg-gray-50/50 px-4 py-3 text-xs text-gray-500">
                <span className="flex items-center gap-1.5">
                  <Lock className="size-3.5 text-green-600" />
                  Your information is secure &amp; never shared
                </span>
                <span className="hidden h-3 w-px bg-gray-200 sm:block" />
                <span className="flex items-center gap-1.5">
                  <Clock3 className="size-3.5 text-primary" />
                  We respond within 1 business hour
                </span>
              </div>
            </div>

            <aside className="space-y-5">
              {/* Rating & trust card */}
              <div className="chief-card stagger-up rounded-md bg-white p-5">
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="size-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="font-display text-lg font-bold text-gray-900">{brand.rating}/5</span>
                </div>
                <p className="mt-1 text-sm text-gray-500">{brand.reviewCount}+ verified Google reviews</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  <span className="inline-flex items-center gap-1 rounded-md bg-primary/5 px-2 py-1 text-xs font-medium text-primary">
                    <Shield className="size-3" /> FL Licensed
                  </span>
                  <span className="inline-flex items-center gap-1 rounded-md bg-accent/10 px-2 py-1 text-xs font-medium text-accent">
                    <Shield className="size-3" /> Fully Insured
                  </span>
                  <span className="inline-flex items-center gap-1 rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700">
                    <Clock3 className="size-3" /> Same-Day Service
                  </span>
                </div>
              </div>

              {/* General contact info */}
              <div className="chief-card stagger-up rounded-md bg-white p-6">
                <p className="text-sm uppercase tracking-[0.3em] text-primary">General Info</p>
                <div className="mt-5 space-y-4">
                  {[
                    { icon: Mail, label: "Email", value: brand.email, href: `mailto:${brand.email}` },
                    { icon: Clock3, label: "Hours", value: brand.hours },
                  ].map(({ icon: Icon, label, value, href }) => (
                    <div key={label} className="chief-card flex items-start gap-4 rounded-md px-4 py-3">
                      <div className="flex size-10 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary">
                        <Icon className="size-4.5" />
                      </div>
                      <div>
                        <p className="text-xs uppercase tracking-[0.25em] text-gray-500">{label}</p>
                        {href ? (
                          <a href={href} className="mt-1 text-sm leading-6 text-gray-700 hover:text-primary">
                            {value}
                          </a>
                        ) : (
                          <p className="mt-1 text-sm leading-6 text-gray-700">{value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Location phones */}
              <div className="chief-card stagger-up rounded-md bg-white p-6">
                <p className="text-sm uppercase tracking-[0.3em] text-primary">Call Your City</p>
                <div className="mt-5 space-y-3">
                  {locations.map((loc) => (
                    <a
                      key={loc.slug}
                      href={toTel(loc.phone)}
                      className="chief-card flex items-center gap-3 rounded-md px-4 py-3 transition hover:border-primary/30 hover:bg-gray-50"
                    >
                      <Phone className="size-4 text-primary" />
                      <div className="flex-1">
                        <p className="text-sm font-medium text-gray-900">{loc.city}</p>
                      </div>
                      <span className="text-sm font-medium text-primary">
                        {loc.phone.replace("+1 ", "")}
                      </span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Emergency response card */}
              <div className="stagger-up chief-card rounded-md border-2 border-primary/20 bg-primary/[0.04] p-6">
                <div className="flex items-center gap-3">
                  <div className="flex size-10 items-center justify-center rounded-md bg-primary/10">
                    <Siren className="size-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-900">Emergency? We Dispatch in Under 60 Minutes.</p>
                    <p className="text-xs text-gray-500">24/7 emergency HVAC crews across South Florida</p>
                  </div>
                </div>
                <a
                  href={toTel(locations[0].phone)}
                  aria-label={`Call ${locations[0].phone} for emergency HVAC dispatch`}
                  className="mt-4 inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-md bg-accent text-sm font-bold text-gray-900 transition hover:bg-accent/90"
                >
                  <Phone className="size-4" aria-hidden="true" />
                  Emergency Dispatch Now
                </a>
              </div>

              {/* Map placeholder */}
              <div className="chief-card stagger-up overflow-hidden rounded-md">
                <div className="flex min-h-[280px] items-end bg-secondary p-6">
                  <div className="chief-card rounded-md bg-white p-5">
                    <p className="text-sm uppercase tracking-[0.28em] text-primary">
                      Service Area
                    </p>
                    <p className="mt-3 max-w-xs text-base leading-7 text-gray-600">
                      We proudly serve communities across Broward and Palm Beach counties. Contact us to confirm availability in your area.
                    </p>
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {locations.map((loc) => (
                        <span
                          key={loc.slug}
                          className="inline-flex items-center gap-1 rounded-md bg-primary/5 px-2 py-1 text-xs text-primary"
                        >
                          <MapPin className="size-3" />
                          {loc.city}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </section>
      </main>
      <Footer />
      <MobileCallBar />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  );
}
