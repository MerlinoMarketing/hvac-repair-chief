import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

import { brand } from "@/config/brand";
import { services } from "@/config/services";
import { getServiceIcon } from "@/lib/icons";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { MobileCallBar } from "@/components/layout/mobile-call-bar";
import { CtaSection } from "@/components/shared/cta-section";
import { Breadcrumb } from "@/components/shared/breadcrumb";
import { getBreadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "HVAC Services | AC Repair, Installation & Maintenance",
  description: `Full-spectrum HVAC services from ${brand.name} — AC repair, system installation, duct cleaning & maintenance across Boca Raton and Fort Lauderdale.`,
};

export default function ServicesPage() {
  const breadcrumbSchema = getBreadcrumbSchema([{ label: "Services" }]);

  return (
    <>
      <Navbar />
      <main id="main-content">
        <section className="relative overflow-hidden border-b-2 border-border pb-16 pt-32 sm:pt-36">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.04] via-transparent to-accent/[0.03]" aria-hidden="true" />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Breadcrumb items={[{ label: "Services" }]} />
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">
              What We Do
            </p>
            <h1 className="mt-4 max-w-3xl font-display text-balance font-semibold tracking-tight text-gray-900">
              Full-spectrum HVAC services built for South Florida conditions.
            </h1>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-gray-600">
              Salt air corrodes coils. Year-round humidity overworks compressors. Our {brand.yearsInBusiness}-year team knows exactly how to diagnose, repair, and install systems that hold up in this climate.
            </p>
          </div>
        </section>

        <section className="section-shell">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="stagger-group grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => {
                const Icon = getServiceIcon(service.icon);
                return (
                  <Link
                    key={service.slug}
                    href={`/services/${service.slug}`}
                    className="stagger-up chief-card group relative overflow-hidden rounded-md bg-white transition-all duration-300 hover:-translate-y-1 hover:border-primary/20 hover:shadow-xl hover:shadow-primary/[0.06]"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={service.image}
                        alt={service.name}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 via-gray-900/10 to-transparent" />
                      <div className="absolute bottom-3 left-4 flex size-10 items-center justify-center rounded-md bg-white/90 text-primary shadow-sm backdrop-blur-sm">
                        <Icon className="size-5" />
                      </div>
                    </div>

                    <div className="p-5">
                      <h2 className="font-display text-xl font-semibold text-gray-900">
                        {service.name}
                      </h2>
                      <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-gray-600">
                        {service.shortDescription}
                      </p>
                      <div className="mt-4 flex items-center gap-2 text-sm font-medium text-primary">
                        Learn more
                        <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </div>
                    </div>
                  </Link>
                );
              })}
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
