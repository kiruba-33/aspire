/**
 * CENTRAL CONFIGURATION OBJECT — ASPIRE VISA EXPERTS (PVT) LTD
 * Replace demo contact details, statistics, and team placeholders before production launch.
 */

export interface TeamMember {
  id: string;
  name: string;
  designation: string;
  specialization: string;
  initials: string;
  experienceNote: string;
}

export interface StatItem {
  id: string;
  value: number;
  suffix: string;
  label: string;
  detail: string;
}

export interface SiteConfig {
  companyName: string;
  shortName: string;
  tagline: string;
  secondaryTagline: string;
  footerStatement: string;
  description: string;
  logo: {
    customImageSrc?: string; // Optional path to /aspire-logo.png when provided
    alt: string;
  };
  phone: string;
  phoneHref: string;
  whatsapp: string; // Digits only with country code (Sri Lanka: 94...)
  whatsappMessage: string;
  email: string;
  address: string;
  addressSecondary: string;
  workingHours: string;
  mapLabel: string;
  socialLinks: {
    linkedin: string;
    instagram: string;
    facebook: string;
    youtube: string;
  };
  disclaimer: {
    short: string;
    full: string;
  };
  copyrightYear: number;
  statistics: StatItem[];
  teamMembers: TeamMember[];
}

export const siteConfig: SiteConfig = {
  companyName: 'Aspire Visa Experts (Pvt) Ltd',
  shortName: 'Aspire Visa Experts',
  tagline: 'From Dream to Destination.',
  secondaryTagline: 'Your Journey Starts Here.',
  footerStatement: 'Helping you navigate opportunities beyond borders.',
  description:
    'Aspire Visa Experts (Pvt) Ltd is an overseas and immigration visa consultancy based in Sri Lanka, providing structured guidance for student, tourist, visit, work, business, family, and immigration pathways.',
  logo: {
    customImageSrc: undefined,
    alt: 'Aspire Visa Experts (Pvt) Ltd Official Logo',
  },
  // DEMO SRI LANKA CONTACT DETAILS — Easily replaceable before launch
  phone: '+94 77 123 4567',
  phoneHref: 'tel:+94771234567',
  whatsapp: '94771234567',
  whatsappMessage:
    'Hello Aspire Visa Experts, I would like to know more about your visa consultancy services.',
  email: 'hello@aspirevisaexperts.example',
  address: 'Level 08, Galle Road, Colombo 03, Sri Lanka',
  addressSecondary: 'Serving applicants across Sri Lanka (In-Person & Online Consultations)',
  workingHours: 'Monday – Saturday · 9:00 AM – 6:30 PM (SLST)',
  mapLabel: 'Colombo 03, Western Province, Sri Lanka',
  socialLinks: {
    linkedin: '#contact',
    instagram: '#contact',
    facebook: '#contact',
    youtube: '#contact',
  },
  disclaimer: {
    short:
      'Visa decisions are made solely by the relevant embassy, consulate or immigration authority.',
    full: 'Aspire Visa Experts (Pvt) Ltd is an independent visa and immigration consultancy. We are not a government agency, embassy or consulate. Visa decisions are made solely by the relevant government authority. Information provided is for general guidance and may change without notice.',
  },
  copyrightYear: 2026,
  // DEMO STATISTICS — Configurable sample metrics
  statistics: [
    {
      id: 'destinations',
      value: 10,
      suffix: '+',
      label: 'DESTINATIONS',
      detail: 'Dedicated advisory across key global education, travel & work hubs',
    },
    {
      id: 'applications',
      value: 500,
      suffix: '+',
      label: 'APPLICATIONS ASSISTED',
      detail: 'Demonstrative sample milestone across student, visitor & work files',
    },
    {
      id: 'satisfaction',
      value: 98,
      suffix: '%',
      label: 'CLIENT SATISFACTION',
      detail: 'Reflecting structured communication & document readiness support',
    },
    {
      id: 'categories',
      value: 10,
      suffix: '+',
      label: 'VISA CATEGORIES',
      detail: 'From student & tourist visas to skilled work & PR pathways',
    },
  ],
  // SAMPLE TEAM PROFILES — Replace with real team portraits and bios
  teamMembers: [
    {
      id: 'tm-1',
      name: 'Nadeesha Perera',
      designation: 'Principal Visa Consultant',
      specialization: 'UK, Australia & Schengen Visitor & Corporate Filings',
      initials: 'NP',
      experienceNote: '9+ years advisory experience (Sample Profile)',
    },
    {
      id: 'tm-2',
      name: 'Kavinda Jayawardena',
      designation: 'Student Visa Specialist',
      specialization: 'UK, Canada, Germany & Australia University Pathways',
      initials: 'KJ',
      experienceNote: 'Academic & financial documentation specialist (Sample)',
    },
    {
      id: 'tm-3',
      name: 'Dilani Fernando',
      designation: 'Immigration Consultant',
      specialization: 'Skilled Migration, PR Readiness & Employer Sponsorships',
      initials: 'DF',
      experienceNote: 'Credential & points-pathway advisor (Sample Profile)',
    },
    {
      id: 'tm-4',
      name: 'Roshan Wijesinghe',
      designation: 'Documentation Specialist',
      specialization: 'Financial Audits, Dependent Files & Interview Readiness',
      initials: 'RW',
      experienceNote: 'Pre-submission quality verification lead (Sample)',
    },
  ],
};
