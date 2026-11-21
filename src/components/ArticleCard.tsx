import React from 'react';
import { ArrowRight } from 'lucide-react';
import { ArticleItem } from '../data/contentData';
import { useAppContext } from '../context/RouterContext';

export const ArticleCard: React.FC<{ article: ArticleItem }> = ({ article }) => {
  const { navigate } = useAppContext();

  return (
    <article
      onClick={() => navigate(`/resources/${article.slug}`)}
      className="group cursor-pointer bg-white rounded-2xl border border-slate-200 overflow-hidden flex flex-col justify-between transition-all duration-200 hover:-translate-y-0.5 hover:border-[#002D7A]/40 hover:shadow-md"
    >
      <div>
        {/* Editorial Visual Top Strip */}
        <div className="relative h-32 bg-gradient-to-br from-[#07132F] via-[#001952] to-[#002D7A] p-5 flex items-end overflow-hidden">
          <svg
            viewBox="0 0 360 120"
            className="absolute inset-0 w-full h-full opacity-30 pointer-events-none transition-transform duration-300 group-hover:scale-105"
            aria-hidden="true"
          >
            <path d="M0 90 C 120 35, 240 85, 360 25" fill="none" stroke="#F2BA49" strokeWidth="1.5" />
            <circle cx="305" cy="40" r="3" fill="#F2BA49" />
          </svg>
          <span className="relative z-10 text-[11px] font-bold tracking-[0.14em] uppercase text-[#F8D77A]">
            {article.category}
          </span>
        </div>

        <div className="p-6">
          <p className="text-xs font-medium text-slate-500 mb-2">
            <span>{article.date}</span>
            <span aria-hidden="true"> · </span>
            <span>{article.readTime}</span>
          </p>
          <h3 className="font-display text-lg font-bold text-[#001952] leading-snug group-hover:text-[#0A4FB3] transition-colors">
            {article.title}
          </h3>
          <p className="mt-2.5 text-sm text-slate-600 leading-relaxed">{article.excerpt}</p>
        </div>
      </div>

      <div className="px-6 pb-6 pt-4 border-t border-slate-100">
        <a
          href={`/resources/${article.slug}`}
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            navigate(`/resources/${article.slug}`);
          }}
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#001952] group-hover:text-[#0A4FB3]"
        >
          <span>Read Article</span>
          <ArrowRight
            className="w-4 h-4 text-[#F2BA49] transition-transform group-hover:translate-x-1"
            aria-hidden="true"
          />
        </a>
      </div>
    </article>
  );
};
