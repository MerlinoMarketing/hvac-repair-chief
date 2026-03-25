import Link from "next/link";
import { ArrowRight, ExternalLink, Quote, Star } from "lucide-react";

import { brand } from "@/config/brand";
import { locations } from "@/config/locations";
import { SectionHeading } from "@/components/shared/section-heading";
import { GoogleReviewsBadge } from "@/components/shared/google-reviews-badge";

const featuredReviews = locations.map((loc) => ({
  ...loc.reviews[0],
  location: loc.city,
  citySlug: loc.slug,
  cidUrl: loc.cidUrl,
})).slice(0, 6);

export function ReviewsSection() {
  return (
    <section id="reviews" className="section-shell" aria-labelledby="reviews-heading">
      <div className="mx-auto max-w-7xl space-y-12 px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Customer Reviews"
          title={`Homeowners across South Florida rank ${brand.name} among the best.`}
          description={`${brand.reviewCount}+ verified Google reviews with a ${brand.rating}-star average. Read what Boca Raton and Fort Lauderdale residents say about our chief-level service.`}
          align="center"
        />

        <div className="stagger-up flex justify-center">
          <GoogleReviewsBadge />
        </div>

        <div className="stagger-group grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featuredReviews.map((review) => (
            <article
              key={`${review.name}-${review.service}`}
              className="stagger-up review-card chief-card group relative overflow-hidden rounded-md bg-white p-6"
            >
              {/* Accent top border */}
              <div className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-primary/20 via-accent/30 to-primary/20 transition-all group-hover:h-1 group-hover:from-primary/40 group-hover:via-accent/50 group-hover:to-primary/40" />

              <div className="flex h-full flex-col gap-5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    {Array.from({ length: review.rating }).map((_, index) => (
                      <Star
                        key={index}
                        className="size-4 fill-amber-400 text-amber-400"
                      />
                    ))}
                  </div>
                  <div className="rounded-md bg-gradient-to-br from-primary/5 to-accent/5 p-2 text-primary">
                    <Quote className="size-4" />
                  </div>
                </div>

                <blockquote className="text-base leading-7 text-gray-600">
                  &ldquo;{review.quote}&rdquo;
                </blockquote>

                <div className="mt-auto border-t border-gray-100 pt-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold text-gray-900">{review.name}</p>
                      <p className="text-sm text-gray-500">
                        <Link
                          href={`/locations/${review.citySlug}`}
                          className="transition hover:text-primary"
                        >
                          {review.location}
                        </Link>
                        {" "}&middot;{" "}
                        {review.service}
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

        {/* Aggregate rating bar */}
        <div className="stagger-up mx-auto flex max-w-4xl flex-col items-center justify-between gap-4 rounded-md border-2 border-border bg-gradient-to-r from-secondary to-white px-6 py-5 text-center sm:flex-row sm:text-left">
          <div className="flex items-center gap-4">
            <div className="insignia-stat flex size-12 items-center justify-center rounded-md bg-gradient-to-br from-primary/10 to-accent/10">
              <Star className="size-6 fill-amber-400 text-amber-400" />
            </div>
            <div>
              <p className="font-display text-2xl font-bold text-gray-900">{brand.rating}/5</p>
              <p className="text-sm text-gray-500">{brand.reviewCount}+ verified reviews across South Florida</p>
            </div>
          </div>
          <Link
            href="/reviews"
            className="chief-card inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-white px-5 text-sm font-semibold text-gray-700 shadow-sm transition hover:border-primary/30 hover:text-primary"
          >
            View All Reviews
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
