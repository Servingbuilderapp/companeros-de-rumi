// Registro de historias seleccionables. Cada entrada apunta a las variables
// globales dialogues_X/mechanics_X definidas en su propio content-X.js (cargado
// antes que este archivo). El motor (weekDefs, axisLabels, umbral, 52 semanas)
// es el mismo para todas — solo cambia la piel narrativa.
//
// Nota de alcance (26 sep 2026): se incluye "Rumi en el colegio" (la historia
// original, ya validada con las 52 semanas) como una séptima opción junto a las
// 6 nuevas, en lugar de reemplazarla — los documentos del proyecto describen la
// regla de "una historia fija por año" solo para las 6 nuevas, sin decir que la
// original deja de ofrecerse, y quitar la ya validada sería un retroceso.

const STORIES_REGISTRY = [
  {
    id: "rumi-colegio",
    title: "Rumi en el colegio",
    tagline: "La historia original — el colegio de siempre.",
    dialoguesVar: dialogues,
    mechanicsVar: mechanics
  },
  {
    id: "banda",
    title: "La Banda",
    tagline: "Una banda juvenil de música, ensayos y un festival regional.",
    dialoguesVar: dialogues_banda,
    mechanicsVar: mechanics_banda
  },
  {
    id: "nave",
    title: "La Nave",
    tagline: "Una academia de entrenamiento y simulación de pilotos.",
    dialoguesVar: dialogues_nave,
    mechanicsVar: mechanics_nave
  },
  {
    id: "ciudad",
    title: "Mi Ciudad",
    tagline: "Un barrio que se construye entre todos, proyecto a proyecto.",
    dialoguesVar: dialogues_ciudad,
    mechanicsVar: mechanics_ciudad
  },
  {
    id: "guardianes",
    title: "Guardianes del Barrio",
    tagline: "Una brigada juvenil comunitaria, sin poderes, con casos reales.",
    dialoguesVar: dialogues_guardianes,
    mechanicsVar: mechanics_guardianes
  },
  {
    id: "caso",
    title: "El Caso",
    tagline: "Una oficina de jóvenes investigadores y casos por resolver.",
    dialoguesVar: dialogues_caso,
    mechanicsVar: mechanics_caso
  },
  {
    id: "cordillera",
    title: "La Cordillera",
    tagline: "Una expedición de montaña que dura todo el año escolar.",
    dialoguesVar: dialogues_cordillera,
    mechanicsVar: mechanics_cordillera
  }
];

function findStoryEntry(id) {
  return STORIES_REGISTRY.find((s) => s.id === id) || null;
}
