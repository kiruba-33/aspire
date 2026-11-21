import { siteConfig } from '../config/siteConfig';

export function getWhatsAppUrl(customMessage?: string): string {
  const text = encodeURIComponent(customMessage || siteConfig.whatsappMessage);
  return `https://wa.me/${siteConfig.whatsapp}?text=${text}`;
}

export function getPhoneHref(): string {
  return siteConfig.phoneHref;
}

export function getMailtoHref(subject?: string): string {
  const query = subject ? `?subject=${encodeURIComponent(subject)}` : '';
  return `mailto:${siteConfig.email}${query}`;
}
