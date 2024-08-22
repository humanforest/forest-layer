// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  components: [{ path: './components', prefix: '', pathPrefix: false }],

  modules: ['@nuxt/ui', '@vueuse/nuxt', '@nuxtjs/i18n'],

  ui: {
    icons: ['tabler'],
    safelistColors: [
      'gray',
      'red',
      'orange',
      'amber',
      'yellow',
      'lime',
      'green',
      'emerald',
      'teal',
      'cyan',
      'sky',
      'blue',
      'indigo',
      'violet',
      'purple',
      'fuchsia',
      'pink',
      'rose',
    ],
  },

  devtools: { enabled: false },

  compatibilityDate: '2024-08-20',
})
