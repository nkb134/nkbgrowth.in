export interface Role {
  title: string;
  company: string;
  about?: string;
  place: string;
  dates: string;
  points: { lead?: string; text: string }[];
}

export const experience: Role[] = [
  {
    title: 'Founder',
    company: 'Tara AI Studio and Tara Jyotish',
    about: 'Consumer generative-AI products on WhatsApp',
    place: 'Bengaluru',
    dates: '2026 to present',
    points: [
      {
        lead: 'Traction',
        text: '71K+ unique users acquired and ~$9K revenue in 45 days from launch, at ~$0.11 per sign-up and ~$0.50 CAC.',
      },
      {
        lead: 'Ownership',
        text: 'Conversational onboarding, the AI generation pipeline, UPI payments and the acquisition funnel, end to end.',
      },
    ],
  },
  {
    title: 'Founder & CPO',
    company: 'RinnWealth',
    about: 'Pre-launch consumer fintech: automated home-loan prepayment',
    place: 'Bengaluru',
    dates: 'Mar 2026 to Sep 2026',
    points: [
      {
        lead: 'Product and GTM',
        text: 'Defined product, pricing and partner integrations for automated prepayment on UPI Autopay and BBPS rails; owned GTM and unit economics.',
      },
      {
        lead: 'Partnerships and regulatory',
        text: 'Signed Axis Bank and Setu as launch partners and led the NPCI approval path in a category with no existing playbook.',
      },
    ],
  },
  {
    title: 'Head of Growth',
    company: 'Ajaib',
    about: "Indonesia's leading investment platform",
    place: 'Remote',
    dates: 'Nov 2025 to Apr 2026',
    points: [
      {
        lead: 'Referral and creator acquisition',
        text: 'Built the creator and referral acquisition pod from scratch, scaling it from 7% to 18% of total acquisitions in 3 months.',
      },
      {
        lead: 'Activation',
        text: 'Defined and shipped the lifecycle (CLM) strategy for a new market, lifting onboarding-to-activation by 11%.',
      },
      {
        lead: 'Leadership',
        text: 'Led a team of 8 across lifecycle, CRM and partnerships.',
      },
    ],
  },
  {
    title: 'Head of Growth (AVP)',
    company: 'CoinDCX',
    about: "India's largest crypto exchange",
    place: 'Bengaluru',
    dates: 'Jul 2022 to Oct 2025',
    points: [
      {
        lead: 'Referral product',
        text: 'Rebuilt the referral engine into the cheapest acquisition channel, raising its share of new users from 5% to 20% at $1.5 CAC and displacing paid spend.',
      },
      {
        lead: 'Creator channel',
        text: 'Launched the creator and influencer channel 0-to-1 and grew it 30x, from 0.3% to 9% of exchange revenue, making it the second-largest acquisition source.',
      },
      {
        lead: 'Experimentation and funnel',
        text: 'Lifted onboarding conversion and cross-sell 60% through an in-house experimentation platform; set up the first consumer insights pod.',
      },
      {
        lead: 'Revenue ownership',
        text: "Owned end-to-end P&L for India's first crypto futures business, scaling it 0-to-1 to $72M ARR in 18 months by balancing retail demand with market-maker liquidity.",
      },
      {
        lead: 'Revenue growth',
        text: 'Grew core revenue 90% with a new product line on cross-chain and fiat rails; drove a further 35% uplift through a fiat-to-crypto on-ramp and tiered loyalty programme.',
      },
      {
        lead: 'Incentive economics',
        text: 'Re-engineered incentives and pricing through the 1% TDS and 30% VDA tax regime, protecting growth on a reset cost base.',
      },
      {
        lead: 'Team and budget',
        text: 'Led a 9-person growth team and a $10M annual budget.',
      },
    ],
  },
  {
    title: 'Associate Managing Consultant',
    company: 'Mastercard Data & Services',
    place: 'Gurgaon',
    dates: 'Nov 2019 to Jul 2022',
    points: [
      {
        text: 'Scaled a B2B analytics platform to $1M MRR in 4 months across multiple country markets.',
      },
      {
        text: 'Advised issuers, acquirers and merchants across APAC and Africa on GTM, consumer value proposition and pricing in a two-sided payments network.',
      },
    ],
  },
  {
    title: 'Senior Consultant',
    company: 'Deloitte Touche Tohmatsu LLP',
    place: 'Mumbai',
    dates: 'Dec 2018 to Nov 2019',
    points: [
      {
        text: 'Launched the state-sponsored Mumbai FinTech Hub with the Maharashtra IT department; channelled $150K in grants to 40+ startups.',
      },
    ],
  },
  {
    title: 'Senior Consultant',
    company: 'PricewaterhouseCoopers Pvt Ltd',
    place: 'Mumbai',
    dates: 'Jul 2017 to Dec 2018',
    points: [
      {
        text: 'Cut $1.2M a year in operating cost for a global investment bank by deploying AI/ML, OCR and NLP across legal and compliance operations.',
      },
    ],
  },
  {
    title: 'Senior Systems Engineer',
    company: 'Infosys Limited',
    place: 'Chennai',
    dates: 'Aug 2011 to Jun 2015',
    points: [
      {
        text: 'Built automation solutions saving $172K annually for a Fortune 500 F&B client.',
      },
    ],
  },
];
