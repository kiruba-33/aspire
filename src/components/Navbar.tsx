import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { visaServicesData } from '../data/visaServices';
import { destinationsData } from '../data/destinations';
import { useAppContext } from '../context/RouterContext';
import { AspireLogo } from './AspireLogo';
import { CTAButton } from './CTAButton';

export const Navbar: React.FC = () => {
  const { currentPath, navigate, openConsultationModal } = useAppContext();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<'visas' | 'destinations' | null>(null);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 18);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleLinkClick = (path: string) => {
    setMobileMenuOpen(false);
    setOpenDropdown(null);
    navigate(path);
  };

  const isActive = (prefix: string) => {
    if (prefix === '/') return currentPath === '/';
    return currentPath.startsWith(prefix);
  };

  return (
    <header
      className={`sticky top-0 z-40 bg-white transition-all duration-200 border-b ${
        isScrolled
          ? 'border-slate-200 shadow-md'
          : 'border-slate-200/70'
      }`}
    >
      <div
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-6 transition-all duration-200 ${
          isScrolled ? 'h-14 lg:h-16' : 'h-16 lg:h-20'
        }`}
      >
        {/* LEFT: Aspire Visa Experts Official Logo */}
        <a
          href="/"
          onClick={(e) => {
            e.preventDefault();
            handleLinkClick('/');
          }}
          aria-label="Aspire Visa Experts Home"
          className="shrink-0 focus-visible:outline-2 focus-visible:outline-[#F2BA49] rounded"
        >
          <AspireLogo variant="light" compact={isScrolled} />
        </a>

        {/* CENTER: Desktop Single-Line Navigation */}
        <nav
          aria-label="Primary Navigation"
          className="hidden xl:flex items-center gap-5 text-[13px] font-medium text-[#172033]"
        >
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick('/');
            }}
            className={`whitespace-nowrap shrink-0 py-1.5 border-b-2 transition-colors ${
              isActive('/')
                ? 'border-[#F2BA49] text-[#001952] font-semibold'
                : 'border-transparent hover:border-[#F2BA49] hover:text-[#001952]'
            }`}
          >
            Home
          </a>

          <a
            href="/about"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick('/about');
            }}
            className={`whitespace-nowrap shrink-0 py-1.5 border-b-2 transition-colors ${
              isActive('/about')
                ? 'border-[#F2BA49] text-[#001952] font-semibold'
                : 'border-transparent hover:border-[#F2BA49] hover:text-[#001952]'
            }`}
          >
            About Us
          </a>

          {/* Visa Services Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setOpenDropdown('visas')}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <button
              type="button"
              onClick={() => handleLinkClick('/visa-services')}
              aria-expanded={openDropdown === 'visas'}
              className={`inline-flex items-center gap-1 whitespace-nowrap shrink-0 py-1.5 border-b-2 transition-colors cursor-pointer ${
                isActive('/visa-services')
                  ? 'border-[#F2BA49] text-[#001952] font-semibold'
                  : 'border-transparent hover:border-[#F2BA49] hover:text-[#001952]'
              }`}
            >
              <span>Visa Services</span>
              <ChevronDown className="w-3.5 h-3.5 text-slate-400" aria-hidden="true" />
            </button>
            {openDropdown === 'visas' && (
              <div className="absolute left-0 top-full pt-2 w-72 z-50">
                <div className="bg-white rounded-xl border border-slate-200 shadow-xl p-2 grid grid-cols-1 gap-0.5">
                  {visaServicesData.map((service) => (
                    <a
                      key={service.slug}
                      href={`/visa-services/${service.slug}`}
                      onClick={(e) => {
                        e.preventDefault();
                        handleLinkClick(`/visa-services/${service.slug}`);
                      }}
                      className="px-3 py-2 rounded-lg text-sm text-[#172033] hover:bg-[#F6F8FC] hover:text-[#001952] transition-colors flex items-center justify-between"
                    >
                      <span>{service.title}</span>
                      <span className="text-[#F2BA49] text-xs font-bold">→</span>
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>

          <a
            href="/visa-services/student-visa"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick('/visa-services/student-visa');
            }}
            className="whitespace-nowrap shrink-0 py-1.5 border-b-2 border-transparent hover:border-[#F2BA49] hover:text-[#001952] transition-colors"
          >
            Study Abroad
          </a>

          {/* Destinations Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setOpenDropdown('destinations')}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <button
              type="button"
              onClick={() => handleLinkClick('/destinations')}
              aria-expanded={openDropdown === 'destinations'}
              className={`inline-flex items-center gap-1 whitespace-nowrap shrink-0 py-1.5 border-b-2 transition-colors cursor-pointer ${
                isActive('/destinations')
                  ? 'border-[#F2BA49] text-[#001952] font-semibold'
                  : 'border-transparent hover:border-[#F2BA49] hover:text-[#001952]'
              }`}
            >
              <span>Destinations</span>
              <ChevronDown className="w-3.5 h-3.5 text-slate-400" aria-hidden="true" />
            </button>
            {openDropdown === 'destinations' && (
              <div className="absolute left-0 top-full pt-2 w-80 z-50">
                <div className="bg-white rounded-xl border border-slate-200 shadow-xl p-2 grid grid-cols-2 gap-0.5">
                  {destinationsData.map((dest) => (
                    <a
                      key={dest.slug}
                      href={`/destinations/${dest.slug}`}
                      onClick={(e) => {
                        e.preventDefault();
                        handleLinkClick(`/destinations/${dest.slug}`);
                      }}
                      className="px-3 py-2 rounded-lg text-sm text-[#172033] hover:bg-[#F6F8FC] hover:text-[#001952] transition-colors truncate"
                    >
                      {dest.shortName}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>

          <a
            href="/process"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick('/process');
            }}
            className={`whitespace-nowrap shrink-0 py-1.5 border-b-2 transition-colors ${
              isActive('/process')
                ? 'border-[#F2BA49] text-[#001952] font-semibold'
                : 'border-transparent hover:border-[#F2BA49] hover:text-[#001952]'
            }`}
          >
            Our Process
          </a>

          <a
            href="/success-stories"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick('/success-stories');
            }}
            className={`whitespace-nowrap shrink-0 py-1.5 border-b-2 transition-colors ${
              isActive('/success-stories')
                ? 'border-[#F2BA49] text-[#001952] font-semibold'
                : 'border-transparent hover:border-[#F2BA49] hover:text-[#001952]'
            }`}
          >
            Success Stories
          </a>

          <a
            href="/resources"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick('/resources');
            }}
            className={`whitespace-nowrap shrink-0 py-1.5 border-b-2 transition-colors ${
              isActive('/resources')
                ? 'border-[#F2BA49] text-[#001952] font-semibold'
                : 'border-transparent hover:border-[#F2BA49] hover:text-[#001952]'
            }`}
          >
            Resources
          </a>
        </nav>

        {/* RIGHT: Primary Action + Mobile Menu Trigger */}
        <div className="flex items-center gap-3 shrink-0">
          <CTAButton
            variant="primary"
            size="sm"
            onClick={() => openConsultationModal({ source: 'Navbar' })}
            className="hidden sm:inline-flex"
          >
            Book Consultation
          </CTAButton>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileMenuOpen}
            className="xl:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg border border-slate-200 text-[#001952] hover:bg-[#F6F8FC] cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white border-t border-slate-200 px-4 py-4 shadow-xl max-h-[82vh] overflow-y-auto">
          <nav aria-label="Mobile Navigation" className="flex flex-col gap-1">
            {[
              { label: 'Home', path: '/' },
              { label: 'About', path: '/about' },
              { label: 'Visa Services', path: '/visa-services' },
              { label: 'Student Visa', path: '/visa-services/student-visa' },
              { label: 'Tourist Visa', path: '/visa-services/tourist-visa' },
              { label: 'Work Visa', path: '/visa-services/work-visa' },
              { label: 'Destinations', path: '/destinations' },
              { label: 'Process', path: '/process' },
              { label: 'Success Stories', path: '/success-stories' },
              { label: 'Resources', path: '/resources' },
              { label: 'Contact', path: '/contact' },
            ].map((item) => (
              <a
                key={item.path}
                href={item.path}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(item.path);
                }}
                className={`px-3.5 py-3 rounded-lg text-base font-medium transition-colors ${
                  isActive(item.path) && item.path !== '/'
                    ? 'bg-[#F6F8FC] text-[#001952] font-semibold border-l-2 border-[#F2BA49]'
                    : 'text-[#172033] hover:bg-[#F6F8FC]'
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="mt-4 pt-4 border-t border-slate-100">
            <CTAButton
              variant="gold"
              size="lg"
              className="w-full"
              onClick={() => {
                setMobileMenuOpen(false);
                openConsultationModal({ source: 'Mobile Drawer' });
              }}
            >
              Book a Consultation
            </CTAButton>
          </div>
        </div>
      )}
    </header>
  );
};
