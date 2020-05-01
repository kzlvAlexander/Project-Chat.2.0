importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/0554bc413d86f5c10fdb.js",
    "revision": "bb75cd444318160e551040e63c3d4570"
  },
  {
    "url": "/_nuxt/41cb24322534c241e745.js",
    "revision": "705d00076fba4e0a5548289986fb5ec0"
  },
  {
    "url": "/_nuxt/7f7b6557a7de4e354db3.js",
    "revision": "93f10c08a0829189608590efa1df7d50"
  },
  {
    "url": "/_nuxt/9ebc366b925621b97810.js",
    "revision": "ab2cecd36ade8fe50da0e1b2139e2ca7"
  },
  {
    "url": "/_nuxt/aa5f5eebf2b3e740c443.js",
    "revision": "54b73945d0262eeca01b0e59814aa498"
  },
  {
    "url": "/_nuxt/af2b8cd7bf7e29af6d3d.js",
    "revision": "c68d1f0caff3eef08dc923b148b949a8"
  },
  {
    "url": "/_nuxt/caab218949a627eb528c.js",
    "revision": "bd434640378e07fd1590da40473cebbf"
  }
], {
  "cacheId": "Chatroom",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')
