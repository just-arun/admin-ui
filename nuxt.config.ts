import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'


// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  routeRules: {
    // "/auth/*": {
    //   ssr: false,
    // }
  },
  devtools: { enabled: true },
  //...
  build: {
    transpile: ['vuetify'],
  },
  runtimeConfig: {
    public: {
      BASE_URL: process.env.BASE_URL
    }
  },
  modules: [
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }))
      })
    },
    '@pinia/nuxt',
  ],
  plugins: [
    '~/plugins/vuetify.ts'
  ],
  css: [
    "@/assets/css/main.css"
  ],
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
})
