module.exports = {
    "webDependencies": [
        "vue/dist/vue.esm.browser.js",
        "highlight.js/lib/highlight.js",
        "highlight.js/lib/languages/yaml.js",
        "highlight.js/lib/languages/javascript.js",
        "highlight.js/lib/languages/dockerfile.js",
        "highlight.js/lib/languages/php.js",
        "highlight.js/lib/languages/sql.js",
    ],
    "installOptions": {
        "dest": "static/web_modules",
        "clean": true,
        "optimize": true,
        "babel": true,
        "strict": false,
        "sourceMap": true,
        "remotePackage": [],
        "remoteUrl": "https://cdn.pika.dev",
    },
    "dedupe": []
}
