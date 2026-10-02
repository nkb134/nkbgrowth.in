export interface Build {
  id: string;
  name: string;
  line: string;
  detail: string;
  stack: string[];
  live: string;
  repo: string;
  /** Mobile-first sites can be played inside the page; desktop ones link out. */
  embed: boolean;
}

export const builds: Build[] = [
  {
    id: 'desi-taboo',
    name: 'Desi Taboo',
    line: 'The party word game, with an Indian deck.',
    detail:
      '297 words across Bollywood, cricket, street food and Hinglish slang, three difficulty levels, swipe to score. Installs as an app and works offline.',
    stack: ['HTML', 'CSS', 'JavaScript', 'GSAP', 'PWA'],
    live: 'https://nkb134.github.io/desi-taboo/',
    repo: 'https://github.com/nkb134/desi-taboo',
    embed: true,
  },
  {
    id: 'arena',
    name: 'Arena',
    line: 'Two language models, one chess clock that actually runs.',
    detail:
      'Models are told how much time they have and capped at a token budget computed from it, so playing faster means reasoning less. Stockfish scores every move; recorded matches replay at their real timings.',
    stack: ['Python', 'Stockfish', 'Gemini on Vertex', 'TypeScript'],
    live: 'https://nkb134.github.io/ai-battle-royale/',
    repo: 'https://github.com/nkb134/ai-battle-royale',
    embed: false,
  },
  {
    id: 'momos',
    name: 'Momo’s Diet Plan',
    line: 'A 14-day high-protein vegetarian plan you swipe through like a reel.',
    detail:
      'Every macro on the site is computed from a per-100 g ingredient table and checked by a validator before each build. Recipes scale by serving and have a cook mode.',
    stack: ['Astro', 'Tailwind', 'TypeScript', 'GitHub Actions'],
    live: 'https://nkb134.github.io/momos-diet-plan/',
    repo: 'https://github.com/nkb134/momos-diet-plan',
    embed: true,
  },
];
