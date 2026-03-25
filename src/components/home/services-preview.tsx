import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Phone, Shield, Star } from "lucide-react";

import { brand } from "@/config/brand";
import { services } from "@/config/services";
import { locations } from "@/config/locations";
import { getServiceIcon } from "@/lib/icons";
import { toTel } from "@/lib/utils";
import { SectionHeading } from "@/components/shared/section-heading";
import { DynamicServiceIcon3D } from "@/components/3d/dynamic-loaders";

const mainPhone = locations[0].phone;

export function ServicesPreview() {
  return (
    <section id="services" className="section-shell" aria-labelledby="services-heading">
      <div className="mx-auto max-w-7xl space-y-12 px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Our Services"
          title="Chief-grade HVAC solutions for every South Florida home."
          description={`From emergency compressor failures in Boca Raton to full system installations in Fort Lauderdale, our ${brand.yearsInBusiness}-year track record covers every heating and cooling challenge the subtropical climate throws at you.`}
        />

        <div className="stagger-group grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => {
            const Icon = getServiceIcon(service.icon);

            return (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="stagger-up chief-card group relative overflow-hidden rounded-md bg-white transition-all duration-300 hover:-translate-y-1 hover:border-primary/20 hover:shadow-xl hover:shadow-primary/[0.06]"
              >
                {/* Service image thumbnail with 3D icon overlay */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  {/* 3D icon (hidden on mobile, shown on desktop) */}
                  <div className="absolute bottom-1 left-1 hidden md:block">
                    <DynamicServiceIcon3D icon={service.icon} />
                  </div>
                  {/* 2D fallback icon (shown on mobile) */}
                  <div className="absolute bottom-3 left-3 flex size-10 items-center justify-center rounded-md bg-white/90 text-primary shadow-sm backdrop-blur-sm md:hidden">
                    <Icon className="size-5" />
                  </div>
                </div>

                <div className="p-5">
                  <h3 className="font-display text-xl font-semibold text-gray-900">
                    {service.name}
                  </h3>
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

        {/* Trust bar */}
        <div className="stagger-up rounded-md border border-gray-100 bg-white p-4 shadow-sm">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-sm text-gray-600">
                <span className="font-semibold text-gray-900">Trusted by {brand.reviewCount}+ South Florida homeowners</span>
                {" "}&middot; {brand.rating}-star average on Google
              </p>
            </div>
            <div className="flex items-center gap-4 text-xs text-gray-500">
              <span className="flex items-center gap-1"><Shield className="size-3.5 text-primary" /> FL Licensed</span>
              <span className="flex items-center gap-1"><Shield className="size-3.5 text-accent" /> Fully Insured</span>
            </div>
          </div>
        </div>

        <div className="stagger-up flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href={toTel(mainPhone)}
            className="inline-flex min-h-12 items-center gap-2 rounded-md bg-accent px-6 text-sm font-bold text-gray-900 shadow-md shadow-accent/25 transition hover:bg-accent/90 hover:shadow-lg"
          >
            <Phone className="size-4" />
            Deploy a Technician — {mainPhone}
          </a>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition hover:gap-3"
          >
            View All Services
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
