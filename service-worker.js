// Service worker — hace que la app funcione sin internet una vez instalada/visitada.
// Estrategia simple: cache-first para los archivos de la app (los datos del estudiante
// nunca pasan por aquí, se guardan en localStorage del dispositivo, no en la red).

const CACHE_NAME = "rumi-app-v4";
const ASSETS = [
  "./",
  "./index.html",
  "./session.js",
  "./app.js",
  "./data.js",
  "./stories.js",
  "./content-banda.js",
  "./content-nave.js",
  "./content-ciudad.js",
  "./content-guardianes.js",
  "./content-caso.js",
  "./content-cordillera.js",
  "./manifest.json",
  "./icons/icon-192.png",
  "./icons/icon-512.png"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS)).then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;
  event.respondWith(
    caches.match(event.request).then((cached) => {
      if (cached) return cached;
      return fetch(event.request).then((resp) => {
        const copy = resp.clone();
        caches.open(CACHE_NAME).then((cache) => cache.put(event.request, copy));
        return resp;
      }).catch(() => cached);
    })
  );
});
