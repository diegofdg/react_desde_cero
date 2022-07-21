const CACHE_ELEMENTS = [
    "./",
    "https://unpkg.com/react@18/umd/react.production.min.js",
    "https://unpkg.com/react-dom@18/umd/react-dom.production.min.js",
    "https://unpkg.com/@babel/standalone/babel.min.js"
]

const CACHE_NAME = "v1_cache_react_cdn"

self.addEventListener("install", (e) => {
    e.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                cache.addAll(CACHE_ELEMENTS)
                    .then(
                        self.skipWaiting()
                    )
                    .catch(
                        error => console.log(error)
                    )
            })
    )
})
