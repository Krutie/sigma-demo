export default {
  target: 'static',

  modules: [
    '@nuxtjs/axios',
  ],

  buildModules: [
    '@nuxt/nitro/compat'
    // '@nuxtjs/pwa'
  ],

  plugins: [
    './plugins/rendertime.server'
  ],

  router: {
    base: process.env.NUXT_ROUTER_BASE || '/'
  },

  serverMiddleware: [
    { path: '/api/hello', handle: '~/server/hello' },
    // '~/api'
    { path: '/api/login', handle: '~/server/login' },
    { path: '/api/graphql', handle: '~/server/graphql' }
  ],

  generate: {
    fallback: '404.html',
    // Hybdrid mode only for /about
    crawler: false,
    exclude: [
      /.*/
    ],
    routes: [
      '/about'
    ]
  },

  nitro: {
    // minify: false
    preset: 'vercel',
    // analyze: true
  },

  publicRuntimeConfig: {
    nitroVersion: require('@nuxt/nitro/package.json').version
  }

  // pwa: {
  //   workbox: false, // TODO
  //   meta: {
  //     lang: 'en'
  //   }
  // },
}
