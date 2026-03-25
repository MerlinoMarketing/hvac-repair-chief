import Image from "next/image";
import { Award, Phone, ShieldCheck, Star, Thermometer, Zap } from "lucide-react";

import { brand } from "@/config/brand";
import { locations } from "@/config/locations";
import { toTel } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { TrustBadges } from "@/components/shared/trust-badges";
import { DynamicHeroScene } from "@/components/3d/dynamic-loaders";

const mainPhone = locations[0].phone;

export function Hero() {
  return (
    <section
      className="relative overflow-hidden border-b-2 border-border bg-background pt-28 sm:pt-32"
      aria-labelledby="hero-heading"
    >
      {/* Full-bleed background */}
      <div className="absolute inset-0">
        <Image
          src={brand.images.hero}
          alt="HVAC technician servicing an air conditioning system"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>
      <div
        className="absolute inset-0 bg-gradient-to-b from-white/65 via-white/88 to-background"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,oklch(from_var(--theme-primary)_l_c_h_/_0.08),transparent_55%)]"
        aria-hidden="true"
      />

      <div className="relative mx-auto flex min-h-[calc(100svh-4rem)] max-w-7xl items-end px-4 pb-16 sm:px-6 sm:pb-20 lg:px-8">
        <div className="grid w-full gap-12 lg:grid-cols-[minmax(0,1.2fr)_minmax(300px,0.8fr)] lg:items-end">
          {/* Left: headline + CTAs */}
          <div className="space-y-8">
            <div className="stagger-up space-y-6">
              <div className="flex flex-wrap gap-3">
                <Badge className="h-8 rounded-md bg-primary/10 px-3 text-primary ring-1 ring-inset ring-primary/20">
                  <Thermometer className="size-3.5" />
                  {brand.emergencyLabel}
                </Badge>
                <Badge className="h-8 rounded-md bg-accent/10 px-3 text-accent ring-1 ring-inset ring-accent/20">
                  <Zap className="size-3.5" />
                  {brand.turnaroundLabel}
                </Badge>
              </div>

              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
                <div className="chief-card inline-flex items-center gap-2 rounded-md bg-white/90 px-3 py-2 backdrop-blur-sm">
                  <Star className="size-4 fill-amber-400 text-amber-400" />
                  <span className="font-semibold text-gray-900">{brand.rating}</span>
                  <span className="text-gray-500">
                    from {brand.reviewCount}+ local reviews
                  </span>
                </div>
                <div className="inline-flex items-center gap-2 text-gray-500">
                  <ShieldCheck className="size-4 text-accent" />
                  Licensed, insured &amp; EPA certified
                </div>
              </div>

              <h1
                id="hero-heading"
                className="max-w-4xl font-display text-balance font-bold tracking-tight text-gray-900"
              >
                South Florida&rsquo;s Commanding{" "}
                <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                  HVAC
                </span>{" "}
                Authority
              </h1>
              <p className="max-w-2xl text-pretty text-base leading-relaxed text-gray-600 sm:text-lg sm:leading-8">
                For {brand.yearsInBusiness} years, our chief-level technicians have kept Boca Raton and Fort Lauderdale homes cool against relentless South Florida heat. Precision diagnostics, same-day repairs, and upfront pricing on every call.
              </p>
            </div>

            <div className="stagger-up flex flex-col gap-4 sm:flex-row">
              <Button
                render={
                  <a
                    href={toTel(mainPhone)}
                    aria-label={`Call ${mainPhone} to deploy a technician`}
                    className="min-h-14 rounded-md px-8 text-base"
                  />
                }
                size="lg"
                className="rounded-md bg-accent px-8 text-base font-bold text-gray-900 shadow-lg shadow-accent/30 transition-all hover:bg-accent/90 hover:shadow-xl hover:shadow-accent/40"
              >
                <Phone className="size-5" aria-hidden="true" />
                Deploy a Technician — {mainPhone}
              </Button>
              <Button
                render={
                  <a
                    href="/contact"
                    className="min-h-14 rounded-md px-8 text-base"
                  />
                }
                size="lg"
                variant="outline"
                className="rounded-md border-2 border-primary bg-white/90 px-8 text-base font-semibold text-primary shadow-sm backdrop-blur-sm hover:bg-primary hover:text-white"
              >
                Request Your Free Estimate
              </Button>
            </div>

            <div className="stagger-up">
              <TrustBadges variant="compact" />
            </div>
          </div>

          {/* Right: 3D HVAC condenser scene (hidden on mobile for performance) */}
          <aside className="stagger-up hidden lg:block lg:justify-self-end">
            <div className="chief-card max-w-md overflow-hidden rounded-md bg-white/95 shadow-2xl shadow-gray-900/[0.08] backdrop-blur-sm">
              <DynamicHeroScene />
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
