"use strict";var precacheConfig=[["/index.html","1f881fb6bf72aa8f953dce463542738d"],["/static/css/main.ad5f8127.css","d69db13abc20f5be6bd4e8899c7acb5f"],["/static/js/main.377ffa20.js","9dd1c2422f3f4756a1ef25879db2bfa2"],["/static/media/Rounded_Elegance.21c892a7.ttf","21c892a7f38e340a2c73f61f1bb86c34"],["/static/media/back.6919008d.svg","6919008d9cf2e96980478514c16f55d8"],["/static/media/cloud.a1174eeb.svg","a1174eeb708dca1e4cbc38402c07e432"],["/static/media/fish1.3c0154ca.svg","3c0154cac4c3f33901fe9757e7bc2e9f"],["/static/media/flowflow_logo_small.d312d929.png","d312d929f5a7aefe2b60dc0d4786a58b"],["/static/media/rain.bb329dcf.svg","bb329dcf1f0a3953700783495b77d410"],["/static/media/roman_round_bw.74c7c269.png","74c7c269b74a8a68136a6544ed553883"],["/static/media/sealevels.aaba2bac.svg","aaba2bac316bcb14ac5a6d2f8af94b55"],["/static/media/search.36dcdef0.svg","36dcdef06d0c46e044e76cb7d86af8bb"],["/static/media/serge_round_bw.d095ebcd.png","d095ebcd423d597ed8e64435ad2c11a1"],["/static/media/star-empty.27ef9094.svg","27ef9094548b75950b484553b3854352"],["/static/media/star.02578be4.svg","02578be4de6ea18ce68b509677de0327"],["/static/media/sun.39d62861.svg","39d628616a45ccfb802548184557bd0c"],["/static/media/sun_cloud.3636ef42.svg","3636ef423c72c8744335e4db30089e31"],["/static/media/wheater.951e5e97.svg","951e5e97caeedade2860f8cd04c28d86"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),r=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,n),e=urlsToCacheKeys.has(a));var r="/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(r,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});