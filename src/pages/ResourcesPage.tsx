import React, { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { articlesData, ArticleItem, ArticleCategory } from '../data/contentData';
import { siteConfig } from '../config/siteConfig';
import { useAppContext } from '../context/RouterContext';
import { ArticleCard } from '../components/ArticleCard';
import { CTAButton } from '../components/CTAButton';

const categories: ArticleCategory[] = [
  'All',
  'Visa Guides',
  'Study Abroad',
  'Travel',
  'Immigration',
  'Documentation',
  'Application Tips',
];

export const ResourcesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<ArticleCategory>('All');

  const filtered =
    selectedCategory === 'All'
      ? articlesData
      : articlesData.filter((a) => a.category === selectedCategory);

  return (
    <div>
      <section className="bg-[#001952] text-white py-14 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-bold tracking-[0.18em] uppercase text-[#F2BA49] mb-2">
            Editorial Guides
          </p>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight max-w-3xl">
            Visa &amp; Travel Insights
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-200 max-w-2xl leading-relaxed">
            Practical checklists, interview guidance, and financial documentation tips for Sri
            Lankan applicants.
          </p>
        </div>
      </section>

      <section className="py-14 sm:py-16 bg-[#F6F8FC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div
            className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-200/70 rounded-lg w-fit"
            role="tablist"
            aria-label="Filter articles by category"
          >
            {categories.map((cat) => {
              const active = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 text-xs font-semibold rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                    active
                      ? 'bg-[#001952] text-[#F8D77A] shadow-xs'
                      : 'text-slate-600 hover:text-[#001952]'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export const ArticleDetailPage: React.FC<{ article: ArticleItem }> = ({ article }) => {
  const { navigate, openConsultationModal } = useAppContext();

  return (
    <div className="py-12 sm:py-16 bg-[#F6F8FC]">
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <button
          type="button"
          onClick={() => navigate('/resources')}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#002D7A] hover:underline mb-6 cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" aria-hidden="true" />
          <span>Back to Visa &amp; Travel Insights</span>
        </button>

        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-10">
          <p className="text-xs font-medium text-slate-500 mb-3">
            <span className="text-[#002D7A] font-bold uppercase tracking-wider">
              {article.category}
            </span>
            <span aria-hidden="true"> · </span>
            <span>{article.date}</span>
            <span aria-hidden="true"> · </span>
            <span>{article.readTime}</span>
          </p>
          <h1 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#001952] tracking-tight">
            {article.title}
          </h1>
          <p className="mt-4 text-base text-slate-600 leading-relaxed border-b border-slate-100 pb-6">
            {article.excerpt}
          </p>

          <div className="mt-6 space-y-6">
            {article.sections.map((sec) => (
              <section key={sec.heading}>
                <h2 className="font-display text-xl font-bold text-[#001952]">{sec.heading}</h2>
                <p className="mt-2 text-sm sm:text-base text-slate-600 leading-relaxed">
                  {sec.body}
                </p>
              </section>
            ))}
          </div>

          <div className="mt-10 pt-6 border-t border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <p className="text-xs text-slate-500 max-w-md">{siteConfig.disclaimer.short}</p>
            <CTAButton
              variant="gold"
              size="md"
              onClick={() => openConsultationModal({ source: `Article: ${article.title}` })}
            >
              Book Consultation
            </CTAButton>
          </div>
        </div>
      </article>
    </div>
  );
};
