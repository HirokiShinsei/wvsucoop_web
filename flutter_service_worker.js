'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "25f7ce6f861bd83f7db06df7cb716ff1",
"assets/AssetManifest.bin.json": "df8a65dccc29d9585390e345d86425a6",
"assets/AssetManifest.json": "084fdb526ad8c0a635ebccbc075ca0a6",
"assets/assets/1.png": "ab61c9a6e9763d13167bdc17af72e6e8",
"assets/assets/2.jpg": "cafcb8e472c9660b50f0cb73fad80d41",
"assets/assets/3.jpg": "5b99137484d3ad183c18bc4b5433600c",
"assets/assets/4.png": "b32412a587c4fbba96b070e982988903",
"assets/assets/5.png": "6635bae0b48554a25ed429f93d5b26a6",
"assets/assets/6.jpg": "437e6212ae0987353b7f9cfdeae58393",
"assets/assets/Carousel/1.jpg": "768db9a1232bed65338c19dc2a2629b5",
"assets/assets/Carousel/10.jpg": "f32e2274e95669a8d6f173f281983b4a",
"assets/assets/Carousel/11.jpg": "1d908137539f9f16a4d18d5bab58a2fe",
"assets/assets/Carousel/12.jpg": "f7c7032519f274629e4d71874df62512",
"assets/assets/Carousel/13.jpg": "6191b6abde009f6f2e23b03ed55c5b95",
"assets/assets/Carousel/14.jpg": "948b3b2f02795c302110eaadb6c6b539",
"assets/assets/Carousel/15.jpg": "51bbf74d158701bd464d66e8de3dec5f",
"assets/assets/Carousel/16.jpg": "bddf776a47a14025b0638d18daeab20d",
"assets/assets/Carousel/17.jpg": "12433511249d9fe705f21330db98ac6c",
"assets/assets/Carousel/18.jpg": "5f9be3656cef33fcbb5d8ad805d191bb",
"assets/assets/Carousel/19.jpg": "7e56615ef8db5fb4f0a181cf98c70585",
"assets/assets/Carousel/2.jpg": "2629639dedd7c2ef4a0f7067cb8da00d",
"assets/assets/Carousel/3.jpg": "985ebf6885be9d84ba76150531e25329",
"assets/assets/Carousel/4.jpg": "dc40c312d490bc971c46fbaf8755a702",
"assets/assets/Carousel/5.jpg": "eb7976fe76d99e34a1c483e87e0b0969",
"assets/assets/Carousel/6.jpg": "6cdcf9c23c4f14d61aa4f982ad84ae49",
"assets/assets/Carousel/7.jpg": "fe7d31a0df4170f04b2aec3590a96e8f",
"assets/assets/Carousel/8.jpg": "ab1befb2da7688d293001891060ec09a",
"assets/assets/Carousel/9.jpg": "ea4a5bfe4271b0f41ffa1ad98e184730",
"assets/assets/coop.jpg": "fc346c6229bdd67935535a1195d18be2",
"assets/assets/homepage.jpg": "98976165edae6945c7800d3af1cc6b49",
"assets/assets/stalls/chickbrew.jpg": "ea4a5bfe4271b0f41ffa1ad98e184730",
"assets/assets/stalls/dinette.jpg": "a37f55c0205ab6d6bbd84fa70518923b",
"assets/assets/stalls/greenkiosk.jpg": "983d5e39c334722edc1adf6bfa826521",
"assets/assets/stalls/greenwall.jpg": "95ede538b78718f1208258667f6d6c16",
"assets/assets/stalls/kiosk1.jpg": "42a42388783ac456610094f91c5aa20a",
"assets/assets/stalls/kiosk10.jpg": "249d3fc0858aa627b16dcd5f9f67d9ff",
"assets/assets/stalls/kiosk11.jpg": "d4bd2f118e9dc5b3bb2ac67b553b883e",
"assets/assets/stalls/kiosk12.jpg": "bfd279446abad0fe20b182c032676f8b",
"assets/assets/stalls/kiosk2.jpg": "0f53f77d1de21378bb99a220967c5d76",
"assets/assets/stalls/kiosk3.jpg": "6f4601d2aecdf13861119a4b2bf0389c",
"assets/assets/stalls/kiosk4.jpg": "b7ec36382573c6834b134db85798b549",
"assets/assets/stalls/kiosk5.jpg": "4f2f59452b9c5728261a5557df14447e",
"assets/assets/stalls/kiosk678.jpg": "cad7a24eddc2c34e92cc5a2244e5ac39",
"assets/assets/stalls/kiosk9.jpg": "4e972a4b98ca64e40c5b04469bb97ea3",
"assets/assets/stalls/lovemilktea.jpg": "88088fddab4f0e035e87cce5906eea53",
"assets/assets/stalls/mushin.jpg": "fd2db27ee8edc935d6c22d108ddecde8",
"assets/assets/stalls/pinkwall.jpg": "17d0150d0033d5296aa14b53e834253d",
"assets/assets/stalls/zencafe.jpg": "aa0562bff4cb47004499430ffa19ef2f",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "6ea39795739e960c243170375b3c9b2f",
"assets/NOTICES": "eddae3fb3f6dca44498aca22b9630893",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "2ed18f96e83c557b5d9335cc76809d16",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "3ca5dc7621921b901d513cc1ce23788c",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "a2eb084b706ab40c90610942d98886ec",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "c6b7008ade3b86425ded7616ef5f6ed9",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "7e5f6790f3f245ed92dcca92c423d4ef",
"/": "7e5f6790f3f245ed92dcca92c423d4ef",
"main.dart.js": "0c803b8a129d07fc5a37b9b6b5b24e1e",
"manifest.json": "53d2991c2664301c1df3c4c8a3d5bb40",
"version.json": "97a27728e73aafbbe07424bd3016e183"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
