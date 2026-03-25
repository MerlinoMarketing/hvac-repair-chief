import type { Metadata } from "next";
import { AlertTriangle, Clock3, Phone, ShieldCheck, Zap } from "lucide-react";

import { brand } from "@/config/brand";
import { locations } from "@/config/locations";
import { toTel } from "@/lib/utils";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { MobileCallBar } from "@/components/layout/mobile-call-bar";
import { Breadcrumb } from "@/components/shared/breadcrumb";
import { getBreadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "24/7 Emergency HVAC | Immediate Response",
  description: `HVAC emergency in South Florida? ${brand.name} responds 24/7 with average arrival under 60 minutes. AC failure, refrigerant leaks, electrical faults — call now.`,
};

export default function EmergencyPage() {
  const breadcrumbSchema = getBreadcrumbSchema([{ label: "Emergency" }]);

  return (
    <>
      <Navbar />
      <main id="main-content">
        <section className="border-b-2 border-border bg-primary/5 pb-16 pt-32 sm:pt-36">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Breadcrumb items={[{ label: "Emergency" }]} />
            <div className="mx-auto max-w-3xl text-center">
              <div className="mx-auto flex size-20 items-center justify-center rounded-md bg-accent/15 text-accent">
                <AlertTriangle className="size-10" />
              </div>
              <h1 className="mt-6 font-display text-balance font-semibold tracking-tight text-gray-900">
                24/7 Emergency HVAC
              </h1>
              <p className="mt-4 text-lg leading-8 text-gray-600 sm:text-xl">
                AC failure? Refrigerant leak? Electrical fault? Don&apos;t wait. Our emergency crews are dispatched across South Florida around the clock.
              </p>

              <div className="mt-10 space-y-4">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">
                  Call your city — we&apos;ll dispatch the nearest crew
                </p>
                <div className="grid gap-3 sm:grid-cols-2">
                  {locations.map((loc) => (
                    <a
                      key={loc.slug}
                      href={toTel(loc.phone)}
                      className="chief-card group flex items-center justify-center gap-3 rounded-md bg-white p-4 transition hover:border-primary/30 hover:shadow-md"
                    >
                      <Phone className="size-5 text-primary" />
                      <div className="text-left">
                        <p className="text-sm font-semibold text-gray-900">{loc.city}</p>
                        <p className="text-lg font-bold text-primary">{loc.phone.replace("+1 ", "")}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-shell">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="stagger-group grid gap-6 sm:grid-cols-3">
              {[
                { icon: Clock3, title: "Under 60 Min", desc: "Average emergency response time across South Florida" },
                { icon: Zap, title: "24/7/365", desc: "Nights, weekends, and holidays — no exceptions" },
                { icon: ShieldCheck, title: "No Extra Charge", desc: "Same fair rates for emergency calls" },
              ].map(({ icon: Icon, title, desc }) => (
                <div key={title} className="stagger-up chief-card rounded-md bg-white p-6 text-center">
                  <div className="mx-auto flex size-14 items-center justify-center rounded-md bg-primary/10 text-primary">
                    <Icon className="size-6" />
                  </div>
                  <p className="mt-4 font-display text-xl font-semibold text-gray-900">{title}</p>
                  <p className="mt-2 text-sm text-gray-600">{desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 space-y-6">
              <h2 className="font-display text-2xl font-semibold text-gray-900">
                What qualifies as an HVAC emergency?
              </h2>
              <div className="stagger-group grid gap-4 sm:grid-cols-2">
                {[
                  "Complete AC failure in extreme heat",
                  "Refrigerant leak (hissing, ice on coils)",
                  "Burning smell from your HVAC system",
                  "Electrical sparking or tripped breakers",
                  "Flooding from condensate drain overflow",
                  "Carbon monoxide alarm triggered",
                  "No heating during a cold snap",
                  "Unusual loud noises from the unit",
                ].map((item) => (
                  <div key={item} className="stagger-up chief-card flex items-center gap-3 rounded-md bg-white p-4">
                    <AlertTriangle className="size-5 shrink-0 text-accent" />
                    <span className="text-sm text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-12 rounded-md border-2 border-primary/20 bg-primary/[0.05] p-8 text-center">
              <p className="font-display text-2xl font-semibold text-gray-900 sm:text-3xl">
                Don&apos;t wait — call now
              </p>
              <p className="mt-3 text-gray-600">
                Every minute counts during an HVAC emergency. Our dispatcher will connect you with the nearest available crew.
              </p>
              <a
                href={toTel(locations[0].phone)}
                aria-label={`Call ${locations[0].phone} for emergency HVAC service`}
                className="mt-6 inline-flex min-h-14 items-center justify-center gap-3 rounded-md bg-accent px-8 text-xl font-bold text-gray-900 shadow-lg shadow-accent/25 transition hover:bg-accent/90"
              >
                <Phone className="size-6" aria-hidden="true" />
                {locations[0].phone}
              </a>
            </div>
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
