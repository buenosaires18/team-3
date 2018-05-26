const staticAssets = [
    './cargarPost.html',
    './chartPescar.html',
    './formCompletar.html',
    './index.html',
    './profile.html',
    './login/login.html',
    './Template-ChatTemplate/index.html',
    './js/addNewMessage.js',
    './js/ajax.js',
    './js/cargarNewsFeed.js',
    './js/chat.js',
    './css/estilos.css',
    './css/styles.css'
]

self.addEventListener('install', async event => {
    const cache = await caches.open('news-static');
});

self.addEventListener('fetch', event => {
    const req = event.request;
    const url = new URL(req.url);

    if (url.origin === location.origin) {
        event.respondWith(cacheFirst(req));
    } else {
        event.respondWith(networkFirst(req));
    }
});

async function cacheFirst(req) {
    const cachedResponse = await caches.match(req);
    return cachedResponse || fetch(req);
}

async function networkFirst(req) {
    const cache = await caches.open('news-dynamic');

    try {
        const res = await fetch(req);
        cache.put(req, res.clone());
        return res;
    } catch (error) {
        const cachedResponse = await cache.match(req);
        return cachedResponse || await caches.match('./fallback.json');
    }
}