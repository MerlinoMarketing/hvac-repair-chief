import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Phone } from "lucide-react";

import { brand } from "@/config/brand";
import { locations } from "@/config/locations";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { MobileCallBar } from "@/components/layout/mobile-call-bar";
import { CtaSection } from "@/components/shared/cta-section";
import { Breadcrumb } from "@/components/shared/breadcrumb";
import { getBreadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Service Locations | Boca Raton & Fort Lauderdale HVAC",
  description: `${brand.name} operates dedicated HVAC crews in Boca Raton and Fort Lauderdale. Fast dispatch, local expertise across Broward & Palm Beach counties.`,
};

export default function LocationsPage() {
  const breadcrumbSchema = getBreadcrumbSchema([{ label: "Locations" }]);

  return (
    <>
      <Navbar />
      <main id="main-content">
        <section className="relative overflow-hidden border-b-2 border-border pb-16 pt-32 sm:pt-36">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.04] via-transparent to-accent/[0.03]" aria-hidden="true" />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Breadcrumb items={[{ label: "Locations" }]} />
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">
              Where We Work
            </p>
            <h1 className="mt-4 max-w-3xl font-display text-balance font-semibold tracking-tight text-gray-900">
              Dedicated HVAC crews across Broward and Palm Beach counties.
            </h1>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-gray-600">
              Each market has its own dispatched team — local technicians who know the neighborhoods, the building codes, and the specific HVAC demands of your area.
            </p>
          </div>
        </section>

        <section className="section-shell">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="stagger-group grid gap-6 sm:grid-cols-2">
              {locations.map((loc) => (
                <Link
                  key={loc.slug}
                  href={`/locations/${loc.slug}`}
                  className="stagger-up chief-card group relative overflow-hidden rounded-md bg-white transition-all duration-300 hover:-translate-y-1 hover:border-primary/20 hover:shadow-xl hover:shadow-primary/[0.06]"
                >
                  <div className="relative h-44 overflow-hidden">
                    <Image
                      src={loc.image}
                      alt={`HVAC service in ${loc.city}, FL`}
                      fill
                      sizes="(max-width: 640px) 100vw, 50vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-gray-900/20 to-transparent" />
                    <div className="absolute bottom-4 left-5">
                      <h2 className="font-display text-2xl font-bold text-white drop-shadow-sm">
                        {loc.city}
                      </h2>
                    </div>
                  </div>

                  <div className="p-5">
                    <p className="text-sm leading-relaxed text-gray-600">
                      Professional HVAC for homeowners and businesses
                      in {loc.city}.
                    </p>
                    <div className="mt-4 flex items-center justify-between">
                      <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary">
                        <Phone className="size-4" />
                        {loc.phone.replace("+1 ", "")}
                      </span>
                      <span className="inline-flex items-center gap-1 text-sm font-medium text-gray-500 transition-colors group-hover:text-primary">
                        View details
                        <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </span>
                    </div>
                  </div>
                </Link>
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
    </>
  );
}
