'use client';

import { Phone, ArrowRight } from 'lucide-react';

interface InlineCTAProps {
  title?: string;
  subtitle?: string;
  phone?: string;
  variant?: 'primary' | 'urgent';
}

export function InlineCTA({
  title = "Get Your Free Estimate Today",
  subtitle = "No obligation. Fast response.",
  phone = "(954) 289-6718",
  variant = 'primary'
}: InlineCTAProps) {
  const bgClass = variant === 'urgent'
    ? 'bg-gradient-to-r from-red-600 to-orange-500'
    : 'bg-gradient-to-r from-amber-500 to-amber-600';

  return (
    <div className={`${bgClass} rounded-2xl p-6 md:p-8 text-center`}>
      {variant === 'urgent' && (
        <div className="inline-block bg-white/60 text-slate-900 text-xs font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-wide">
          Limited Time Offer
        </div>
      )}
      <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">{title}</h3>
      <p className="text-slate-900/90 mb-6">{subtitle}</p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a
          href={`tel:${phone.replace(/\D/g, '')}`}
          className="inline-flex items-center justify-center gap-2 bg-white text-slate-900 font-bold px-8 py-4 rounded-xl hover:bg-slate-100 transition shadow-lg"
        >
          <Phone className="w-5 h-5" />
          Call {phone}
        </a>
        <a
          href="/contact"
          className="inline-flex items-center justify-center gap-2 bg-white/60 text-slate-900 font-bold px-8 py-4 rounded-xl hover:bg-white/30 transition border-2 border-slate-200/30"
        >
          Request Quote Online
          <ArrowRight className="w-5 h-5" />
        </a>
      </div>
    </div>
  );
}
