// Minimal service worker: only makes the launcher installable on Android/PC. Caches nothing,
// so a changed launcher is picked up on the next open.
self.addEventListener('install', function () { self.skipWaiting(); });
self.addEventListener('activate', function (e) { e.waitUntil(self.clients.claim()); });
self.addEventListener('fetch', function () {});
