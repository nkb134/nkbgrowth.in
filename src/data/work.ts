/**
 * Company work, told as things that were built. `from` and `to` share a unit
 * and are drawn on a zero-based axis, so each slope is proportional.
 */
export interface CaseStudy {
  built: string;
  body: string;
  metric: string;
  from: number;
  to: number;
  fromText: string;
  toText: string;
  note: string;
}

export interface Company {
  id: string;
  name: string;
  about: string;
  role: string;
  dates: string;
  place: string;
  scope: string[];
  cases: CaseStudy[];
  also: { lead: string; text: string }[];
}

export const companies: Company[] = [
  {
    id: 'coindcx',
    name: 'CoinDCX',
    about: 'India’s largest crypto exchange',
    role: 'Head of Growth (AVP)',
    dates: 'Jul 2022 to Oct 2025',
    place: 'Bengaluru',
    scope: ['9-person growth team', '$10M annual budget', 'P&L owner, futures'],
    cases: [
      {
        built: 'Rebuilt the referral engine',
        body: 'Referral became the cheapest acquisition channel we had, and it replaced paid spend.',
        metric: 'Referral share of new users',
        from: 5,
        to: 20,
        fromText: '5%',
        toText: '20%',
        note: 'At $1.5 CAC',
      },
      {
        built: 'Launched the creator channel',
        body: 'I started the creator and influencer channel from nothing. It became our second-largest source of new users.',
        metric: 'Creator share of exchange revenue',
        from: 0.3,
        to: 9,
        fromText: '0.3%',
        toText: '9%',
        note: '30x growth',
      },
      {
        built: 'Ran the in-house experimentation platform',
        body: 'We used it to lift onboarding conversion and cross-sell by 60%. I also set up the company’s first consumer insights pod.',
        metric: 'Onboarding conversion, indexed',
        from: 100,
        to: 160,
        fromText: '100',
        toText: '160',
        note: '+60% lift',
      },
      {
        built: 'Scaled the crypto futures business',
        body: 'India’s first crypto futures business. I owned the P&L, which meant keeping retail demand and market-maker liquidity in balance.',
        metric: 'Futures ARR',
        from: 0,
        to: 72,
        fromText: '$0',
        toText: '$72M',
        note: '0-to-1 in 18 months',
      },
    ],
    also: [
      {
        lead: 'Revenue growth',
        text: 'I grew core revenue 90% with a new product line on cross-chain and fiat rails. A fiat-to-crypto on-ramp and a tiered loyalty programme added another 35%.',
      },
      {
        lead: 'Incentive economics',
        text: 'When the 1% TDS and 30% VDA tax came in, I reworked incentives and pricing so growth held on a reset cost base.',
      },
    ],
  },
  {
    id: 'ajaib',
    name: 'Ajaib',
    about: 'Indonesia’s leading investment platform',
    role: 'Head of Growth',
    dates: 'Nov 2025 to Apr 2026',
    place: 'Remote',
    scope: ['Team of 8', 'Lifecycle, CRM and partnerships'],
    cases: [
      {
        built: 'Built the creator and referral pod',
        body: 'I put the acquisition pod together from scratch and led a team of 8 across lifecycle, CRM and partnerships.',
        metric: 'Pod share of total acquisitions',
        from: 7,
        to: 18,
        fromText: '7%',
        toText: '18%',
        note: 'In 3 months',
      },
      {
        built: 'Shipped the lifecycle strategy',
        body: 'I wrote and shipped the lifecycle (CLM) strategy for a market that was new to the team.',
        metric: 'Onboarding-to-activation, indexed',
        from: 100,
        to: 111,
        fromText: '100',
        toText: '111',
        note: '+11% lift',
      },
    ],
    also: [],
  },
];

/** The two-sided summary under the hero. */
export const summary = {
  grow: {
    title: 'Inside companies',
    href: '#company',
    link: 'See the company work',
    stats: [
      { value: '$72M', label: 'ARR for a futures business, 0-to-1 in 18 months' },
      { value: '20%', label: 'of new users from referral, at $1.5 CAC' },
      { value: '30x', label: 'creator channel, to 9% of revenue' },
    ],
  },
  build: {
    title: 'On my own',
    href: '#products',
    link: 'See the products',
    stats: [
      { value: '2', label: 'AI products live on WhatsApp' },
      { value: '71K+', label: 'unique users acquired' },
      { value: '~$9K', label: 'revenue in the first 45 days' },
    ],
  },
};
