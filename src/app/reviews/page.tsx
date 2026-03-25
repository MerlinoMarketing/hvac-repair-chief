import type { Metadata } from "next";
import { BadgeCheck, ExternalLink, Quote, Shield, Star } from "lucide-react";

import { brand } from "@/config/brand";
import { locations } from "@/config/locations";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { MobileCallBar } from "@/components/layout/mobile-call-bar";
import { CtaSection } from "@/components/shared/cta-section";
import { Breadcrumb } from "@/components/shared/breadcrumb";
import { GoogleReviewsBadge } from "@/components/shared/google-reviews-badge";
import { getBreadcrumbSchema, getReviewsPageSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: `Customer Reviews | ${brand.rating}-Star Rated HVAC in South Florida`,
  description: `Read ${brand.reviewCount}+ verified Google reviews from Boca Raton & Fort Lauderdale homeowners. ${brand.rating}-star rated ${brand.name} HVAC service.`,
};

const allReviews = locations.flatMap((loc) =>
  loc.reviews.map((r) => ({ ...r, location: loc.city, cidUrl: loc.cidUrl }))
);

export default function ReviewsPage() {
  const breadcrumbSchema = getBreadcrumbSchema([{ label: "Reviews" }]);
  const reviewsPageSchema = getReviewsPageSchema();

  return (
    <>
      <Navbar />
      <main id="main-content">
        <section className="relative overflow-hidden border-b-2 border-border pb-16 pt-32 sm:pt-36">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.04] via-transparent to-accent/[0.03]" aria-hidden="true" />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Breadcrumb items={[{ label: "Reviews" }]} />
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">
              Customer Reviews
            </p>
            <h1 className="mt-4 max-w-3xl font-display text-balance font-semibold tracking-tight text-gray-900">
              {brand.rating}-star average across {brand.reviewCount}+ verified Google reviews.
            </h1>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-gray-600">
              Unfiltered feedback from homeowners in Boca Raton, Fort Lauderdale, and communities across Broward and Palm Beach counties. Every review reflects a real service call.
            </p>
          </div>
        </section>

        <section className="section-shell">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-8 flex justify-center">
              <GoogleReviewsBadge />
            </div>

            {/* Aggregate rating card with trust indicators */}
            <div className="mb-12 rounded-md border-2 border-border bg-secondary p-6">
              <div className="flex flex-col items-center justify-between gap-6 text-center sm:flex-row sm:text-left">
                <div className="flex items-center gap-4">
                  <div className="insignia-stat flex size-16 items-center justify-center rounded-md bg-primary/10 text-primary">
                    <Star className="size-8 fill-amber-400 text-amber-400" />
                  </div>
                  <div>
                    <p className="font-display text-3xl font-semibold text-gray-900">{brand.rating}/5</p>
                    <p className="text-sm text-gray-500">{brand.reviewCount}+ verified reviews across South Florida</p>
                  </div>
                </div>
                <div className="flex flex-wrap justify-center gap-2">
                  {locations.map((loc) => (
                    <a
                      key={loc.slug}
                      href={loc.cidUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="chief-card rounded-md bg-white px-3 py-1.5 text-sm text-gray-600 transition hover:border-primary/30 hover:text-primary"
                    >
                      {loc.city}
                    </a>
                  ))}
                </div>
              </div>
              {/* Trust indicators row */}
              <div className="mt-4 flex flex-wrap items-center justify-center gap-4 border-t border-border pt-4 text-xs text-gray-500 sm:justify-start">
                <span className="flex items-center gap-1.5">
                  <BadgeCheck className="size-3.5 text-green-500" />
                  All reviews verified through Google
                </span>
                <span className="hidden h-3 w-px bg-gray-300 sm:block" />
                <span className="flex items-center gap-1.5">
                  <Shield className="size-3.5 text-primary" />
                  FL Licensed &amp; Insured
                </span>
                <span className="hidden h-3 w-px bg-gray-300 sm:block" />
                <span className="flex items-center gap-1.5">
                  <Star className="size-3.5 text-amber-400" />
                  {brand.yearsInBusiness}+ years serving South Florida
                </span>
              </div>
            </div>

            <div className="stagger-group grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {allReviews.map((review, index) => (
                <article
                  key={`${review.name}-${index}`}
                  className="stagger-up review-card chief-card rounded-md bg-white p-6"
                >
                  <div className="flex h-full flex-col gap-5">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1">
                        {Array.from({ length: review.rating }).map((_, i) => (
                          <Star key={i} className="size-4 fill-amber-400 text-amber-400" />
                        ))}
                      </div>
                      <div className="rounded-md border-2 border-primary/10 bg-primary/5 p-2 text-primary">
                        <Quote className="size-4" />
                      </div>
                    </div>
                    <p className="text-base leading-7 text-gray-600">
                      &ldquo;{review.quote}&rdquo;
                    </p>
                    <div className="mt-auto border-t border-gray-100 pt-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-semibold text-gray-900">{review.name}</p>
                          <p className="text-sm text-gray-500">
                            {review.location} &middot; {review.service}
                          </p>
                        </div>
                        <a
                          href={review.cidUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center gap-1 text-xs text-gray-400 transition hover:text-primary"
                        >
                          View on Google
                          <ExternalLink className="size-3" />
                        </a>
                      </div>
                    </div>
                  </div>
                </article>
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewsPageSchema) }}
      />
    </>
  );
}
