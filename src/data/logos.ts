import ajaib from '../assets/logos/ajaib.svg?url';
import coindcx from '../assets/logos/coindcx.svg?url';
import deloitte from '../assets/logos/deloitte.svg?url';
import infosys from '../assets/logos/infosys.svg?url';
import mastercard from '../assets/logos/mastercard.svg?url';
import pwc from '../assets/logos/pwc.svg?url';
import rinnwealth from '../assets/logos/rinnwealth.png?url';

/** Employers shown in the "Where I've worked" row, in order. */
export const employers = ['coindcx', 'ajaib', 'mastercard', 'deloitte', 'pwc', 'infosys'] as const;

/**
 * Company logos. `ratio` is each file's width / height; `scale` evens out
 * their optical size when they sit in one row.
 */
export const logos = {
  coindcx: { label: 'CoinDCX', url: coindcx, ratio: 4.97, scale: 1 },
  ajaib: { label: 'Ajaib', url: ajaib, ratio: 3.41, scale: 1.4 },
  mastercard: { label: 'Mastercard', url: mastercard, ratio: 1.62, scale: 1.6 },
  deloitte: { label: 'Deloitte', url: deloitte, ratio: 5.36, scale: 1.05 },
  pwc: { label: 'PwC', url: pwc, ratio: 2.07, scale: 1.45 },
  infosys: { label: 'Infosys', url: infosys, ratio: 2.7, scale: 1.3 },
  rinnwealth: { label: 'RinnWealth', url: rinnwealth, ratio: 0.59, scale: 1.9 },
};

export type LogoName = keyof typeof logos;
