// Motor del juego — PWA "Compañeros de Rumi" (historia "El mapa no muerde")
// Las 52 semanas completas, mismo contenido y mismas reglas que el prototipo ya
// validado por el usuario. Progreso 100% local en el dispositivo (localStorage),
// nada se manda a ningún servidor salvo que se configure una institución (abajo).

const STORAGE_KEY = "rumi_progress_v2";

// Conexión a la institución — igual patrón que config.json en la versión de escritorio.
// Mientras los tres campos estén vacíos, la app funciona 100% local y no manda nada.
const INSTITUTION_CONFIG = { nombre: "", apiUrl: "", apiKey: "" };

function freshState(keepStoryId) {
  return {
    storyId: keepStoryId || null, // historia elegida para todo el año — fija hasta terminar las 52 semanas
    studentName: null,
    weekIndex: 1,        // semana actual (1..52)
    dayIndex: 0,          // solo usado en semanas de diálogo (0..4)
    xp: 0,
    streak: 0,
    scores: { ansiedad: 0, depresion: 0, bullying: 0, adicciones: 0 },
    impulsividad: null,   // { hits, rounds, avgClicks } — sub-indicador aparte, semanas 5/14/24/34/44
    diary: [],            // { week, day, text }
    alerts: [],           // intentos de alerta: { ts, eje, nivel, enviado, motivo }
    finished: false
  };
}

// Construye el objeto de historia activo combinando el motor compartido
// (weekDefs/axisLabels/umbral/52 semanas, definidos en data.js) con el
// contenido propio (dialogues_X/mechanics_X) de la historia elegida.
function buildActiveStory(entry) {
  return {
    id: entry.id,
    title: entry.title,
    student: "Rumi",
    totalWeeks: STORY.totalWeeks,
    axisLabels: STORY.axisLabels,
    amarilloThreshold: STORY.amarilloThreshold,
    weekDefs: STORY.weekDefs,
    dialogues: entry.dialoguesVar,
    mechanics: entry.mechanicsVar
  };
}

function loadProgress() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return JSON.parse(raw);
  } catch (e) { /* localStorage puede fallar (modo privado); seguimos en memoria */ }
  return freshState();
}

let state = loadProgress();
if (state.storyId === undefined) state.storyId = null; // progreso guardado antes de tener historias seleccionables
// Estado transitorio de la mecánica en curso (no se persiste a mitad de semana;
// si se recarga la página a mitad de una mecánica, esa semana se reinicia desde
// el día 1 — el progreso de semanas ya completadas nunca se pierde).
let mech = null;
// Historia activa (motor + contenido). Null hasta que el estudiante elige una;
// una vez elegida queda fija en localStorage hasta terminar las 52 semanas.
let ACTIVE_STORY = null;
if (state.storyId) {
  const entry0 = findStoryEntry(state.storyId);
  if (entry0) ACTIVE_STORY = buildActiveStory(entry0);
  else state.storyId = null; // id guardado ya no existe en el registro; vuelve a pedir elegir
}

function saveProgress() {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); } catch (e) { /* best-effort */ }
}

function maxForAxis(axis) {
  let total = 0;
  for (let i = 0; i < state.weekIndex && i < ACTIVE_STORY.weekDefs.length; i++) {
    const add = ACTIVE_STORY.weekDefs[i].maxAdd;
    if (add && add[axis]) total += add[axis];
  }
  return total;
}

function computeSemaforo() {
  const out = {};
  for (const axis of Object.keys(ACTIVE_STORY.axisLabels)) {
    const max = maxForAxis(axis);
    const got = state.scores[axis] || 0;
    const ratio = max > 0 ? got / max : 0;
    const calibrando = ACTIVE_STORY.weekDefs[state.weekIndex - 1].firstAxis === axis;
    out[axis] = { max, got, ratio, calibrando, nivel: max === 0 ? "sin-datos" : (calibrando ? "calibrando" : (ratio >= ACTIVE_STORY.amarilloThreshold ? "amarillo" : "verde")) };
  }
  return out;
}

// Registra el intento de alerta SIEMPRE (con hora exacta), igual que la app de
// escritorio, aunque el envío en sí no se haga por faltar configuración.
function tryEscalate(semaforo) {
  const criticos = Object.entries(semaforo).filter(([ax, v]) => v.nivel === "amarillo");
  if (criticos.length === 0) return;
  const configured = INSTITUTION_CONFIG.nombre && INSTITUTION_CONFIG.apiUrl && INSTITUTION_CONFIG.apiKey;
  for (const [ax, v] of criticos) {
    state.alerts.push({
      ts: new Date().toISOString(),
      eje: ax,
      nivel: v.nivel,
      enviado: false,
      motivo: configured ? "configurado, envío real pendiente de activar en esta versión" : "institución no configurada — app funcionando 100% local"
    });
  }
}

function renderStats() {
  document.getElementById("streakStat").textContent = "🔥 " + state.streak;
  document.getElementById("xpStat").textContent = "⭐ " + state.xp + " XP";
}

function pushDiary(week, text) {
  state.diary.push({ week, text });
}

// ---------- Pantalla: elegir historia (fija hasta terminar las 52 semanas) ----------
function renderStorySelect() {
  const cards = STORIES_REGISTRY.map((s) => `
    <button class="option" data-id="${s.id}" style="text-align:left;display:block;width:100%;margin-bottom:10px">
      <strong>${s.title}</strong><br/><span style="color:var(--muted);font-size:0.85rem">${s.tagline}</span>
    </button>`).join("");
  document.getElementById("screen").innerHTML = `
    <div class="card">
      <div class="week-tag">Elige tu historia</div>
      <h2 class="heading">¿Con cuál quieres jugar este año?</h2>
      <p class="scene-text" style="color:var(--muted);font-size:0.85rem">
        Una vez elegida, se queda igual durante todo el año escolar (52 semanas). Al terminarla podrás elegir otra.
      </p>
      <div class="options">${cards}</div>
    </div>`;
  document.getElementById("screen").querySelectorAll(".option").forEach((btn) => {
    btn.addEventListener("click", () => {
      const entry = findStoryEntry(btn.dataset.id);
      if (!entry) return;
      state = freshState(entry.id);
      ACTIVE_STORY = buildActiveStory(entry);
      saveProgress();
      render();
    });
  });
}

// ---------- Pantalla: pedir nombre ----------
function renderNamePrompt() {
  document.getElementById("screen").innerHTML = `
    <div class="card">
      <div class="week-tag">${ACTIVE_STORY.title}</div>
      <h2 class="heading">Antes de empezar</h2>
      <p class="scene-text">¿Cómo te gustaría que te llamemos dentro del juego?</p>
      <input id="nameInput" class="diary-input" style="min-height:auto" placeholder="Tu nombre o apodo" />
      <button class="primary" id="startBtn">Empezar</button>
    </div>`;
  document.getElementById("startBtn").addEventListener("click", () => {
    const val = document.getElementById("nameInput").value.trim();
    state.studentName = val || "Estudiante";
    saveProgress();
    render();
  });
}

// ---------- Pantalla: semáforo al cerrar una semana ----------
function renderSemaforo() {
  const semaforo = computeSemaforo();
  tryEscalate(semaforo);
  saveProgress();

  const rows = Object.entries(semaforo).map(([ax, v]) => {
    const label = ACTIVE_STORY.axisLabels[ax];
    let estado, dotClass;
    if (v.nivel === "sin-datos") { estado = "Sin datos aún"; dotClass = "sin-datos"; }
    else if (v.nivel === "calibrando") { estado = "Calibrando"; dotClass = "verde"; }
    else if (v.nivel === "amarillo") { estado = "Atención (" + v.got + "/" + v.max + ")"; dotClass = "amarillo"; }
    else { estado = "Verde (" + v.got + "/" + v.max + ")"; dotClass = "verde"; }
    return `<div class="semaforo-row"><span><span class="dot ${dotClass}"></span>${label}</span><span style="color:var(--muted);font-size:0.85rem">${estado}</span></div>`;
  }).join("") +
    `<div class="semaforo-row"><span><span class="dot sin-datos"></span>Riesgo de autolesión</span><span style="color:var(--muted);font-size:0.85rem">Sin datos aún</span></div>` +
    `<div class="semaforo-row"><span><span class="dot sin-datos"></span>Abuso</span><span style="color:var(--muted);font-size:0.85rem">Sin datos aún</span></div>`;

  const isLast = state.weekIndex >= ACTIVE_STORY.totalWeeks;
  const nextLabel = isLast ? "" : `<button class="primary" id="nextWeekBtn">Continuar a la Semana ${state.weekIndex + 1}</button>`;

  document.getElementById("screen").innerHTML = `
    <div class="panel">
      <div class="week-tag">Semana ${state.weekIndex} de ${ACTIVE_STORY.totalWeeks} completa</div>
      <h2 class="heading">Panel (equipo del colegio)</h2>
      <p class="scene-text" style="color:var(--muted);font-size:0.85rem">
        Esto no lo ve ${state.studentName} dentro del juego. Umbral de ejemplo (60%), sin validar clínicamente todavía.
      </p>
      ${rows}
      <p class="footer-note" style="margin-top:4px">
        ${INSTITUTION_CONFIG.apiUrl ? "Conexión a institución configurada." : "Institución no configurada todavía — todo quedó guardado solo en este dispositivo."}
      </p>
      ${isLast ? '<p class="scene-text" style="font-weight:600">Año escolar completo. Gracias por jugar la historia de Rumi.</p><button class="primary" id="chooseAnotherBtn">Elegir otra historia para el próximo año</button>' : nextLabel}
    </div>`;

  if (isLast) {
    state.finished = true;
    saveProgress();
    document.getElementById("chooseAnotherBtn").addEventListener("click", () => {
      state = freshState();
      ACTIVE_STORY = null;
      saveProgress();
      render();
    });
  }

  if (!isLast) {
    document.getElementById("nextWeekBtn").addEventListener("click", () => {
      state.weekIndex += 1;
      state.dayIndex = 0;
      mech = null;
      saveProgress();
      render();
    });
  }
}

function completeWeek() {
  const xpGained = 50;
  state.xp += xpGained;
  state.streak += 1;
  saveProgress();
  renderCelebration(xpGained);
}

// ---------- Celebración al terminar una semana (patrón Duolingo) ----------
const CELEBRATION_MESSAGES = [
  "¡Otra semana lista! Sigue así.",
  "Racha en marcha. ¡No la rompas!",
  "Cada semana suma. Vas muy bien.",
  "Rumi está orgulloso de este avance.",
  "¡Lo lograste! Nos vemos la próxima semana."
];

function playCelebrationSound() {
  try {
    const Ctx = window.AudioContext || window.webkitAudioContext;
    if (!Ctx) return;
    const ctx = new Ctx();
    const notes = [523.25, 659.25, 783.99]; // do-mi-sol, arpegio corto y alegre
    notes.forEach((freq, i) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = "sine";
      osc.frequency.value = freq;
      osc.connect(gain);
      gain.connect(ctx.destination);
      const start = ctx.currentTime + i * 0.12;
      gain.gain.setValueAtTime(0.0001, start);
      gain.gain.exponentialRampToValueAtTime(0.22, start + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.0001, start + 0.3);
      osc.start(start);
      osc.stop(start + 0.32);
    });
  } catch (e) { /* si el navegador bloquea audio, la celebración sigue sin sonido */ }
}

function renderCelebration(xpGained) {
  const screen = document.getElementById("screen");
  const msg = CELEBRATION_MESSAGES[(state.weekIndex - 1) % CELEBRATION_MESSAGES.length];
  const confetti = Array.from({ length: 24 }).map((_, i) =>
    `<span class="confetti-piece c${i % 6}" style="left:${(i * 4.3) % 100}%;animation-delay:${(i % 8) * 0.1}s"></span>`
  ).join("");
  screen.innerHTML = `
    <div class="card celebrate">
      <div class="confetti" aria-hidden="true">${confetti}</div>
      <div class="celebrate-badge">🎉</div>
      <h2 class="heading" style="text-align:center">¡Semana ${state.weekIndex} completa!</h2>
      <p class="scene-text" style="text-align:center;color:var(--muted)">${msg}</p>
      <div class="celebrate-stats">
        <div class="celebrate-stat"><span class="celebrate-num">🔥 ${state.streak}</span><span>racha</span></div>
        <div class="celebrate-stat"><span class="celebrate-num">+${xpGained} XP</span><span>esta semana</span></div>
        <div class="celebrate-stat"><span class="celebrate-num">⭐ ${state.xp}</span><span>total</span></div>
      </div>
      <button class="primary" id="celebrateContinueBtn">Continuar</button>
    </div>`;
  renderStats();
  playCelebrationSound();
  document.getElementById("celebrateContinueBtn").addEventListener("click", () => {
    renderSemaforo();
  });
}

// ---------- Semanas de diálogo — motor de 4 etapas por día: ----------
// Situación (la escena, ya escrita) -> Pensamiento (bola misteriosa oscura/
// clara) -> Emoción (medidor de control, se puede reformular) -> Acción (la
// decisión que ya existía, con su peso/eje clínico). Al cerrar cada día
// aparece una celebración corta; al cerrar el día 5 sigue como antes hacia
// el panel del semáforo. No inventa contenido nuevo por día: reutiliza la
// escena ya escrita para ese día y le agrega la capa de pensamiento/emoción.
const THOUGHT_POOLS = {
  ansiedad: [
    { dark: "Si me equivoco aquí, todos se van a dar cuenta.", light: "Puedo intentarlo aunque no salga perfecto la primera vez." },
    { dark: "Mi corazón late rápido, algo malo va a pasar.", light: "Sentir esto no significa que algo malo vaya a pasar." },
    { dark: "No voy a poder con esto.", light: "Puedo ir paso a paso, no tengo que resolverlo todo de una vez." },
    { dark: "Todos notan que estoy nervioso.", light: "Puede que nadie lo note tanto como yo creo." },
    { dark: "Si pregunto, van a pensar que soy tonto.", light: "Preguntar es parte de aprender, no un error." },
    { dark: "Tengo que controlar todo o algo va a salir mal.", light: "No puedo controlar todo, y está bien." }
  ],
  depresion: [
    { dark: "Da igual si lo hago o no, nada cambia.", light: "Un paso pequeño hoy sí cuenta, aunque no se sienta grande." },
    { dark: "No tengo energía para nada de esto.", light: "Puedo hacer solo una parte pequeña, no todo de una vez." },
    { dark: "A nadie le importaría si no voy.", light: "Puede que a alguien sí le importe, aunque no lo diga." },
    { dark: "Siempre me voy a sentir así.", light: "Lo que siento hoy no es lo que voy a sentir siempre." },
    { dark: "No valgo lo suficiente para esto.", light: "Mi valor no depende de tener un buen día o uno malo." },
    { dark: "Mejor ni intento, para qué.", light: "Intentarlo un poco ya es más que quedarme quieto." }
  ],
  bullying: [
    { dark: "Si digo algo, va a ser peor.", light: "Contarle a alguien de confianza no es delatar, es pedir ayuda." },
    { dark: "Es mi culpa que se burlen de mí.", light: "Nadie merece que se burlen de él o ella; la culpa no es suya." },
    { dark: "Nadie me va a defender.", light: "Puede que alguien sí me apoye si se lo cuento." },
    { dark: "Si me quedo callado, se les pasa solo.", light: "Callarme no siempre hace que pare; puedo buscar ayuda." },
    { dark: "Voy a quedar solo si me alejo de ellos.", light: "Alejarme de quien me hace daño no me deja solo." },
    { dark: "Tengo que aguantar para que no digan que soy débil.", light: "Pedir ayuda no me hace débil." }
  ],
  adicciones: [
    { dark: "Un rato más no le hace daño a nadie.", light: "Puedo decidir hasta cuándo, no dejar que el juego decida por mí." },
    { dark: "Sin esto no sé qué hacer con el aburrimiento.", light: "Puedo buscar otra cosa que también me guste hacer." },
    { dark: "Todos mis amigos están conectados, yo también tengo que estar.", light: "Puedo desconectarme un rato sin perderme de nada importante." },
    { dark: "Ya perdí tanto tiempo que da igual seguir.", light: "Puedo parar en cualquier momento, no solo cuando ya fue mucho." },
    { dark: "Si paro, me voy a aburrir horrible.", light: "El aburrimiento pasa rápido, no dura para siempre." },
    { dark: "Necesito revisar el celular antes de dormir, si no, no puedo.", light: "Puedo probar dejarlo a un lado y ver qué pasa." }
  ]
};

function pickThought(axis, seed) {
  const pool = THOUGHT_POOLS[axis] || THOUGHT_POOLS.ansiedad;
  return pool[seed % pool.length];
}

function currentWeekAxis() {
  const def = ACTIVE_STORY.weekDefs[state.weekIndex - 1];
  return (def && def.firstAxis) || Object.keys(ACTIVE_STORY.axisLabels)[0];
}

function renderDialogue() {
  if (!mech || mech.day !== state.dayIndex || mech.week !== state.weekIndex) {
    mech = { week: state.weekIndex, day: state.dayIndex, stage: "pensamiento" };
  }
  if (mech.stage === "pensamiento") return renderDialoguePensamiento();
  if (mech.stage === "emocion") return renderDialogueEmocion();
  return renderDialogueAccion();
}

function renderDialoguePensamiento() {
  const axis = currentWeekAxis();
  const seed = (state.weekIndex - 1) * 5 + state.dayIndex;
  mech.thought = pickThought(axis, seed);
  mech.wasDark = seed % 2 === 0;
  document.getElementById("screen").innerHTML = `
    <div class="card ${mech.wasDark ? "thought-dark" : ""}">
      <div class="week-tag">Semana ${state.weekIndex} · Día ${state.dayIndex + 1} de 5</div>
      <h2 class="heading">Un pensamiento aparece...</h2>
      <p class="scene-text" style="color:var(--muted);font-size:0.85rem">No sabes cuál es todavía. Tócalo para verlo.</p>
      <div class="options">
        <button class="option thought-bubble" id="thoughtBtn">${mech.wasDark ? "🌑" : "☀️"} Bola misteriosa</button>
      </div>
    </div>`;
  document.getElementById("thoughtBtn").addEventListener("click", () => {
    mech.reframed = !mech.wasDark;
    mech.stage = "emocion";
    render();
  });
}

function renderDialogueEmocion() {
  const t = mech.thought;
  const showDark = mech.wasDark && !mech.reframed;
  document.getElementById("screen").innerHTML = `
    <div class="card">
      <div class="week-tag">Semana ${state.weekIndex} · Día ${state.dayIndex + 1} de 5</div>
      <div class="thought-callout ${showDark ? "dark" : "light"}">${showDark ? t.dark : t.light}</div>
      <p class="scene-text" style="color:var(--muted);font-size:0.85rem">Control emocional</p>
      <div class="emotion-meter"><div class="emotion-fill" style="width:${showDark ? 35 : 80}%"></div></div>
      ${showDark ? '<button class="option" id="reframeBtn">Probar pensarlo distinto</button>' : ""}
      <button class="primary" id="toAccionBtn">Seguir</button>
    </div>`;
  const reframeBtn = document.getElementById("reframeBtn");
  if (reframeBtn) reframeBtn.addEventListener("click", () => { mech.reframed = true; render(); });
  document.getElementById("toAccionBtn").addEventListener("click", () => { mech.stage = "accion"; render(); });
}

function renderDialogueAccion() {
  const scenes = ACTIVE_STORY.dialogues[state.weekIndex];
  const s = scenes[state.dayIndex];
  document.getElementById("screen").innerHTML = `
    <div class="card">
      <div class="week-tag">Semana ${state.weekIndex} · Día ${state.dayIndex + 1} de 5</div>
      <div class="day-tag">${s.tag}</div>
      <p class="scene-text">${s.text}</p>
      <div class="options">
        ${s.choices.map((c, i) => `<button class="option" data-i="${i}">${c.label}</button>`).join("")}
      </div>
    </div>`;
  document.getElementById("screen").querySelectorAll(".option").forEach((btn) => {
    btn.addEventListener("click", () => {
      const c = s.choices[Number(btn.dataset.i)];
      if (c.w && c.ax) state.scores[c.ax] = (state.scores[c.ax] || 0) + c.w;
      pushDiary("Semana " + state.weekIndex, c.diary);
      state.xp += 10;
      state.dayIndex += 1;
      saveProgress();
      mech = null;
      if (state.dayIndex >= scenes.length) { completeWeek(); }
      else { state.streak += 1; saveProgress(); renderDayCelebration(); }
    });
  });
}

function renderDayCelebration() {
  const confetti = Array.from({ length: 14 }).map((_, i) =>
    `<span class="confetti-piece c${i % 6}" style="left:${(i * 7) % 100}%;animation-delay:${(i % 6) * 0.08}s"></span>`
  ).join("");
  document.getElementById("screen").innerHTML = `
    <div class="card celebrate celebrate-day">
      <div class="confetti" aria-hidden="true">${confetti}</div>
      <div class="celebrate-badge" style="font-size:2.2rem">✅</div>
      <h2 class="heading" style="text-align:center">¡Día ${state.dayIndex} de 5 completo!</h2>
      <div class="celebrate-stats">
        <div class="celebrate-stat"><span class="celebrate-num">🔥 ${state.streak}</span><span>racha</span></div>
        <div class="celebrate-stat"><span class="celebrate-num">⭐ ${state.xp}</span><span>XP total</span></div>
      </div>
      <button class="primary" id="dayContinueBtn">Seguir</button>
    </div>`;
  renderStats();
  playCelebrationSound();
  document.getElementById("dayContinueBtn").addEventListener("click", render);
}

// ---------- Mecánicas: cuidar algo / apagar a tiempo (día a día) ----------
function renderHabit(cfg) {
  if (!mech) mech = { day: 1, cared: 0 };
  const screen = document.getElementById("screen");
  screen.innerHTML = `
    <div class="card">
      <div class="week-tag">Semana ${state.weekIndex}</div>
      <p class="scene-text">${cfg.intro}</p>
      <div class="day-tag">Día ${mech.day} de ${cfg.totalDays}</div>
      <div class="options">
        <button class="primary" id="doBtn">${cfg.doLabel}</button>
        <button class="option" id="skipBtn">${cfg.skipLabel}</button>
      </div>
    </div>`;
  const advance = (cared) => {
    if (cared) mech.cared += 1;
    if (mech.day >= cfg.totalDays) {
      const missed = cfg.totalDays - mech.cared;
      if (cfg.axis) state.scores[cfg.axis] = (state.scores[cfg.axis] || 0) + missed;
      pushDiary(cfg.diaryWeek, "Rumi " + cfg.itemLabel + " " + mech.cared + " de " + cfg.totalDays + " días.");
      state.xp += 40;
      mech = null;
      saveProgress();
      completeWeek();
      return;
    }
    mech.day += 1;
    render();
  };
  document.getElementById("doBtn").addEventListener("click", () => advance(true));
  document.getElementById("skipBtn").addEventListener("click", () => advance(false));
}

// ---------- Mecánica: reacción en el momento justo (timing, 3 intentos) ----------
function renderTiming(cfg) {
  if (!mech) mech = { round: 0, totalRounds: 3, hits: 0, totalClicks: 0 };
  const screen = document.getElementById("screen");
  screen.innerHTML = `
    <div class="card">
      <div class="week-tag">Semana ${state.weekIndex}</div>
      <p class="scene-text">${cfg.intro}</p>
      <div style="position:relative;height:14px;border-radius:99px;background:var(--line);margin:14px 0 6px;">
        <div id="zone" style="position:absolute;top:0;height:100%;border-radius:99px;background:var(--verde-bg,rgba(26,156,94,0.18));"></div>
        <div id="marker" style="position:absolute;top:-7px;width:28px;height:28px;border-radius:50%;background:var(--ink);left:0;"></div>
      </div>
      <button class="primary" id="tryBtn">${cfg.actionLabel}</button>
    </div>`;

  const zone = document.getElementById("zone");
  const marker = document.getElementById("marker");
  const tryBtn = document.getElementById("tryBtn");
  let pos = 0, dir = 1, speed = 1.6, raf = null, zoneStart, zoneEnd;

  function newZone() {
    zoneStart = 20 + Math.random() * 40;
    zoneEnd = zoneStart + 18;
    zone.style.left = zoneStart + "%";
    zone.style.width = (zoneEnd - zoneStart) + "%";
  }
  function tick() {
    pos += dir * speed;
    if (pos >= 96) { pos = 96; dir = -1; }
    if (pos <= 0) { pos = 0; dir = 1; }
    marker.style.left = pos + "%";
    raf = requestAnimationFrame(tick);
  }
  function startRound() {
    pos = 0; dir = 1;
    newZone();
    if (raf) cancelAnimationFrame(raf);
    raf = requestAnimationFrame(tick);
    tryBtn.disabled = false;
    tryBtn.textContent = cfg.actionLabel;
  }
  tryBtn.addEventListener("click", () => {
    mech.totalClicks += 1;
    const inZone = pos >= zoneStart && pos <= zoneEnd;
    if (inZone) {
      mech.hits += 1;
      cancelAnimationFrame(raf);
      mech.round += 1;
      if (mech.round >= mech.totalRounds) {
        finish();
      } else {
        tryBtn.disabled = true;
        tryBtn.textContent = "Siguiente intento...";
        setTimeout(startRound, 900);
      }
    }
  });
  function finish() {
    cancelAnimationFrame(raf);
    const avgClicks = mech.totalClicks / mech.totalRounds;
    state.impulsividad = { hits: mech.hits, rounds: mech.totalRounds, avgClicks, week: state.weekIndex };
    pushDiary(cfg.diaryWeek, "Rumi " + cfg.verbPast + " en " + mech.hits + " de " + mech.totalRounds + " intentos (promedio " + avgClicks.toFixed(1) + " toques por intento).");
    state.xp += 40;
    mech = null;
    saveProgress();
    completeWeek();
  }
  startRound();
}

// ---------- Mecánica: encuentro social opcional (saludar o no) ----------
function renderSocial(cfg) {
  if (!mech) mech = { greeted: {} };
  const screen = document.getElementById("screen");
  screen.innerHTML = `
    <div class="card">
      <div class="week-tag">Semana ${state.weekIndex}</div>
      <p class="scene-text">${cfg.intro}</p>
      <div id="room" style="display:flex;gap:16px;justify-content:center;padding:12px 0;flex-wrap:wrap;"></div>
      <p id="note" style="min-height:20px;font-size:0.85rem;color:var(--muted);"></p>
      <button class="primary" id="continueBtn">${cfg.continueLabel}</button>
    </div>`;
  const room = document.getElementById("room");
  const note = document.getElementById("note");
  cfg.classmates.forEach((c, idx) => {
    const dot = document.createElement("div");
    dot.textContent = c.initials;
    dot.style.cssText = "width:52px;height:52px;border-radius:50%;background:var(--accent);color:#fff;display:flex;align-items:center;justify-content:center;font-weight:600;font-size:0.85rem;cursor:pointer;opacity:0.9";
    dot.addEventListener("click", () => { mech.greeted[idx] = true; note.textContent = c.saludo; });
    room.appendChild(dot);
  });
  document.getElementById("continueBtn").addEventListener("click", () => {
    const distinct = Object.keys(mech.greeted).length;
    if (cfg.axis) state.scores[cfg.axis] = Math.max(0, (state.scores[cfg.axis] || 0) - distinct);
    pushDiary(cfg.diaryWeek, "Rumi " + cfg.verbPast + " " + distinct + " de " + cfg.classmates.length + " compañeros.");
    state.xp += 40;
    mech = null;
    saveProgress();
    completeWeek();
  });
}

// ---------- Mecánica: "¿Y si lo pienso distinto?" ----------
function renderThoughts(cfg) {
  if (!mech) mech = { i: 0, changed: 0, acknowledged: 0 };
  const screen = document.getElementById("screen");
  const t = cfg.thoughts[mech.i];
  screen.innerHTML = `
    <div class="card">
      <div class="week-tag">Semana ${state.weekIndex}</div>
      <p class="scene-text">${cfg.intro}</p>
      <div id="bubble" style="padding:14px 16px;border-radius:14px;background:var(--bg);border:1px solid var(--line);font-size:0.98rem;">${t.t}</div>
      <div class="options">
        <button class="option" id="sameBtn">Sí, a veces pienso esto</button>
        <button class="option" id="changeBtn">Probar pensarlo distinto</button>
      </div>
    </div>`;
  function afterPick(reframed) {
    if (reframed) mech.changed += 1; else mech.acknowledged += 1;
    document.getElementById("bubble").textContent = reframed ? t.r : "Está bien pensar eso a veces. Sigamos.";
    screen.querySelector(".options").innerHTML = "";
    setTimeout(() => {
      mech.i += 1;
      if (mech.i < cfg.thoughts.length) { render(); }
      else {
        if (cfg.axis) state.scores[cfg.axis] = (state.scores[cfg.axis] || 0) + (cfg.thoughts.length - mech.changed);
        pushDiary(cfg.diaryWeek, "Reconoció el pensamiento sin cambiarlo " + mech.acknowledged + " vez(es), y probó pensarlo distinto " + mech.changed + " de " + cfg.thoughts.length + ".");
        state.xp += 40;
        mech = null;
        saveProgress();
        completeWeek();
      }
    }, 1100);
  }
  document.getElementById("sameBtn").addEventListener("click", () => afterPick(false));
  document.getElementById("changeBtn").addEventListener("click", () => afterPick(true));
}

// ---------- Enrutador principal ----------
function render() {
  renderStats();
  if (!ACTIVE_STORY) return renderStorySelect();
  if (!state.studentName) return renderNamePrompt();
  if (state.weekIndex > ACTIVE_STORY.totalWeeks) return renderSemaforo();

  const def = ACTIVE_STORY.weekDefs[state.weekIndex - 1];
  if (def.type === "dialogue") return renderDialogue();

  const cfg = ACTIVE_STORY.mechanics[state.weekIndex];
  if (cfg.type === "habit") return renderHabit(cfg);
  if (cfg.type === "timing") return renderTiming(cfg);
  if (cfg.type === "social") return renderSocial(cfg);
  if (cfg.type === "thoughts") return renderThoughts(cfg);
}

// --- Instalación como app (PWA) ---
let deferredPrompt = null;
window.addEventListener("beforeinstallprompt", (e) => {
  e.preventDefault();
  deferredPrompt = e;
  const b = document.getElementById("installBanner");
  if (b) b.style.display = "flex";
});
document.getElementById("installBtn")?.addEventListener("click", async () => {
  if (!deferredPrompt) return;
  deferredPrompt.prompt();
  await deferredPrompt.userChoice;
  deferredPrompt = null;
  document.getElementById("installBanner").style.display = "none";
});
window.addEventListener("appinstalled", () => {
  const b = document.getElementById("installBanner");
  if (b) b.style.display = "none";
});

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("service-worker.js").catch(() => {
      // Si falla (por ejemplo abierto directo como archivo, sin servidor), la app
      // sigue funcionando, solo que sin caché offline hasta que se sirva por http(s).
    });
  });
}

render();
