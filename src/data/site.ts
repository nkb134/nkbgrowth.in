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
  title: 'Nissar Behera · Growth builder',
  description:
    'Nissar Behera builds growth systems and consumer AI products. He led growth at CoinDCX and Ajaib, and now runs two AI products on WhatsApp that he built himself.',
};

export const nav = [
  { href: '#company', label: 'Company work' },
  { href: '#products', label: 'My products' },
  { href: '#history', label: 'Work history' },
  { href: '#contact', label: 'Contact' },
];

/** Checkable facts, shown under the employer logos. */
export const credentials = [
  { icon: 'graduation-cap', title: 'MBA, IIM Calcutta', detail: 'Class of 2017' },
  { icon: 'calendar', title: '12+ years', detail: 'in fintech, crypto and consumer AI' },
  { icon: 'wallet', title: '$10M annual budget', detail: 'and a 9-person team at CoinDCX' },
  { icon: 'handshake', title: 'Axis Bank and Setu', detail: 'signed as RinnWealth launch partners' },
  { icon: 'building', title: 'NKB Growth Consultancy Pvt Ltd', detail: 'the company behind both Tara products' },
] as const;

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
