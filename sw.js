const CACHE = 'odo-v1';
const ASSETS = ['/ODO/', '/ODO/index.html', '/ODO/style.css', '/ODO/manifest.json'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)));
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(cached => cached || fetch(e.request))
  );
});
