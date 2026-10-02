const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* Scroll reveal: one observer, each element revealed once. */
const revealables = document.querySelectorAll<HTMLElement>('[data-reveal]');
const revealer = new IntersectionObserver(
  (entries) => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      entry.target.classList.add('is-in');
      revealer.unobserve(entry.target);
    }
  },
  { rootMargin: '0px 0px -6% 0px', threshold: 0 },
);
revealables.forEach((el) => revealer.observe(el));

/* Chat replay: sends the scripted messages one at a time, like a live chat. */
const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

function setupChat(root: HTMLElement) {
  const log = root.querySelector<HTMLElement>('[data-chat-log]');
  const typing = root.querySelector<HTMLElement>('[data-typing]');
  const replay = root.querySelector<HTMLButtonElement>('[data-chat-replay]');
  if (!log || !typing) return;
  const messages = [...log.querySelectorAll<HTMLElement>('[data-msg]')];
  let run = 0;

  // Start empty so the first run does not flash the finished conversation.
  messages.forEach((m) => m.setAttribute('data-pending', ''));

  async function play() {
    const id = ++run;
    messages.forEach((m) => m.setAttribute('data-pending', ''));
    log!.scrollTop = 0;

    for (const msg of messages) {
      const fromBot = msg.dataset.msg === 'bot';
      if (fromBot) {
        typing!.hidden = false;
        log!.scrollTop = log!.scrollHeight;
        await wait(650 + Math.min(msg.textContent!.length * 9, 900));
      } else {
        await wait(900);
      }
      if (id !== run) return;
      typing!.hidden = true;
      msg.removeAttribute('data-pending');
      log!.scrollTo({ top: log!.scrollHeight, behavior: 'smooth' });
    }
  }

  replay?.addEventListener('click', play);

  // Start the first run when the phone scrolls into view.
  const starter = new IntersectionObserver(
    (entries) => {
      if (!entries.some((e) => e.isIntersecting)) return;
      starter.disconnect();
      play();
    },
    { threshold: 0.5 },
  );
  starter.observe(root);
}

if (!reduceMotion) {
  document.querySelectorAll<HTMLElement>('[data-chat]').forEach(setupChat);
}

/* Demo videos marked data-autoplay play (muted) while on screen and pause when they leave. */
if (!reduceMotion) {
  const player = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        const video = entry.target as HTMLVideoElement;
        if (entry.isIntersecting) video.play().catch(() => {});
        else video.pause();
      }
    },
    { threshold: 0.6 },
  );
  document.querySelectorAll<HTMLVideoElement>('video[data-autoplay]').forEach((v) => player.observe(v));
}
