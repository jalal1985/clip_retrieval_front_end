import {resolve} from 'path'
import {defineNuxtConfig} from "nuxt/config";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    ssr: true,
    target: 'static',
    alias: {
        scss: resolve('~/assets/scss'), // Needed for resolving SASS/SCSS variables in the scoped styling
    },
    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,
    // Enable devtools or not (boolean)
    devtools: {enabled: false},
    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        '@pinia/nuxt',
        '@nuxtjs/tailwindcss',
    ],
    tailwindcss: {
        cssPath: '~/assets/scss/main.scss',
    },
    plugins: [
        {
            src:'~/plugins/fontawesome.ts',
            mode:'client',
        }
    ],
    app: {
        buildAssetsDir: '/_nuxt/',
        head: {
            title: 'AI-fashion | DEMO ',
            charset: 'utf-8',
            viewport: 'width=device-width, initial-scale=1',
            htmlAttrs: {
                lang: 'en'
            },
            noscript: [
                {
                    'data-description': 'Noscript default',
                    children: `<h2>Deze website vereist het gebruik van Javascript. Om de website te bezoeken, sta het gebruik van Javascript toe in uw browser.</h2>`,
                },
            ],
            link: [
                {
                    rel: 'icon',
                    type: 'image/x-icon',
                    href: '/favicon.ico',
                    sizes: '',
                },
            ]
        },
    },
    devServer: {
        host: '0.0.0.0',
        port: 3000,
    },
    nitro: {
        preset: 'static',
    }
})
