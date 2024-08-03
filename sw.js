self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('my-cache').then(function(cache) {
      return cache.addAll([
        '/',
        'https://tedsssssdd.blogspot.com/2024/05/test28.html?m=1', 
 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj7Qj3HZpuKfVUjVNtBw5W1uChiaWw_GOR3b6hgfjte3XWxpzMT9tNgFugSjOsNIwGttyQ30B1rYB0flUEoSUj6QyonHc0GnLw-lit_EDGfuK6vbscStqjrMFqB0UVpy-G-hsdVyso3Jpy_pcGM18yU749OXsJuoSpl9G1zES1LSeyXyIrHV6zntTOYTeo/s192/bazaartechlogo192x192.png',
        'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhgx9AsPqGW9MOfLzsVSq5G15B_MLOiekMAAyRNDP8nCGAw4nyeH3pw6auQxTbU5nX5jfAvRCyHCdQpoDbrZWDt7daBaf-vVoPB5bcM6Uwd9ylZyYz_cdqJKbtJ9TrlyLCgr9YXj70qv27pGsQa9BUl-5x6urVo9mJkXLGaZF91O9nujRN0n-tM_VFBqhw/s512/bazaartechlogo512x512.png'
      ]);
    })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});
