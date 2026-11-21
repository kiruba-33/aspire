export type DestinationSlug =
  | 'uk'
  | 'usa'
  | 'canada'
  | 'australia'
  | 'germany'
  | 'new-zealand'
  | 'ireland'
  | 'uae'
  | 'singapore'
  | 'malaysia'
  | 'schengen';

export interface DestinationItem {
  slug: DestinationSlug;
  name: string;
  shortName: string;
  flagCode: string;
  region: string;
  cityHighlight: string;
  shortDescription: string;
  popularVisas: string[];
  studyAbroadFeatured: boolean;
  touristFeatured: boolean;
  touristDescriptor: string;
  overview: string;
  basicRequirements: string[];
  applicationProcess: string[];
  commonDocuments: string[];
  faqs: { question: string; answer: string }[];
}

export const destinationsData: DestinationItem[] = [
  {
    slug: 'uk',
    name: 'United Kingdom',
    shortName: 'UK',
    flagCode: 'GB',
    region: 'Europe',
    cityHighlight: 'London · Manchester · Edinburgh',
    shortDescription:
      'Prestigious universities, global financial districts, and cultural heritage for Sri Lankan students, visitors, and professionals.',
    popularVisas: ['Student', 'Tourist', 'Visit', 'Business', 'Work'],
    studyAbroadFeatured: true,
    touristFeatured: true,
    touristDescriptor: 'Tourist • Visit • Business',
    overview:
      'The United Kingdom is a premier destination for Sri Lankan students, families visiting relatives, and business travelers. Clear preparation of UKVI 28-day student maintenance funds, TB screening certificates, and consistent visitor cashflow records is essential.',
    basicRequirements: [
      'Valid passport with blank page where vignette is applicable',
      'Confirmed CAS (Student) or structured itinerary & accommodation (Visitor)',
      'Bank statements meeting UKVI holding and income consistency guidelines',
      'IOM / approved clinic TB screening certificate for stays over 6 months',
    ],
    applicationProcess: [
      'Identify the correct UKVI visa route',
      'Verify financial holding windows & TB requirements',
      'Complete online UKVI form & official fee payment',
      'Attend VFS Global Colombo biometrics & document submission',
      'Track decision update until collection or eVisa notice',
    ],
    commonDocuments: [
      'Current & previous passports',
      'CAS / CoS / Overseas Host Invitation',
      'Bank statements, salary slips & business proofs',
      'Academic transcripts, IELTS & TB certificate where applicable',
    ],
    faqs: [
      {
        question: 'Where do Sri Lankan applicants submit UK biometrics?',
        answer:
          'Biometrics and supporting uploads in Sri Lanka are coordinated through the authorized VFS Global Visa Application Centre in Colombo.',
      },
    ],
  },
  {
    slug: 'australia',
    name: 'Australia',
    shortName: 'Australia',
    flagCode: 'AU',
    region: 'Oceania',
    cityHighlight: 'Melbourne · Sydney · Brisbane',
    shortDescription:
      'Top-ranked universities, welcoming Sri Lankan diaspora communities, and dynamic skilled career pathways.',
    popularVisas: ['Student', 'Tourist', 'Visit', 'Work'],
    studyAbroadFeatured: true,
    touristFeatured: true,
    touristDescriptor: 'Tourist • Visit • Business',
    overview:
      'Australian visas are lodged digitally via ImmiAccount. Strong focus is placed on the Genuine Student (GS) assessment for students and verifiable financial & home-tie documentation for Subclass 600 visitors.',
    basicRequirements: [
      'Confirmation of Enrolment (CoE) and OSHC for Student Subclass 500',
      'Clear Genuine Student written statement supported by evidence',
      'Financial capacity matching Department of Home Affairs standards',
      'Panel medicals and biometrics at authorized Colombo centres',
    ],
    applicationProcess: [
      'Eligibility & Genuine Student criteria assessment',
      'Financial & sponsor audit',
      'ImmiAccount digital filing',
      'Health & biometrics completion',
      'Decision tracking via ImmiAccount',
    ],
    commonDocuments: [
      'Passport & national identity card',
      'CoE & OSHC policy (Students) or Invite & Itinerary (Visitors)',
      'Bank statements, fixed deposits & employment/business proofs',
    ],
    faqs: [
      {
        question: 'Are Australian visas issued electronically?',
        answer:
          'Yes. Approved Australian visas are linked digitally to your passport number.',
      },
    ],
  },
  {
    slug: 'canada',
    name: 'Canada',
    shortName: 'Canada',
    flagCode: 'CA',
    region: 'North America',
    cityHighlight: 'Toronto · Vancouver · Ottawa',
    shortDescription:
      'Globally respected colleges, structured skilled immigration pathways, and family visit options.',
    popularVisas: ['Student', 'Tourist', 'Visit', 'Work', 'Family'],
    studyAbroadFeatured: true,
    touristFeatured: true,
    touristDescriptor: 'Tourist • Visit • Super Visa',
    overview:
      'Canada offers strong academic, temporary resident, and parent Super Visa pathways. Accurate Letter of Explanation drafting, Provincial Attestation Letters (PAL) where required, and transparent financial proofs are critical.',
    basicRequirements: [
      'DLI Letter of Acceptance & PAL (for eligible study permits)',
      'Proof of tuition & living funds per current IRCC guidelines',
      'Upfront medicals (where applicable) & VAC biometrics',
      'Structured Statement of Purpose / Letter of Explanation',
    ],
    applicationProcess: [
      'IRCC pathway assessment',
      'Document checklist & Letter of Explanation review',
      'Online IRCC lodgement',
      'VAC biometrics appointment in Colombo',
      'Passport request & stamping tracking',
    ],
    commonDocuments: [
      'Valid passport & digital photograph',
      'DLI Letter / Host invitation & status proof',
      'Bank statements, GIC/tuition receipts & sponsor income records',
    ],
    faqs: [
      {
        question: 'Do you assist parents applying for a Canadian Visit or Super Visa?',
        answer:
          'Yes. We coordinate both Sri Lankan applicant records and Canadian host income/insurance proofs.',
      },
    ],
  },
  {
    slug: 'usa',
    name: 'United States',
    shortName: 'USA',
    flagCode: 'US',
    region: 'North America',
    cityHighlight: 'New York · Boston · San Francisco',
    shortDescription:
      'Leading research universities, global enterprise hubs, and iconic travel destinations coast to coast.',
    popularVisas: ['Student', 'Tourist', 'Business'],
    studyAbroadFeatured: true,
    touristFeatured: true,
    touristDescriptor: 'B1/B2 Visitor • Business',
    overview:
      'US non-immigrant visas (F-1 Student and B1/B2 Visitor) require accurate Form DS-160 preparation and clear, concise consular interview communication at the US Embassy in Colombo.',
    basicRequirements: [
      'Accurate Form DS-160 reflecting complete education and work history',
      'Form I-20 & SEVIS fee (F-1) or clear travel itinerary (B1/B2)',
      'Consular interview readiness demonstrating strong ties to Sri Lanka',
    ],
    applicationProcess: [
      'DS-160 accuracy questionnaire & review',
      'MRV fee & US Embassy Colombo interview scheduling',
      'Financial & supporting folder indexing',
      'One-on-one mock consular interview coaching',
    ],
    commonDocuments: [
      'Passport & DS-160 confirmation page',
      'Interview appointment letter & I-20 / invitation',
      'Employment, business, tax, and financial sponsor evidence',
    ],
    faqs: [
      {
        question: 'Do you provide mock interview sessions for the US Embassy?',
        answer:
          'Yes. We conduct realistic mock interview practice tailored to F-1 and B1/B2 applicants.',
      },
    ],
  },
  {
    slug: 'schengen',
    name: 'Europe / Schengen',
    shortName: 'Europe / Schengen',
    flagCode: 'EU',
    region: 'Europe',
    cityHighlight: 'Paris · Rome · Zurich · Amsterdam',
    shortDescription:
      'Explore 29 European Schengen countries across leisure, business, and academic travel.',
    popularVisas: ['Tourist', 'Business', 'Visit', 'Student'],
    studyAbroadFeatured: false,
    touristFeatured: true,
    touristDescriptor: 'Schengen Tourist • Business',
    overview:
      'Schengen short-stay visas require applying to the correct main-destination embassy, matching every flight and hotel night, and securing €30,000 compliant travel medical insurance.',
    basicRequirements: [
      'Determine main destination embassy based on highest number of nights',
      '€30,000 minimum Schengen travel medical insurance',
      'Matched inter-city itinerary, accommodation & bank statements',
    ],
    applicationProcess: [
      'Main destination & itinerary audit',
      'Insurance & reservation alignment',
      'Schengen application form & cover letter',
      'VFS / Embassy biometrics submission',
    ],
    commonDocuments: [
      'Valid passport (issued within 10 years)',
      'Signed Schengen form, cover letter & day-wise itinerary',
      '3–6 months stamped bank statements, employment NOC & €30,000 insurance',
    ],
    faqs: [
      {
        question: 'Which Schengen embassy should I apply to for a multi-country trip?',
        answer:
          'Generally the country where you spend the most nights, or your first port of entry if stay lengths are equal.',
      },
    ],
  },
  {
    slug: 'germany',
    name: 'Germany',
    shortName: 'Germany',
    flagCode: 'DE',
    region: 'Europe',
    cityHighlight: 'Berlin · Munich · Frankfurt',
    shortDescription:
      'Engineering excellence, low-tuition public universities, and Europe’s industrial powerhouse.',
    popularVisas: ['Student', 'Work', 'Business', 'Tourist'],
    studyAbroadFeatured: true,
    touristFeatured: false,
    touristDescriptor: 'Schengen • Opportunity Card',
    overview:
      'Germany attracts Sri Lankan STEM students and skilled engineers. Key preparation includes university admission verification, Blocked Account (Sperrkonto) setup, and German Embassy Colombo documentation.',
    basicRequirements: [
      'Recognized university admit or qualifying skilled work / Opportunity Card profile',
      'Blocked Account (Sperrkonto) or formal commitment letter',
      'Compliant travel & statutory health insurance',
    ],
    applicationProcess: [
      'Admit & qualification recognition check',
      'Blocked account & health insurance setup',
      'VIDEX form & motivation letter review',
      'Embassy / VFS appointment submission',
    ],
    commonDocuments: [
      'Passport & biometric photos',
      'University admission / job contract',
      'Blocked account confirmation & CV / motivation letter',
    ],
    faqs: [
      {
        question: 'Do you assist with German Blocked Account documentation steps?',
        answer:
          'Yes, we guide students through the required Blocked Account setup sequence prior to visa lodgement.',
      },
    ],
  },
  {
    slug: 'new-zealand',
    name: 'New Zealand',
    shortName: 'New Zealand',
    flagCode: 'NZ',
    region: 'Oceania',
    cityHighlight: 'Auckland · Wellington · Christchurch',
    shortDescription:
      'High-trust universities, scenic landscapes, and transparent digital visa processing.',
    popularVisas: ['Student', 'Tourist', 'Work'],
    studyAbroadFeatured: true,
    touristFeatured: false,
    touristDescriptor: 'Visitor • Study • Work',
    overview:
      'Immigration New Zealand values clean, verifiable financial records, clear academic progression, and upfront panel medical & Police Clearance certificates.',
    basicRequirements: [
      'NZQA-approved Offer of Place for student applications',
      'Verifiable living & return travel funds',
      'Panel physician chest X-ray / medical & PCC where instructed',
    ],
    applicationProcess: [
      'Pathway & financial evaluation',
      'Medical & PCC scheduling',
      'Online INZ submission',
      'eVisa issuance tracking',
    ],
    commonDocuments: [
      'Passport & Offer of Place',
      'Financial statements / FTS documentation',
      'Panel medical & Police Clearance Certificate',
    ],
    faqs: [
      {
        question: 'Are New Zealand applications submitted online?',
        answer:
          'Yes, most student, visitor, and work filings are lodged digitally through Immigration New Zealand.',
      },
    ],
  },
  {
    slug: 'ireland',
    name: 'Ireland',
    shortName: 'Ireland',
    flagCode: 'IE',
    region: 'Europe',
    cityHighlight: 'Dublin · Cork · Galway',
    shortDescription:
      'English-speaking European tech and life-sciences hub with welcoming academic institutions.',
    popularVisas: ['Student', 'Work', 'Tourist'],
    studyAbroadFeatured: true,
    touristFeatured: false,
    touristDescriptor: 'Short Stay • Study',
    overview:
      'Ireland maintains its own national visa system (separate from the Schengen Area) via the AVATS portal, emphasizing clear 6-month bank trails and tuition receipts.',
    basicRequirements: [
      'Official university Offer Letter & fee payment receipt',
      'Immediate access to required living funds plus 6-month bank history',
      'Private medical insurance',
    ],
    applicationProcess: [
      'AVATS online form preparation',
      '6-month financial & sponsor audit',
      'VFS submission & tracking',
    ],
    commonDocuments: [
      'Signed AVATS summary',
      'University letter & fee payment confirmation',
      'Detailed bank statements & medical insurance',
    ],
    faqs: [
      {
        question: 'Can I travel to Schengen countries on an Irish visa?',
        answer:
          'No. Ireland is outside the Schengen Area and requires a separate national visa.',
      },
    ],
  },
  {
    slug: 'uae',
    name: 'United Arab Emirates',
    shortName: 'UAE',
    flagCode: 'AE',
    region: 'Middle East',
    cityHighlight: 'Dubai · Abu Dhabi · Sharjah',
    shortDescription:
      'Global commerce, hospitality, and short-haul leisure hub frequently visited from Sri Lanka.',
    popularVisas: ['Tourist', 'Business', 'Work', 'Visit'],
    studyAbroadFeatured: false,
    touristFeatured: true,
    touristDescriptor: '30/60-Day e-Visa • Business',
    overview:
      'Dubai and the UAE are popular for Sri Lankan families, business executives, and skilled professionals, requiring crisp passport scans, return tickets, and verified accommodation.',
    basicRequirements: [
      'Passport valid at least 6 months from travel date',
      'High-resolution bio-page scan & studio photograph',
      'Confirmed return flight & hotel or host Emirates ID copy',
    ],
    applicationProcess: [
      'Select stay duration (30-day, 60-day, or multi-entry)',
      'Verify passport & accommodation documents',
      'Authorized submission & PDF e-Visa delivery',
    ],
    commonDocuments: [
      'Passport scan & photograph',
      'Return ticket & hotel/host proof',
    ],
    faqs: [
      {
        question: 'How is a UAE tourist visa issued?',
        answer:
          'It is issued electronically as an e-Visa PDF to present alongside your passport at travel.',
      },
    ],
  },
  {
    slug: 'singapore',
    name: 'Singapore',
    shortName: 'Singapore',
    flagCode: 'SG',
    region: 'Asia',
    cityHighlight: 'Marina Bay · Orchard · Sentosa',
    shortDescription:
      'Asia’s premier business, medical, and family travel hub just hours from Colombo.',
    popularVisas: ['Tourist', 'Business', 'Medical', 'Visit'],
    studyAbroadFeatured: false,
    touristFeatured: true,
    touristDescriptor: 'Entry Visa • Business • Medical',
    overview:
      'Singapore entry visa applications require careful Form 14A preparation, compliant photography, and supporting itinerary or V39A Letter of Introduction verification.',
    basicRequirements: [
      'Passport with 6+ months validity beyond arrival',
      'Signed Form 14A & matte-finish photograph',
      'Confirmed flights, hotel or V39A sponsor letter',
    ],
    applicationProcess: [
      'Form 14A & document check',
      'Authorized agent submission',
      'e-Visa delivery',
    ],
    commonDocuments: [
      'Form 14A & passport copy',
      'Flight/hotel confirmations & employment/bank proof',
    ],
    faqs: [
      {
        question: 'Do Sri Lankan passport holders need pre-arrival visa verification for Singapore?',
        answer:
          'Entry requirements depend on passport type and purpose of visit; we verify current ICA rules for your travel dates.',
      },
    ],
  },
  {
    slug: 'malaysia',
    name: 'Malaysia',
    shortName: 'Malaysia',
    flagCode: 'MY',
    region: 'Asia',
    cityHighlight: 'Kuala Lumpur · Penang · Langkawi',
    shortDescription:
      'Vibrant cultural, educational, and family holiday destination across Southeast Asia.',
    popularVisas: ['Tourist', 'Student', 'Business'],
    studyAbroadFeatured: false,
    touristFeatured: true,
    touristDescriptor: 'Tourist eVISA • MDAC • Study',
    overview:
      'From eVISA tourist filings and Malaysia Digital Arrival Card (MDAC) compliance to EMGS student pass coordination, we guide Sri Lankan travelers smoothly.',
    basicRequirements: [
      'Passport valid for at least 6 months',
      'Confirmed return flights, accommodation & travel funds',
      'Pre-arrival MDAC submission & eVISA / EMGS where applicable',
    ],
    applicationProcess: [
      'Verify eVISA / exemption status',
      'Prepare itinerary & financial proofs',
      'Complete eVISA & MDAC pre-arrival readiness',
    ],
    commonDocuments: [
      'Passport & studio photograph',
      'Return tickets, hotel vouchers & bank statements',
    ],
    faqs: [
      {
        question: 'Do you help with Malaysian student EMGS / VAL steps too?',
        answer:
          'Yes, we assist students coordinating EMGS approvals alongside entry visa steps.',
      },
    ],
  },
];
