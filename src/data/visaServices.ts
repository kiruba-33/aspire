export type VisaSlug =
  | 'student-visa'
  | 'tourist-visa'
  | 'work-visa'
  | 'business-visa'
  | 'visit-visa'
  | 'dependent-visa'
  | 'family-visa'
  | 'medical-visa'
  | 'transit-visa'
  | 'conference-event-visa'
  | 'immigration';

export interface VisaServiceItem {
  slug: VisaSlug;
  title: string;
  tier: 'featured' | 'primary' | 'secondary';
  shortDescription: string;
  heroHeadline: string;
  heroSubheadline: string;
  iconKey:
    | 'graduation'
    | 'plane'
    | 'building'
    | 'briefcase'
    | 'compass'
    | 'users'
    | 'home'
    | 'heart'
    | 'route'
    | 'calendar'
    | 'globe';
  whoIsItFor: string[];
  keyRequirements: string[];
  applicationProcess: string[];
  commonDocuments: string[];
  commonChallenges: string[];
  howWeHelp: string[];
  faqs: { question: string; answer: string }[];
}

export const visaServicesData: VisaServiceItem[] = [
  {
    slug: 'student-visa',
    title: 'Student Visa',
    tier: 'featured',
    shortDescription:
      'Structured study-abroad planning, financial documentation review, and embassy-ready student visa preparation.',
    heroHeadline: 'Study Abroad. Build What’s Next.',
    heroSubheadline:
      'Comprehensive admission coordination, sponsor financial structuring, and interview readiness for Sri Lankan students.',
    iconKey: 'graduation',
    whoIsItFor: [
      'Sri Lankan undergraduate, postgraduate, and doctoral applicants holding university offers',
      'Students pursuing foundation, diploma, or technical pathways overseas',
      'Families organizing savings, fixed deposits, or education loans to meet embassy maintenance standards',
    ],
    keyRequirements: [
      'Confirmed Offer / CAS / I-20 / Confirmation of Enrolment from an accredited institution',
      'Verifiable financial capacity covering tuition and living costs per destination rules',
      'Academic transcripts, English proficiency scorecards, and valid Sri Lankan passport',
      'Authentic Statement of Purpose / Genuine Student narrative',
    ],
    applicationProcess: [
      'Profile Assessment',
      'Destination Guidance',
      'Admission Support',
      'Documentation & Financial Audit',
      'Visa Preparation & Lodgement',
      'Interview Preparation & Tracking',
    ],
    commonDocuments: [
      'Valid passport & compliant biometric photos',
      'Official Offer Letter / CAS / I-20 / CoE',
      'GCE O/L, A/L, degree transcripts & IELTS / PTE scorecards',
      'Sponsor bank statements, fixed deposits, income proofs & loan sanctions',
      'Medical screening / TB clearance & Overseas Student Health Cover where required',
    ],
    commonChallenges: [
      'Unseasoned funds or unexplained large deposits in sponsor bank accounts',
      'Gaps in academic progression or unclear course motivation',
      'Missed university deposit deadlines or incomplete CAS / PAL requirements',
    ],
    howWeHelp: [
      'Detailed financial holding check tailored to UKVI, IRCC, Home Affairs, or German rules',
      'Clear Statement of Purpose structure review for factual precision',
      'Mock credibility and consular interview preparation',
    ],
    faqs: [
      {
        question: 'When should Sri Lankan students begin their student visa preparation?',
        answer:
          'Starting 4 to 6 months ahead of your intake allows ample time for offer confirmations, bank holding windows, medical checks, and VFS/VAC appointments.',
      },
      {
        question: 'Can Aspire Visa Experts guarantee student visa approval?',
        answer:
          'No consultancy can guarantee visa approval. Final decisions are made solely by the relevant government, embassy, consulate or immigration authority.',
      },
    ],
  },
  {
    slug: 'tourist-visa',
    title: 'Tourist Visa',
    tier: 'featured',
    shortDescription:
      'Explore global destinations with clear documentation checklists, realistic itineraries, and structured application support.',
    heroHeadline: 'See More of the World With Complete Clarity.',
    heroSubheadline:
      'Methodical tourist visa preparation for solo travelers, couples, and Sri Lankan families heading abroad.',
    iconKey: 'plane',
    whoIsItFor: [
      'Sri Lankan holidaymakers travelling to Europe, UK, Australia, USA, Canada, UAE, or Southeast Asia',
      'First-time international travelers seeking clear guidance on financial and employment proofs',
      'Families planning group holidays or multi-country itineraries',
    ],
    keyRequirements: [
      'Valid passport with sufficient validity and blank pages',
      'Consistent personal or family funds backed by bank statements and income records',
      'Realistic day-by-day travel itinerary aligned with approved leave or business continuity',
      'Clear demonstration of strong ties to Sri Lanka',
    ],
    applicationProcess: [
      'Travel history & eligibility assessment',
      'Tailored financial & employment checklist',
      'Cover letter and itinerary preparation',
      'Online portal completion & fee guidance',
      'VFS / BLS / Embassy biometrics coordination',
    ],
    commonDocuments: [
      'Current and previous passports',
      '3 to 6 months bank statements and salary slips / business registration',
      'Employer leave letter (NOC) or company financial records',
      'Flight itinerary, hotel bookings, and travel insurance where required',
    ],
    commonChallenges: [
      'Discrepancies between bank balances, travel duration, and leave approvals',
      'Errors on complex embassy portals such as DS-160 or Schengen forms',
    ],
    howWeHelp: [
      'Clean alignment of cover letter, itinerary, and supporting records',
      'Pre-submission document review to prevent avoidable clerical mistakes',
    ],
    faqs: [
      {
        question: 'Should I purchase non-refundable tickets before my visa decision?',
        answer:
          'We review specific embassy rules before you commit to non-refundable travel bookings, as no visa outcome can be guaranteed in advance.',
      },
    ],
  },
  {
    slug: 'work-visa',
    title: 'Work Visa',
    tier: 'primary',
    shortDescription:
      'Guidance for skilled professionals holding overseas employment offers or sponsorship certificates.',
    heroHeadline: 'Take Your Career Beyond Borders.',
    heroSubheadline:
      'Organized credential verification, police clearance planning, and work permit preparation for skilled professionals.',
    iconKey: 'building',
    whoIsItFor: [
      'Professionals holding an eligible overseas job offer or Certificate of Sponsorship',
      'Specialists transferring across multinational operations',
      'Healthcare, engineering, hospitality, and IT specialists preparing work visa documentation',
    ],
    keyRequirements: [
      'Valid employer sponsorship / labour approval / signed employment contract',
      'Verified academic qualifications and employment reference letters',
      'Police Clearance Certificate (PCC) and medical screening where mandated',
    ],
    applicationProcess: [
      'Sponsorship & category alignment check',
      'Qualification, PCC & medical sequencing',
      'Work visa & dependent application preparation',
      'Biometrics & submission tracking',
    ],
    commonDocuments: [
      'Sponsor certificate / labour market approval & job contract',
      'Degree certificates, transcripts & past experience letters',
      'Sri Lanka Police Clearance Certificate & panel medical receipts',
      'Valid passport and maintenance proof where applicable',
    ],
    commonChallenges: [
      'Timing delays in apostilles, credential assessments, and Police Clearance Certificates',
      'Inconsistent role descriptions across offer letters and CVs',
    ],
    howWeHelp: [
      'Structured document sequencing to keep sponsor deadlines on track',
      'Thorough pre-lodgement compliance verification',
    ],
    faqs: [
      {
        question: 'Do you place candidates into overseas jobs?',
        answer:
          'Aspire Visa Experts provides visa and immigration consultancy. Applicants typically hold an eligible employer offer or qualify under official skilled migration pathways.',
      },
    ],
  },
  {
    slug: 'business-visa',
    title: 'Business Visa',
    tier: 'primary',
    shortDescription:
      'Precision support for corporate meetings, trade exhibitions, client negotiations, and commercial visits.',
    heroHeadline: 'Corporate & Business Travel, Prepared With Precision.',
    heroSubheadline:
      'Clear invitation verification and corporate documentation support for Sri Lankan founders, executives, and delegates.',
    iconKey: 'briefcase',
    whoIsItFor: [
      'Directors, founders, and managers travelling for client meetings or supplier inspections',
      'Corporate delegates attending international trade shows and industry summits',
    ],
    keyRequirements: [
      'Official invitation from the overseas host company or organizer',
      'Corporate dispatch letter and business registration records in Sri Lanka',
      'Clear evidence that activities remain within permitted business visitor rules',
    ],
    applicationProcess: [
      'Invitation & permitted-activity review',
      'Corporate & personal financial checklist',
      'Application form & cover letter preparation',
      'Appointment coordination & tracking',
    ],
    commonDocuments: [
      'Signed overseas host invitation letter',
      'Sri Lankan company registration (Form 1 / BR), bank statements & tax records',
      'Employer dispatch letter & recent payslips',
    ],
    commonChallenges: [
      'Invitation letters lacking specific visit dates, host contact, or meeting purpose',
      'Confusion between permitted business visits and hands-on work requiring a work permit',
    ],
    howWeHelp: [
      'Verification of invitation letter contents before submission',
      'Clean indexing of corporate and personal records',
    ],
    faqs: [
      {
        question: 'Can I undertake paid local employment on a Business Visa?',
        answer:
          'No. Business visas permit commercial meetings, negotiations, and conferences, not local salaried employment.',
      },
    ],
  },
  {
    slug: 'visit-visa',
    title: 'Visit Visa',
    tier: 'secondary',
    shortDescription:
      'Guidance for visiting relatives, friends, graduations, and personal milestones overseas.',
    heroHeadline: 'Visit Loved Ones Abroad With Structured Guidance.',
    heroSubheadline:
      'Clear host-and-applicant documentation checklists for Sri Lankan visitors invited by family or friends overseas.',
    iconKey: 'compass',
    whoIsItFor: [
      'Parents and relatives attending graduations, weddings, or family gatherings',
      'Applicants invited by citizens or residents abroad',
    ],
    keyRequirements: [
      'Signed host invitation and proof of host legal status abroad',
      'Clear relationship or acquaintance proof plus strong return ties to Sri Lanka',
    ],
    applicationProcess: [
      'Host status & relationship assessment',
      'Dual-side document checklist',
      'Form filing & appointment support',
    ],
    commonDocuments: [
      'Host invitation, passport/PR copy & accommodation proof',
      'Applicant bank statements, property/income ties & family records',
    ],
    commonChallenges: [
      'Relying solely on host sponsorship without evidencing applicant ties to Sri Lanka',
    ],
    howWeHelp: [
      'Balanced documentation presenting both host support and home-country commitments',
    ],
    faqs: [
      {
        question: 'Does a host invitation guarantee a Visit Visa?',
        answer:
          'No. Embassies evaluate both host credibility and the applicant’s personal circumstances and return intent.',
      },
    ],
  },
  {
    slug: 'dependent-visa',
    title: 'Dependent Visa',
    tier: 'secondary',
    shortDescription:
      'Structured support for spouses and eligible children joining primary student or work visa holders.',
    heroHeadline: 'Reuniting Spouses and Children With Clarity.',
    heroSubheadline:
      'Verify eligibility rules, relationship records, and maintenance funds for dependent filings.',
    iconKey: 'users',
    whoIsItFor: [
      'Spouses and dependent children of eligible overseas students or skilled workers',
    ],
    keyRequirements: [
      'Primary visa tier permitted by the host country to sponsor dependents',
      'Official marriage/birth records and required maintenance balances',
    ],
    applicationProcess: [
      'Primary visa tier eligibility check',
      'Relationship & civil record audit',
      'Financial & accommodation review',
      'Dependent filing & biometrics',
    ],
    commonDocuments: [
      'Marriage certificate, birth certificates & genuine relationship evidence',
      'Primary holder passport, visa/BRP & enrolment or employment confirmation',
      'Maintenance bank funds & accommodation details',
    ],
    commonChallenges: [
      'Navigating updated destination rules restricting dependents on certain study tiers',
    ],
    howWeHelp: [
      'Up-to-date verification of dependent eligibility before application preparation',
    ],
    faqs: [
      {
        question: 'Can dependents work or study overseas?',
        answer:
          'Dependent rights depend strictly on the destination country and the primary applicant’s visa category.',
      },
    ],
  },
  {
    slug: 'family-visa',
    title: 'Family Visa',
    tier: 'secondary',
    shortDescription:
      'Longer-stay family reunification, spouse settlement, and parent visitor guidance.',
    heroHeadline: 'Thoughtful Guidance for Family & Partner Pathways.',
    heroSubheadline:
      'Organized relationship evidence, sponsor income checks, and checklist support for family migration and extended visits.',
    iconKey: 'home',
    whoIsItFor: [
      'Spouses, partners, and parents joining settled family members abroad',
      'Parents exploring extended-stay visitor options such as Canada Super Visa',
    ],
    keyRequirements: [
      'Sponsor citizenship or permanent residency status',
      'Minimum sponsor income threshold and suitable accommodation proof',
    ],
    applicationProcess: [
      'Pathway & sponsor threshold review',
      'Civil & relationship documentation indexing',
      'Application preparation & biometrics',
    ],
    commonDocuments: [
      'Sponsor citizenship/PR proof, tax notices & tenancy/ownership records',
      'Translated marriage/birth records & communication history where relevant',
    ],
    commonChallenges: [
      'Complex sponsor financial threshold calculations and missing certified translations',
    ],
    howWeHelp: [
      'Methodical evidence indexing and clear communication between overseas sponsor and Sri Lankan applicant',
    ],
    faqs: [
      {
        question: 'Do family settlement visas take longer than short visit visas?',
        answer:
          'Settlement and long-stay family applications generally undergo deeper assessment by immigration authorities.',
      },
    ],
  },
  {
    slug: 'medical-visa',
    title: 'Medical Visa',
    tier: 'secondary',
    shortDescription:
      'Priority documentation assistance for patients and attendants travelling for overseas healthcare.',
    heroHeadline: 'Dedicated Support for Overseas Medical Travel.',
    heroSubheadline:
      'Coordinated hospital appointment documentation, treatment estimates, and companion visa preparation.',
    iconKey: 'heart',
    whoIsItFor: [
      'Patients scheduled for specialized procedures at accredited overseas hospitals',
      'Immediate family members accompanying as medical attendants',
    ],
    keyRequirements: [
      'Official receiving hospital appointment and treatment cost estimate',
      'Local physician referral summary and proof of treatment funds',
    ],
    applicationProcess: [
      'Hospital & physician document review',
      'Companion application alignment',
      'Priority filing & appointment support',
    ],
    commonDocuments: [
      'Hospital confirmation & local medical records',
      'Financial coverage proof & attendant relationship proof',
    ],
    commonChallenges: [
      'Incomplete hospital cost estimates or unaligned companion filings',
    ],
    howWeHelp: [
      'Empathetic, well-sequenced checklist coordination for patients and families',
    ],
    faqs: [
      {
        question: 'Can a family member accompany the patient?',
        answer:
          'Yes, most jurisdictions permit an eligible companion/attendant application supported by medical need and relationship proof.',
      },
    ],
  },
  {
    slug: 'transit-visa',
    title: 'Transit Visa',
    tier: 'secondary',
    shortDescription:
      'Verify airport transit requirements for international layovers before booking flights.',
    heroHeadline: 'Smooth Layovers With Clear Transit Verification.',
    heroSubheadline:
      'Check airside and landside transit rules across the UK, Schengen hubs, Canada, USA, and Australia.',
    iconKey: 'route',
    whoIsItFor: [
      'Sri Lankan passport holders transiting through regulated international hubs',
      'Travelers changing terminals or passing border control between flights',
    ],
    keyRequirements: [
      'Confirmed onward flight itinerary and valid final-destination visa',
    ],
    applicationProcess: [
      'Routing & exemption verification',
      'Transit visa preparation where required',
    ],
    commonDocuments: [
      'Confirmed multi-leg tickets and final destination entry visa',
      'Passport and travel insurance where applicable',
    ],
    commonChallenges: [
      'Overlooking airside transit visa rules for Sri Lankan passports at certain European or UK hubs',
    ],
    howWeHelp: [
      'Pre-booking routing review to avoid boarding denials at departure',
    ],
    faqs: [
      {
        question: 'When is a transit visa required?',
        answer:
          'Requirements depend on passport nationality, transit airport country, terminal transfer rules, and any valid third-country visas held.',
      },
    ],
  },
  {
    slug: 'conference-event-visa',
    title: 'Conference / Event Visa',
    tier: 'secondary',
    shortDescription:
      'Application assistance for international conferences, seminars, sports, and cultural events.',
    heroHeadline: 'Represent Your Field on the Global Stage.',
    heroSubheadline:
      'Tailored documentation support for speakers, researchers, delegates, and event participants.',
    iconKey: 'calendar',
    whoIsItFor: [
      'Academics, professionals, and delegates attending overseas summits or workshops',
    ],
    keyRequirements: [
      'Official event registration or speaker invitation letter',
      'Employer/institutional sponsorship or personal financial proof',
    ],
    applicationProcess: [
      'Event invitation verification',
      'Supporting cover letter & financial checklist',
      'Filing & biometrics scheduling',
    ],
    commonDocuments: [
      'Conference badge/invitation, travel itinerary & accommodation confirmation',
      'Institutional NOC & financial statements',
    ],
    commonChallenges: [
      'Late event registrations leaving narrow appointment windows before conference dates',
    ],
    howWeHelp: [
      'Fast checklist readiness so submission happens well ahead of event dates',
    ],
    faqs: [
      {
        question: 'Do I apply under Tourist or Business/Short-Stay for a conference?',
        answer:
          'The exact sub-category varies by destination country; our consultants identify the official category for your event.',
      },
    ],
  },
  {
    slug: 'immigration',
    title: 'Immigration / PR Consultancy',
    tier: 'secondary',
    shortDescription:
      'Structured pathway planning and readiness support for skilled migration and permanent residency.',
    heroHeadline: 'Plan Your Long-Term Chapter Abroad.',
    heroSubheadline:
      'Methodical evaluation of points-based skilled migration systems, credential assessments, and settlement documentation.',
    iconKey: 'globe',
    whoIsItFor: [
      'Skilled professionals exploring permanent residency pathways in Canada, Australia, or Europe',
      'Families organizing educational credential assessments and employment reference archives',
    ],
    keyRequirements: [
      'Recognized Educational Credential Assessment (ECA) or skill assessment',
      'Verified language proficiency (IELTS, PTE, CELPIP, or European equivalents)',
      'Detailed employment reference records and Police Clearances',
    ],
    applicationProcess: [
      'Comprehensive profile & pathway review',
      'Language & credential assessment roadmap',
      'Expression of Interest preparation',
      'Post-invitation documentation verification',
    ],
    commonDocuments: [
      'Degree certificates, transcripts & skill/ECA reports',
      'Employer reference letters specifying duties and tenure',
      'Language scorecards, PCCs & settlement funds proof',
    ],
    commonChallenges: [
      'Incomplete employment reference duties failing occupation code matching',
    ],
    howWeHelp: [
      'Milestone-driven preparation with transparent, realistic communication',
    ],
    faqs: [
      {
        question: 'Can Aspire Visa Experts guarantee an Invitation to Apply or PR?',
        answer:
          'No. Invitation rounds, points thresholds, and permanent residency approvals are governed solely by national immigration authorities.',
      },
    ],
  },
];
