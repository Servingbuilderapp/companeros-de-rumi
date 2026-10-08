// Sesión diaria tipo Duolingo (5 a 8 minutos) — motor único para las 7 historias.
// Cada día = 5 desafíos con varias actividades. La historia solo aporta la
// situación y la decisión del día (lo que ya estaba escrito en dialogues_X /
// mechanics_X); las actividades de relleno son compartidas y rotan por día.
// Se carga ANTES de app.js (usa state, ACTIVE_STORY, pushDiary, completeWeek,
// THOUGHT_POOLS, etc., que se resuelven en el momento de ejecutar, no al cargar).

const BLOCK_NAMES = ["Entrar en calma", "La situación del día", "Reto de atención", "Piensa y aprende", "Cierre del día"];
const DAYS_PER_WEEK = 5;

function newWeekAcc() { return { cared: 0, changed: 0, greeted: {}, hits: 0, rounds: 0, clicks: 0 }; }

// ---------- Pools de contenido compartido ----------
const DATOS_VF = [
  { t: "Respirar lento le avisa al cuerpo que puede calmarse.", v: true, e: "Respirar lento baja el ritmo del cuerpo y ayuda a calmarse." },
  { t: "Si pensamos algo muchas veces, ya es un hecho comprobado.", v: false, e: "Repetir un pensamiento no lo vuelve verdad. Se puede revisar." },
  { t: "Dormir poco puede hacer que todo parezca más difícil.", v: true, e: "Con sueño, los problemas se ven más grandes de lo que son." },
  { t: "Pedir ayuda es una señal de debilidad.", v: false, e: "Pedir ayuda es una decisión valiente y muy inteligente." },
  { t: "Las emociones cambian: ninguna dura para siempre.", v: true, e: "Aunque ahora pese, las emociones suben y bajan." },
  { t: "Casi todo el mundo siente nervios a veces, incluso quien parece muy seguro.", v: true, e: "Los nervios son normales; se nota menos de lo que creemos." },
  { t: "Si no puedes controlar la situación, tampoco puedes elegir cómo responder.", v: false, e: "No controlas la situación, pero sí cómo piensas y qué haces después." },
  { t: "Moverte un rato (caminar, estirarte) puede mejorar tu ánimo.", v: true, e: "El movimiento ayuda al cuerpo a soltar tensión." },
  { t: "Un pensamiento negativo siempre dice la verdad.", v: false, e: "Un pensamiento es una idea, no un hecho. Se puede cuestionar." },
  { t: "Hablar con alguien de confianza puede hacer que un problema pese menos.", v: true, e: "Compartir lo que sientes suele aliviar la carga." },
  { t: "Usar pantallas justo antes de dormir puede dificultar el sueño.", v: true, e: "La luz y la actividad del celular mantienen al cerebro despierto." },
  { t: "Equivocarse significa que no sirves para eso.", v: false, e: "Equivocarse es parte de aprender cualquier cosa." },
  { t: "Tomar un descanso ayuda a volver con más energía.", v: true, e: "Descansar es parte del trabajo, no una pérdida de tiempo." },
  { t: "Si alguien te molesta y te quedas callado, siempre se le pasa solo.", v: false, e: "Callar no siempre lo detiene. Contárselo a alguien ayuda." },
  { t: "Ponerle palabras a lo que sientes ayuda a que se sienta menos fuerte.", v: true, e: "Nombrar una emoción la hace más fácil de manejar." },
  { t: "Lo que otros muestran en el celular es su vida completa.", v: false, e: "En redes se muestra lo mejor; no es la imagen completa." },
  { t: "Comer y tomar agua durante el día influye en cómo te sientes.", v: true, e: "El cuerpo cuidado ayuda al ánimo." },
  { t: "Todas las personas necesitan el mismo tiempo para sentirse mejor.", v: false, e: "Cada persona tiene su propio ritmo, y está bien." },
  { t: "Los amigos también se apoyan cuando uno tiene un mal día.", v: true, e: "Apoyarse es parte de cualquier amistad." },
  { t: "Si el corazón se acelera, seguro está pasando algo grave.", v: false, e: "El corazón también se acelera con nervios; suele pasar solo." },
  { t: "Ponerle límites de tiempo al juego o al celular es una forma de cuidarte.", v: true, e: "Decidir tú hasta cuándo te da más control." },
  { t: "Los pasos pequeños no sirven si no lo resuelven todo.", v: false, e: "Los pasos pequeños son justo como se logran los cambios grandes." },
  { t: "Reconocer lo que salió bien en el día ayuda a ver todo más equilibrado.", v: true, e: "Fijarse en lo bueno no borra lo difícil, pero lo equilibra." },
  { t: "Decir 'no' a algo que te hace sentir mal es parte de cuidarte.", v: true, e: "Poner límites es una forma de respeto hacia ti." }
];

const FRASES = [
  { s: "Cuando me siento nervioso, puedo...", o: ["respirar lento tres veces", "contarle a alguien cómo me siento", "mover el cuerpo un ratito"] },
  { s: "Si algo me preocupa, lo primero que puedo hacer es...", o: ["ponerlo en palabras", "dividirlo en pasos pequeños", "preguntarle a alguien de confianza"] },
  { s: "Cuando me equivoco, puedo decirme...", o: ["'me sirve para aprender'", "'esto no define quién soy'", "'puedo volver a intentarlo'"] },
  { s: "Si no tengo ganas de nada, puedo empezar por...", o: ["hacer solo una parte pequeña", "salir a que me dé el aire", "poner una canción que me guste"] },
  { s: "Si alguien se burla de mí, puedo...", o: ["alejarme de ese lugar", "contárselo a un adulto de confianza", "buscar a alguien que sí me trate bien"] },
  { s: "Si me cuesta dejar el celular, puedo...", o: ["ponerle una alarma de tiempo", "dejarlo en otra habitación un rato", "buscar otra cosa que también me guste"] },
  { s: "Para calmar la mente antes de dormir, puedo...", o: ["apagar las pantallas un rato antes", "escribir lo que me preocupa", "respirar y estirarme"] },
  { s: "Cuando siento que todos me miran, puedo recordar que...", o: ["la mayoría está pensando en sí misma", "mi cuerpo está nervioso, pero estoy bien", "puedo pausar y respirar"] },
  { s: "Si un amigo la está pasando mal, puedo...", o: ["escucharlo sin juzgar", "decirle que cuenta conmigo", "ayudarle a buscar a un adulto"] },
  { s: "Cuando algo me parece demasiado grande, puedo...", o: ["quedarme solo con el primer paso", "pedir una mano", "tomarme un respiro antes de seguir"] },
  { s: "Si me comparo con alguien, puedo recordar que...", o: ["solo veo una parte de su vida", "yo también tengo mis fortalezas", "cada quien lleva su propio ritmo"] },
  { s: "Para empezar un día difícil, puedo...", o: ["tomar agua y desayunar", "pensar en una cosa pequeña que espero", "saludar a alguien amable"] },
  { s: "Si me da miedo hablar en clase, puedo...", o: ["ensayar antes con alguien", "empezar con una frase corta", "respirar antes de empezar"] },
  { s: "Para sentirme parte del grupo, puedo...", o: ["saludar a alguien primero", "hacerle una pregunta a un compañero", "unirme a una actividad que me guste"] },
  { s: "Cuando siento rabia, puedo...", o: ["contar hasta diez despacio", "caminar un momento", "decir lo que siento con calma"] },
  { s: "Si algo no me salió, puedo recordar que...", o: ["un día no define todo el año", "puedo aprender de esto", "mañana hay otra oportunidad"] }
];

const PASOS = [
  { t: "Algo me preocupa antes de un examen:", c: ["Respiro y me calmo un momento", "Repaso lo que sí sé", "Pido ayuda con lo que no entiendo"] },
  { t: "Me siento solo en el recreo:", c: ["Respiro y miro alrededor", "Me acerco a alguien amable", "Cuento cómo me fue al llegar a casa"] },
  { t: "Se me pasó la hora jugando:", c: ["Paro y estiro el cuerpo", "Pongo una alarma para la próxima", "Hago algo que me guste sin pantalla"] },
  { t: "Alguien me dijo algo que me dolió:", c: ["Me alejo y respiro", "Pienso qué sentí", "Se lo cuento a alguien de confianza"] },
  { t: "No tengo ganas de nada hoy:", c: ["Tomo agua y me estiro", "Elijo una sola cosa pequeña", "Se lo cuento a alguien cercano"] },
  { t: "Me cuesta dormir:", c: ["Dejo el celular a un lado", "Respiro lento", "Escribo lo que me da vueltas"] },
  { t: "Un amigo está triste:", c: ["Lo escucho sin interrumpir", "Le digo que cuenta conmigo", "Lo animo a buscar apoyo"] },
  { t: "Me equivoqué frente a todos:", c: ["Respiro y bajo los hombros", "Me recuerdo que es normal", "Sigo adelante con calma"] },
  { t: "Tengo mucho que hacer y me abruma:", c: ["Hago una lista corta", "Elijo lo primero", "Pido ayuda si hace falta"] },
  { t: "Me siento excluido de un grupo:", c: ["Respiro y no me culpo", "Busco a alguien que me trate bien", "Se lo cuento a un adulto"] },
  { t: "Tengo ganas de revisar el celular otra vez:", c: ["Hago una pausa de un minuto", "Hago otra cosa con las manos", "Decido cuándo lo reviso"] },
  { t: "Me da pena preguntar en clase:", c: ["Respiro antes de levantar la mano", "Uso una frase corta", "Pregunto al final si hace falta"] }
];

const MEMORIA_PARES = [
  ["🎧", "Música"], ["🚶", "Caminar"], ["📖", "Leer"], ["🎨", "Dibujar"], ["🐶", "Una mascota"], ["🧘", "Respirar"],
  ["💬", "Hablar con alguien"], ["🌳", "Aire libre"], ["🍵", "Algo caliente"], ["⚽", "Jugar"], ["✍️", "Escribir"], ["🫶", "Un abrazo"]
];

const DISTINTOS = [["😀", "😃"], ["🌕", "🌝"], ["🔵", "🟦"], ["⭐", "🌟"], ["🍎", "🍅"], ["🐱", "🐯"], ["🌧️", "⛈️"], ["🔶", "🟠"], ["🎵", "🎶"], ["🌲", "🌴"]];

const CONECTORES_DIA = ["", "Otro día. ", "Sigue la semana. ", "Ya casi a mitad de camino. ", "Último día de la semana. "];
const FELICITACIONES = ["¡Bien hecho!", "¡Muy bien!", "¡Así se hace!", "¡Sigue así!", "¡Eso es!"];
const MOODS = [["😄", "Muy bien"], ["🙂", "Bien"], ["😐", "Normal"], ["😕", "Algo bajo"]];

// ---------- Estado de la sesión en curso ----------
let SESSION = null; // { steps, i, cleanup, blocksDone, week, day }

function sessSeed() { return (state.weekIndex - 1) * DAYS_PER_WEEK + state.dayIndex; }
// Elige un elemento rotando con un paso primo con el largo, para no repetir seguido.
function pickRot(arr, extra) {
  const seed = sessSeed() + (extra || 0) * 7;
  return arr[(seed * 5 + (extra || 0)) % arr.length];
}
function pickMany(arr, n, extra) {
  const start = (sessSeed() * 3 + (extra || 0) * 5) % arr.length;
  const out = [];
  for (let k = 0; k < n; k++) out.push(arr[(start + k * 2) % arr.length]);
  return out;
}
function addXp(n) { state.xp += n; renderStats(); }
function sessCleanup() { if (SESSION && SESSION.cleanup) { try { SESSION.cleanup(); } catch (e) {} SESSION.cleanup = null; } }
function el(id) { return document.getElementById(id); }

// ---------- Sonidos (acierto / desafío completo / fin de día) con botón de silencio ----------
let SOUND_ON = true;
try { SOUND_ON = localStorage.getItem("rumi_sound") !== "off"; } catch (e) { /* sin almacenamiento: queda con sonido */ }
let AUDIO_CTX = null;
function playTones(notes, gap, dur, vol, type) {
  try {
    const Ctx = window.AudioContext || window.webkitAudioContext;
    if (!Ctx) return;
    AUDIO_CTX = AUDIO_CTX || new Ctx();
    notes.forEach((f, i) => {
      const o = AUDIO_CTX.createOscillator(), g = AUDIO_CTX.createGain();
      o.type = type || "sine"; o.frequency.value = f; o.connect(g); g.connect(AUDIO_CTX.destination);
      const t0 = AUDIO_CTX.currentTime + i * gap;
      g.gain.setValueAtTime(0.0001, t0);
      g.gain.exponentialRampToValueAtTime(vol, t0 + 0.02);
      g.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
      o.start(t0); o.stop(t0 + dur + 0.02);
    });
  } catch (e) { /* si el navegador bloquea el audio, el juego sigue sin sonido */ }
}
function sfx(kind, n) {
  if (!SOUND_ON) return;
  if (kind === "ok") playTones([660, 880], 0.07, 0.16, 0.16, "triangle");
  else if (kind === "block") {
    // cada desafío suena un poco más alto que el anterior
    const base = [392, 440, 494, 523, 587][n || 0];
    playTones([base, base * 1.25, base * 1.5], 0.11, 0.28, 0.2, "sine");
  } else if (kind === "day") playTones([523, 659, 784, 1047, 784, 1047], 0.13, 0.34, 0.22, "triangle");
}
function setupSoundToggle() {
  const stats = document.querySelector(".stats");
  if (!stats || document.getElementById("soundStat")) return;
  const b = document.createElement("button");
  b.id = "soundStat"; b.className = "stat"; b.type = "button";
  b.setAttribute("aria-label", "Sonido");
  b.style.cssText = "cursor:pointer;color:inherit;font:inherit";
  const paint = () => { b.textContent = SOUND_ON ? "🔊" : "🔇"; };
  paint();
  b.addEventListener("click", () => {
    SOUND_ON = !SOUND_ON;
    try { localStorage.setItem("rumi_sound", SOUND_ON ? "on" : "off"); } catch (e) { /* best-effort */ }
    paint(); sfx("ok");
  });
  stats.appendChild(b);
}
setupSoundToggle();
function stripWeekPrefix(s) { return String(s).replace(/^Semana \d+\.\s*/, ""); }

// ---------- Mascota (marcador de posición; la dirección de arte la define otra persona) ----------
function mascot(mood, size) {
  const m = mood || "happy";
  const mouth = m === "cheer" ? '<path d="M38 62 Q50 78 62 62" stroke="#241f3d" stroke-width="3" fill="#fff" />'
    : m === "calm" ? '<path d="M40 64 Q50 70 60 64" stroke="#241f3d" stroke-width="3" fill="none" />'
    : m === "dim" ? '<path d="M40 68 Q50 62 60 68" stroke="#241f3d" stroke-width="3" fill="none" />'
    : '<path d="M38 62 Q50 74 62 62" stroke="#241f3d" stroke-width="3" fill="none" />';
  const fill = m === "dim" ? "#8d86c9" : "#8b5cf6";
  const thumb = m === "cheer" ? '<text x="78" y="88" font-size="22">👍</text>' : "";
  const sparks = m === "cheer" ? '<text x="6" y="22" font-size="14">✨</text><text x="80" y="20" font-size="14">✨</text>' : "";
  return `<svg class="mascot mascot-${m}" viewBox="0 0 100 100" width="${size || 96}" height="${size || 96}" aria-hidden="true">
    <ellipse cx="50" cy="55" rx="34" ry="32" fill="${fill}" />
    <ellipse cx="38" cy="48" rx="5" ry="6" fill="#fff" /><ellipse cx="62" cy="48" rx="5" ry="6" fill="#fff" />
    <circle cx="38" cy="49" r="2.5" fill="#241f3d" /><circle cx="62" cy="49" r="2.5" fill="#241f3d" />
    ${mouth}${thumb}${sparks}</svg>`;
}

// ---------- Marco común de cada pantalla de la sesión ----------
function frame(b, inner, cls) {
  const total = SESSION.steps.length;
  const pct = Math.round((SESSION.i / total) * 100);
  el("screen").innerHTML = `
    <div class="sess-top">
      <div class="sess-bar"><div class="sess-fill" style="width:${pct}%"></div></div>
      <div class="sess-meta">Semana ${state.weekIndex} · Día ${state.dayIndex + 1} de ${DAYS_PER_WEEK} · Desafío ${b + 1} de 5 — ${BLOCK_NAMES[b]}</div>
    </div>
    <div class="card ${cls || ""}">${inner}</div>`;
}
function nextStep() {
  sessCleanup();
  const S = SESSION;
  S.i += 1;
  if (S.i >= S.steps.length) return endOfDay();
  const prev = S.steps[S.i - 1], cur = S.steps[S.i];
  if (cur.b !== prev.b) return renderBlockDone(prev.b, () => cur.run());
  cur.run();
}

function renderBlockDone(b, cont) {
  const S = SESSION;
  S.blocksDone = b + 1;
  addXp(10);
  saveProgress();
  const confetti = Array.from({ length: 12 }).map((_, i) =>
    `<span class="confetti-piece c${i % 6}" style="left:${(i * 8.3) % 100}%;animation-delay:${(i % 6) * 0.08}s"></span>`).join("");
  el("screen").innerHTML = `
    <div class="sess-top"><div class="sess-bar"><div class="sess-fill" style="width:${Math.round((S.i / S.steps.length) * 100)}%"></div></div>
    <div class="sess-meta">Semana ${state.weekIndex} · Día ${state.dayIndex + 1} de ${DAYS_PER_WEEK}</div></div>
    <div class="card celebrate celebrate-day">
      <div class="confetti" aria-hidden="true">${confetti}</div>
      ${mascot("cheer", 110)}
      <h2 class="heading" style="text-align:center">${FELICITACIONES[b % FELICITACIONES.length]}</h2>
      <p class="scene-text" style="text-align:center">Completaste <b>${b + 1} de 5</b> desafíos de hoy: <i>${BLOCK_NAMES[b]}</i>.</p>
      <div class="sess-dots">${[0, 1, 2, 3, 4].map((k) => `<span class="${k <= b ? "on" : ""}"></span>`).join("")}</div>
      <button class="primary" id="blkBtn">Seguir</button>
    </div>`;
  sfx("block", b);
  el("blkBtn").addEventListener("click", cont);
}

// ---------- Bloque 1: entrar en calma ----------
function stepSaludo(b) {
  return { b, est: 12, run() {
    const name = state.studentName || "Estudiante";
    frame(b, `
      ${mascot("happy", 100)}
      <h2 class="heading" style="text-align:center">Hola, ${name}</h2>
      <p class="scene-text" style="text-align:center">¿Cómo llegas hoy? Toca la carita que más se parece.</p>
      <div class="mood-row">${MOODS.map((m, i) => `<button class="mood" data-i="${i}" aria-label="${m[1]}"><span>${m[0]}</span><small>${m[1]}</small></button>`).join("")}</div>`);
    el("screen").querySelectorAll(".mood").forEach((btn) => btn.addEventListener("click", () => {
      state.moods = state.moods || [];
      state.moods.push({ week: state.weekIndex, day: state.dayIndex, mood: Number(btn.dataset.i) });
      addXp(5); nextStep();
    }));
  } };
}

function stepRespiracion(b) {
  return { b, est: 28, run() {
    let cycles = 0, timer = null;
    frame(b, `
      <h2 class="heading" style="text-align:center">Respira conmigo</h2>
      <p class="scene-text" style="text-align:center;color:var(--muted)">Sigue el círculo: inhala cuando crece, exhala cuando se encoge.</p>
      <div class="breath-wrap"><div class="breath" id="breath"></div><div class="breath-label" id="breathLbl">Inhala</div></div>
      <p class="scene-text" style="text-align:center;font-size:0.85rem" id="breathCount">Ciclo 1 de 3</p>
      <button class="primary" id="breathBtn" disabled>Respirando...</button>`);
    const circle = el("breath"), lbl = el("breathLbl"), cnt = el("breathCount"), btn = el("breathBtn");
    let inhale = true;
    function phase() {
      circle.className = "breath " + (inhale ? "in" : "out");
      lbl.textContent = inhale ? "Inhala" : "Exhala";
      timer = setTimeout(() => {
        if (!inhale) { cycles += 1; if (cycles >= 3) { btn.disabled = false; btn.textContent = "Listo, me siento más tranquilo"; lbl.textContent = "Muy bien"; circle.className = "breath"; return; } cnt.textContent = "Ciclo " + (cycles + 1) + " de 3"; }
        inhale = !inhale; phase();
      }, 4000);
    }
    phase();
    SESSION.cleanup = () => clearTimeout(timer);
    btn.addEventListener("click", () => { addXp(5); nextStep(); });
  } };
}

// ---------- Bloque 2: la situación del día (historia + pensamiento + emoción + acción) ----------
function dayScene() {
  const def = ACTIVE_STORY.weekDefs[state.weekIndex - 1];
  if (def.type === "dialogue") {
    const s = ACTIVE_STORY.dialogues[state.weekIndex][state.dayIndex];
    return { tag: s.tag, text: s.text, choices: s.choices, kind: "dialogue" };
  }
  const cfg = ACTIVE_STORY.mechanics[state.weekIndex];
  const intro = stripWeekPrefix(cfg.intro);
  // Día 1: la escena completa. Días 2 a 5: no se repite; se muestra la decisión de ayer, el avance
  // de la semana y solo la primera frase del contexto (así cada día se siente continuación, no copia).
  if (state.dayIndex === 0) return { tag: "Día 1", text: intro, cfg, kind: cfg.type };
  const acc = state.weekAcc || newWeekAcc();
  const d = state.dayIndex;
  const m1 = intro.match(/^.*?[.!?](\s|$)/); // primera frase (sin lookbehind: compatible con celulares viejos)
  const first = (m1 ? m1[0] : intro).trim();
  const ayer = state.lastChoice ? "Ayer " + String(state.lastChoice).replace(/^Hoy\s+/, "").replace(/^./, (c) => c.toLowerCase()) + " " : "";
  let avance = "";
  if (cfg.type === "habit") avance = "Rumi " + cfg.itemLabel + " " + acc.cared + " de " + d + " día" + (d === 1 ? "" : "s") + " hasta ahora. ";
  else if (cfg.type === "social") avance = "Esta semana has saludado a " + Object.keys(acc.greeted).length + " de " + cfg.classmates.length + " compañeros. ";
  else if (cfg.type === "thoughts") avance = "Esta semana has probado pensarlo distinto " + acc.changed + (acc.changed === 1 ? " vez" : " veces") + ". ";
  else if (cfg.type === "timing") avance = "Hoy se sigue practicando lo mismo que ayer. ";
  // Escena propia de la historia (beats.js) si existe; si no, la primera frase del contexto como respaldo.
  const bs = typeof BEATS !== "undefined" && BEATS[ACTIVE_STORY.id] && BEATS[ACTIVE_STORY.id][state.weekIndex];
  const cuerpo = bs && bs[d - 1] ? bs[d - 1] : "<i>" + first + "</i>";
  return { tag: "Día " + (d + 1), text: CONECTORES_DIA[d] + ayer + avance + cuerpo, cfg, kind: cfg.type };
}

function stepSituacion(b) {
  return { b, est: 25, run() {
    const sc = dayScene();
    frame(b, `
      <div class="day-tag">${sc.tag}</div>
      <p class="scene-text">${sc.text}</p>
      <button class="primary" id="sitBtn">Seguir</button>`);
    el("sitBtn").addEventListener("click", () => nextStep());
  } };
}

function stepPensamiento(b) {
  return { b, est: 15, run() {
    const axis = currentWeekAxis();
    const thought = pickThought(axis, sessSeed());
    const S = SESSION;
    frame(b, `
      <h2 class="heading">Un pensamiento aparece...</h2>
      <p class="scene-text" style="color:var(--muted);font-size:0.9rem">Hay dos bolas misteriosas. No sabes qué pensamiento trae cada una hasta tocarla. Elige una.</p>
      <div class="options" style="flex-direction:row;gap:12px">
        <button class="option thought-bubble ball dark-ball" data-k="dark">🌑<br><small>Bola oscura</small></button>
        <button class="option thought-bubble ball light-ball" data-k="light">☀️<br><small>Bola clara</small></button>
      </div>`);
    el("screen").querySelectorAll(".ball").forEach((btn) => btn.addEventListener("click", () => {
      S.thought = thought; S.wasDark = btn.dataset.k === "dark"; S.reframed = !S.wasDark; addXp(5); nextStep();
    }));
  } };
}

function stepEmocion(b) {
  return { b, est: 15, run() {
    const S = SESSION;
    function draw() {
      const showDark = S.wasDark && !S.reframed;
      frame(b, `
        <div class="thought-callout ${showDark ? "dark" : "light"}">${showDark ? S.thought.dark : S.thought.light}</div>
        ${mascot(showDark ? "dim" : "happy", 84)}
        <p class="scene-text" style="color:var(--muted);font-size:0.85rem;margin:0">Control de la emoción</p>
        <div class="emotion-meter"><div class="emotion-fill" style="width:${showDark ? 35 : 80}%"></div></div>
        ${showDark ? '<p class="scene-text" style="font-size:0.9rem">Reconocer este pensamiento no te hace mal. Si quieres, puedes mirarlo de otra manera.</p><button class="option" id="reBtn">Probar pensarlo distinto</button>' : '<p class="scene-text" style="font-size:0.9rem">Así se siente un poco más de calma antes de decidir.</p>'}
        <button class="primary" id="emoBtn">Seguir</button>`, showDark ? "thought-dark" : "");
      const re = el("reBtn");
      if (re) re.addEventListener("click", () => { S.reframed = true; addXp(5); draw(); });
      el("emoBtn").addEventListener("click", () => nextStep());
    }
    draw();
  } };
}

function stepAccion(b) {
  return { b, est: 20, run() {
    const sc = dayScene();
    if (sc.kind === "dialogue") {
      frame(b, `
        <div class="day-tag">${sc.tag}</div>
        <p class="scene-text" style="font-size:0.95rem">¿Qué haces?</p>
        <div class="options">${sc.choices.map((c, i) => `<button class="option" data-i="${i}">${c.label}</button>`).join("")}</div>`);
      el("screen").querySelectorAll(".option").forEach((btn) => btn.addEventListener("click", () => {
        const c = sc.choices[Number(btn.dataset.i)];
        if (c.w && c.ax) state.scores[c.ax] = (state.scores[c.ax] || 0) + c.w;
        pushDiary("Semana " + state.weekIndex, c.diary);
        state.lastChoice = c.diary;
        addXp(10); nextStep();
      }));
      return;
    }
    const cfg = sc.cfg;
    const acc = state.weekAcc;
    if (cfg.type === "habit") {
      frame(b, `
        <div class="day-tag">Día ${state.dayIndex + 1} de ${cfg.totalDays}</div>
        <p class="scene-text" style="font-size:0.95rem">¿Qué decide hacer hoy?</p>
        <div class="options"><button class="primary" id="doBtn" style="margin-top:0">${cfg.doLabel}</button><button class="option" id="skipBtn">${cfg.skipLabel}</button></div>`);
      el("doBtn").addEventListener("click", () => { acc.cared += 1; state.lastChoice = "Hoy decidió: " + cfg.doLabel.toLowerCase() + "."; addXp(10); nextStep(); });
      el("skipBtn").addEventListener("click", () => { state.lastChoice = "Hoy decidió: " + cfg.skipLabel.toLowerCase() + "."; addXp(10); nextStep(); });
    } else if (cfg.type === "social") {
      frame(b, `
        <p class="scene-text" style="font-size:0.95rem">Hay gente cerca. Puedes saludar a quien quieras, o a nadie.</p>
        <div id="room" class="room"></div>
        <p id="note" style="min-height:20px;font-size:0.85rem;color:var(--muted)"></p>
        <button class="primary" id="contBtn">${cfg.continueLabel}</button>`);
      cfg.classmates.forEach((c, idx) => {
        const dot = document.createElement("button");
        dot.className = "dot-mate"; dot.textContent = c.initials;
        dot.addEventListener("click", () => { acc.greeted[idx] = true; el("note").textContent = c.saludo; });
        el("room").appendChild(dot);
      });
      el("contBtn").addEventListener("click", () => { state.lastChoice = "Hoy saludó a " + Object.keys(acc.greeted).length + " compañero(s)."; addXp(10); nextStep(); });
    } else if (cfg.type === "thoughts") {
      const t = cfg.thoughts[state.dayIndex % cfg.thoughts.length];
      frame(b, `
        <div class="bubble-text">${t.t}</div>
        <div class="options">
          <button class="option" id="sameBtn">Sí, a veces pienso esto</button>
          <button class="option" id="changeBtn">Probar pensarlo distinto</button>
        </div>`);
      const after = (reframed) => {
        if (state.dayIndex < cfg.thoughts.length && reframed) acc.changed += 1;
        el("screen").querySelector(".bubble-text").textContent = reframed ? t.r : "Está bien pensar eso a veces. Sigamos.";
        el("screen").querySelector(".options").innerHTML = '<button class="primary" id="afterBtn">Seguir</button>';
        state.lastChoice = reframed ? "Probó pensar distinto: " + t.r : "Reconoció un pensamiento sin cambiarlo.";
        addXp(10);
        el("afterBtn").addEventListener("click", () => nextStep());
      };
      el("sameBtn").addEventListener("click", () => after(false));
      el("changeBtn").addEventListener("click", () => after(true));
    } else if (cfg.type === "timing") {
      frame(b, `
        <p class="scene-text" style="font-size:0.95rem">${cfg.intro ? "Toca " + cfg.actionLabel + " justo cuando el punto esté en la zona verde." : ""}</p>
        <div class="bar"><div class="zone" id="zone"></div><div class="marker" id="marker"></div></div>
        <p class="scene-text" id="tmsg" style="font-size:0.85rem;color:var(--muted)">Intento 1 de 3</p>
        <button class="primary" id="tryBtn">${cfg.actionLabel}</button>`);
      runTimingGame(3, (hits, clicks) => {
        acc.hits += hits; acc.rounds += 3; acc.clicks += clicks;
        state.lastChoice = cfg.verbPast ? "Hoy " + cfg.verbPast + "." : "";
        addXp(10); nextStep();
      }, "tmsg", "tryBtn", "zone", "marker");
    } else { nextStep(); }
  } };
}

// Juego de reflejos reutilizable (con puntaje clínico en semanas de timing; XP en las demás).
function runTimingGame(rounds, done, msgId, btnId, zoneId, markerId) {
  const zone = el(zoneId), marker = el(markerId), btn = el(btnId), msg = el(msgId);
  let pos = 0, dir = 1, raf = null, zs = 0, ze = 0, round = 0, clicks = 0, hits = 0, alive = true;
  const speed = 1.3 + (sessSeed() % 4) * 0.25;
  function newZone() { zs = 20 + Math.random() * 40; ze = zs + 16; zone.style.left = zs + "%"; zone.style.width = (ze - zs) + "%"; }
  function tick() { pos += dir * speed; if (pos >= 96) { pos = 96; dir = -1; } if (pos <= 0) { pos = 0; dir = 1; } marker.style.left = pos + "%"; raf = requestAnimationFrame(tick); }
  function start() { pos = 0; dir = 1; newZone(); cancelAnimationFrame(raf); raf = requestAnimationFrame(tick); btn.disabled = false; msg.textContent = "Intento " + (round + 1) + " de " + rounds; }
  SESSION.cleanup = () => { alive = false; cancelAnimationFrame(raf); };
  btn.addEventListener("click", () => {
    if (!alive) return;
    clicks += 1;
    if (pos >= zs && pos <= ze) {
      hits += 1; round += 1; cancelAnimationFrame(raf); sfx("ok");
      zone.classList.add("hit");
      if (round >= rounds) { btn.disabled = true; msg.textContent = "¡Lo lograste!"; setTimeout(() => alive && done(hits, clicks), 700); }
      else { btn.disabled = true; msg.textContent = "¡Bien! Sigue."; setTimeout(() => { if (!alive) return; zone.classList.remove("hit"); start(); }, 800); }
    } else { msg.textContent = "Casi. Espera la zona verde."; }
  });
  start();
}

// ---------- Bloque 3: reto de atención ----------
function stepReflejos(b) {
  return { b, est: 30, run() {
    frame(b, `
      <h2 class="heading">Reto de reflejos</h2>
      <p class="scene-text" style="font-size:0.9rem;color:var(--muted)">Toca el botón justo cuando el punto esté en la zona verde. Necesitas acertar 3 veces. Cada acierto suma 5 XP.</p>
      <div class="bar"><div class="zone" id="zone"></div><div class="marker" id="marker"></div></div>
      <p class="scene-text" id="tmsg" style="font-size:0.85rem;color:var(--muted)">Intento 1 de 3</p>
      <button class="primary" id="tryBtn">¡Ahora!</button>`);
    runTimingGame(3, (hits, clicks) => {
      const stars = clicks <= 3 ? 3 : clicks <= 5 ? 2 : 1;
      addXp(5 * hits);
      el("screen").querySelector(".card").innerHTML = `${mascot("cheer", 90)}<h2 class="heading" style="text-align:center">${"⭐".repeat(stars)}${"☆".repeat(3 - stars)}</h2><p class="scene-text" style="text-align:center">Terminaste con ${clicks} toque(s). Cada intento cuenta.</p><button class="primary" id="goBtn">Seguir</button>`;
      el("goBtn").addEventListener("click", () => nextStep());
    }, "tmsg", "tryBtn", "zone", "marker");
  } };
}

function stepDistinto(b) {
  return { b, est: 25, run() {
    let round = 0, errors = 0;
    function draw() {
      const pair = pickRot(DISTINTOS, round);
      const odd = (sessSeed() * 2 + round * 4 + 1) % 9;
      const cells = Array.from({ length: 9 }).map((_, i) => `<button class="cell" data-i="${i}">${i === odd ? pair[1] : pair[0]}</button>`).join("");
      frame(b, `
        <h2 class="heading">Encuentra el distinto</h2>
        <p class="scene-text" style="font-size:0.9rem;color:var(--muted)">Ronda ${round + 1} de 3. Uno de los símbolos es un poco diferente.</p>
        <div class="grid3">${cells}</div>
        <p class="scene-text" id="gmsg" style="font-size:0.85rem;color:var(--muted);min-height:20px"></p>`);
      el("screen").querySelectorAll(".cell").forEach((c) => c.addEventListener("click", () => {
        if (Number(c.dataset.i) === odd) {
          c.classList.add("ok"); addXp(5); round += 1; sfx("ok");
          setTimeout(() => (round >= 3 ? nextStep() : draw()), 500);
        } else { errors += 1; c.classList.add("bad"); el("gmsg").textContent = "Ese no. Mira con calma."; }
      }));
    }
    draw();
  } };
}

function stepMemoria(b) {
  return { b, est: 45, run() {
    const pares = pickMany(MEMORIA_PARES, 6, 1);
    const cards = [];
    pares.forEach((p, i) => { cards.push({ id: i, face: p[0] }); cards.push({ id: i, face: p[1] }); });
    // Barajado determinista por día (cada día se ve distinto, sin azar entre recargas).
    const order = cards.map((_, i) => i).sort((a, b2) => ((a * 7 + sessSeed()) % 13) - ((b2 * 7 + sessSeed()) % 13) || a - b2);
    const deck = order.map((i) => cards[i]);
    frame(b, `
      <h2 class="heading">Cosas que ayudan a calmarse</h2>
      <p class="scene-text" style="font-size:0.9rem;color:var(--muted)">Une cada dibujo con su nombre.</p>
      <div class="grid4">${deck.map((c, i) => `<button class="mcard" data-i="${i}"><span class="mface">?</span></button>`).join("")}</div>
      <p class="scene-text" id="mmsg" style="font-size:0.85rem;color:var(--muted);min-height:20px"></p>`);
    // Estado leído del propio DOM (cartas abiertas = clase "open" sin "done"): más robusto que variables sueltas.
    let lock = false, matched = 0;
    const cardsEl = () => [...el("screen").querySelectorAll(".mcard")];
    const openIdx = () => cardsEl().map((c, i) => (c.classList.contains("open") && !c.classList.contains("done") ? i : -1)).filter((i) => i >= 0);
    cardsEl().forEach((btn) => btn.addEventListener("click", () => {
      const i = Number(btn.dataset.i);
      if (lock || btn.classList.contains("done") || btn.classList.contains("open")) return;
      btn.classList.add("open"); btn.querySelector(".mface").textContent = deck[i].face;
      const op = openIdx();
      if (op.length < 2) return;
      lock = true;
      const [x, y] = op;
      const cs = cardsEl(), bx = cs[x], by = cs[y];
      if (deck[x].id === deck[y].id) {
        bx.classList.add("done"); by.classList.add("done"); matched += 1; addXp(5); sfx("ok");
        el("mmsg").textContent = "¡Pareja! " + pares[deck[x].id][0] + " " + pares[deck[x].id][1] + " ayuda a calmarse.";
        lock = false;
        if (matched === 6) setTimeout(() => nextStep(), 900);
      } else {
        setTimeout(() => {
          [bx, by].forEach((c) => { c.classList.remove("open"); c.querySelector(".mface").textContent = "?"; });
          lock = false;
        }, 800);
      }
    }));
  } };
}

// ---------- Bloque 4: piensa y aprende ----------
function stepVerdaderoFalso(b, extra) {
  return { b, est: 15, run() {
    const d = pickRot(DATOS_VF, extra || 0);
    frame(b, `
      <h2 class="heading">¿Verdadero o falso?</h2>
      <div class="bubble-text">${d.t}</div>
      <div class="options" id="vfOpts"><button class="option" data-v="1">Verdadero</button><button class="option" data-v="0">Falso</button></div>`);
    el("screen").querySelectorAll("#vfOpts .option").forEach((btn) => btn.addEventListener("click", () => {
      const ok = (btn.dataset.v === "1") === d.v;
      if (ok) { addXp(5); sfx("ok"); }
      el("vfOpts").innerHTML = `<p class="scene-text"><b>${ok ? "¡Correcto!" : "Casi."}</b> ${d.e}</p><button class="primary" id="vfBtn">Seguir</button>`;
      el("vfBtn").addEventListener("click", () => nextStep());
    }));
  } };
}

function stepFrase(b) {
  return { b, est: 15, run() {
    const f = pickRot(FRASES, 3);
    frame(b, `
      <h2 class="heading">Completa la frase</h2>
      <div class="bubble-text">${f.s}</div>
      <p class="scene-text" style="font-size:0.85rem;color:var(--muted)">No hay una respuesta equivocada. Elige la que más te sirva.</p>
      <div class="options" id="frOpts">${f.o.map((o, i) => `<button class="option" data-i="${i}">${o}</button>`).join("")}</div>`);
    el("screen").querySelectorAll("#frOpts .option").forEach((btn) => btn.addEventListener("click", () => {
      addXp(5);
      el("frOpts").innerHTML = '<p class="scene-text"><b>Buena elección.</b> Tener varias opciones a la mano te da más control.</p><button class="primary" id="frBtn">Seguir</button>';
      el("frBtn").addEventListener("click", () => nextStep());
    }));
  } };
}

function stepAtrapa(b) {
  return { b, est: 18, run() {
    const axis = currentWeekAxis();
    const t = pickThought(axis, sessSeed() + 3);
    const swap = sessSeed() % 2 === 0;
    const bubbles = [["dark", t.dark], ["light", t.light]];
    if (swap) bubbles.reverse();
    frame(b, `
      <h2 class="heading">Atrapa un pensamiento</h2>
      <p class="scene-text" style="font-size:0.9rem;color:var(--muted)">Dos pensamientos flotan cerca. Toca el que quieras atrapar.</p>
      <div class="options" id="atOpts">${bubbles.map((x) => `<button class="option thought-pick ${x[0]}" data-k="${x[0]}">${x[1]}</button>`).join("")}</div>`);
    el("screen").querySelectorAll("#atOpts .option").forEach((btn) => btn.addEventListener("click", () => {
      if (btn.dataset.k === "dark") {
        el("atOpts").innerHTML = `<p class="scene-text">Lo atrapaste. Reconocerlo ya es un paso. ¿Lo miramos de otra forma?</p><div class="thought-callout light" style="display:none" id="atNew">${t.light}</div><button class="option" id="atRe">Pensarlo distinto</button><button class="primary" id="atGo">Seguir</button>`;
        el("atRe").addEventListener("click", () => { el("atNew").style.display = "block"; el("atRe").style.display = "none"; addXp(5); });
        el("atGo").addEventListener("click", () => nextStep());
      } else {
        addXp(5);
        el("atOpts").innerHTML = '<p class="scene-text"><b>¡Brilla!</b> Ese pensamiento te da más fuerza.</p><button class="primary" id="atGo">Seguir</button>';
        el("atGo").addEventListener("click", () => nextStep());
      }
    }));
  } };
}

// ---------- Bloque 5: cierre ----------
function stepRepaso(b) {
  return { b, est: 12, run() {
    const last = state.lastChoice || (state.diary.length ? state.diary[state.diary.length - 1].text : null);
    const txt = last ? "Lo último que decidiste fue: <i>" + last + "</i>" : "Hoy empiezas tu camino. Cada día cuenta.";
    frame(b, `
      ${mascot("calm", 84)}
      <h2 class="heading" style="text-align:center">Repaso rápido</h2>
      <p class="scene-text" style="text-align:center">${txt}</p>
      <p class="scene-text" style="text-align:center;font-size:0.9rem;color:var(--muted)">No hay decisiones buenas ni malas: solo cosas que vas notando de ti.</p>
      <button class="primary" id="rpBtn">Seguir</button>`);
    el("rpBtn").addEventListener("click", () => nextStep());
  } };
}

function stepOrdena(b) {
  return { b, est: 20, run() {
    const p = pickRot(PASOS, 2);
    const order = [];
    frame(b, `
      <h2 class="heading">Ordena tus pasos</h2>
      <div class="bubble-text">${p.t}</div>
      <p class="scene-text" style="font-size:0.85rem;color:var(--muted)">Toca las tarjetas en el orden en que tú lo harías.</p>
      <div class="options" id="ordOpts">${p.c.map((c, i) => `<button class="option" data-i="${i}">${c}</button>`).join("")}</div>
      <div id="ordList" class="scene-text" style="font-size:0.9rem"></div>`);
    el("screen").querySelectorAll("#ordOpts .option").forEach((btn) => btn.addEventListener("click", () => {
      if (btn.disabled) return;
      btn.disabled = true; btn.style.opacity = 0.4; order.push(p.c[Number(btn.dataset.i)]);
      el("ordList").innerHTML = order.map((o, i) => (i + 1) + ". " + o).join("<br>");
      if (order.length === p.c.length) {
        addXp(5);
        el("ordOpts").insertAdjacentHTML("afterend", '<p class="scene-text"><b>Ese es tu plan.</b> Hay muchas formas de hacerlo.</p><button class="primary" id="ordBtn">Seguir</button>');
        el("ordBtn").addEventListener("click", () => nextStep());
      }
    }));
  } };
}

function stepDiario(b) {
  return { b, est: 15, run() {
    frame(b, `
      <h2 class="heading">Tu diario de hoy</h2>
      <p class="scene-text" style="font-size:0.9rem;color:var(--muted)">Si quieres, escribe una línea sobre cómo te fue. Es solo para ti.</p>
      <textarea id="diaryTxt" class="diary-input" placeholder="Hoy me sentí..."></textarea>
      <button class="primary" id="diaryBtn">Terminar el día</button>`);
    el("diaryBtn").addEventListener("click", () => {
      const v = el("diaryTxt").value.trim();
      if (v) { state.personalDiary = state.personalDiary || []; state.personalDiary.push({ week: state.weekIndex, day: state.dayIndex, text: v }); }
      addXp(5); nextStep();
    });
  } };
}

// ---------- Construcción y cierre de la sesión ----------
function buildSession() {
  const def = ACTIVE_STORY.weekDefs[state.weekIndex - 1];
  const cfg = def.type === "dialogue" ? null : ACTIVE_STORY.mechanics[state.weekIndex];
  const timingWeek = cfg && cfg.type === "timing";
  const thoughtsWeek = cfg && cfg.type === "thoughts";
  const steps = [stepSaludo(0), stepRespiracion(0), stepSituacion(1)];
  if (!thoughtsWeek) steps.push(stepPensamiento(1), stepEmocion(1));
  steps.push(stepAccion(1));
  // Reto de atención: reflejos + encuentra el distinto + memoria. En las semanas donde los reflejos
  // son la mecánica puntuada (bloque 2) no se repite ese juego aquí.
  if (!timingWeek) steps.push(stepReflejos(2));
  steps.push(stepDistinto(2), stepMemoria(2));
  steps.push(stepVerdaderoFalso(3), stepFrase(3), stepVerdaderoFalso(3, 4), stepAtrapa(3));
  steps.push(stepRepaso(4), stepOrdena(4), stepDiario(4));
  return steps;
}

function renderSession() {
  if (!state.weekAcc) state.weekAcc = newWeekAcc();
  if (!SESSION || SESSION.week !== state.weekIndex || SESSION.day !== state.dayIndex) {
    SESSION = { steps: buildSession(), i: 0, cleanup: null, blocksDone: 0, week: state.weekIndex, day: state.dayIndex };
  }
  SESSION.steps[SESSION.i].run();
}

function endOfDay() {
  const S = SESSION;
  const def = ACTIVE_STORY.weekDefs[state.weekIndex - 1];
  const lastDay = state.dayIndex >= DAYS_PER_WEEK - 1;
  addXp(10);
  state.streak += 1;
  if (lastDay) applyWeekScoring(def);
  SESSION = null;
  if (lastDay) {
    state.xp += 50;                 // premio de cierre de semana
    state.weekAcc = newWeekAcc();
    state.dayIndex = DAYS_PER_WEEK; // semana cerrada: si recarga, va al panel, no repite el día 5
    saveProgress();
    return renderWeekClose();
  }
  state.dayIndex += 1;
  saveProgress();
  renderDayEnd();
}

// Aplica al cierre de la semana el mismo puntaje que ya usaba cada mecánica.
function applyWeekScoring(def) {
  if (def.type === "dialogue") return;
  const cfg = ACTIVE_STORY.mechanics[state.weekIndex];
  const acc = state.weekAcc;
  if (cfg.type === "habit") {
    const missed = cfg.totalDays - acc.cared;
    if (cfg.axis) state.scores[cfg.axis] = (state.scores[cfg.axis] || 0) + missed;
    pushDiary(cfg.diaryWeek, "Rumi " + cfg.itemLabel + " " + acc.cared + " de " + cfg.totalDays + " días.");
  } else if (cfg.type === "timing") {
    const rounds = acc.rounds || 15;
    const avg = acc.clicks / rounds;
    state.impulsividad = { hits: acc.hits, rounds, avgClicks: avg, week: state.weekIndex };
    pushDiary(cfg.diaryWeek, "Rumi " + cfg.verbPast + " en " + acc.hits + " de " + rounds + " intentos (promedio " + avg.toFixed(1) + " toques por intento).");
  } else if (cfg.type === "social") {
    const distinct = Object.keys(acc.greeted).length;
    if (cfg.axis) state.scores[cfg.axis] = Math.max(0, (state.scores[cfg.axis] || 0) - distinct);
    pushDiary(cfg.diaryWeek, "Rumi " + cfg.verbPast + " " + distinct + " de " + cfg.classmates.length + " compañeros.");
  } else if (cfg.type === "thoughts") {
    if (cfg.axis) state.scores[cfg.axis] = (state.scores[cfg.axis] || 0) + (cfg.thoughts.length - acc.changed);
    pushDiary(cfg.diaryWeek, "Probó pensarlo distinto " + acc.changed + " de " + cfg.thoughts.length + " veces durante la semana.");
  }
  state.xp += 40;
}

function renderDayEnd() {
  const done = state.dayIndex; // días completados de la semana
  const confetti = Array.from({ length: 22 }).map((_, i) =>
    `<span class="confetti-piece c${i % 6}" style="left:${(i * 4.6) % 100}%;animation-delay:${(i % 8) * 0.09}s"></span>`).join("");
  el("screen").innerHTML = `
    <div class="card celebrate">
      <div class="confetti" aria-hidden="true">${confetti}</div>
      ${mascot("cheer", 120)}
      <h2 class="heading" style="text-align:center">¡Terminaste el día ${done} de ${DAYS_PER_WEEK}!</h2>
      <p class="scene-text" style="text-align:center">Completaste los 5 desafíos de hoy. Mañana sigue la historia.</p>
      <div class="celebrate-stats">
        <div class="celebrate-stat"><span class="celebrate-num">🔥 ${state.streak}</span><span>racha</span></div>
        <div class="celebrate-stat"><span class="celebrate-num">⭐ ${state.xp}</span><span>XP total</span></div>
      </div>
      <button class="primary" id="dayEndBtn">Seguir al día ${done + 1}</button>
      <p class="scene-text" style="text-align:center;font-size:0.8rem;color:var(--muted)">Puedes seguir ahora o volver mañana.</p>
    </div>`;
  renderStats();
  sfx("day");
  el("dayEndBtn").addEventListener("click", render);
}

function renderWeekClose() {
  // Celebración semanal existente (confeti + sonido) y luego el panel del semáforo.
  renderCelebration(50);
}
