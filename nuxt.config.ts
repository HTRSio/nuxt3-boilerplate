import { defineNuxtConfig } from 'nuxt'
import eslintPlugin from 'vite-plugin-eslint'
import svgLoader from 'vite-svg-loader'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  // app
  app: {
    head: {
      title: 'Nuxt 3 Boilerplate',
      titleTemplate: '%s - Nuxt 3 Boilerplate',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          hid: 'description',
          name: 'description',
          content: 'Nuxt 3 Boilerplate'
        }
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
    }
  },

  // css
  css: [],

  // plugins
  plugins: [],

  // modules
  modules: ['@nuxtjs/tailwindcss', '@vueuse/nuxt', '@nuxt/content'],

  // build
  build: {},

  // build modules
  buildModules: ['@pinia/nuxt', '@intlify/nuxt3'],

  // auto import components
  components: true,
  // vite
  vite: {
    logLevel: 'info',
    optimizeDeps: {
      include: [
        '@headlessui/vue',
        '@heroicons/vue/solid',
        '@heroicons/vue/outline',
        'vue',
        'pinia'
      ]
    },
    plugins: [eslintPlugin(), svgLoader()]
  },

  // localization - i18n config
  intlify: {
    localeDir: 'locales',
    vueI18n: {
      locale: 'en',
      fallbackLocale: 'en',
      availableLocales: ['en', 'de']
    }
  },

  // tailwindcss defaults options
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    configPath: 'tailwind.config.js',
    exposeConfig: false,
    injectPosition: 0,
    config: {
      content: ['content/**/**.md']
    }
  },

  // vueuse
  vueuse: {
    ssrHandlers: true
  }
})
