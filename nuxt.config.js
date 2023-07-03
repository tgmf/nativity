export default {

  target: 'static',
  // ssr: false,
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Nativity — Платформа таргетированной рекламы',
    description: 'Платформа таргетированной рекламы в лучших Telegram-каналах с оплатой за просмоты (CPV)',
    htmlAttrs: {
      lang: 'ru',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Платформа таргетированной рекламы в лучших Telegram-каналах с оплатой за просмоты (CPV)' },
      { name: 'format-detection', content: 'telephone=no' },
      {
        hid: 'og:image',
        property: 'og:image',
        content: '/thumb.jpg',
      },
      {
        hid: 'og:title',
        name: 'og:title',
        content: 'Nativity',
      },
      {
        name: 'og:site_name',
        content: 'Nativity',
      },
      {
        prefix: 'og: https://ogp.me/ns#',
      },
      {
        hid: 'og:description',
        name: 'og:description',
        content: 'Платформа таргетированной рекламы в лучших Telegram-каналах с оплатой за просмоты (CPV)',
      },
    ],
    link: [{ rel: 'icon', type: 'image/png', href: '/favicon.png' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [{ src: '~/assets/scss/main.scss', lang: 'scss' }],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [ 
    '~/plugins/mask.client.js',
    '~/plugins/metrika.client.js',
  ], 

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    '@nuxt/image',
    'nuxt-compress',
  ],

  router: {
    // mode: 'hash'
  },
  image: {
    // Options
    provider: 'static',
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    [
      'nuxt-social-meta',
      {
        url: '',
        title: 'Nativity — Платформа нативной рекламы в лучших Telegram-каналах',
        site_name: 'Nativity',
        description:
          'Платформа нативной рекламы в лучших Telegram-каналах',
        img: 'thumb.png',
        img_size: { width: '800px', height: '600px' },
        locale: 'ru_RU',
        theme_color: '#ffffff',
      },
    ],
  ],
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: { 
  },
}
