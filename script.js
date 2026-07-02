/* ================================================================
   NovaMind — Friendly 3D Chatbot  |  script.js
   Rule-based only: if-else + predefined KB dictionary.
   New: live date+time header clock, no "v2.0", friendlier tone.
   ================================================================ */
'use strict';

/* ── 1. KNOWLEDGE BASE ──────────────────────────────────────── */
const KB = {

  greet: [
    "Hey there! 👋 I'm NovaMind, your friendly AI assistant. What can I help you with today?",
    "Hello! 😊 Great to see you. Ask me anything — I'm all ears!",
    "Hi! Welcome to NovaMind. I'm ready to chat — what's on your mind? 🌟",
    "Hey! Glad you stopped by 😄 What would you like to explore today?",
  ],
  good_morning: [
    "Good morning! ☀️ Hope your day is off to a wonderful start! How can I help?",
    "Morning! 🌅 Rise and shine — what can NovaMind do for you today?",
  ],
  good_afternoon: [
    "Good afternoon! 🌤️ Hope the day's treating you well. What do you need?",
    "Afternoon! ☀️ Halfway through the day — how can I help you out?",
  ],
  good_evening: [
    "Good evening! 🌙 Winding down or just getting started? I'm here either way!",
    "Evening! 🌆 Hope it's been a great day. What can I do for you?",
  ],

  name: [
    "I'm **NovaMind** — a friendly, rule-based AI assistant built entirely with HTML, CSS, and JavaScript. No cloud, no APIs, just pure logic! 🤖",
    "My name is **NovaMind**! I live right in your browser and work 100% offline. Every reply comes from a predefined rule set — impressive for if-else logic, right? 😄",
  ],
  creator: [
    "I was crafted with ❤️ for a college project using only HTML, CSS, and vanilla JavaScript — no frameworks, no APIs, no databases!",
    "My creator built me as a rule-based AI assignment. Everything you see is powered by good old if-else statements and a knowledge dictionary. 🎓",
  ],
  how_are_you: [
    "I'm doing great, thanks for asking! 😊 All my rules are running perfectly. How about you?",
    "Feeling fantastic! ✨ No bugs detected — ready to help you out.",
    "I'm wonderful! I don't get tired or hungry — being software has its perks. 😄 How are you doing?",
  ],
  what_can_you_do: [
    "Here's what I can do for you:\n• 😂 Tell jokes\n• 💪 Share motivational quotes\n• 🧠 Drop fun facts\n• 🕐 Show the current date & time\n• 🔢 Solve arithmetic (try: '36 * 4')\n• 🔊 Speak responses aloud (TTS)\n• 💾 Download your chat history\n• 🌗 Switch between light & dark mode\n\nJust type or tap a chip below!",
  ],
  help: [
    "Need a hand? Here's what you can try:\n• 'Tell me a joke'\n• 'Motivational quote'\n• 'Fun fact'\n• 'What time is it?' or 'What's the date?'\n• 'Calculate 50 * 8'\n• 'What can you do?'\n\nAll powered by predefined rules — no AI magic here! 😊",
  ],

  thanks: [
    "You're so welcome! 😊 Anything else I can help with?",
    "Happy to help! Feel free to keep chatting. 💙",
    "Anytime! That's exactly what I'm here for. ✨",
  ],
  bye: [
    "Goodbye! 👋 It was lovely chatting with you. Come back anytime!",
    "See you soon! Take care and have a wonderful day! 🌟",
    "Bye for now! 😊 NovaMind will be right here when you return.",
  ],

  joke: [
    "Why do programmers prefer dark mode?\nBecause light attracts bugs! 🐛😂",
    "I told my computer I needed a break.\nNow it won't stop sending me Kit-Kat ads. 🍫😄",
    "Why did the developer go broke?\nBecause they used up all their cache! 💸😂",
    "How many programmers does it take to change a light bulb?\nNone — that's a hardware problem! 💡😄",
    "Why was the JavaScript developer sad?\nBecause they didn't Node how to Express themselves. 😢😂",
    "A SQL query walks into a bar, walks up to two tables and asks:\n'Can I join you?' 🍺😄",
    "Why do Java developers wear glasses?\nBecause they don't C#! 👓😂",
    "What's a computer's favourite snack?\nMicrochips! 🍟😄",
    "Why did the coder go to therapy?\nToo many unresolved issues. 😂",
  ],
  quote: [
    "💪 \"The only way to do great work is to love what you do.\" — Steve Jobs",
    "🌟 \"Don't watch the clock; do what it does. Keep going.\" — Sam Levenson",
    "🔥 \"Success is not final, failure is not fatal: it is the courage to continue that counts.\" — Winston Churchill",
    "🚀 \"The future belongs to those who believe in the beauty of their dreams.\" — Eleanor Roosevelt",
    "✨ \"It always seems impossible until it's done.\" — Nelson Mandela",
    "💡 \"The best way to predict the future is to invent it.\" — Alan Kay",
    "🎯 \"You don't have to be great to start, but you have to start to be great.\" — Zig Ziglar",
    "🧠 \"An investment in knowledge pays the best interest.\" — Benjamin Franklin",
    "🌈 \"Believe you can and you're halfway there.\" — Theodore Roosevelt",
  ],
  fact: [
    "🍯 Honey never spoils! Archaeologists found 3,000-year-old honey in Egyptian tombs — still perfectly edible.",
    "🐙 Octopuses have THREE hearts and BLUE blood. Two pump blood to the gills, one to the rest of the body.",
    "♟️ There are more possible chess game sequences than there are atoms in the observable universe.",
    "🍓 Strawberries aren't technically berries — but bananas, avocados, and watermelons ARE! Botany is wild.",
    "🦈 Sharks are older than trees. They've existed for ~450 million years; trees only appeared ~350 million years ago.",
    "⚡ A bolt of lightning is about 5 times hotter than the surface of the sun.",
    "🐝 A single bee will make only about 1/12 of a teaspoon of honey in its entire lifetime.",
    "🌙 The Moon drifts about 3.8 cm further from Earth every single year.",
    "💤 You cannot snore and dream at the same time.",
    "🎵 Music activates the same brain reward centres as food, exercise, and social connection.",
    "🦴 Humans are born with 270 bones, but adults only have 206 — they fuse together as we grow.",
  ],

  unknown: [
    "Hmm, I don't have a rule for that one yet! 🤔 Try asking me for a joke, a fun fact, or the current time.",
    "That's a bit outside my knowledge base! 😅 I'm rule-based, so I only know what I've been taught. Type 'help' to see what I can do.",
    "Interesting! But I'm not sure about that one. 😊 Ask me for a joke, quote, or some maths instead!",
    "I don't have an answer for that yet — I'm still learning! 🌱 Try 'help' to see my full feature list.",
  ],
};

/* ── 2. CLASSIFIER ──────────────────────────────────────────── */
function classify(text) {
  const t = text.toLowerCase().trim();
  /* Date & Time — check FIRST to avoid collision with other rules */
  if (/\btime\b.*\bdate\b|\bdate\b.*\btime\b/.test(t))          return 'datetime';
  if (/\b(time|clock|hour|minute|what time)\b/.test(t))          return 'time';
  if (/\b(date|today|day|month|year|what day)\b/.test(t))        return 'date';
  /* Calculator */
  if (/\b(calc|calculate|compute|what is|whats)\b/.test(t) ||
      /\d+\s*[\+\-\*\/]\s*[\d\(]/.test(t))                      return 'calc';
  /* Greetings */
  if (/\bgood\s*morning\b/.test(t))                              return 'good_morning';
  if (/\bgood\s*afternoon\b/.test(t))                            return 'good_afternoon';
  if (/\bgood\s*evening\b/.test(t))                              return 'good_evening';
  if (/\b(hi|hello|hey|howdy|greetings|hiya|sup|what'?s up)\b/.test(t)) return 'greet';
  /* About bot */
  if (/\b(your name|who are you|what are you|introduce)\b/.test(t)) return 'name';
  if (/\b(creat|made|built|designed|who made|developer|creator)\b/.test(t)) return 'creator';
  if (/\bhow are (you|u)\b/.test(t))                             return 'how_are_you';
  if (/\bwhat (can|do) you do|features?|abilities|capabilities\b/.test(t)) return 'what_can_you_do';
  if (/\bhelp\b/.test(t))                                        return 'help';
  /* Fun */
  if (/\bjoke|funny|laugh|humor|make me (laugh|smile)\b/.test(t)) return 'joke';
  if (/\b(motivat|inspir|quote|wisdom|encourage)\b/.test(t))     return 'quote';
  if (/\b(fun fact|fact|did you know|interesting|trivia)\b/.test(t)) return 'fact';
  /* Politeness */
  if (/\b(thank|thanks|thx|ty|appreciate|cheers)\b/.test(t))    return 'thanks';
  if (/\b(bye|goodbye|see you|later|exit|quit|cya)\b/.test(t))  return 'bye';
  return 'unknown';
}

/* ── 3. CALCULATOR ──────────────────────────────────────────── */
function safeCalc(input) {
  let expr = input
    .replace(/\b(calculate|compute|eval|what\s+is|whats)\b/gi, '')
    .trim()
    .replace(/[^0-9+\-*/(). ]/g, '')
    .trim();
  if (!expr) return null;
  try {
    // eslint-disable-next-line no-new-func
    const result = Function('"use strict"; return (' + expr + ')')();
    if (!isFinite(result)) return '⚠️ Division by zero — result is undefined!';
    const rounded = Math.round(result * 1e10) / 1e10;
    return `🔢 **${expr.trim()} = ${rounded}**`;
  } catch { return null; }
}

/* ── 4. RESPONSE BUILDER ────────────────────────────────────── */
function pick(arr) { return arr[Math.floor(Math.random() * arr.length)]; }

function nowFull() {
  const d    = new Date();
  const h    = d.getHours(), m = String(d.getMinutes()).padStart(2,'0');
  const ap   = h >= 12 ? 'PM' : 'AM';
  const h12  = h % 12 || 12;
  const date = d.toLocaleDateString('en-US', { weekday:'long', year:'numeric', month:'long', day:'numeric' });
  return { time:`${h12}:${m} ${ap}`, date };
}

function getReply(userText) {
  const intent = classify(userText);

  if (intent === 'datetime') {
    const { time, date } = nowFull();
    return `🕐 **Time:** ${time}\n📅 **Date:** ${date}\n\nHope the day's going well! 😊`;
  }
  if (intent === 'time') {
    const { time } = nowFull();
    return `🕐 The current time is **${time}**. ✅`;
  }
  if (intent === 'date') {
    const { date } = nowFull();
    return `📅 Today is **${date}**. Hope it's a great one! 🌟`;
  }
  if (intent === 'calc') {
    const r = safeCalc(userText);
    if (r) return r + '\n\nNeed another calculation? Just type it in! 😊';
    return "🔢 I couldn't parse that expression. Try something like:\n• **12 + 8**\n• **100 / 4**\n• **3 * (2 + 5)**";
  }
  if (KB[intent]) return pick(KB[intent]);
  return pick(KB.unknown);
}

/* ── 5. DOM REFERENCES ──────────────────────────────────────── */
const chatWindow  = document.getElementById('chatWindow');
const userInput   = document.getElementById('userInput');
const sendBtn     = document.getElementById('sendBtn');
const clearBtn    = document.getElementById('clearBtn');
const downloadBtn = document.getElementById('downloadBtn');
const themeBtn    = document.getElementById('themeBtn');
const ttsBtn      = document.getElementById('ttsBtn');
const suggestions = document.getElementById('suggestions');
const chatCard    = document.getElementById('chatCard');

let ttsEnabled = false;
let isDark     = true;

/* ── 6. LIVE CLOCK ──────────────────────────────────────────── */
function updateClock() {
  const now  = new Date();
  const h    = now.getHours();
  const m    = String(now.getMinutes()).padStart(2,'0');
  const s    = String(now.getSeconds()).padStart(2,'0');
  const ap   = h >= 12 ? 'PM' : 'AM';
  const h12  = h % 12 || 12;

  const timeEl = document.getElementById('clockTime');
  const dateEl = document.getElementById('clockDate');
  if (timeEl) timeEl.textContent = `${h12}:${m}:${s} ${ap}`;
  if (dateEl) dateEl.textContent = now.toLocaleDateString('en-US',{weekday:'short', month:'short', day:'numeric', year:'numeric'});
}
updateClock();
setInterval(updateClock, 1000);  /* update every second */

/* ── 7. HELPERS ─────────────────────────────────────────────── */
function nowTimeStr() {
  const d = new Date();
  const h = d.getHours(), m = String(d.getMinutes()).padStart(2,'0');
  const ap = h >= 12 ? 'PM' : 'AM';
  return `${h % 12 || 12}:${m} ${ap}`;
}

function formatText(str) {
  return str
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/\n/g, '<br>');
}

function appendMessage(text, sender) {
  const row    = document.createElement('div');
  row.className = `msg-row ${sender}`;

  const av     = document.createElement('div');
  av.className  = `avatar ${sender === 'bot' ? 'bot-av' : 'user-av'}`;
  av.textContent = sender === 'bot' ? 'NM' : 'You';
  av.setAttribute('aria-hidden','true');

  const bubble = document.createElement('div');
  bubble.className = 'bubble';
  bubble.innerHTML = formatText(text);

  const ts = document.createElement('span');
  ts.className  = 'timestamp';
  ts.textContent = nowTimeStr();
  bubble.appendChild(ts);

  row.appendChild(av);
  row.appendChild(bubble);
  chatWindow.appendChild(row);
  scrollToBottom();
}

function showTyping() {
  const row = document.createElement('div');
  row.className = 'typing-row'; row.id = 'typingIndicator';
  const av  = document.createElement('div');
  av.className  = 'avatar bot-av'; av.textContent = 'NM';
  av.setAttribute('aria-hidden','true');
  const bub = document.createElement('div');
  bub.className = 'typing-bubble';
  bub.setAttribute('aria-label','NovaMind is typing');
  bub.innerHTML = '<span class="dot"></span><span class="dot"></span><span class="dot"></span>';
  row.appendChild(av); row.appendChild(bub);
  chatWindow.appendChild(row);
  scrollToBottom();
}
function hideTyping() { document.getElementById('typingIndicator')?.remove(); }
function scrollToBottom() { chatWindow.scrollTop = chatWindow.scrollHeight; }

function speak(text) {
  if (!ttsEnabled || !window.speechSynthesis) return;
  const clean = text.replace(/\*\*/g,'').replace(/<[^>]+>/g,'');
  const u = new SpeechSynthesisUtterance(clean);
  u.rate = 1.0; u.pitch = 1.05;
  window.speechSynthesis.cancel();
  window.speechSynthesis.speak(u);
}

/* ── 8. SEND FLOW ───────────────────────────────────────────── */
function handleSend(override) {
  const raw = (override ?? userInput.value).trim();
  if (!raw) return;
  userInput.value = '';
  document.getElementById('welcomeCard')?.remove();
  appendMessage(raw, 'user');
  setTimeout(() => {
    showTyping();
    setTimeout(() => {
      hideTyping();
      const reply = getReply(raw);
      appendMessage(reply, 'bot');
      speak(reply);
    }, 600 + Math.random() * 500);
  }, 100);
}

/* ── 9. EVENTS ──────────────────────────────────────────────── */
sendBtn.addEventListener('click', () => handleSend());
userInput.addEventListener('keydown', e => {
  if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); handleSend(); }
});
suggestions.addEventListener('click', e => {
  const chip = e.target.closest('.chip');
  if (chip) handleSend(chip.dataset.msg);
});

clearBtn.addEventListener('click', () => { chatWindow.innerHTML = ''; renderWelcome(); });

downloadBtn.addEventListener('click', () => {
  const rows = chatWindow.querySelectorAll('.msg-row');
  if (!rows.length) { alert('No chat history to download yet!'); return; }
  let txt = 'NovaMind Chat History\n' + '═'.repeat(42) + '\n';
  txt += `Exported: ${new Date().toLocaleString()}\n` + '═'.repeat(42) + '\n\n';
  rows.forEach(row => {
    const isBot  = row.classList.contains('bot');
    const bubble = row.querySelector('.bubble');
    const ts     = bubble.querySelector('.timestamp');
    const tsText = ts ? ts.textContent : '';
    const content = bubble.innerText.replace(tsText,'').trim();
    txt += `[${tsText}] ${isBot ? 'NovaMind' : 'You'}: ${content}\n\n`;
  });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(new Blob([txt],{type:'text/plain'}));
  a.download = `novamind-chat-${Date.now()}.txt`;
  a.click();
});

themeBtn.addEventListener('click', () => {
  isDark = !isDark;
  document.body.classList.toggle('light', !isDark);
  const icon = document.getElementById('themeIcon');
  icon.innerHTML = isDark
    ? /* sun */`
      <circle cx="12" cy="12" r="5"/>
      <line x1="12" y1="1"  x2="12" y2="3"/>  <line x1="12" y1="21" x2="12" y2="23"/>
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
      <line x1="1" y1="12" x2="3" y2="12"/>    <line x1="21" y1="12" x2="23" y2="12"/>
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>`
    : /* moon */`<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>`;
});

ttsBtn.addEventListener('click', () => {
  if (!window.speechSynthesis) { alert('Text-to-speech is not supported in your browser.'); return; }
  ttsEnabled = !ttsEnabled;
  ttsBtn.classList.toggle('active', ttsEnabled);
  ttsBtn.setAttribute('aria-pressed', String(ttsEnabled));
  ttsBtn.title = ttsEnabled ? 'Text-to-speech ON (click to disable)' : 'Toggle text-to-speech';
  if (!ttsEnabled) window.speechSynthesis.cancel();
});

/* ── 10. 3-D MOUSE TILT ─────────────────────────────────────── */
let rafId = null;

function applyTilt(e) {
  if (rafId) cancelAnimationFrame(rafId);
  rafId = requestAnimationFrame(() => {
    const rx = ((e.clientY / window.innerHeight) - 0.5) * -14;
    const ry = ((e.clientX / window.innerWidth)  - 0.5) *  14;
    chatCard.style.transform = `rotateX(${rx}deg) rotateY(${ry}deg) translateZ(8px)`;
  });
}
function resetTilt() { chatCard.style.transform = 'rotateX(0deg) rotateY(0deg) translateZ(0)'; }

if (window.matchMedia('(pointer: fine)').matches && window.innerWidth > 600) {
  document.addEventListener('mousemove', applyTilt);
  document.addEventListener('mouseleave', resetTilt);
  userInput.addEventListener('focus', () => document.removeEventListener('mousemove', applyTilt));
  userInput.addEventListener('blur',  () => document.addEventListener('mousemove', applyTilt));
}

/* ── 11. WELCOME & INIT ─────────────────────────────────────── */
function renderWelcome() {
  const card = document.createElement('div');
  card.className = 'welcome-card'; card.id = 'welcomeCard';
  card.innerHTML = `
    <span class="w-emoji">🤖</span>
    <h2>Hi, I'm NovaMind!</h2>
    <p>Your friendly AI assistant — powered entirely by rules, not the cloud.<br>
       Ask me a joke, a fun fact, the time, or some maths. Let's chat! 😊</p>
  `;
  chatWindow.appendChild(card);
}

(function init() {
  renderWelcome();
  if (window.innerWidth > 520) userInput.focus();
  setTimeout(() => {
    document.getElementById('welcomeCard')?.remove();
    appendMessage(pick(KB.greet), 'bot');
  }, 900);
})();
