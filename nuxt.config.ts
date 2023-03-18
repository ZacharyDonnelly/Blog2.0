import { fileURLToPath } from 'url'

export default defineNuxtConfig({
  app: {
    head: {
      charset: 'utf-16',
      viewport: 'initial-scale=1',
      title: 'Zach Donnelly - Frontend Developer',
      htmlAttrs: {
        lang: 'en'
      },
      meta: [
        {
          name: 'description',
          content: 'Zach Donnelly - Frontend Developer'
        }
      ],
      link: [{ rel: 'icon', type: 'image/png', href: '/favicon.ico' }]
    }
  },
  alias: {
    assets: fileURLToPath(new URL('./assets', import.meta.url)),
    components: fileURLToPath(new URL('./components', import.meta.url)),
    composables: fileURLToPath(new URL('./composables', import.meta.url)),
    layouts: fileURLToPath(new URL('./layouts', import.meta.url)),
    store: fileURLToPath(new URL('./store', import.meta.url)),
    types: fileURLToPath(new URL('./types', import.meta.url))
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
  buildModules: ['@nuxtjs/tailwindcss', '@nuxt/image-edge'],
  css: ['@/assets/css/main.scss'],
  components: [{ path: '@/components/', pathPrefix: false }],
  modules: ['@nuxtjs/tailwindcss', '@nuxt/image-edge', '@pinia/nuxt', '@pinia-plugin-persistedstate/nuxt'],
  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],
  postcss: {
    plugins: {
      'postcss-import': {},
      tailwindcss: {},
      autoprefixer: {},
      ...(process.env.NODE_ENV === 'production' ? { cssnano: {} } : {})
    }
  },
  static: { prefix: false },
  tailwindcss: { exposeConfig: true },
  router: {
    // https://router.vuejs.org/api/interfaces/routeroptions.html    // @ts-expect-error - See above link for available options    linkActiveClass: 'active',
    linkExactActiveClass: 'exact-active'
  },
  telemetry: false,
  typescript: {
    tsConfig: {
      compilerOptions: { strict: true }
    }
  }
})
