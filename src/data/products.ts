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
  tagline: 'One photo in. Stickers, a storybook or a photoshoot out, inside WhatsApp.',
  description:
    'Send Tara one photo on WhatsApp. She makes a cartoon avatar for free, then sells ten animated stickers of your face, a personalised children’s storybook as a PDF or narrated video, or a retouched portrait. Payment is a UPI QR in the same chat.',
  site: 'https://tara-ai.studio',
  whatsapp: 'https://tara-ai.studio/wa?t=sticker&l=en',
  steps: [
    'A photo comes in and is screened; one avatar is generated free and the user approves or corrects it.',
    'A single pay bubble arrives in chat: UPI QR plus a pay button.',
    'Payment starts the generation job; the result lands in the same chat a few minutes later.',
  ],
  features: [
    {
      lead: 'Animated sticker packs',
      text: 'One avatar becomes a pose sheet, then ten two-second clips, colour-keyed into WhatsApp stickers under 500 KB each.',
    },
    {
      lead: 'Personalised storybooks',
      text: 'Four human-written books. The child’s character is composited into pre-drawn plates and typeset into a 14-page PDF, or a video with narration, music and sound effects.',
    },
    {
      lead: 'Photo edits',
      text: 'Natural glow, studio portrait, model photoshoot and cartoon styles from a single selfie.',
    },
    {
      lead: 'Jobs that survive failure',
      text: 'Generation runs on a vendor fallback ladder (Vertex AI, fal.ai, OpenRouter, Higgsfield). Vendor handles are saved before waiting, so a crash resumes the job instead of buying it twice.',
    },
  ],
  stack: [
    'Node.js',
    'Express',
    'PostgreSQL',
    'WhatsApp Cloud API',
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
  tagline: 'A Vedic astrology reading that happens in a WhatsApp chat.',
  description:
    'An AI astrology assistant. Tara collects birth details in conversation, casts the chart with Swiss Ephemeris, sends the kundli and one free reading, then sells further chat time in ten-minute blocks paid by UPI.',
  site: 'https://tarajyotish.in',
  whatsapp: 'https://wa.me/918050328368?text=Namaste',
  steps: [
    'Name, date, time and place of birth are collected in any order, then confirmed on one card.',
    'The chart is calculated on the server and sent back as a kundli image with one free reading.',
    'A UPI QR in the chat buys ten minutes; a session clock meters the paid time.',
  ],
  features: [
    {
      lead: 'Replies in the user’s language and script',
      text: 'Eleven languages, with the click-to-WhatsApp ad creative seeding the first reply.',
    },
    {
      lead: 'Deterministic astrology, generated prose',
      text: 'Planet positions come from Swiss Ephemeris and a JSON knowledge base; the model only writes the reading.',
    },
    {
      lead: 'In-chat paywall with price experiments',
      text: 'Razorpay link plus UPI QR, with price ladders pinned per user by acquisition route.',
    },
    {
      lead: 'Family charts and kundli matching',
      text: 'One account can hold several charts and compare two of them.',
    },
    {
      lead: 'Crisis guard',
      text: 'Messages that signal distress get a helpline reply in the user’s script and are never billed.',
    },
    {
      lead: 'Closed-loop attribution',
      text: 'Ad click ids are captured on the first message and purchases are sent back through the Meta Conversions API.',
    },
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
    text: 'A free reading follows here, written by the model from this chart.',
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
