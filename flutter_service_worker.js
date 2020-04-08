'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "favicon.png": "5dcef449791fa27946b3d35ad8803796",
"manifest.json": "00e0b69b49487ce4f9ff0c5fac8fda49",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/image.png": "67a5713828d6376924dae3e846725009",
"assets/AssetManifest.json": "c02d227dbbf2171c7f8fdf8137ae6dee",
"assets/LICENSE": "00b240c774cf0d52f66de2456b4bc650",
"assets/assets/person4.jpeg": "2e9b5940fd621cd2b6ef87652e922100",
"assets/assets/github.png": "3e54ed15b9cd877c5223f5ecf64579df",
"assets/assets/MacBook.jpg": "3d3f92faf14d52e12c8a8583a2cf30c2",
"assets/assets/person1.jpeg": "1d93c1b598e0378af0ce618fa39b2f19",
"assets/assets/person3.jpeg": "68f7f58edb11830b0525a4c65cc3a845",
"assets/assets/message.png": "4ab37fd9235ee454ef36d904f80502ff",
"assets/assets/github_app.png": "1fbf1eeb622038a1ea2e62036d33788a",
"assets/assets/slack.png": "efd8727d64d49659d14eee20476f8de7",
"assets/assets/twitter.png": "4907a786377fe693a9aa563792728683",
"assets/assets/mail.png": "dc55662a996e5617957530fe4d32d06a",
"assets/assets/demo_image.jpeg": "4129427d4b3d8ffbfda70b0bae61400b",
"assets/assets/person2.jpeg": "94bd58214363da080f5c92298a4cb1ef",
"assets/assets/jaimeblasco.jpeg": "52e200d3b4ec4978617490d949f90d0e",
"assets/assets/flutter.png": "d21f1eecaeaab081ba7efec1721c0712",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/FontManifest.json": "01700ba55b08a6141f33e168c4a6c22f",
"main.dart.js": "9ef55ef3a84c0009297b3ea4a78d30eb",
"index.html": "dbc461d3904a415d5b20def4559a15bb"
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
