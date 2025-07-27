import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  app: {
    baseURL: '/notesapp-tb-mk/',
  },
  nitro: {
    prerender: {
      crawlLinks: false,
      routes: [
        '/',
        '/404.html',
        '/200.html'
      ]
    }
  },
  vite: {
    base: '/notesapp-tb-mk/',
    plugins: [
      tailwindcss(),
    ],
  },
  runtimeConfig: {
    public: {
      apiBase: 'https://notesapplication-techbodia-micko.onrender.com/api'
    }
  },
  modules: [
    '@nuxt/content',
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxt/scripts',
    '@nuxt/test-utils',
    '@nuxt/ui',
    '@nuxtjs/tailwindcss'
  ]
})