import React from 'react';
import { motion } from 'motion/react';

export const CountryFlag: React.FC<{ code: string; className?: string }> = ({
  code,
  className = 'w-7 h-5 rounded-[3px] shadow-xs ring-1 ring-black/10 shrink-0',
}) => {
  switch (code) {
    case 'GB':
      return (
        <svg viewBox="0 0 60 40" className={className} aria-hidden="true">
          <rect width="60" height="40" fill="#012169" />
          <path d="M0,0 L60,40 M60,0 L0,40" stroke="#FFF" strokeWidth="7" />
          <path d="M0,0 L60,40 M60,0 L0,40" stroke="#C8102E" strokeWidth="4" />
          <path d="M30,0 V40 M0,20 H60" stroke="#FFF" strokeWidth="11" />
          <path d="M30,0 V40 M0,20 H60" stroke="#C8102E" strokeWidth="6.5" />
        </svg>
      );
    case 'US':
      return (
        <svg viewBox="0 0 60 40" className={className} aria-hidden="true">
          <rect width="60" height="40" fill="#FFF" />
          {[0, 6.15, 12.3, 18.45, 24.6, 30.75, 36.9].map((y, idx) => (
            <rect key={idx} y={y} width="60" height="3.1" fill="#B22234" />
          ))}
          <rect width="26" height="21.5" fill="#3C3B6E" />
          <g fill="#FFF">
            <circle cx="5" cy="5" r="1.1" />
            <circle cx="13" cy="5" r="1.1" />
            <circle cx="21" cy="5" r="1.1" />
            <circle cx="9" cy="10.5" r="1.1" />
            <circle cx="17" cy="10.5" r="1.1" />
            <circle cx="5" cy="16" r="1.1" />
            <circle cx="13" cy="16" r="1.1" />
            <circle cx="21" cy="16" r="1.1" />
          </g>
        </svg>
      );
    case 'CA':
      return (
        <svg viewBox="0 0 60 40" className={className} aria-hidden="true">
          <rect width="60" height="40" fill="#FFF" />
          <rect width="15" height="40" fill="#D80621" />
          <rect x="45" width="15" height="40" fill="#D80621" />
          <path
            d="M30 8 L32.5 14 L38 13 L35 19 L40 21 L35 23.5 L36 27 L31 26 L31 32 H29 V26 L24 27 L25 23.5 L20 21 L25 19 L22 13 L27.5 14 Z"
            fill="#D80621"
          />
        </svg>
      );
    case 'AU':
      return (
        <svg viewBox="0 0 60 40" className={className} aria-hidden="true">
          <rect width="60" height="40" fill="#00008B" />
          <rect width="28" height="19" fill="#012169" />
          <path d="M0,0 L28,19 M28,0 L0,19" stroke="#FFF" strokeWidth="3.5" />
          <path d="M14,0 V19 M0,9.5 H28" stroke="#FFF" strokeWidth="5.5" />
          <path d="M14,0 V19 M0,9.5 H28" stroke="#C8102E" strokeWidth="3" />
          <circle cx="44" cy="11" r="2.2" fill="#FFF" />
          <circle cx="51" cy="18" r="2" fill="#FFF" />
          <circle cx="44" cy="27" r="2.4" fill="#FFF" />
          <circle cx="37" cy="19" r="1.8" fill="#FFF" />
          <circle cx="14" cy="29" r="3" fill="#FFF" />
        </svg>
      );
    case 'DE':
      return (
        <svg viewBox="0 0 60 40" className={className} aria-hidden="true">
          <rect width="60" height="13.3" fill="#111111" />
          <rect y="13.3" width="60" height="13.4" fill="#DD0000" />
          <rect y="26.7" width="60" height="13.3" fill="#FFCE00" />
        </svg>
      );
    case 'EU':
      return (
        <svg viewBox="0 0 60 40" className={className} aria-hidden="true">
          <rect width="60" height="40" fill="#003399" />
          <g fill="#FFCC00">
            {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((deg) => {
              const rad = (deg * Math.PI) / 180;
              return (
                <circle
                  key={deg}
                  cx={30 + 12 * Math.cos(rad)}
                  cy={20 + 12 * Math.sin(rad)}
                  r="1.4"
                />
              );
            })}
          </g>
        </svg>
      );
    case 'AE':
      return (
        <svg viewBox="0 0 60 40" className={className} aria-hidden="true">
          <rect x="16" width="44" height="13.3" fill="#00732F" />
          <rect x="16" y="13.3" width="44" height="13.4" fill="#FFF" />
          <rect x="16" y="26.7" width="44" height="13.3" fill="#000" />
          <rect width="16" height="40" fill="#FF0000" />
        </svg>
      );
    case 'NZ':
      return (
        <svg viewBox="0 0 60 40" className={className} aria-hidden="true">
          <rect width="60" height="40" fill="#00247D" />
          <path d="M0,0 L28,19 M28,0 L0,19" stroke="#FFF" strokeWidth="3" />
          <path d="M14,0 V19 M0,9.5 H28" stroke="#FFF" strokeWidth="5" />
          <path d="M14,0 V19 M0,9.5 H28" stroke="#CC142B" strokeWidth="2.8" />
          <circle cx="44" cy="11" r="2.2" fill="#CC142B" stroke="#FFF" strokeWidth="0.9" />
          <circle cx="51" cy="18" r="2" fill="#CC142B" stroke="#FFF" strokeWidth="0.9" />
          <circle cx="44" cy="29" r="2.4" fill="#CC142B" stroke="#FFF" strokeWidth="0.9" />
          <circle cx="37" cy="18" r="1.8" fill="#CC142B" stroke="#FFF" strokeWidth="0.9" />
        </svg>
      );
    case 'IE':
      return (
        <svg viewBox="0 0 60 40" className={className} aria-hidden="true">
          <rect width="20" height="40" fill="#169B62" />
          <rect x="20" width="20" height="40" fill="#FFF" />
          <rect x="40" width="20" height="40" fill="#FF883E" />
        </svg>
      );
    case 'SG':
      return (
        <svg viewBox="0 0 60 40" className={className} aria-hidden="true">
          <rect width="60" height="20" fill="#EF3340" />
          <rect y="20" width="60" height="20" fill="#FFF" />
          <circle cx="14" cy="10" r="6" fill="#FFF" />
          <circle cx="16.5" cy="10" r="5" fill="#EF3340" />
          <circle cx="21" cy="7" r="1" fill="#FFF" />
          <circle cx="23.5" cy="10" r="1" fill="#FFF" />
          <circle cx="21" cy="13" r="1" fill="#FFF" />
        </svg>
      );
    case 'MY':
      return (
        <svg viewBox="0 0 60 40" className={className} aria-hidden="true">
          <rect width="60" height="40" fill="#FFF" />
          {[0, 6.6, 13.3, 20, 26.6, 33.3].map((y, i) => (
            <rect key={i} y={y} width="60" height="3.3" fill="#CC0001" />
          ))}
          <rect width="28" height="22" fill="#010066" />
          <circle cx="12" cy="11" r="5.5" fill="#FFCC00" />
          <circle cx="14" cy="11" r="4.5" fill="#010066" />
          <circle cx="19.5" cy="11" r="2.8" fill="#FFCC00" />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 60 40" className={className} aria-hidden="true">
          <rect width="60" height="40" fill="#002D7A" />
          <circle cx="30" cy="20" r="10" fill="none" stroke="#F2BA49" strokeWidth="2" />
        </svg>
      );
  }
};

/**
 * Distinct architectural landmark skyline silhouettes per destination slug.
 */
export const DestinationSkyline: React.FC<{ slug: string; className?: string }> = ({
  slug,
  className = 'w-full h-full',
}) => {
  const renderSilhouette = () => {
    switch (slug) {
      case 'uk': // Elizabeth Tower (Big Ben) + Tower Bridge arch + London Eye arc
        return (
          <g fill="rgba(255,255,255,0.09)" stroke="rgba(255,255,255,0.25)" strokeWidth="1.2">
            <rect x="215" y="45" width="22" height="85" />
            <polygon points="226,18 214,45 238,45" fill="rgba(242,186,73,0.22)" stroke="#F2BA49" />
            <circle cx="226" cy="58" r="5.5" fill="#001952" stroke="#F2BA49" />
            <circle cx="145" cy="82" r="32" fill="none" stroke="rgba(255,255,255,0.22)" />
            <path d="M35 125 L35 72 L52 55 L69 72 L69 125 M69 96 Q90 78 111 96 L111 125" fill="none" />
          </g>
        );
      case 'australia': // Sydney Opera House sails + Harbour arch
        return (
          <g fill="rgba(255,255,255,0.1)" stroke="rgba(255,255,255,0.28)" strokeWidth="1.2">
            <path d="M125 122 C132 76, 155 60, 172 62 C164 85, 165 104, 170 122 Z" />
            <path d="M168 122 C178 66, 206 46, 224 52 C214 82, 214 104, 218 122 Z" />
            <path d="M214 122 C226 78, 250 66, 266 72 C256 92, 256 108, 260 122 Z" />
            <path d="M25 122 Q 90 55 155 122" fill="none" stroke="#F2BA49" opacity="0.65" />
          </g>
        );
      case 'canada': // CN Tower + Toronto skyline
        return (
          <g fill="rgba(255,255,255,0.09)" stroke="rgba(255,255,255,0.24)" strokeWidth="1.2">
            <rect x="208" y="22" width="4" height="104" fill="#F2BA49" stroke="none" opacity="0.7" />
            <ellipse cx="210" cy="56" rx="14" ry="5" fill="rgba(242,186,73,0.25)" stroke="#F2BA49" />
            <rect x="135" y="75" width="24" height="51" />
            <rect x="166" y="62" width="22" height="64" />
            <rect x="234" y="70" width="26" height="56" />
          </g>
        );
      case 'usa': // Manhattan spire & Art Deco towers
        return (
          <g fill="rgba(255,255,255,0.09)" stroke="rgba(255,255,255,0.24)" strokeWidth="1.2">
            <rect x="195" y="42" width="24" height="84" />
            <rect x="201" y="28" width="12" height="14" />
            <line x1="207" y1="14" x2="207" y2="28" stroke="#F2BA49" strokeWidth="1.6" />
            <rect x="148" y="68" width="28" height="58" />
            <rect x="235" y="60" width="30" height="66" />
          </g>
        );
      case 'schengen': // Eiffel lattice + Roman arch
        return (
          <g fill="none" stroke="rgba(255,255,255,0.26)" strokeWidth="1.3">
            <path d="M185 124 Q 204 75 207 24 Q 210 75 229 124" />
            <line x1="194" y1="92" x2="220" y2="92" stroke="#F2BA49" />
            <path d="M196 124 A 11 11 0 0 1 218 124" />
            <path d="M90 124 V 88 A 14 14 0 0 1 118 88 V 124" />
            <path d="M124 124 V 88 A 14 14 0 0 1 152 88 V 124" />
          </g>
        );
      case 'germany': // Brandenburg Gate columns & quadriga pediment
        return (
          <g fill="rgba(255,255,255,0.09)" stroke="rgba(255,255,255,0.25)" strokeWidth="1.2">
            <rect x="135" y="62" width="130" height="12" />
            <rect x="176" y="46" width="48" height="16" fill="rgba(242,186,73,0.18)" stroke="#F2BA49" />
            {[144, 168, 192, 216, 240].map((x) => (
              <rect key={x} x={x} y="74" width="9" height="50" />
            ))}
          </g>
        );
      case 'uae': // Burj Khalifa stepped spire
        return (
          <g fill="rgba(255,255,255,0.1)" stroke="rgba(255,255,255,0.25)" strokeWidth="1.2">
            <polygon points="212,16 205,124 219,124" fill="rgba(242,186,73,0.18)" stroke="#F2BA49" />
            <rect x="196" y="76" width="12" height="48" />
            <rect x="218" y="84" width="12" height="40" />
            <path d="M135 124 Q 152 65 168 124" fill="none" />
          </g>
        );
      case 'singapore': // Marina Bay Sands triple towers + skydeck
        return (
          <g fill="rgba(255,255,255,0.09)" stroke="rgba(255,255,255,0.25)" strokeWidth="1.2">
            <rect x="150" y="62" width="16" height="62" />
            <rect x="180" y="62" width="16" height="62" />
            <rect x="210" y="62" width="16" height="62" />
            <path d="M136 58 Q 188 48 248 56 L 242 64 L 140 64 Z" fill="rgba(242,186,73,0.22)" stroke="#F2BA49" />
          </g>
        );
      case 'malaysia': // Petronas Twin Towers + skybridge
        return (
          <g fill="rgba(255,255,255,0.09)" stroke="rgba(255,255,255,0.26)" strokeWidth="1.2">
            <rect x="166" y="42" width="18" height="82" />
            <polygon points="175,22 169,42 181,42" fill="#F2BA49" opacity="0.7" />
            <rect x="214" y="42" width="18" height="82" />
            <polygon points="223,22 217,42 229,42" fill="#F2BA49" opacity="0.7" />
            <line x1="184" y1="80" x2="214" y2="80" stroke="#F2BA49" strokeWidth="2.5" />
          </g>
        );
      case 'new-zealand': // Southern Alps peaks + Sky Tower
        return (
          <g fill="rgba(255,255,255,0.09)" stroke="rgba(255,255,255,0.24)" strokeWidth="1.2">
            <polygon points="90,124 148,58 195,124" />
            <polygon points="155,124 215,44 275,124" fill="rgba(242,186,73,0.12)" stroke="#F2BA49" />
          </g>
        );
      default: // Ireland Georgian bridge & spires
        return (
          <g fill="none" stroke="rgba(255,255,255,0.24)" strokeWidth="1.3">
            <path d="M115 112 Q 190 66 265 112" stroke="#F2BA49" />
            <line x1="115" y1="112" x2="265" y2="112" />
            <rect x="148" y="64" width="18" height="48" fill="rgba(255,255,255,0.08)" />
            <rect x="218" y="54" width="22" height="58" fill="rgba(255,255,255,0.08)" />
          </g>
        );
    }
  };

  return (
    <svg viewBox="0 0 320 130" className={className} aria-hidden="true">
      {renderSilhouette()}
      <path d="M16 105 C 95 72, 200 45, 295 28" fill="none" stroke="#F2BA49" strokeWidth="1.4" strokeDasharray="5 4" opacity="0.8" />
      <circle cx="295" cy="28" r="3.5" fill="#F2BA49" />
    </svg>
  );
};

interface RouteMeta {
  airportCode: string;
  city: string;
  corridor: string;
  slug: string;
}

const routeMetaMap: Record<string, RouteMeta> = {
  'United Kingdom': { airportCode: 'LHR', city: 'London', corridor: 'Sri Lanka → UK', slug: 'uk' },
  Australia: { airportCode: 'MEL', city: 'Melbourne', corridor: 'Sri Lanka → Australia', slug: 'australia' },
  Canada: { airportCode: 'YYZ', city: 'Toronto', corridor: 'Sri Lanka → Canada', slug: 'canada' },
  USA: { airportCode: 'JFK', city: 'New York', corridor: 'Sri Lanka → United States', slug: 'usa' },
  'New Zealand': { airportCode: 'AKL', city: 'Auckland', corridor: 'Sri Lanka → New Zealand', slug: 'new-zealand' },
  Germany: { airportCode: 'FRA', city: 'Frankfurt', corridor: 'Sri Lanka → Germany', slug: 'germany' },
  Ireland: { airportCode: 'DUB', city: 'Dublin', corridor: 'Sri Lanka → Ireland', slug: 'ireland' },
  UAE: { airportCode: 'DXB', city: 'Dubai', corridor: 'Sri Lanka → UAE', slug: 'uae' },
  Europe: { airportCode: 'CDG', city: 'Paris / Schengen', corridor: 'Sri Lanka → Europe', slug: 'schengen' },
  Singapore: { airportCode: 'SIN', city: 'Singapore', corridor: 'Sri Lanka → Singapore', slug: 'singapore' },
  Malaysia: { airportCode: 'KUL', city: 'Kuala Lumpur', corridor: 'Sri Lanka → Malaysia', slug: 'malaysia' },
  Other: { airportCode: 'INTL', city: 'Global Hub', corridor: 'Sri Lanka → Worldwide', slug: 'uk' },
};

/**
 * Live-Reactive Hero Flight Corridor & Architectural Destination Canvas
 */
export const HeroDestinationVisual: React.FC<{
  selectedCountry?: string;
  selectedPurpose?: string;
}> = ({ selectedCountry = 'United Kingdom', selectedPurpose = 'Study' }) => {
  const meta = routeMetaMap[selectedCountry] || routeMetaMap['United Kingdom'];

  return (
    <div className="relative w-full h-full min-h-[390px] lg:min-h-[480px] rounded-2xl overflow-hidden bg-[#001952] border border-white/15 shadow-2xl">
      <svg
        viewBox="0 0 720 560"
        className="w-full h-full object-cover block"
        role="img"
        aria-label={`Live flight guidance preview from Colombo to ${meta.city}`}
      >
        <defs>
          <linearGradient id="heroSkyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#07132F" />
            <stop offset="55%" stopColor="#001952" />
            <stop offset="100%" stopColor="#0A4FB3" />
          </linearGradient>
          <linearGradient id="goldWingGrad" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#F2BA49" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#F8D77A" stopOpacity="1" />
          </linearGradient>
        </defs>

        <rect width="720" height="560" fill="url(#heroSkyGrad)" />

        {/* Architectural meridian & latitude rings */}
        <g stroke="rgba(255,255,255,0.08)" fill="none" strokeWidth="1">
          <circle cx="515" cy="195" r="215" />
          <circle cx="515" cy="195" r="150" />
          <ellipse cx="515" cy="195" rx="88" ry="215" />
          <line x1="300" y1="195" x2="730" y2="195" />
        </g>

        {/* Subtle ascending wing beam */}
        <polygon
          points="0,560 315,245 720,82 720,175 360,335 90,560"
          fill="rgba(10,79,179,0.22)"
        />

        {/* Country Skyline layered near horizon */}
        <g transform="translate(275, 220) scale(1.38)" opacity="0.95">
          <DestinationSkyline slug={meta.slug} />
        </g>

        {/* Animated Signature Gold Flight Route */}
        <motion.path
          key={meta.airportCode}
          initial={{ pathLength: 0.15, opacity: 0.5 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          d="M 55 415 C 195 315, 345 190, 585 112"
          fill="none"
          stroke="url(#goldWingGrad)"
          strokeWidth="2.8"
          strokeLinecap="round"
        />

        {/* Origin: Colombo (CMB) */}
        <circle cx="55" cy="415" r="5" fill="#F2BA49" />
        <text x="55" y="440" fill="#F8D77A" fontSize="12" fontWeight="700" letterSpacing="1.5">
          CMB · COLOMBO
        </text>

        {/* Waypoint */}
        <circle cx="315" cy="242" r="3.5" fill="#F8D77A" opacity="0.85" />

        {/* Destination Apex */}
        <circle cx="585" cy="112" r="13" fill="#F2BA49" opacity="0.18" />
        <circle cx="585" cy="112" r="5.5" fill="#F2BA49" />
        <text
          x="585"
          y="92"
          textAnchor="middle"
          fill="#FFFFFF"
          fontSize="13"
          fontWeight="800"
          letterSpacing="1.8"
        >
          {meta.airportCode} · {meta.city.toUpperCase()}
        </text>
      </svg>

      {/* Top Live Route Pill-Free Architectural Indicator */}
      <div className="absolute top-5 left-5 right-5 flex items-center justify-between text-xs text-slate-200 pointer-events-none">
        <span className="font-semibold tracking-[0.16em] uppercase text-[#F8D77A]">
          {meta.corridor}
        </span>
        <span className="text-slate-300 font-medium">Pathway: {selectedPurpose}</span>
      </div>

      {/* Floating Architectural Card inside Hero */}
      <div className="absolute bottom-5 left-5 right-5 sm:left-6 sm:right-auto sm:w-[340px] bg-[#07132F]/92 backdrop-blur-md border border-white/15 rounded-xl p-5 text-white shadow-xl">
        <div className="flex items-center justify-between border-b border-white/10 pb-2.5 mb-3">
          <span className="text-[11px] font-bold tracking-[0.14em] uppercase text-[#F2BA49]">
            From Dream → Destination
          </span>
          <span className="text-[11px] font-semibold text-slate-300 tabular-nums">
            CMB → {meta.airportCode}
          </span>
        </div>
        <div className="grid grid-cols-3 gap-2 text-xs">
          <div>
            <span className="text-slate-400 block text-[11px]">Destination</span>
            <span className="font-semibold text-white truncate block">{meta.city}</span>
          </div>
          <div>
            <span className="text-slate-400 block text-[11px]">Your Journey</span>
            <span className="font-semibold text-white truncate block">{selectedPurpose}</span>
          </div>
          <div>
            <span className="text-slate-400 block text-[11px]">Our Guidance</span>
            <span className="font-semibold text-[#F8D77A] block">End-to-End</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export const JourneyCardArtwork: React.FC<{
  theme: 'study' | 'travel' | 'work' | 'immigration';
}> = ({ theme }) => {
  const palettes = {
    study: { bg: '#001952', accent: '#0A4FB3', label: '01 · STUDY' },
    travel: { bg: '#07132F', accent: '#002D7A', label: '02 · TRAVEL' },
    work: { bg: '#002D7A', accent: '#0A4FB3', label: '03 · WORK' },
    immigration: { bg: '#0A1E4D', accent: '#001952', label: '04 · IMMIGRATION' },
  };
  const p = palettes[theme];

  return (
    <svg
      viewBox="0 0 400 210"
      className="w-full h-44 object-cover transition-transform duration-300 group-hover:scale-105"
      aria-hidden="true"
    >
      <rect width="400" height="210" fill={p.bg} />
      <polygon points="0,210 230,85 400,35 400,210" fill={p.accent} opacity="0.55" />
      {theme === 'study' && (
        <g fill="rgba(255,255,255,0.12)" stroke="rgba(255,255,255,0.22)">
          <rect x="70" y="100" width="260" height="80" />
          <polygon points="200,48 95,100 305,100" fill="rgba(242,186,73,0.18)" stroke="#F2BA49" />
        </g>
      )}
      {theme === 'travel' && (
        <g fill="none" stroke="rgba(255,255,255,0.22)">
          <circle cx="295" cy="95" r="68" />
          <ellipse cx="295" cy="95" rx="34" ry="68" />
          <line x1="227" y1="95" x2="363" y2="95" />
        </g>
      )}
      {theme === 'work' && (
        <g fill="rgba(255,255,255,0.12)" stroke="rgba(255,255,255,0.22)">
          <rect x="85" y="72" width="52" height="110" />
          <rect x="155" y="42" width="60" height="140" />
          <rect x="235" y="84" width="54" height="98" />
        </g>
      )}
      {theme === 'immigration' && (
        <g fill="none" stroke="rgba(255,255,255,0.2)">
          <path d="M40 165 Q 190 48 360 125" strokeWidth="1.5" />
          <circle cx="200" cy="108" r="62" />
        </g>
      )}
      <path
        d="M 28 168 C 120 130, 225 96, 355 46"
        fill="none"
        stroke="#F2BA49"
        strokeWidth="2"
        strokeDasharray="6 4"
      />
      <circle cx="355" cy="46" r="4.5" fill="#F2BA49" />
      <text
        x="24"
        y="34"
        fill="rgba(248,215,122,0.9)"
        fontSize="10.5"
        fontWeight="700"
        letterSpacing="2"
      >
        {p.label}
      </text>
    </svg>
  );
};

export const StudyAbroadVisual: React.FC = () => (
  <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-[#001952] text-white shadow-lg">
    <svg
      viewBox="0 0 640 460"
      className="w-full h-auto block"
      role="img"
      aria-label="International university quadrangle and study abroad pathway visual"
    >
      <defs>
        <linearGradient id="campusSkyAspire" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#07132F" />
          <stop offset="60%" stopColor="#001952" />
          <stop offset="100%" stopColor="#0A4FB3" />
        </linearGradient>
      </defs>
      <rect width="640" height="460" fill="url(#campusSkyAspire)" />
      <g stroke="rgba(255,255,255,0.06)" strokeWidth="1">
        <line x1="0" y1="92" x2="640" y2="92" />
        <line x1="0" y1="184" x2="640" y2="184" />
        <line x1="0" y1="276" x2="640" y2="276" />
        <line x1="160" y1="0" x2="160" y2="460" />
        <line x1="320" y1="0" x2="320" y2="460" />
        <line x1="480" y1="0" x2="480" y2="460" />
      </g>
      <g fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.22)" strokeWidth="1.2">
        <rect x="75" y="210" width="490" height="150" rx="2" />
        <polygon points="320,122 175,210 465,210" fill="rgba(242,186,73,0.16)" stroke="#F2BA49" />
        <rect x="296" y="84" width="48" height="38" />
        <polygon points="320,56 290,84 350,84" fill="#F2BA49" opacity="0.9" />
      </g>
      <g fill="#001952" stroke="rgba(255,255,255,0.25)" strokeWidth="1.2">
        {[120, 195, 270, 345, 420, 495].map((x) => (
          <path key={x} d={`M ${x} 360 V 265 A 22 22 0 0 1 ${x + 44} 265 V 360 Z`} />
        ))}
      </g>
      <rect x="55" y="360" width="530" height="12" fill="rgba(255,255,255,0.12)" />
      <path
        d="M 70 140 C 215 55, 425 55, 570 140"
        fill="none"
        stroke="#F2BA49"
        strokeWidth="2"
        strokeDasharray="6 4"
      />
      <circle cx="70" cy="140" r="4.5" fill="#F2BA49" />
      <circle cx="570" cy="140" r="4.5" fill="#F8D77A" />
    </svg>
    <div className="p-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 bg-[#07132F]">
      <div>
        <p className="text-xs font-semibold tracking-wider uppercase text-[#F2BA49]">
          International Education Advisory
        </p>
        <p className="text-base font-semibold text-white mt-0.5">
          UK · Australia · Canada · USA · Germany · NZ · Ireland
        </p>
      </div>
      <span className="text-xs text-slate-300">Admissions · Financial Audit · Interview Prep</span>
    </div>
  </div>
);

export const AdvisoryVisualCard: React.FC = () => (
  <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
    <svg
      viewBox="0 0 600 440"
      className="w-full h-auto block"
      role="img"
      aria-label="Aspire Visa Experts structured consultation and application verification dossier"
    >
      <rect width="600" height="440" fill="#F6F8FC" />
      <rect x="38" y="34" width="524" height="372" rx="12" fill="#FFFFFF" stroke="#DCE4F0" />
      <rect x="38" y="34" width="524" height="58" rx="12" fill="#001952" />
      <rect x="38" y="78" width="524" height="14" fill="#001952" />
      <circle cx="72" cy="63" r="7" fill="#F2BA49" />
      <rect x="92" y="57" width="175" height="11" rx="3" fill="rgba(255,255,255,0.88)" />
      <rect x="436" y="57" width="96" height="11" rx="3" fill="#F2BA49" opacity="0.8" />

      <rect x="72" y="122" width="176" height="240" rx="8" fill="#002D7A" />
      <rect
        x="90"
        y="142"
        width="140"
        height="200"
        rx="4"
        fill="none"
        stroke="rgba(242,186,73,0.5)"
        strokeWidth="1.2"
      />
      <circle cx="160" cy="212" r="32" fill="none" stroke="#F2BA49" strokeWidth="1.6" />
      <ellipse cx="160" cy="212" rx="16" ry="32" fill="none" stroke="#F2BA49" strokeWidth="1.2" />
      <line x1="128" y1="212" x2="192" y2="212" stroke="#F2BA49" strokeWidth="1.2" />
      <rect x="116" y="264" width="88" height="8" rx="2" fill="#F2BA49" />
      <rect x="130" y="282" width="60" height="6" rx="2" fill="rgba(255,255,255,0.45)" />

      {[126, 184, 242, 300].map((y, i) => (
        <g key={y}>
          <rect x="276" y={y} width="250" height="44" rx="8" fill="#F6F8FC" stroke="#E2E8F0" />
          <circle cx="300" cy={y + 22} r="9" fill="#001952" />
          <path
            d={`M ${296} ${y + 22} L ${299} ${y + 25} L ${305} ${y + 18}`}
            fill="none"
            stroke="#F2BA49"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <rect
            x="322"
            y={y + 13}
            width={185 - i * 12}
            height="7"
            rx="2"
            fill="#172033"
            opacity="0.82"
          />
          <rect
            x="322"
            y={y + 25}
            width={118 - i * 6}
            height="5"
            rx="2"
            fill="#64748B"
            opacity="0.55"
          />
        </g>
      ))}
    </svg>
    <div className="px-6 py-4 bg-white border-t border-slate-100 flex items-center justify-between text-xs text-slate-600">
      <span className="font-semibold text-[#001952]">Dedicated Case Audit</span>
      <span>Sri Lanka &amp; Global Corridors</span>
    </div>
  </div>
);

export const DestinationLandmarkBanner: React.FC<{
  countryName: string;
  region: string;
  flagCode: string;
  cityHighlight?: string;
  slug?: string;
}> = ({ countryName, region, flagCode, cityHighlight, slug = 'uk' }) => (
  <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#07132F] via-[#001952] to-[#002D7A] p-7 sm:p-9 text-white border border-white/15">
    <div className="absolute inset-0 opacity-40 pointer-events-none">
      <DestinationSkyline slug={slug} />
    </div>
    <div className="relative z-10 flex items-center gap-4">
      <CountryFlag code={flagCode} className="w-12 h-8 rounded shadow-sm ring-1 ring-white/25" />
      <div>
        <p className="text-xs font-semibold tracking-wider uppercase text-[#F2BA49]">
          {region} · Destination Guide
        </p>
        <p className="text-xl font-bold text-white mt-0.5">{countryName}</p>
        {cityHighlight && <p className="text-xs text-slate-300 mt-1">{cityHighlight}</p>}
      </div>
    </div>
  </div>
);
