export const site = {
  name: 'Nissar Kumar Behera',
  shortName: 'Nissar Behera',
  role: 'Growth product leader',
  location: 'Bengaluru, India',
  relocation: 'Open to relocation',
  email: 'nissarkb2017@email.iimcal.ac.in',
  linkedin: 'https://linkedin.com/in/nissar-behera',
  github: 'https://github.com/nkb134',
  url: 'https://nkbgrowth.in',
  title: 'Nissar Behera · Growth product leader who builds',
  description:
    'Growth product leader with 12+ years across consumer fintech, crypto and consumer AI. Rebuilt referral to 20% of new users at $1.5 CAC, scaled a crypto futures business to $72M ARR, and now builds generative-AI products on WhatsApp.',
};

export const nav = [
  { href: '#results', label: 'Results' },
  { href: '#products', label: 'Products' },
  { href: '#builds', label: 'Side builds' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact', label: 'Contact' },
];

/**
 * Before/after figures. `from` and `to` share a unit and are drawn on a
 * zero-based axis inside each panel, so the slope is proportional.
 */
export const results = [
  {
    label: 'Referral share of new users',
    from: 5,
    to: 20,
    fromText: '5%',
    toText: '20%',
    note: 'At $1.5 CAC, displacing paid spend',
    where: 'CoinDCX',
  },
  {
    label: 'Creator channel share of revenue',
    from: 0.3,
    to: 9,
    fromText: '0.3%',
    toText: '9%',
    note: '30x, to second-largest acquisition source',
    where: 'CoinDCX',
  },
  {
    label: 'Crypto futures ARR',
    from: 0,
    to: 72,
    fromText: '$0',
    toText: '$72M',
    note: 'In 18 months, as P&L owner',
    where: 'CoinDCX',
  },
  {
    label: 'Onboarding conversion, indexed',
    from: 100,
    to: 160,
    fromText: '100',
    toText: '160',
    note: '+60% through an in-house experimentation platform',
    where: 'CoinDCX',
  },
  {
    label: 'Creator and referral share of acquisitions',
    from: 7,
    to: 18,
    fromText: '7%',
    toText: '18%',
    note: 'In 3 months, with a pod built from scratch',
    where: 'Ajaib',
  },
  {
    label: 'Users of my own AI products',
    from: 0,
    to: 71,
    fromText: '0',
    toText: '71K+',
    note: '~$9K revenue in the first 45 days',
    where: 'Tara',
  },
];

export const skills = [
  {
    group: 'Product-led growth',
    items:
      'Referral programmes and incentive design, creator distribution, onboarding and activation funnels, lifecycle/CLM, loyalty, app-store growth (ASO)',
  },
  {
    group: 'Experimentation and data',
    items:
      'A/B test design, guard metrics, cohort analysis, self-built funnels and dashboards, SQL, Mixpanel, Amplitude',
  },
  {
    group: 'Unit economics',
    items: 'CAC/LTV, payback, pricing and incentives, P&L ownership, budget allocation',
  },
  {
    group: 'Consumer AI',
    items:
      'Generative AI products, conversational onboarding, AI image and video generation pipelines, in-chat UPI payments',
  },
  {
    group: 'Payments and regulatory',
    items: 'UPI Autopay, BBPS, NPCI approvals, FIU-IND, VDA tax regime',
  },
];

export const education = [
  {
    degree: 'MBA (PGDM)',
    school: 'Indian Institute of Management, Calcutta',
    years: '2015 to 2017',
  },
  {
    degree: 'B.Tech, Electrical & Electronics Engineering',
    school: 'Biju Patnaik Institute of Technology, Odisha',
    years: '2007 to 2011',
  },
];
