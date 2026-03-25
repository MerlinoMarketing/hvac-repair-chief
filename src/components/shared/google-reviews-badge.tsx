import { Star } from "lucide-react";

import { brand } from "@/config/brand";
import { locations } from "@/config/locations";
import { GoogleIcon } from "@/components/shared/google-icon";

export function GoogleReviewsBadge() {
  const primaryLocation = locations[0];

  return (
    <a
      href={primaryLocation.cidUrl}
      target="_blank"
      rel="noreferrer"
      className="insignia-stat chief-card group mx-auto flex w-fit items-center gap-4 rounded-md bg-white px-6 py-5"
    >
      <div className="flex size-12 shrink-0 items-center justify-center rounded-md bg-gray-50 transition-colors group-hover:bg-blue-50">
        <GoogleIcon className="size-7" />
      </div>

      <div className="flex flex-col">
        <p className="text-sm font-medium text-gray-500">Google Reviews</p>
        <div className="flex items-center gap-2">
          <span className="font-display text-2xl font-bold text-gray-900">
            {brand.rating}
          </span>
          <div className="flex items-center gap-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className="size-4 fill-amber-400 text-amber-400"
              />
            ))}
          </div>
        </div>
        <p className="text-xs text-gray-400">
          Based on {brand.reviewCount}+ reviews &middot; Verified
        </p>
      </div>
    </a>
  );
}
