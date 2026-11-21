import React from 'react';
import { MessageCircle } from 'lucide-react';
import { getWhatsAppUrl } from '../utils/contactLinks';

interface WhatsAppButtonProps {
  message?: string;
  label?: string;
  floating?: boolean;
  className?: string;
}

export const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({
  message,
  label = 'WhatsApp Us',
  floating = false,
  className = '',
}) => {
  if (floating) {
    return (
      <a
        href={getWhatsAppUrl(message)}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp with Aspire Visa Experts"
        className="hidden lg:inline-flex fixed bottom-6 right-6 z-40 items-center gap-2.5 px-4 py-3 rounded-full bg-[#001952] text-white border border-[#F2BA49]/40 shadow-xl hover:bg-[#002D7A] transition-all duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F2BA49]"
      >
        <span className="w-6 h-6 rounded-full bg-[#25D366] text-[#001952] inline-flex items-center justify-center">
          <MessageCircle className="w-4 h-4" aria-hidden="true" />
        </span>
        <span className="text-sm font-semibold whitespace-nowrap">{label}</span>
      </a>
    );
  }

  return (
    <a
      href={getWhatsAppUrl(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-[#16A34A] hover:bg-[#15803D] text-white text-sm font-semibold transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F2BA49] ${className}`}
    >
      <MessageCircle className="w-4 h-4 shrink-0" aria-hidden="true" />
      <span>{label}</span>
    </a>
  );
};
