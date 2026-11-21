import React from 'react';

interface CountrySelectorProps {
  regions: string[];
  selectedRegion: string;
  onSelectRegion: (region: string) => void;
  searchQuery?: string;
  onSearchChange?: (value: string) => void;
}

export const CountrySelector: React.FC<CountrySelectorProps> = ({
  regions,
  selectedRegion,
  onSelectRegion,
  searchQuery,
  onSearchChange,
}) => {
  return (
    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
      <div
        className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-200/70 rounded-lg w-fit"
        role="tablist"
        aria-label="Filter destinations by region"
      >
        {regions.map((region) => {
          const active = selectedRegion === region;
          return (
            <button
              key={region}
              type="button"
              role="tab"
              aria-selected={active}
              onClick={() => onSelectRegion(region)}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                active
                  ? 'bg-white text-[#0B1F3A] shadow-xs'
                  : 'text-slate-600 hover:text-[#0B1F3A]'
              }`}
            >
              {region}
            </button>
          );
        })}
      </div>

      {onSearchChange !== undefined && (
        <div className="w-full md:w-64">
          <label htmlFor="country-filter-input" className="sr-only">
            Search country
          </label>
          <input
            id="country-filter-input"
            type="search"
            value={searchQuery || ''}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search destination..."
            className="w-full px-3.5 py-2 text-sm rounded-lg border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#123F6D]"
          />
        </div>
      )}
    </div>
  );
};
