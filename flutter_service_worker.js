'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "/assets/AssetManifest.json": "3659a96cfa26ad9c9feb42156519843d",
"/assets/assets/background.jpg": "29620517d49b03f221f0b9455a3d6dd1",
"/assets/assets/background_clean.jpg": "12b4bec76040a060b744e6995bbaa32f",
"/assets/assets/clientes.png": "4a5593a7c22c84a052f2b52673cb0edc",
"/assets/assets/consulting.jpg": "52c5b4cf4a277c71c40426a82ed2c412",
"/assets/assets/consultoria.png": "ab60d175f9716c7cea168fda3c2704df",
"/assets/assets/contact.jpg": "56906a1fb513d929f6a5ed67272f314f",
"/assets/assets/evaluacion.png": "ddad87f4cb3697242c1b74ab9be0409d",
"/assets/assets/evaluation.jpg": "69a32f3fd3e914f91eb794fc217968b5",
"/assets/assets/facebook.png": "d9b3207bc99623dd76d272f2f479fb15",
"/assets/assets/gmail.png": "b4cec0175adc5e90a8e7c54ee17baf1e",
"/assets/assets/instagram.png": "bac7daf9549d160d8d5a37621f97fa64",
"/assets/assets/logo.jpg": "ee7657660f827f0a492db1f6dcf9b820",
"/assets/assets/logo.png": "8a963f5379b6c613c00386e060791f35",
"/assets/assets/principles.jpg": "ae8bd21ab916b7b76fd551deb5840187",
"/assets/assets/talentos.png": "eeee3f9afe520188d1c30c1fc9e9e052",
"/assets/assets/talents.jpg": "4499a5332fcf613119c8764c26393edd",
"/assets/assets/we.jpg": "9dc04d666b4548e272451c2793e2d7df",
"/assets/assets/whatsapp.png": "81f9842aa3f3882c3a1d072a026e83cb",
"/assets/FontManifest.json": "18eda8e36dfa64f14878d07846d6e17f",
"/assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"/assets/LICENSE": "d33ef91063d303a9847c2c8169ebaad8",
"/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"/assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "51d23d1c30deda6f34673e0d5600fd38",
"/assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "d51b09f7b8345b41dd3b2201f653c62b",
"/assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "0ea892e09437fcaa050b2b15c53173b7",
"/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"/index.html": "feda529323f56744bf1c1df1e9df9f8e",
"/main.dart.js": "1db9cc0737c5593122b6475f815b9d44",
"/manifest.json": "1f92c99c36969b0467528859f957607e"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
