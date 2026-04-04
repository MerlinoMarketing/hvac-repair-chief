'use client';

import { Star } from 'lucide-react';

interface TestimonialCardProps {
  quote: string;
  name: string;
  location: string;
  rating?: number;
}

export function TestimonialCard({ quote, name, location, rating = 5 }: TestimonialCardProps) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-xl">
      <div className="flex gap-1 mb-4">
        {[...Array(rating)].map((_, i) => (
          <Star key={i} className="w-5 h-5 fill-cyan-600 text-cyan-600" />
        ))}
      </div>
      <p className="text-slate-700 text-lg mb-4 italic">&quot;{quote}&quot;</p>
      <div>
        <p className="font-bold text-slate-900">{name}</p>
        <p className="text-slate-500 text-sm">{location}</p>
      </div>
    </div>
  );
}
