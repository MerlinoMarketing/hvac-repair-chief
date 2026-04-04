'use client';

import Image from 'next/image';
import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface BeforeAfterItem {
  before: string;
  after: string;
  title: string;
  description: string;
}

interface BeforeAfterGalleryProps {
  items: BeforeAfterItem[];
  serviceName: string;
}

export function BeforeAfterGallery({ items, serviceName }: BeforeAfterGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => setCurrentIndex((prev) => (prev + 1) % items.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);

  if (items.length === 0) return null;

  const current = items[currentIndex];

  return (
    <div className="bg-slate-100/80 border border-slate-700 rounded-xl overflow-hidden">
      <div className="p-6 border-b border-slate-700">
        <h3 className="text-2xl font-bold text-slate-900">Our {serviceName} Work</h3>
        <p className="text-slate-600 mt-1">Before & after transformations from real projects</p>
      </div>

      <div className="relative">
        {/* Image Grid */}
        <div className="grid md:grid-cols-2">
          {/* Before */}
          <div className="relative">
            <div className="absolute top-4 left-4 z-10 bg-white/80 text-slate-900 px-3 py-1 rounded-full text-sm font-bold">
              BEFORE
            </div>
            <div className="relative h-64 md:h-80">
              <Image
                src={current.before}
                alt={`Before - ${current.title}`}
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* After */}
          <div className="relative">
            <div className="absolute top-4 right-4 z-10 bg-cyan-600 text-slate-900 px-3 py-1 rounded-full text-sm font-bold">
              AFTER
            </div>
            <div className="relative h-64 md:h-80">
              <Image
                src={current.after}
                alt={`After - ${current.title}`}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Navigation Arrows */}
        {items.length > 1 && (
          <>
            <button
              onClick={prev}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-slate-50 text-slate-900 p-2 rounded-full transition z-20"
              aria-label="Previous"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={next}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-slate-50 text-slate-900 p-2 rounded-full transition z-20"
              aria-label="Next"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </>
        )}
      </div>

      {/* Caption */}
      <div className="p-6">
        <h4 className="text-lg font-bold text-slate-900 mb-2">{current.title}</h4>
        <p className="text-slate-600">{current.description}</p>

        {/* Dots */}
        {items.length > 1 && (
          <div className="flex justify-center gap-2 mt-4">
            {items.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition ${
                  index === currentIndex ? 'bg-cyan-500 w-6' : 'bg-slate-200 hover:bg-slate-500'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
