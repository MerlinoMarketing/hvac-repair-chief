import Link from 'next/link';
import { getAllArticles, categories } from '@/lib/articles';
import ArticlesClient from './ArticlesClient';
import { Phone, Mail } from 'lucide-react';

export const metadata = {
  title: 'HVAC Knowledge Center | Expert Guides & Tips',
  description: 'Comprehensive guides on HVAC materials, repair, maintenance, emergency services, duct cleaning, and contractor selection.',
};

export default function ArticlesPage() {
  const allArticles = getAllArticles();

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800">
      {/* Navigation */}
      <nav className="py-4 px-4 border-b border-slate-700">
        <div className="max-w-7xl mx-auto">
          <Link href="/" className="text-cyan-600 hover:text-cyan-500 transition flex items-center gap-2">
            ← Back to Home
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 mb-6">
            HVAC Knowledge Center
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto">
            Expert guides, tips, and insights to help you make informed decisions about your HVAC needs.
          </p>
        </div>
      </section>

      {/* Client-side filtering and display */}
      <ArticlesClient allArticles={allArticles} categories={categories} />

      {/* CTA Section */}
      <section className="py-16 px-4 bg-slate-100/80 border-y border-slate-700">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Ready to Start Your HVAC Project?
          </h2>
          <p className="text-xl text-slate-600 mb-8">
            Get expert advice and a free estimate from our professional team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+19542896718"
              className="inline-flex items-center justify-center gap-2 bg-cyan-600 hover:bg-cyan-700 text-slate-900 font-bold px-8 py-4 rounded-lg transition shadow-lg shadow-cyan-600/20 text-lg"
            >
              <Phone className="h-5 w-5" aria-hidden="true" />
              Call Now: (954) 289-6718
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-900 font-bold px-8 py-4 rounded-lg transition border border-slate-600 text-lg"
            >
              <Mail className="h-5 w-5" aria-hidden="true" />
              Request Free Estimate
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-slate-700">
        <div className="max-w-7xl mx-auto text-center">
          <Link href="/" className="text-cyan-600 hover:text-cyan-500 transition text-lg">
            ← Back to Home
          </Link>
          <p className="text-slate-500 mt-4">
            &copy; {new Date().getFullYear()} HVAC Knowledge Center. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
