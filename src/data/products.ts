export interface ChatMessage {
  from: 'user' | 'bot';
  kind?: 'text' | 'chart' | 'note' | 'qr';
  text: string;
  buttons?: string[];
}

export const traction = [
  { value: '71K+', label: 'unique users acquired' },
  { value: '~$9K', label: 'revenue in 45 days from launch' },
  { value: '~$0.11', label: 'per sign-up' },
  { value: '~$0.50', label: 'CAC' },
];

export const studio = {
  name: 'Tara AI Studio',
  role: 'Founder · 2026 to present',
  tagline: 'Send a reel and one photo. Get the reel back with you in it.',
  description:
    'I call this part Make me viral. You copy the link to a trending Instagram reel and send it to Tara on WhatsApp with one photo. She sends the reel back with your face in it, doing the same moves. The same photo also gets you ten animated stickers, a storybook starring your child, or a retouched portrait, each paid for by UPI in the chat.',
  site: 'https://tara-ai.studio',
  whatsapp: 'https://tara-ai.studio/wa?t=sticker&l=en',
  steps: [
    'For stickers and books, you send a photo. Tara checks it, makes one free avatar, and you approve it or ask for a fix.',
    'One pay message arrives in the chat, with a UPI QR and a pay button.',
    'Once the payment lands, the job starts. The stickers or the book arrive in the same chat a few minutes later.',
  ],
  features: [
    'Make me viral. Higgsfield Genjutsu redraws the reel around the photo you sent, and the result is upscaled before it goes back. The video here came from one selfie.',
    'Sticker packs. One avatar becomes a pose sheet, then ten two-second clips, each keyed into a WhatsApp sticker under 500 KB.',
    'Storybooks. There are four human-written books. The pipeline draws the child into pre-made pages and typesets a 14-page PDF, or cuts a video with narration, music and sound effects.',
    'Photo edits in four styles: natural glow, studio portrait, model photoshoot and cartoon.',
    'A fallback chain across four vendors (Vertex AI, fal.ai, OpenRouter, Higgsfield). The job saves each vendor handle before it waits, so a crash resumes the job and I don’t pay for it twice.',
  ],
  stack: [
    'Node.js',
    'Express',
    'PostgreSQL',
    'WhatsApp Cloud API',
    'Higgsfield Genjutsu',
    'Gemini',
    'fal.ai',
    'Seedance',
    'ffmpeg',
    'Razorpay UPI',
    'Railway',
  ],
  stickers: ['laugh', 'love', 'namaste', 'party'],
};

export const jyotish = {
  name: 'Tara Jyotish',
  role: 'Founder · 2026 to present',
  tagline: 'A Vedic astrology reading, done over WhatsApp chat.',
  description:
    'Tara is an AI astrology assistant. She asks for your birth details in conversation, works out the chart with Swiss Ephemeris, and sends back your kundli with one free reading. After that you buy her time in ten-minute blocks over UPI.',
  site: 'https://tarajyotish.in',
  whatsapp: 'https://wa.me/918050328368?text=Namaste',
  steps: [
    'You give your name and your date, time and place of birth, in any order. Tara confirms them on one card.',
    'The server calculates the chart and sends the kundli image with one free reading.',
    'A UPI QR in the chat buys ten minutes, and a session clock tracks the paid time.',
  ],
  features: [
    'Tara replies in the user’s own language and script, across eleven languages. The ad someone clicked decides the language of her first reply.',
    'Planet positions come from Swiss Ephemeris and a JSON knowledge base. The model only writes the reading.',
    'The paywall sits in the chat: a Razorpay link and a UPI QR, with price ladders pinned per user by where they came from.',
    'One account can hold several family charts and match two of them.',
    'If a message signals distress, Tara replies with a helpline in the user’s script and never bills for it.',
    'Ad click ids are captured on the first message, and purchases go back to Meta through the Conversions API.',
  ],
  stack: [
    'Node.js',
    'Express',
    'PostgreSQL',
    'WhatsApp Cloud API',
    'Gemini on Vertex',
    'Swiss Ephemeris',
    'Razorpay UPI',
    'Railway',
    'GitHub Actions',
  ],
};

/** Smaller things, shown as cards under the two products. */
export const ventures = {
  rinnwealth: {
    name: 'RinnWealth',
    role: 'Founder & CPO · Mar 2026 to Sep 2026',
    line: 'Automated home-loan prepayment. Pre-launch.',
    body: [
      'I defined the product, the pricing and the partner integrations on UPI Autopay and BBPS rails, and owned GTM and unit economics.',
      'Axis Bank and Setu signed on as launch partners. I also led the NPCI approval path, in a category that had no playbook.',
    ],
    stack: ['UPI Autopay', 'BBPS', 'NPCI', 'Axis Bank', 'Setu'],
  },
  arena: {
    name: 'Arena',
    role: 'Side project',
    line: 'Two language models play chess on a clock that really runs.',
    body: [
      'Each model is told how much time it has left and gets a token budget to match, so the only way to play faster is to think less.',
      'Stockfish scores every move, and recorded matches replay at their real timings.',
    ],
    stack: ['Python', 'Stockfish', 'Gemini on Vertex', 'TypeScript'],
    live: 'https://nkb134.github.io/ai-battle-royale/',
    repo: 'https://github.com/nkb134/ai-battle-royale',
  },
};

/**
 * The live English onboarding script for Tara Jyotish. Bot lines are the
 * product's own copy; the user's replies are a made-up sample person.
 */
export const jyotishChat: ChatMessage[] = [
  { from: 'user', text: 'Namaste' },
  {
    from: 'bot',
    text: 'Namaste 🙏 I’m Tara, Vedic and Nadi Jyotish. How are you today? What can I help with?',
    buttons: ['Career', 'Marriage', 'Health'],
  },
  { from: 'user', text: 'Marriage' },
  {
    from: 'bot',
    text: 'Marriage guidance, sure, share your name? Then we’ll look at your chart together',
  },
  { from: 'user', text: 'Meera' },
  { from: 'bot', text: 'Meera, and your date of birth?' },
  { from: 'user', text: '10 June 1990' },
  {
    from: 'bot',
    text: 'Meera 😊 And please tell me the time of birth, because that is what shows where the planets stood and makes the reading far more accurate.',
  },
  { from: 'user', text: '11:45 at night' },
  {
    from: 'bot',
    text: 'Got it, and where were you born? The town or the district, whichever you remember',
  },
  { from: 'user', text: 'Cuttack' },
  {
    from: 'bot',
    text: 'Just confirming:\n\nName: Meera\nDate of birth: 10 Jun 1990\nTime: 11:45 PM\nPlace: Cuttack\n\nIs this correct?',
    buttons: ['Yes, correct ✅', 'No, need to change'],
  },
  { from: 'user', text: 'Yes, correct ✅' },
  {
    from: 'bot',
    text: 'Ok, Cuttack, generating your chart based on this location\n\nGive me a moment...',
  },
  { from: 'bot', kind: 'chart', text: 'Meera’s kundli' },
  { from: 'bot', text: 'I looked at your chart... something really stood out.' },
  {
    from: 'bot',
    kind: 'note',
    text: 'A free reading goes here. The model writes it from this chart.',
  },
  {
    from: 'bot',
    text: 'There is a good deal more in your chart than this 🙏 In a proper sitting I can look at it properly. ₹51 for 10 minutes.',
  },
  {
    from: 'bot',
    kind: 'qr',
    text: 'Scan with any UPI app, or pay using the link below 🙏\n₹51 · 10 minutes',
  },
  {
    from: 'bot',
    text: 'Got it 🙏 We have 10 minutes now, tell me what’s weighing on you most.',
  },
];
