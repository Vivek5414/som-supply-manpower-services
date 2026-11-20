import { CompanyInfo, ServiceItem, IndustryItem } from '@/types';

export const COMPANY_DETAILS: CompanyInfo = {
  name: 'SOM Supply and Manpower Services',
  legalTradeName: 'SOM Supply and Manpower Services',
  location: 'Indore, Madhya Pradesh, India',
  city: 'Indore',
  state: 'Madhya Pradesh',
  country: 'India',
  phone: '8827272515',
  displayPhone: '+91 88272 72515',
  whatsappUrl: 'https://wa.me/918827272515?text=Hello%20SOM%20Services,%20I%20would%20like%20to%20inquire%20about%20your%20manpower%20and%20facility%20management%20services.',
  hours: 'Monday – Saturday: 9:00 AM – 7:30 PM',
  addressSnippet: 'Commercial Hub, Indore, Madhya Pradesh, India - 452001',
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'housekeeping',
    slug: 'housekeeping-services',
    title: 'Housekeeping Services',
    shortDesc: 'Systematic daily housekeeping, hygiene preservation, and sanitized maintenance for commercial buildings, tech parks, and corporate hubs.',
    fullDesc: 'Our commercial housekeeping solutions prioritize pristine workplace cleanliness, organized environments, and routine hygiene maintenance. We deploy verified, trained janitorial staff equipped with modern housekeeping tools to uphold strict institutional cleanliness standards.',
    iconName: 'Sparkles',
    image: '/images/housekeeping.jpg',
    features: [
      'Daily dusting, vacuuming, and floor maintenance',
      'Washroom and restroom deep sanitation cycles',
      'Pantry, cafeteria, and common zone upkeep',
      'Eco-conscious, surface-safe cleaning materials',
      'Daily site inspection and checklist enforcement'
    ],
    deliverables: [
      'Standardized daily cleaning roster and shift logs',
      'Trained, uniformed, and verified housekeeping crew',
      'Supervised shift handover and quality assurance'
    ],
    scope: 'Corporate offices, commercial plazas, tech campuses, and banking facilities.'
  },
  {
    id: 'manpower',
    slug: 'manpower-supply',
    title: 'Manpower Supply',
    shortDesc: 'Sourcing, screening, and deployment of reliable skilled, semi-skilled, and general workforce tailored to operational requirements.',
    fullDesc: 'We bridge staffing shortages across Madhya Pradesh by delivering vetted workforce personnel for industrial, warehousing, retail, and logistical enterprises. We handle deployment logistics so you can scale operations with minimal downtime.',
    iconName: 'Users',
    image: '/images/manpower.jpg',
    features: [
      'Skilled, semi-skilled, and general personnel recruitment',
      'Comprehensive background screening and identity verification',
      'Flexible contracts for peak seasons and recurring operations',
      'Attendance tracking and roster coordination support',
      'Punctual on-site reporting and workplace orientation'
    ],
    deliverables: [
      'Pre-vetted workforce pools ready for quick onboarding',
      'Attendance records and supervisor escalation support',
      'Replacements provided during planned absences'
    ],
    scope: 'Manufacturing plants, supply chain hubs, distribution centers, and commercial retail.'
  },
  {
    id: 'facility-mgmt',
    slug: 'facility-management',
    title: 'Facility Management',
    shortDesc: 'Holistic facility oversight integrating soft services, vendor supervision, basic utility monitoring, and daily operations.',
    fullDesc: 'Comprehensive facility management designed to protect infrastructure longevity, sustain operational efficiency, and elevate working environments. Our integrated team coordinates daily facility operations, ensuring all property facets operate seamlessly.',
    iconName: 'Building2',
    image: '/images/facility-mgmt.jpg',
    features: [
      'Integrated soft facility operations and supervision',
      'Vendor management and daily utility status monitoring',
      'Visitor lobby management and desk coordination',
      'Preventative checklists and routine visual auditing',
      'Waste handling and eco-responsible disposal workflows'
    ],
    deliverables: [
      'Dedicated on-site facility supervisor or coordinator',
      'Monthly facility operations log and review summary',
      'Immediate resolution protocol for minor operational issues'
    ],
    scope: 'Corporate headquarters, shared office complexes, institutions, and residential townships.'
  },
  {
    id: 'industrial-cleaning',
    slug: 'industrial-cleaning',
    title: 'Industrial Cleaning',
    shortDesc: 'Heavy-duty industrial washing, workshop floor degreasing, machinery perimeter clearing, and warehouse cleaning.',
    fullDesc: 'Manufacturing units and industrial workshops require stringent cleaning protocols to prevent hazards and maintain production uptime. We provide specialized industrial cleaning crews trained in handling machine shop floors, high bays, and warehouse racks safely.',
    iconName: 'Factory',
    image: '/images/industrial-cleaning.jpg',
    features: [
      'Machine perimeter sweeping and debris collection',
      'Industrial floor degreasing and scrubbing',
      'Warehouse aisle clearing and dust mitigation',
      'Adherence to personal protective equipment (PPE) guidelines',
      'Waste classification and industrial debris staging'
    ],
    deliverables: [
      'Trained industrial cleaning crews equipped with protective gear',
      'Scheduled non-disruptive cleaning during shift changeovers',
      'Hazard mitigation and safe chemical handling compliance'
    ],
    scope: 'Factories, heavy engineering workshops, pharmaceutical warehouses, and assembly lines.'
  },
  {
    id: 'office-staff',
    slug: 'office-support-staff',
    title: 'Office Support Staff',
    shortDesc: 'Punctual, courteous support personnel including front desk assistants, pantry operators, dispatch couriers, and office boys.',
    fullDesc: 'Smooth internal corporate workflows depend on courteous and dependable office support personnel. We supply disciplined front desk attendants, office assistants, documentation runners, and executive pantry staff to ensure high office productivity.',
    iconName: 'Briefcase',
    image: '/images/office-staff.jpg',
    features: [
      'Front-desk reception attendants and visitor guides',
      'Executive pantry management and beverage services',
      'Intra-office mail, courier handling, and document distribution',
      'Meeting room preparation and stationery replenishment',
      'Courteous professional decorum and workplace etiquette'
    ],
    deliverables: [
      'Professionally groomed and uniformed office staff',
      'Punctual shift adherence and conduct monitoring',
      'Proactive support for daily administrative routines'
    ],
    scope: 'Law firms, financial enterprises, technology firms, and corporate regional branches.'
  },
  {
    id: 'deep-cleaning',
    slug: 'deep-cleaning',
    title: 'Deep Cleaning',
    shortDesc: 'Intensive periodic sanitization, high-level dusting, upholstery treatment, and post-renovation restoration cleaning.',
    fullDesc: 'Standard daily housekeeping often leaves high surfaces, carpets, and difficult corners unaddressed. Our deep cleaning service revitalizes spaces through high-pressure steaming, scrubbers, and specialized sanitization formulations.',
    iconName: 'ShieldCheck',
    image: '/images/deep-cleaning.jpg',
    features: [
      'Floor scrub machine treatment and stain reduction',
      'Glass facade and interior partition washing',
      'Carpet shampooing and office chair fabric revival',
      'Air vent, fixture, and ceiling cobweb removal',
      'Post-construction handover cleaning and polish'
    ],
    deliverables: [
      'Targeted deep cleaning executed during off-hours or weekends',
      'Specialized machinery and industrial sanitation agents',
      'Before-and-after inspection walkthrough'
    ],
    scope: 'Offices preparing for client audits, renovated premises, and seasonal refreshes.'
  },
  {
    id: 'gardening',
    slug: 'gardening-maintenance',
    title: 'Gardening & Maintenance',
    shortDesc: 'Professional horticultural care, perimeter lawn maintenance, indoor plant nurturing, and landscaped campus upkeep.',
    fullDesc: 'Greener corporate premises create welcoming first impressions for guests and promote employee well-being. Our dedicated horticulture staff handles lawn mowing, pruning, irrigation coordination, and seasonal flowerbed replenishment.',
    iconName: 'Trees',
    image: '/images/gardening.jpg',
    features: [
      'Lawn grooming, turf aeration, and weed control',
      'Hedge pruning, shrub shaping, and tree perimeter clearing',
      'Indoor potted plant care, watering, and leaf shining',
      'Seasonal manure addition and organic pest deterrents',
      'Campus walkway and green-belt cleanliness maintenance'
    ],
    deliverables: [
      'Trained gardeners with standard tools and shears',
      'Routine watering schedules and seasonal upkeep plans',
      'Vibrant, orderly exterior landscapes'
    ],
    scope: 'Corporate IT parks, hotel grounds, university campuses, and factory green belts.'
  },
  {
    id: 'security-services',
    slug: 'security-services',
    title: 'Security Services',
    shortDesc: 'Access control personnel, security gate keepers, visitor log attendants, and campus premises vigilance.',
    fullDesc: 'Ensuring orderly visitor entry and premises safety is fundamental to facility stability. We arrange trained security personnel and gate attendants to maintain visitor logs, monitor entry barriers, and provide steady perimeter vigilance.',
    iconName: 'Shield',
    image: '/images/security.jpg',
    features: [
      'Main gate vehicle and visitor verification logs',
      'Campus boundary and parking perimeter patrolling',
      'Emergency response orientation and fire extinguisher awareness',
      'Night shift monitoring and hourly check-in logs',
      'Discreet and courteous interaction with company guests'
    ],
    deliverables: [
      'Uniformed, disciplined gate attendants and guards',
      'Daily visitor register records and material inward/outward slips',
      'On-ground escalation protocol for security supervisor'
    ],
    scope: 'Industrial estates, residential gated communities, logistics yards, and commercial centers.'
  }
];

export const INDUSTRIES_DATA: IndustryItem[] = [
  {
    id: 'corporate',
    title: 'Corporate Offices & IT Hubs',
    description: 'Modern office floors require silent, reliable housekeeping and proactive pantry staff who understand corporate etiquette.',
    image: '/images/ind-corporate.jpg',
    servicesSupplied: ['Daily Housekeeping', 'Pantry & Office Staff', 'Floor Deep Cleaning', 'Visitor Reception'],
    benefits: ['Zero disruption during core hours', 'Consistent executive hygiene levels', 'Uniformed and groomed staff']
  },
  {
    id: 'manufacturing',
    title: 'Manufacturing & Industrial Units',
    description: 'Heavy workshops, factories, and assembly plants require rugged cleaning schedules, shop floor staffing, and PPE-compliant crews.',
    image: '/images/ind-industrial.jpg',
    servicesSupplied: ['Industrial Cleaning', 'Shopfloor Manpower', 'Machinery Area Sweeping', 'Gate Security'],
    benefits: ['Accident risk reduction', 'Swift workforce ramp-up for shifts', 'Compliance with plant safety rules']
  },
  {
    id: 'healthcare',
    title: 'Healthcare & Diagnostic Centers',
    description: 'Clinics, diagnostic centers, and healthcare environments demand high-discipline sanitation, non-toxic disinfectants, and meticulous floor maintenance.',
    image: '/images/ind-healthcare.jpg',
    servicesSupplied: ['Sterilized Floor Upkeep', 'Restroom Sanitation', 'Waste Segregation', 'Support Staff'],
    benefits: ['Strict hygiene adherence', 'Rapid cleaning response cycles', 'Discreet, respectful personnel']
  },
  {
    id: 'hospitality',
    title: 'Hospitality & Commercial Dining',
    description: 'Hotels, banquet spaces, and restaurants rely on immaculate public zones, rapid turnover cleaning, and attentive utility helpers.',
    image: '/images/ind-hospitality.jpg',
    servicesSupplied: ['Lobby & Banquet Cleaning', 'Kitchen Utility Staff', 'Landscape Care', 'Restroom Sanitation'],
    benefits: ['Uncompromised guest impression', 'Flexible staffing during banquets', 'Impeccable spotless spaces']
  },
  {
    id: 'retail',
    title: 'Retail Stores & Shopping Complexes',
    description: 'High footfall retail stores demand constant floor polishing, display glass shining, and customer-friendly housekeeping support.',
    image: '/images/ind-retail.jpg',
    servicesSupplied: ['High-Frequency Floor Polishing', 'Showroom Glass Cleaning', 'Restroom Upkeep', 'Gate Attendants'],
    benefits: ['Welcoming shopping atmosphere', 'Rapid spill containment', 'Continuous floor radiance']
  },
  {
    id: 'education',
    title: 'Educational Institutions & Campuses',
    description: 'Schools, coaching academies, and colleges benefit from organized classroom cleaning, vast campus garden care, and orderly access gates.',
    image: '/images/ind-education.jpg',
    servicesSupplied: ['Classroom Cleaning', 'Campus Ground Care', 'Restroom Hygiene', 'Security Guards'],
    benefits: ['Safe, healthy learning spaces', 'Reliable morning preparation routines', 'Well-kept green outdoors']
  }
];

export const WORKING_PROCESS = [
  {
    step: '01',
    title: 'Requirement Consultation',
    description: 'We discuss your facility needs, staffing quantities, shift timings, and specific service expectations in detail.'
  },
  {
    step: '02',
    title: 'Site Survey & Scope Plan',
    description: 'Our operations team conducts a structured walk-through in Indore to map out square footage, traffic zones, and staff allocation.'
  },
  {
    step: '03',
    title: 'Transparent Commercial Proposal',
    description: 'You receive a straightforward proposal defining crew sizing, equipment scope, schedule cadences, and service expectations.'
  },
  {
    step: '04',
    title: 'Deployment & Ongoing Supervision',
    description: 'Vetted, uniformed personnel arrive on day one with orientation, followed by routine supervisory audits and feedback reviews.'
  }
];

export const WHY_CHOOSE_US = [
  {
    title: 'Local Indore Responsiveness',
    description: 'Based directly in Indore, Madhya Pradesh, our operational management is readily accessible for swift site visits, adjustments, and rapid staffing deployments.'
  },
  {
    title: 'Strict Verification & Grooming',
    description: 'Every deployed team member undergoes identity screening, basic character verification, and practical grooming on corporate decorum.'
  },
  {
    title: 'Single-Window Facility Partner',
    description: 'Avoid juggling multiple contractors. We consolidate housekeeping, manpower supply, office assistance, and grounds care under one reliable contact.'
  },
  {
    title: 'Supervised Service Delivery',
    description: 'We believe in accountability. Regular supervisor site rounds and checklist logs ensure standards do not dip after the initial month.'
  }
];

export const STATS_DATA = [
  { value: 'Indore', label: 'Primary Base & HQ' },
  { value: '8+', label: 'Core Facility Solutions' },
  { value: '100%', label: 'Dedicated Supervision' },
  { value: '24/7', label: 'Client Escalation Support' }
];
