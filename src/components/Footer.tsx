import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import { useAppContext } from '../context/RouterContext';
import { getMailtoHref, getPhoneHref } from '../utils/contactLinks';
import { AspireLogo } from './AspireLogo';

export const Footer: React.FC = () => {
  const { navigate } = useAppContext();

  const linkHandler = (e: React.MouseEvent, path: string) => {
    e.preventDefault();
    navigate(path);
  };

  return (
    <footer className="bg-[#07132F] text-slate-300 border-t border-white/10 pb-16 lg:pb-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-4">
            <a
              href="/"
              onClick={(e) => linkHandler(e, '/')}
              aria-label="Aspire Visa Experts Home"
              className="inline-block"
            >
              <AspireLogo variant="dark" />
            </a>
            <p className="text-sm font-medium text-[#F8D77A]">{siteConfig.footerStatement}</p>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-sm">
              {siteConfig.description}
            </p>
            <div className="pt-2 space-y-2 text-xs sm:text-sm text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#F2BA49] shrink-0 mt-0.5" aria-hidden="true" />
                <span>{siteConfig.address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#F2BA49] shrink-0" aria-hidden="true" />
                <a href={getPhoneHref()} className="hover:text-white transition-colors tabular-nums">
                  {siteConfig.phone}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#F2BA49] shrink-0" aria-hidden="true" />
                <a
                  href={getMailtoHref('Aspire Visa Consultancy Enquiry')}
                  className="hover:text-white transition-colors"
                >
                  {siteConfig.email}
                </a>
              </div>
              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-[#F2BA49] shrink-0 mt-0.5" aria-hidden="true" />
                <span>{siteConfig.workingHours}</span>
              </div>
            </div>
          </div>

          {/* Visa Services */}
          <div className="lg:col-span-2">
            <h3 className="font-display text-xs font-bold tracking-[0.14em] uppercase text-[#F2BA49] mb-4">
              Visa Services
            </h3>
            <ul className="space-y-2.5 text-sm">
              {[
                { label: 'Student Visa', path: '/visa-services/student-visa' },
                { label: 'Tourist Visa', path: '/visa-services/tourist-visa' },
                { label: 'Work Visa', path: '/visa-services/work-visa' },
                { label: 'Business Visa', path: '/visa-services/business-visa' },
                { label: 'Dependent Visa', path: '/visa-services/dependent-visa' },
                { label: 'Family Visa', path: '/visa-services/family-visa' },
                { label: 'Immigration / PR', path: '/visa-services/immigration' },
              ].map((item) => (
                <li key={item.path}>
                  <a
                    href={item.path}
                    onClick={(e) => linkHandler(e, item.path)}
                    className="hover:text-[#F8D77A] transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Destinations */}
          <div className="lg:col-span-3">
            <h3 className="font-display text-xs font-bold tracking-[0.14em] uppercase text-[#F2BA49] mb-4">
              Destinations
            </h3>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2.5 text-sm">
              {[
                { label: 'United Kingdom', path: '/destinations/uk' },
                { label: 'Australia', path: '/destinations/australia' },
                { label: 'Canada', path: '/destinations/canada' },
                { label: 'United States', path: '/destinations/usa' },
                { label: 'Germany', path: '/destinations/germany' },
                { label: 'New Zealand', path: '/destinations/new-zealand' },
                { label: 'Ireland', path: '/destinations/ireland' },
                { label: 'UAE', path: '/destinations/uae' },
                { label: 'Europe / Schengen', path: '/destinations/schengen' },
              ].map((item) => (
                <li key={item.path}>
                  <a
                    href={item.path}
                    onClick={(e) => linkHandler(e, item.path)}
                    className="hover:text-[#F8D77A] transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company & Resources */}
          <div className="lg:col-span-3">
            <h3 className="font-display text-xs font-bold tracking-[0.14em] uppercase text-[#F2BA49] mb-4">
              Company &amp; Resources
            </h3>
            <ul className="space-y-2.5 text-sm">
              {[
                { label: 'About Aspire', path: '/about' },
                { label: 'Our Process', path: '/process' },
                { label: 'Success Stories', path: '/success-stories' },
                { label: 'Resources & Insights', path: '/resources' },
                { label: 'Contact Us', path: '/contact' },
                { label: 'Book a Consultation', path: '/book-consultation' },
              ].map((item) => (
                <li key={item.path}>
                  <a
                    href={item.path}
                    onClick={(e) => linkHandler(e, item.path)}
                    className="hover:text-[#F8D77A] transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Mandatory Legal Disclaimer */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <p className="text-xs text-slate-400 leading-relaxed">{siteConfig.disclaimer.full}</p>
        </div>

        {/* Bottom Copyright & Policies */}
        <div className="mt-6 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            © {siteConfig.copyrightYear} {siteConfig.companyName}. All Rights Reserved.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            {[
              { label: 'Privacy Policy', path: '/legal/privacy-policy' },
              { label: 'Terms & Conditions', path: '/legal/terms' },
              { label: 'Disclaimer', path: '/legal/disclaimer' },
              { label: 'Cookie Policy', path: '/legal/cookie-policy' },
            ].map((policy) => (
              <a
                key={policy.path}
                href={policy.path}
                onClick={(e) => linkHandler(e, policy.path)}
                className="hover:text-white transition-colors"
              >
                {policy.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
