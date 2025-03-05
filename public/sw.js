
// Service Worker for Dental Solutions Palghar
const CACHE_NAME = 'dental-solutions-cache-v1';
const STATIC_ASSETS = [
  '/',
  '/index.html',
  '/favicon.ico',
  '/og-image.jpg',
  '/services/general-dentistry.jpg',
  '/services/cosmetic-dentistry.jpg',
  '/services/dental-implants.jpg',
  '/services/orthodontics.jpg',
  '/services/root-canal.jpg',
  '/services/teeth-whitening.jpg',
  '/services/pediatric-dentistry.jpg',
  '/services/emergency-dental.jpg',
  '/services/periodontal.jpg'
];

// Install event - cache critical assets
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened cache');
        return cache.addAll(STATIC_ASSETS);
      })
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', event => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

// Fetch event - serve from cache, fallback to network
self.addEventListener('fetch', event => {
  // Skip non-GET requests and browser extensions
  if (event.request.method !== 'GET' || 
      !event.request.url.startsWith('http')) {
    return;
  }

  // Skip Google Analytics and other third-party requests
  if (event.request.url.includes('googletagmanager.com') ||
      event.request.url.includes('google-analytics.com') ||
      event.request.url.includes('facebook.net') ||
      event.request.url.includes('connect.facebook.net')) {
    return;
  }

  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Cache hit - return the response from cache
        if (response) {
          return response;
        }

        // Clone the request because it's a one-time use stream
        const fetchRequest = event.request.clone();

        return fetch(fetchRequest)
          .then(response => {
            // Check if we received a valid response
            if (!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }

            // Clone the response because it's a one-time use stream
            const responseToCache = response.clone();

            // Open the cache and put the new response in it
            caches.open(CACHE_NAME)
              .then(cache => {
                // Don't cache if the URL contains a query string
                if (!event.request.url.includes('?')) {
                  cache.put(event.request, responseToCache);
                }
              });

            return response;
          });
      })
  );
});

// Handle offline fallback
self.addEventListener('fetch', event => {
  if (event.request.mode === 'navigate' || 
      (event.request.method === 'GET' && 
       event.request.headers.get('accept').includes('text/html'))) {
    event.respondWith(
      fetch(event.request).catch(() => {
        return caches.match('/');
      })
    );
  }
});
