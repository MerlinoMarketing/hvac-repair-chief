import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getArticleWithHtml, getArticleSlugs, getCategoryBySlug } from '@/lib/articles';
import { Phone, Mail } from 'lucide-react';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getArticleSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const article = await getArticleWithHtml(slug);

  if (!article) {
    return { title: 'Article Not Found' };
  }

  return {
    title: article.metaTitle || `${article.title} | HVAC Knowledge Center`,
    description: article.metaDescription || article.description,
    openGraph: {
      title: article.metaTitle || article.title,
      description: article.metaDescription || article.description,
      type: 'article',
    },
  };
}

export default async function ArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = await getArticleWithHtml(slug);

  if (!article) {
    notFound();
  }

  const category = article.category ? getCategoryBySlug(article.category) : undefined;

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800">
      {/* Navigation */}
      <nav className="py-4 px-4 border-b border-slate-700">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Link href="/articles" className="text-cyan-600 hover:text-cyan-500 transition flex items-center gap-2">
            ← Back to Articles
          </Link>
          <Link href="/" className="text-slate-500 hover:text-slate-600 transition">
            Home
          </Link>
        </div>
      </nav>

      {/* Article Content */}
      <article className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <header className="mb-12">
            {/* Category Badge */}
            {category && (
              <Link
                href={`/articles?category=${category.slug}`}
                className="inline-flex items-center gap-2 bg-cyan-600/10 border border-cyan-500/30 text-cyan-600 px-4 py-2 rounded-full text-sm font-semibold mb-6 hover:bg-cyan-600/20 transition"
              >
                <span>{category.icon}</span>
                {category.name}
              </Link>
            )}

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
              {article.title}
            </h1>

            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-4 text-slate-500 text-sm mb-6">
              {article.lastUpdated && (
                <div className="flex items-center gap-2">
                  <span>📅</span>
                  <span>Last Updated: {article.lastUpdated}</span>
                </div>
              )}
              <div className="flex items-center gap-2">
                <span>📖</span>
                <span>{Math.ceil(article.content.split(/\s+/).length / 200)} min read</span>
              </div>
            </div>

            {/* Description */}
            {article.description && (
              <div className="bg-slate-100/80 border border-cyan-500/20 rounded-lg p-6">
                <p className="text-lg md:text-xl text-slate-200 leading-relaxed">
                  {article.description}
                </p>
              </div>
            )}
          </header>

          {/* Content */}
          <div
            className="prose prose-lg prose-invert max-w-none
              prose-headings:text-slate-900 prose-headings:font-bold
              prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-h2:text-cyan-600 prose-h2:border-b prose-h2:border-cyan-500/30 prose-h2:pb-3
              prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4 prose-h3:text-cyan-500
              prose-h4:text-xl prose-h4:mt-6 prose-h4:mb-3
              prose-p:text-slate-600 prose-p:leading-relaxed prose-p:mb-4
              prose-a:text-cyan-600 prose-a:no-underline hover:prose-a:underline
              prose-strong:text-slate-900 prose-strong:font-semibold
              prose-ul:text-slate-600 prose-ul:my-4
              prose-ol:text-slate-600 prose-ol:my-4
              prose-li:my-2 prose-li:marker:text-cyan-600
              prose-blockquote:border-cyan-500 prose-blockquote:bg-slate-100/80 prose-blockquote:text-slate-600 prose-blockquote:px-6 prose-blockquote:py-4 prose-blockquote:rounded-r
              prose-code:text-cyan-500 prose-code:bg-slate-50 prose-code:px-2 prose-code:py-1 prose-code:rounded prose-code:before:content-none prose-code:after:content-none
              prose-pre:bg-slate-50 prose-pre:border prose-pre:border-slate-700 prose-pre:rounded-lg
              prose-table:text-slate-600 prose-table:border-slate-700
              prose-th:text-slate-900 prose-th:bg-slate-50 prose-th:font-semibold prose-th:p-3 prose-th:border prose-th:border-slate-700
              prose-td:border-slate-700 prose-td:p-3
              prose-tr:border-slate-700
              prose-thead:border-slate-700
              prose-hr:border-slate-700 prose-hr:my-8
            "
            dangerouslySetInnerHTML={{ __html: article.htmlContent || '' }}
          />
        </div>
      </article>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-slate-100/80 border-y border-slate-700">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            Need Professional HVAC Help?
          </h2>
          <p className="text-xl text-slate-600 mb-8">
            Our expert team is ready to assist with all your HVAC needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+19542896718"
              className="inline-flex items-center justify-center gap-2 bg-cyan-600 hover:bg-cyan-700 text-slate-900 font-bold px-8 py-4 rounded-lg transition shadow-lg shadow-cyan-600/20"
            >
              <Phone className="h-5 w-5" aria-hidden="true" />
              Call Now: (954) 289-6718
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-900 font-bold px-8 py-4 rounded-lg transition border border-slate-600"
            >
              <Mail className="h-5 w-5" aria-hidden="true" />
              Request Free Estimate
            </Link>
          </div>
        </div>
      </section>

      {/* Related Articles Section */}
      {category && (
        <section className="py-12 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">
              More from {category.name}
            </h2>
            <div className="flex justify-center">
              <Link
                href={`/articles?category=${category.slug}`}
                className="inline-flex items-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-900 font-semibold px-6 py-3 rounded-lg transition border border-slate-600"
              >
                View All {category.name} Articles →
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-slate-700">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8">
            <Link href="/articles" className="text-cyan-600 hover:text-cyan-500 transition">
              ← View All Articles
            </Link>
            <Link href="/" className="text-slate-500 hover:text-slate-600 transition">
              Back to Home
            </Link>
          </div>
          <div className="text-center text-slate-500 pt-8 border-t border-slate-700">
            <p>&copy; {new Date().getFullYear()} HVAC Knowledge Center. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
