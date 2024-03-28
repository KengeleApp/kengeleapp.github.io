'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "a9780643c69a502b6314e0e28e767bf4",
"index.html": "ff0f99d65af87e43f999a7c8fdc7d569",
"/": "ff0f99d65af87e43f999a7c8fdc7d569",
"main.dart.js": "44397638f52e36d1ef4cce15b28b839d",
"loader.gif": "c41cdb25bfe35388dd1c8f0bc79fb164",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "60345fe9be6f90e3754799aa31b56921",
"assets/AssetManifest.json": "1f101ff286be0a683817ac358f6d228e",
"assets/NOTICES": "a732898d317f51b54c725a1b8a61553b",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/html_editor_enhanced/assets/plugins/summernote-file/summernote-file.js": "ff8055e39a04b5fe6e13031ca88ef278",
"assets/packages/html_editor_enhanced/assets/plugins/summernote-codewrapper/summernote-ext-codewrapper.min.js": "fcee96125f8310c1ebe51d06f7ab761e",
"assets/packages/html_editor_enhanced/assets/plugins/summernote-case-converter/summernote-case-converter.js": "436223c547bc8fe220f58da03e27bdcc",
"assets/packages/html_editor_enhanced/assets/plugins/summernote-emoji/summernote-ext-emoji-ajax.css": "fcd1d224545428dad2f684887738724d",
"assets/packages/html_editor_enhanced/assets/plugins/summernote-emoji/summernote-ext-emoji-ajax.js": "841136db7b3fe2db4db070e06769d674",
"assets/packages/html_editor_enhanced/assets/plugins/summernote-rtl/summernote-ext-rtl.js": "3e921472369ed4d53776cea3e3047238",
"assets/packages/html_editor_enhanced/assets/plugins/summernote-list-styles/summernote-list-styles.js": "0ea0e9e9a5474573e1b133bab3fd39b1",
"assets/packages/html_editor_enhanced/assets/plugins/summernote-list-styles/summernote-list-styles.css": "af3d39f54c88336cfec859e9aee90fea",
"assets/packages/html_editor_enhanced/assets/plugins/summernote-at-mention/bundle.js": "297c8de712d990695fe1b73327f72b2a",
"assets/packages/html_editor_enhanced/assets/plugins/additional-text-tags/summernote-add-text-tags.js": "92b9bdd6bf477b2b5f6a9dcc3548c360",
"assets/packages/html_editor_enhanced/assets/plugins/additional-text-tags/summernote-add-text-tags.css": "de07ab5a4d56bb952997e73f70293fd3",
"assets/packages/html_editor_enhanced/assets/summernote-lite-dark.css": "f338b364d403291905bc9a5cbc89b986",
"assets/packages/html_editor_enhanced/assets/summernote.html": "3c30a7f2fb5d81cc589e611ebe67d99b",
"assets/packages/html_editor_enhanced/assets/jquery.min.js": "dc5e7f18c8d36ac1d3d4753a87c98d0a",
"assets/packages/html_editor_enhanced/assets/summernote-no-plugins.html": "4f81344100a4f8b701e0fd05c19f50d1",
"assets/packages/html_editor_enhanced/assets/font/summernote.woff2": "f694db69cded200e4edd999fddef81b7",
"assets/packages/html_editor_enhanced/assets/font/summernote.ttf": "82fa597f29de41cd41a7c402bcf09ba5",
"assets/packages/html_editor_enhanced/assets/font/summernote.woff": "c1a96d26d30d9e0b2fd33c080d88c72e",
"assets/packages/html_editor_enhanced/assets/font/summernote.eot": "f4a47ce92c02ef70fc848508f4cec94a",
"assets/packages/html_editor_enhanced/assets/summernote-lite.min.css": "e43795ac694ce873fd375cadc044e996",
"assets/packages/html_editor_enhanced/assets/summernote-lite.min.js": "15e3ba38b931760d5bba02653dfe05aa",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/Assets/Images/products/photo1.jpeg": "1dd5766ca06e681f9b5a850721f03308",
"assets/Assets/Images/products/watch2.jpeg": "0505821eaccce20dbbf00ca1d340bc4f",
"assets/Assets/Images/products/watch3.jpeg": "9f045d5a1eb813d9081ec5d8e7edb043",
"assets/Assets/Images/products/photo4.jpeg": "75ef93069d76216e6d6d535f678c8716",
"assets/Assets/Images/products/watch1.jpeg": "b8aa1d7194fe7a0d2866c103c7160612",
"assets/Assets/Images/products/photo2.jpeg": "2b0a25d353f4560b7d3b73ecdc913770",
"assets/Assets/Images/products/photo3.jpeg": "3bee684a27e29cbc013200d02fa281ca",
"assets/Assets/Images/Icons/logo-black.png": "71ef5f0bd1bc08abf0452e101c9fb3fb",
"assets/Assets/Images/Icons/apple-touch-icon.png": "f0c3e01171bc7c6fadb55b17d63001b6",
"assets/Assets/Images/Icons/logo-white.png": "b62f4b11d76678a85e90398481a0e114",
"assets/Assets/Images/Icons/favicon.png": "f0c3e01171bc7c6fadb55b17d63001b6",
"assets/Assets/Images/Icons/criminal.png": "c51c51c2fa6e9d3fb8656fe6dfe01c34",
"assets/Assets/Images/Icons/signin.png": "6e3f5f2eebac427daef37732011a433c",
"assets/Assets/Images/Icons/welcome.png": "fee2400076fd9aa046fb3da68969cbf5",
"assets/Assets/Audio/notification.mp3": "62acf35b6e12d7b07c40bc7d5a80022e",
"assets/Assets/Audio/alert.mp3": "a513d68d50056e92a78d21991f22d235"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
