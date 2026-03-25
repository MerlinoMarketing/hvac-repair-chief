import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BadgeCheck, Building2, Phone, Shield, ThumbsUp } from "lucide-react";

import { brand } from "@/config/brand";
import { locations } from "@/config/locations";
import { toTel } from "@/lib/utils";
import { SectionHeading } from "@/components/shared/section-heading";

const mainPhone = locations[0].phone;

export function AboutPreview() {
  return (
    <section id="about" className="section-shell bg-secondary" aria-labelledby="about-heading">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:px-8">
        <div className="stagger-up">
          <div className="chief-card relative overflow-hidden rounded-md bg-white shadow-lg">
            <div className="relative aspect-[4/3]">
              <Image
                src={brand.images.about}
                alt={`${brand.name} team at work`}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
            <div className="absolute bottom-0 inset-x-0 p-6">
              <div className="insignia-stat rounded-md border-2 border-border bg-white/95 p-5 shadow-lg backdrop-blur-sm">
                <div className="flex items-center gap-4">
                  <div className="flex size-14 items-center justify-center rounded-md bg-gradient-to-br from-primary/10 to-accent/10">
                    <span className="font-display text-2xl font-bold text-primary">{brand.yearsInBusiness}+</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Years in Business</p>
                    <p className="text-sm text-gray-500">Serving South Florida communities</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <SectionHeading
            eyebrow="About Us"
            title="Command Authority in South Florida HVAC."
            description={`${brand.yearsInBusiness} years ago we started with one truck and a commitment to honest diagnostics. Today our crews cover Boca Raton, Fort Lauderdale, and communities across Broward and Palm Beach counties — still with the same chief-level accountability on every job.`}
          />

          <div className="stagger-group grid gap-4 sm:grid-cols-2">
            {[
              {
                icon: BadgeCheck,
                title: brand.license,
                copy: "Florida-credentialed HVAC contractors meeting all Broward and Palm Beach County permitting standards.",
              },
              {
                icon: Shield,
                title: brand.insurance,
                copy: "Full general liability plus workers' compensation — your property is protected on every service call.",
              },
              {
                icon: Building2,
                title: "Multi-City Coverage",
                copy: "Dedicated crews in Boca Raton and Fort Lauderdale with rapid dispatch across both counties.",
              },
              {
                icon: ThumbsUp,
                title: "Satisfaction Guaranteed",
                copy: `${brand.rating}/5 average across ${brand.reviewCount}+ verified Google reviews from South Florida homeowners.`,
              },
            ].map(({ icon: Icon, title, copy }) => (
              <article
                key={title}
                className="stagger-up chief-card group rounded-md bg-white p-5 transition-all hover:border-primary/20 hover:shadow-sm"
              >
                <div className="flex items-start gap-4">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-md bg-gradient-to-br from-primary/10 to-accent/10 transition-colors group-hover:from-primary/15 group-hover:to-accent/15">
                    <Icon className="size-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-gray-600">{copy}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="stagger-up flex flex-wrap items-center gap-4">
            <a
              href={toTel(mainPhone)}
              className="inline-flex min-h-11 items-center gap-2 rounded-md bg-accent px-5 text-sm font-bold text-gray-900 shadow-sm transition hover:bg-accent/90 hover:shadow-md"
            >
              <Phone className="size-4" />
              Call {mainPhone}
            </a>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition hover:gap-3"
            >
              Read our full story
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
