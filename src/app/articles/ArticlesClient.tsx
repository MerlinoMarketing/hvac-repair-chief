'use client';

import Link from 'next/link';
import { useState, useMemo } from 'react';
import type { Article, ArticleCategory } from '@/lib/articles';

interface ArticlesClientProps {
  allArticles: Article[];
  categories: ArticleCategory[];
}

export default function ArticlesClient({ allArticles, categories }: ArticlesClientProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  // Filter articles based on search and category
  const filteredArticles = useMemo(() => {
    return allArticles.filter((article) => {
      // Category filter
      if (selectedCategory !== 'all' && article.category !== selectedCategory) {
        return false;
      }

      // Search filter
      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        return (
          article.title.toLowerCase().includes(query) ||
          article.description?.toLowerCase().includes(query)
        );
      }

      return true;
    });
  }, [allArticles, searchQuery, selectedCategory]);

  // Group articles by category
  const articlesByCategory = useMemo(() => {
    const grouped = new Map<string, Article[]>();

    categories.forEach((category) => {
      const categoryArticles = filteredArticles.filter(
        (article) => article.category === category.slug
      );
      if (categoryArticles.length > 0) {
        grouped.set(category.slug, categoryArticles);
      }
    });

    return grouped;
  }, [categories, filteredArticles]);

  const getCategoryBySlug = (slug: string) => {
    return categories.find((cat) => cat.slug === slug);
  };

  return (
    <>
      {/* Search Bar */}
      <section className="py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-6 py-4 bg-slate-50 border border-slate-700 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:border-cyan-500 transition"
              />
              <div className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500">
                🔍
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filters */}
      <section className="py-8 px-4 border-y border-slate-700">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-3 justify-center">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-6 py-3 rounded-lg font-semibold transition ${
                selectedCategory === 'all'
                  ? 'bg-cyan-600 text-slate-900'
                  : 'bg-slate-50 text-slate-600 hover:bg-slate-100 border border-slate-700'
              }`}
            >
              All Articles ({allArticles.length})
            </button>
            {categories.map((category) => {
              const count = allArticles.filter((a) => a.category === category.slug).length;
              if (count === 0) return null;

              return (
                <button
                  key={category.slug}
                  onClick={() => setSelectedCategory(category.slug)}
                  className={`px-6 py-3 rounded-lg font-semibold transition flex items-center gap-2 ${
                    selectedCategory === category.slug
                      ? 'bg-cyan-600 text-slate-900'
                      : 'bg-slate-50 text-slate-600 hover:bg-slate-100 border border-slate-700'
                  }`}
                >
                  <span>{category.icon}</span>
                  {category.name} ({count})
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Articles Section */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Results count */}
          <div className="mb-8 text-center">
            <p className="text-slate-500">
              {filteredArticles.length === 0 ? (
                'No articles found. Try a different search or category.'
              ) : (
                `Showing ${filteredArticles.length} article${filteredArticles.length !== 1 ? 's' : ''}`
              )}
            </p>
          </div>

          {/* Articles grouped by category */}
          {selectedCategory === 'all' ? (
            // Show all categories with articles
            <div className="space-y-16">
              {Array.from(articlesByCategory.entries()).map(([categorySlug, categoryArticles]) => {
                const category = getCategoryBySlug(categorySlug);
                if (!category) return null;

                return (
                  <div key={categorySlug}>
                    {/* Category Header */}
                    <div className="mb-8">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-4xl">{category.icon}</span>
                        <h2 className="text-3xl font-bold text-slate-900">{category.name}</h2>
                      </div>
                      <p className="text-slate-500 text-lg">{category.description}</p>
                    </div>

                    {/* Articles Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                      {categoryArticles.map((article) => (
                        <ArticleCard key={article.slug} article={article} category={category} />
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            // Show single category
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredArticles.map((article) => {
                const category = article.category ? getCategoryBySlug(article.category) : undefined;
                return <ArticleCard key={article.slug} article={article} category={category} />;
              })}
            </div>
          )}
        </div>
      </section>
    </>
  );
}

// Article Card Component
function ArticleCard({ article, category }: { article: Article; category?: ArticleCategory }) {
  return (
    <Link
      href={`/articles/${article.slug}`}
      className="group bg-slate-100/80 border border-slate-700 rounded-xl p-6 hover:border-cyan-500/50 hover:bg-slate-50 transition-all duration-300 shadow-lg hover:shadow-cyan-600/10 flex flex-col h-full"
    >
      {/* Category Badge */}
      {category && (
        <div className="flex items-center gap-2 text-cyan-600 text-sm font-semibold mb-3">
          <span>{category.icon}</span>
          <span>{category.name}</span>
        </div>
      )}

      {/* Title */}
      <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-cyan-600 transition-colors line-clamp-2">
        {article.title}
      </h3>

      {/* Description */}
      {article.description && (
        <p className="text-slate-600 leading-relaxed mb-4 line-clamp-3 flex-grow">
          {article.description}
        </p>
      )}

      {/* Meta Info */}
      <div className="flex items-center gap-4 text-slate-500 text-sm pt-4 border-t border-slate-700/50">
        <div className="flex items-center gap-1">
          <span>📖</span>
          <span>{Math.ceil(article.content.split(/\s+/).length / 200)} min</span>
        </div>
        {article.lastUpdated && (
          <div className="flex items-center gap-1">
            <span>📅</span>
            <span className="line-clamp-1">{article.lastUpdated}</span>
          </div>
        )}
      </div>

      {/* Read More Link */}
      <div className="flex items-center gap-2 text-cyan-600 font-semibold mt-4 group-hover:gap-3 transition-all">
        Read Article
        <span className="group-hover:translate-x-1 transition-transform">→</span>
      </div>
    </Link>
  );
}
