import { fileURLToPath } from 'url'
import { defineNuxtConfig } from 'nuxt/config'
import { resolve } from 'path'
import { visualizer } from 'rollup-plugin-visualizer'
import { type PluginOption } from 'vite'

/** * @type {import("nuxt").Config} */
export default defineNuxtConfig({
  app: {
    head: {
      charset: 'utf-16',
      htmlAttrs: {
        lang: 'en'
      },
      link: [{ rel: 'icon', type: 'image/png', href: '/favicon.ico' }],
      meta: [
        {
          name: 'description',
          content:
            "Zach Donnelly's Blog | Fullstack Software Engineer | Web Developer | Javascript | Typescript | Vue | React | TailwindCSS"
        }
      ],
      title:
        'Blog by Zach Donnelly | Fullstack Software Engineer | Web Developer | Javascript | Typescript | Vue | React | TailwindCSS',
      viewport: 'initial-scale=1'
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
  analyze: {
    analyzerMode: 'static'
  },
  build: {},
  buildModules: ['@nuxtjs/tailwindcss', '@nuxt/image-edge'],
  css: ['@/assets/css/main.scss'],
  components: [{ path: '@/components/', pathPrefix: false }],
  modules: [
    '@vite-pwa/nuxt',
    '@nuxtjs/tailwindcss',
    '@nuxt/image-edge',
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt'
  ],
  pwa: {
    client: {
      installPrompt: 'vite-pwa:lsCache:hideInstallPrompt'
    }
  },
  plugins: [],
  postcss: {
    plugins: {
      'postcss-import': {},
      tailwindcss: {},
      autoprefixer: {},
      ...(process.env.NODE_ENV === 'production' ? { cssnano: {} } : {})
    }
  },
  publicRuntimeConfig: {
    NODE_ENV: process.env.NODE_ENV
  },
  static: { prefix: false },
  router: {
    // https://router.vuejs.org/api/interfaces/routeroptions.html
    // @ts-expect-error - See above link
    linkActiveClass: 'active',
    linkExactActiveClass: 'exact-active'
  },
  tailwindcss: { exposeConfig: true },
  telemetry: false,
  typescript: {
    tsConfig: {
      compilerOptions: {
        strict: true
      }
    }
  },
  vite: {
    plugins: [
      visualizer({
        filename: resolve(__dirname, 'dist/client/stats.html'),
        template: 'treemap', // sunburst|treemap|network
        sourcemap: true,
        open: true
      }) as PluginOption
    ]
  }
})
