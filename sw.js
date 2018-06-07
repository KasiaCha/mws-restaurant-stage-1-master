const staticCacheName = "restaurants-static";
const urlsToCache = [
    "/",
    "index.html",
    "restaurant.html",
    "img/1.jpg",
    "img/2.jpg",
    "img/3.jpg",
    "img/4.jpg",
    "img/5.jpg",
    "img/6.jpg",
    "img/7.jpg",
    "img/8.jpg",
    "img/9.jpg",
    "img/10.jpg",
    "data/restaurants.json",
    "js/main.js",
    "js/dbhelper.js",
    "js/restaurant_info.js",
    "css/styles.css",
    "https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.0/normalize.css",
    "https://fonts.googleapis.com/css?family=Hammersmith+One"
];

/**
* Install service worker
*/
self.addEventListener("install", event => {
  event.waitUntil(
    caches
      .open(staticCacheName)
      .then(cache => cache.addAll(urlsToCache))
      .then(self.skipWaiting())
  );
});

/**
* Activate service worker
*/
self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(cacheNames => Promise.all(cacheNames.map(cache => {
      if (cache !== staticCacheName) {
        console.log("[ServiceWorker] removing cached files from ", cache);
        return caches.delete(cache);
      }
    })))
  )
})

self.addEventListener("fetch", event => {
  if (event.request.url.startsWith(self.location.origin)) {
    event.respondWith(
      caches.match(event.request).then(response => {
        if (response) {
          // console.log("[ServiceWorker] Found in cache ", event.request.url);
          return response;
        }
        return fetch(event.request);
      })
    );
  }
});