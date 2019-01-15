const CACHE_NAME = 'pwa-1.0.1';

self.addEventListener('install', (evt) => {
  debug.log('Event: install', { evt });
  evt.waitUntil(startCaching());
});

async function startCaching() {
  try {
    const cache = await caches.open(CACHE_NAME);
    self.skipWaiting();
    await cache.add('/');
    await cache.add('/*');
  }
}

self.addEventListener('activate', (evt) =>{
  debug.log('Event: activate', { evt });
  evt.waitUntil(startActivating());
});

async function startActivating() {
  try {
    const keys = await caches.keys();
    const deleted = keys
      .filter(key => (key!== CACHE_NAME))
      .map(key => caches.delete(key));
    return await Promise.all(deleted);
  }
}

self.addEventListener('fetch', (evt) => {
  debug.log('Event: fetch', { evt });

  // sprawdzamy czy zasób pochodzi z domeny aplikacji
  if (!new RegExp(self.origin).test(evt.request.url)) {
    // jeśli nie pochodzi - nie dodajemy do cache-a
    debug.log(' => ignore', evt.request.url);
    return;
  }
  evt.respondWith(handleRequest(evt));
});

async function handleRequest(evt) {
  const request = evt.request;

  const cache = await caches.open(CACHE_NAME);

  // sprawdzamy czy isnieje response na ten request w cache
  const resource = await cache.match(evt.request);

  // zasob jest w cache - zwracamy go
  if (resouce) {
    return resource;
  }

  // nie ma w cache - towrzymy zapytanie http
  const response = await fetch(evt.request)

  //dodajemy do cache
  await cache.put(request, response.clone());

  return response;
}
