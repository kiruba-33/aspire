import React from 'react';
import { ArrowRight } from 'lucide-react';
import { DestinationItem } from '../data/destinations';
import { useAppContext } from '../context/RouterContext';
import { CountryFlag, DestinationSkyline } from './VisualArtwork';

export const DestinationCard: React.FC<{
  destination: DestinationItem;
  sliderMode?: boolean;
}> = ({ destination, sliderMode = false }) => {
  const { navigate } = useAppContext();

  return (
    <article
      onClick={() => navigate(`/destinations/${destination.slug}`)}
      className={`group cursor-pointer rounded-2xl overflow-hidden border border-slate-200 bg-white flex flex-col justify-between transition-all duration-200 hover:-translate-y-1 hover:border-[#002D7A]/60 hover:shadow-xl ${
        sliderMode ? 'w-[290px] sm:w-[325px] shrink-0 snap-start' : ''
      }`}
    >
      <div>
        {/* Country Architectural Skyline Header */}
        <div className="relative h-36 bg-gradient-to-br from-[#07132F] via-[#001952] to-[#002D7A] p-5 flex flex-col justify-between text-white overflow-hidden">
          <div className="absolute inset-0 opacity-80 pointer-events-none transition-transform duration-300 group-hover:scale-105">
            <DestinationSkyline slug={destination.slug} />
          </div>
          <div className="relative z-10 flex items-center justify-between gap-2">
            <CountryFlag code={destination.flagCode} />
            <span className="text-[11px] font-semibold tracking-wider uppercase text-[#F8D77A]">
              {destination.region}
            </span>
          </div>
          <div className="relative z-10">
            <h3 className="font-display text-lg font-bold text-white">{destination.name}</h3>
            <p className="text-[11px] text-slate-300 truncate">{destination.cityHighlight}</p>
          </div>
        </div>

        <div className="p-5">
          <p className="text-sm text-slate-600 leading-relaxed line-clamp-2">
            {destination.shortDescription}
          </p>
          <p className="mt-3.5 text-xs font-semibold text-[#002D7A]">
            {destination.popularVisas.join(' · ')}
          </p>
        </div>
      </div>

      <div className="px-5 pb-5 pt-3 border-t border-slate-100">
        <a
          href={`/destinations/${destination.slug}`}
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            navigate(`/destinations/${destination.slug}`);
          }}
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#001952] group-hover:text-[#0A4FB3] transition-colors"
        >
          <span>Explore Destination</span>
          <ArrowRight
            className="w-4 h-4 text-[#F2BA49] transition-transform group-hover:translate-x-1"
            aria-hidden="true"
          />
        </a>
      </div>
    </article>
  );
};
