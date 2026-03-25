import Link from "next/link";
import { ArrowRight, Phone, ShieldCheck, Star } from "lucide-react";

import { brand } from "@/config/brand";
import { locations } from "@/config/locations";
import { toTel } from "@/lib/utils";
import { DynamicAirflowParticles } from "@/components/3d/dynamic-loaders";

const mainPhone = locations[0].phone;

export function CtaSection() {
  return (
    <section className="section-shell">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="stagger-up chief-card relative overflow-hidden rounded-md bg-gradient-to-br from-primary/[0.08] via-accent/[0.04] to-primary/[0.06] p-8 shadow-xl sm:p-10">
          {/* Airflow particle background */}
          <DynamicAirflowParticles />
          {/* Chevron decorative background */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,oklch(from_var(--theme-primary)_l_c_h_/_0.06),transparent_50%)]" aria-hidden="true" />
          <div className="absolute -right-16 -top-16 size-48 rotate-45 bg-primary/[0.03]" aria-hidden="true" />
          <div className="absolute -bottom-12 -left-12 size-36 rotate-45 bg-accent/[0.03]" aria-hidden="true" />

          <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl space-y-4">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary sm:text-sm sm:tracking-[0.3em]">
                Ready to Take Command?
              </p>
              <h2 className="font-display text-balance font-bold text-gray-900">
                Deploy your HVAC technician now — same-day service available.
              </h2>
              <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                <span className="inline-flex items-center gap-1.5">
                  <ShieldCheck className="size-4 text-primary" aria-hidden="true" />
                  Licensed & Insured
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Star className="size-4 fill-amber-400 text-amber-400" aria-hidden="true" />
                  {brand.rating}-Star Rated
                </span>
              </div>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <a
                href={toTel(mainPhone)}
                aria-label={`Call ${mainPhone} for emergency dispatch`}
                className="inline-flex min-h-14 items-center justify-center gap-2 rounded-md bg-accent px-8 text-base font-bold text-gray-900 shadow-lg shadow-accent/30 transition hover:bg-accent/90 hover:shadow-xl"
              >
                <Phone className="size-5" aria-hidden="true" />
                Emergency Dispatch — {mainPhone}
              </a>
              <Link
                href="/contact"
                className="inline-flex min-h-14 items-center justify-center gap-2 rounded-md border-2 border-primary/30 bg-white px-8 text-base font-semibold text-gray-900 transition hover:border-primary/50 hover:bg-primary/[0.03]"
              >
                Request Your Chief
                <ArrowRight className="size-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
