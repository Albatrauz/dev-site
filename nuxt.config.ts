// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  future: { compatibilityVersion: 4 },

  modules: [
    '@nuxthub/core',
    '@nuxt/fonts',
    '@nuxt/ui',
    '@nuxt/eslint',
    '@vueuse/nuxt',
    'nuxt-auth-utils'
  ],

  hub: {
    blob: true,
    database: true,
  },

  ui: {
    icons: ['simple-icons']
  },

  experimental: {
    viewTransition: true
  },

  nitro: {
    experimental: {
      openAPI: true
    }
  },

  devtools: { enabled: true },

  eslint: {
    config: {
      stylistic: {
        quotes: 'single',
        commaDangle: 'never'
      }
    }
  },

  compatibilityDate: '2024-07-29'
})