export interface JourneyCategoryCard {
  id: string;
  label: string;
  headline: string;
  routePath: string;
  theme: 'study' | 'travel' | 'work' | 'immigration';
  visaLabel: string;
}

export const journeyCards: JourneyCategoryCard[] = [
  {
    id: 'study',
    label: 'STUDY',
    headline: 'Build your future overseas.',
    routePath: '/visa-services/student-visa',
    theme: 'study',
    visaLabel: 'Student Visas · Global Universities',
  },
  {
    id: 'travel',
    label: 'TRAVEL',
    headline: 'Explore the world with confidence.',
    routePath: '/visa-services/tourist-visa',
    theme: 'travel',
    visaLabel: 'Tourist & Visit Visas',
  },
  {
    id: 'work',
    label: 'WORK',
    headline: 'Take your career beyond borders.',
    routePath: '/visa-services/work-visa',
    theme: 'work',
    visaLabel: 'Skilled & Employer-Sponsored Work',
  },
  {
    id: 'immigration',
    label: 'IMMIGRATION',
    headline: 'Plan your next chapter abroad.',
    routePath: '/visa-services/immigration',
    theme: 'immigration',
    visaLabel: 'PR & Long-Term Pathways',
  },
];

export interface JourneyStage {
  number: string;
  label: string;
  title: string;
  detail: string;
}

export const journeyTimelineStages: JourneyStage[] = [
  {
    number: '01',
    label: 'START',
    title: 'Initial Enquiry',
    detail: 'Share your destination, travel purpose, and preferred timeline.',
  },
  {
    number: '02',
    label: 'CONSULTATION',
    title: 'One-on-One Consultation',
    detail: 'Discuss realistic visa pathways with an Aspire consultant in Colombo or online.',
  },
  {
    number: '03',
    label: 'PROFILE ASSESSMENT',
    title: 'Profile Assessment',
    detail: 'Review academic history, employment, sponsorship, and travel background.',
  },
  {
    number: '04',
    label: 'DOCUMENT PREPARATION',
    title: 'Document Preparation',
    detail: 'Receive a tailored checklist and verify financial, civil, and employer records.',
  },
  {
    number: '05',
    label: 'APPLICATION',
    title: 'Application Filing',
    detail: 'Accurate form completion, cover letters, and structured pre-submission audit.',
  },
  {
    number: '06',
    label: 'BIOMETRICS / INTERVIEW',
    title: 'Biometrics & Interview Prep',
    detail: 'VFS / Embassy appointment coordination and mock interview coaching where applicable.',
  },
  {
    number: '07',
    label: 'APPLICATION TRACKING',
    title: 'Application Tracking',
    detail: 'Consistent status monitoring and prompt handling of additional document requests.',
  },
  {
    number: '08',
    label: 'DECISION',
    title: 'Embassy Decision',
    detail: 'Passport collection guidance and pre-departure briefing upon authority decision.',
  },
];

export const studentSixSteps = [
  { num: '01', label: 'Profile Assessment' },
  { num: '02', label: 'Destination Guidance' },
  { num: '03', label: 'Admission Support' },
  { num: '04', label: 'Documentation' },
  { num: '05', label: 'Visa Preparation' },
  { num: '06', label: 'Interview Preparation' },
];

export const whyAspirePoints = [
  'Personalized Consultation',
  'Destination-Specific Guidance',
  'Document Checklist Support',
  'Application Preparation',
  'Interview Preparation',
  'Transparent Communication',
  'End-to-End Assistance',
];

export interface DocumentCategory {
  id: string;
  label: string;
  summary: string;
  items: { name: string; note: string }[];
}

export const documentChecklistCategories: DocumentCategory[] = [
  {
    id: 'identity',
    label: 'Identity',
    summary: 'Core personal identification and valid Sri Lankan travel documents.',
    items: [
      { name: 'Passport', note: 'Current valid passport plus previous passports showing travel history' },
      { name: 'Photographs', note: 'Recent studio photographs meeting exact embassy size & background rules' },
      { name: 'Identity Proof', note: 'National Identity Card (NIC), Birth Certificate & Marriage Certificate' },
    ],
  },
  {
    id: 'financial',
    label: 'Financial',
    summary: 'Verifiable funds covering tuition, living expenses, or trip costs.',
    items: [
      { name: 'Bank Statements', note: 'Personal or sponsor bank statements covering required holding months' },
      { name: 'Income Proof', note: 'Salary slips, tax records, or audited business financials' },
      { name: 'Sponsor Documents', note: 'Affidavit of support, fixed deposits, or education loan sanction letters' },
    ],
  },
  {
    id: 'education',
    label: 'Education',
    summary: 'Academic credentials for student and skilled migration pathways.',
    items: [
      { name: 'Certificates', note: 'GCE O/L, GCE A/L, diploma, and degree certificates' },
      { name: 'Transcripts', note: 'Official academic transcripts and IELTS / PTE / TOEFL scorecards' },
      { name: 'Admission Letter', note: 'Offer Letter, CAS, I-20, CoE, or Letter of Acceptance' },
    ],
  },
  {
    id: 'employment',
    label: 'Employment',
    summary: 'Proof of current occupation, approved leave, or business ownership.',
    items: [
      { name: 'Employment Letter', note: 'Official letter confirming role, tenure, and salary' },
      { name: 'Salary Proof', note: 'Recent payslips and corresponding bank credit statements' },
      { name: 'Leave Approval', note: 'Signed employer No Objection Certificate confirming return date' },
    ],
  },
  {
    id: 'travel',
    label: 'Travel',
    summary: 'Planned routing, accommodation, and invitation records.',
    items: [
      { name: 'Flight Itinerary', note: 'Proposed arrival and return flight routing' },
      { name: 'Accommodation Proof', note: 'Hotel reservations or host residential address documentation' },
      { name: 'Invitation Letter', note: 'Signed invitation from family, corporate host, or conference organizer' },
    ],
  },
  {
    id: 'additional',
    label: 'Additional',
    summary: 'Jurisdiction-specific medical, clearance, and insurance documents.',
    items: [
      { name: 'Medical Clearances', note: 'Approved panel medical or TB screening certificate where required' },
      { name: 'Police Clearance', note: 'Sri Lanka Police Clearance Certificate for work or long-stay routes' },
      { name: 'Travel / Health Insurance', note: '€30,000 Schengen travel insurance or student health cover (OSHC/IHS)' },
    ],
  },
];

/**
 * SAMPLE TESTIMONIALS — SRI LANKA
 * Illustrative demo applicant stories. Replace with verified client stories before launch.
 */
export interface TestimonialItem {
  id: string;
  client: string;
  city: string;
  visaType: string;
  destination: string;
  destinationSlug: string;
  quote: string;
}

export const sampleTestimonials: TestimonialItem[] = [
  {
    id: 's1',
    client: 'Tharindu Wickramasinghe',
    city: 'Colombo, Sri Lanka',
    visaType: 'Student Visa',
    destination: 'United Kingdom',
    destinationSlug: 'uk',
    quote:
      'Aspire Visa Experts structured my UKVI financial checklist and reviewed every line of my CAS documentation before submission. Their clarity took away weeks of guesswork.',
  },
  {
    id: 's2',
    client: 'Sanduni & Ashan De Silva',
    city: 'Kandy, Sri Lanka',
    visaType: 'Tourist Visa',
    destination: 'Australia',
    destinationSlug: 'australia',
    quote:
      'From organizing our employment leave letters to reviewing our ImmiAccount uploads, the consultants kept every step transparent and calm.',
  },
  {
    id: 's3',
    client: 'Mohamed Farhan',
    city: 'Galle, Sri Lanka',
    visaType: 'Work Visa',
    destination: 'UAE',
    destinationSlug: 'uae',
    quote:
      'Having a dedicated advisor verify my degree attestation and contract checklist before my relocation saved significant back-and-forth.',
  },
  {
    id: 's4',
    client: 'Lakshmi & Mohan Raj',
    city: 'Negombo, Sri Lanka',
    visaType: 'Visit Visa',
    destination: 'Canada',
    destinationSlug: 'canada',
    quote:
      'We wanted to visit our daughter in Toronto. Aspire coordinated both our Sri Lankan records and her Canadian invitation cleanly so our file felt complete.',
  },
];

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export const faqItems: FAQItem[] = [
  {
    id: 'f1',
    question: 'How do I know which visa I need?',
    answer:
      'The right visa category depends on your primary travel purpose (study, tourism, family visit, business meetings, salaried work, or medical care), stay length, and destination country. Use our 4-step Visa Assessment Tool or book a consultation for tailored advice.',
  },
  {
    id: 'f2',
    question: 'What documents do I need?',
    answer:
      'Most applications require a valid passport, photographs, financial proof (bank statements and income records), employment or academic credentials, and purpose-specific documents such as an admission letter or host invitation. Exact requirements vary by country and profile.',
  },
  {
    id: 'f3',
    question: 'How long does visa processing take?',
    answer:
      'Processing times are set strictly by each embassy, high commission, or immigration department and fluctuate by season and appointment availability. We advise initiating preparation well before your intended travel date.',
  },
  {
    id: 'f4',
    question: 'Do you guarantee visa approval?',
    answer:
      'No consultancy can guarantee visa approval. Final decisions are made by the relevant government authority, embassy, consulate or immigration authority.',
  },
  {
    id: 'f5',
    question: 'Do you assist with student visas?',
    answer:
      'Yes. We assist Sri Lankan students with profile assessment, destination and admission guidance, financial documentation audits, visa form preparation, and credibility interview coaching.',
  },
  {
    id: 'f6',
    question: 'Do you assist with tourist visas?',
    answer:
      'Yes. We prepare tourist and visit visa applications for the UK, Europe / Schengen, Australia, Canada, USA, UAE, Singapore, Malaysia, and more.',
  },
  {
    id: 'f7',
    question: 'Do you assist with rejected applications?',
    answer:
      'Yes. We carefully examine prior refusal notices to identify documentary or clarity gaps before recommending whether and how to prepare a fresh submission.',
  },
  {
    id: 'f8',
    question: 'Do you provide interview preparation?',
    answer:
      'Yes. For US consular interviews and university/embassy credibility interviews, we run structured practice sessions focused on clear, truthful answers.',
  },
  {
    id: 'f9',
    question: 'Can you help with multiple destinations?',
    answer:
      'Yes. We help plan multi-country itineraries (such as Schengen + UK) and sequence passport submissions logically.',
  },
  {
    id: 'f10',
    question: 'How do I book a consultation?',
    answer:
      'Click "Book Consultation" anywhere on this website, message us via WhatsApp, or call our Colombo office directly during working hours.',
  },
];

export type ArticleCategory =
  | 'All'
  | 'Visa Guides'
  | 'Study Abroad'
  | 'Travel'
  | 'Immigration'
  | 'Documentation'
  | 'Application Tips';

export interface ArticleItem {
  slug: string;
  category: Exclude<ArticleCategory, 'All'>;
  title: string;
  date: string;
  readTime: string;
  excerpt: string;
  sections: { heading: string; body: string }[];
}

export const articlesData: ArticleItem[] = [
  {
    slug: 'student-visa-checklist-what-you-should-prepare',
    category: 'Study Abroad',
    title: 'Student Visa Checklist: What You Should Prepare',
    date: 'November 2026',
    readTime: '5 min read',
    excerpt:
      'From academic transcripts and offer confirmations to bank holding periods and medical screenings, organize your student visa file early.',
    sections: [
      {
        heading: 'Verify Offer & Identity Consistency',
        body: 'Confirm your Offer Letter, CAS, I-20, or CoE matches your Sri Lankan passport spelling, date of birth, and intake schedule before lodging forms.',
      },
      {
        heading: 'Prepare Financial Holding Windows',
        body: 'Many jurisdictions require liquid savings to be maintained for a minimum consecutive period or backed by formal education loan sanctions.',
      },
    ],
  },
  {
    slug: 'how-to-prepare-for-a-visa-interview',
    category: 'Application Tips',
    title: 'How to Prepare for a Visa Interview',
    date: 'November 2026',
    readTime: '4 min read',
    excerpt:
      'Practical tips for speaking concisely and confidently during consular or university credibility interviews.',
    sections: [
      {
        heading: 'Align Spoken Answers With Submitted Forms',
        body: 'Review every date, sponsor detail, and travel plan declared in your DS-160 or online portal so your answers remain consistent and natural.',
      },
      {
        heading: 'Focus on Honest Intent & Home Ties',
        body: 'Officers look for clarity regarding why you selected a course or destination and your ongoing personal or professional ties to Sri Lanka.',
      },
    ],
  },
  {
    slug: 'common-tourist-visa-application-mistakes',
    category: 'Travel',
    title: 'Common Tourist Visa Application Mistakes',
    date: 'October 2026',
    readTime: '4 min read',
    excerpt:
      'Avoid unexplained cash deposits, mismatched leave letters, and unrealistic multi-city itineraries when preparing visitor files.',
    sections: [
      {
        heading: 'Keep Itineraries Realistic',
        body: 'Ensure flight plans, hotel reservations, and employer leave approvals align to the exact day.',
      },
      {
        heading: 'Document Income Trails Clearly',
        body: 'Consistent salary deposits or documented business revenue build far stronger credibility than sudden unverified deposits.',
      },
    ],
  },
  {
    slug: 'understanding-schengen-visa-basics',
    category: 'Visa Guides',
    title: 'Understanding Schengen Visa Basics',
    date: 'October 2026',
    readTime: '5 min read',
    excerpt:
      'Learn the main-destination rule, €30,000 travel medical insurance requirements, and VFS biometrics guidelines for Europe.',
    sections: [
      {
        heading: 'Main Destination Embassy Rule',
        body: 'Submit your Schengen application to the country where you will spend the highest number of nights—or the first port of entry if stays are equal.',
      },
      {
        heading: 'Insurance & Accommodation Continuity',
        body: 'Every night inside the Schengen Area should be accounted for with verifiable accommodation and compliant €30,000 medical coverage.',
      },
    ],
  },
  {
    slug: 'financial-documents-for-visa-applications',
    category: 'Documentation',
    title: 'Financial Documents for Visa Applications',
    date: 'September 2026',
    readTime: '6 min read',
    excerpt:
      'How embassies evaluate liquid savings, fixed deposits, income proof, and third-party sponsor affidavits.',
    sections: [
      {
        heading: 'Liquid Balances vs. Assets',
        body: 'Accessible bank savings and approved education loans demonstrate immediate funding capacity, while property deeds reinforce home ties.',
      },
      {
        heading: 'Sponsor Verification',
        body: 'Third-party sponsorship from parents or spouses requires relationship documentation, sponsor income records, and signed declarations.',
      },
    ],
  },
  {
    slug: 'planning-long-term-immigration-pathways',
    category: 'Immigration',
    title: 'Planning Long-Term Skilled Immigration Pathways',
    date: 'September 2026',
    readTime: '5 min read',
    excerpt:
      'Key preparation steps—language testing, credential assessments, and detailed work references—before entering skilled pools.',
    sections: [
      {
        heading: 'Start Credential & Language Preparation Early',
        body: 'Completing ECA/skill assessments and valid language exams establishes your baseline eligibility before draws.',
      },
    ],
  },
];
