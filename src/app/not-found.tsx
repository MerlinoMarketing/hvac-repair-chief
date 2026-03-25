import Link from "next/link";
import { Home, Phone } from "lucide-react";

import { brand } from "@/config/brand";
import { locations } from "@/config/locations";
import { toTel } from "@/lib/utils";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";

const mainPhone = locations[0].phone;

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="flex min-h-[70vh] items-center justify-center px-4 pt-20">
        <div className="mx-auto max-w-lg text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">
            Page Not Found
          </p>
          <h1 className="mt-4 font-display font-semibold tracking-tight text-gray-900">
            404
          </h1>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            The page you&apos;re looking for doesn&apos;t exist. Let us help you
            find what you need.
          </p>
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Button
              render={<Link href="/" className="min-h-12 rounded-md px-6" />}
              className="inline-flex items-center gap-2 rounded-md bg-primary px-6 text-white hover:bg-primary/90"
            >
              <Home className="size-4" />
              Back to Home
            </Button>
            <a
              href={toTel(mainPhone)}
              className="inline-flex min-h-12 items-center gap-2 rounded-md border-2 border-border px-6 text-sm font-medium text-gray-700 transition hover:border-primary/40 hover:bg-gray-50"
            >
              <Phone className="size-4 text-primary" />
              Call {mainPhone}
            </a>
          </div>
          <p className="mt-8 text-xs text-gray-500">
            {brand.name} &middot; Serving South Florida
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
