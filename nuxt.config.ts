// https://nuxt.com/docs/api/configuration/nuxt-config
import topLevelAwait from "vite-plugin-top-level-await";
import wasm from "vite-plugin-wasm";

export default defineNuxtConfig({
    compatibilityDate: "2025-07-15",
    vite: {
        build: {
            target: "esnext",
        },
        plugins: [wasm(), topLevelAwait()],
    },
    ssr: true,
    nitro: {
        preset: "vercel", // or 'vercel', 'cloudflare', etc.
    },
    eslint: {},
    devtools: {enabled: true},
    modules: ["@nuxt/eslint", "@nuxt/fonts", "@nuxt/icon", "@nuxt/image"],
});
