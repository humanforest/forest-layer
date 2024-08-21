// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  components: [{ path: './components', prefix: '', pathPrefix: false }],

  modules: ['@nuxt/ui', '@vueuse/nuxt', '@nuxtjs/i18n'],

  ui: {
    icons: ['tabler'],
    safelistColors: [
      'gray',
      'green',
      'red',
      'blue',
      'yellow',
      'orange',
      'purple',
      'indigo',
      'purple',
      'pink',
      'violet',
    ],
  },

  devtools: { enabled: false },

  compatibilityDate: '2024-08-20',
})
