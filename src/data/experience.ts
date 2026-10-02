import type { LogoName } from './logos';

/** Full work history, newest first. Roles covered in detail above link back to their section. */
export interface Role {
  title: string;
  company: string;
  place: string;
  dates: string;
  points: string[];
  href?: string;
  logo?: LogoName;
}

export const experience: Role[] = [
  {
    title: 'Founder',
    company: 'Tara AI Studio and Tara Jyotish',
    place: 'Bengaluru',
    dates: '2026 to present',
    points: [
      'Two AI products on WhatsApp that I built myself. 71K+ unique users and ~$9K revenue in the first 45 days.',
    ],
    href: '#products',
  },
  {
    title: 'Founder & CPO',
    company: 'RinnWealth',
    logo: 'rinnwealth',
    place: 'Bengaluru',
    dates: 'Mar 2026 to Sep 2026',
    points: [
      'Pre-launch fintech for automated home-loan prepayment. Axis Bank and Setu signed on as launch partners.',
    ],
    href: '#ventures',
  },
  {
    title: 'Head of Growth',
    company: 'Ajaib',
    logo: 'ajaib',
    place: 'Remote',
    dates: 'Nov 2025 to Apr 2026',
    points: [
      'I built the creator and referral pod, which went from 7% to 18% of acquisitions in 3 months, and led a team of 8.',
    ],
    href: '#ajaib',
  },
  {
    title: 'Head of Growth (AVP)',
    company: 'CoinDCX',
    logo: 'coindcx',
    place: 'Bengaluru',
    dates: 'Jul 2022 to Oct 2025',
    points: [
      'I ran referral, the creator channel, the experimentation platform and the futures P&L, with a 9-person team and a $10M annual budget.',
    ],
    href: '#coindcx',
  },
  {
    title: 'Associate Managing Consultant',
    company: 'Mastercard Data & Services',
    logo: 'mastercard',
    place: 'Gurgaon',
    dates: 'Nov 2019 to Jul 2022',
    points: [
      'Scaled a B2B analytics platform to $1M MRR in 4 months across several country markets.',
      'Advised issuers, acquirers and merchants across APAC and Africa on GTM, consumer value proposition and pricing in a two-sided payments network.',
    ],
  },
  {
    title: 'Senior Consultant',
    company: 'Deloitte Touche Tohmatsu LLP',
    logo: 'deloitte',
    place: 'Mumbai',
    dates: 'Dec 2018 to Nov 2019',
    points: [
      'Launched the state-sponsored Mumbai FinTech Hub with the Maharashtra IT department. It channelled $150K in grants to 40+ startups.',
    ],
  },
  {
    title: 'Senior Consultant',
    company: 'PricewaterhouseCoopers Pvt Ltd',
    logo: 'pwc',
    place: 'Mumbai',
    dates: 'Jul 2017 to Dec 2018',
    points: [
      'Cut $1.2M a year in operating cost for a global investment bank by deploying AI/ML, OCR and NLP across its legal and compliance operations.',
    ],
  },
  {
    title: 'Senior Systems Engineer',
    company: 'Infosys Limited',
    logo: 'infosys',
    place: 'Chennai',
    dates: 'Aug 2011 to Jun 2015',
    points: ['Built automation that saved a Fortune 500 F&B client $172K a year.'],
  },
];
