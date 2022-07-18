export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  render: {
    resourceHints: false,
  },

  performance: {
    prefetch: false,
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: '艾克方案有限公司 - iMACK Solutions Co., Ltd (beta)',
    htmlAttrs: {
      lang: 'zh-Hant-MO'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'format-detection', content: 'telephone=no' },
      //{ hid: 'description', name: 'description', content: '艾克方案有限公司成立於2013年，與天網資料科技(澳門)有限公司為同一集團旗下的子公司，主要業務為一站式先進數據中心規劃，實施交付，維護保養及弱電項目相關的安裝工程， 同時我們與業界領導者一起攜手為澳門各類客戶提供IT弱電系統、中央控制系統，大型視訊牆影顯示系統，多媒體簡報系統及公共廣播系統等方案。' },
      //{ hid: 'og:description', name: 'og:description', content: '艾克方案有限公司成立於2013年，與天網資料科技(澳門)有限公司為同一集團旗下的子公司，主要業務為一站式先進數據中心規劃，實施交付，維護保養及弱電項目相關的安裝工程， 同時我們與業界領導者一起攜手為澳門各類客戶提供IT弱電系統、中央控制系統，大型視訊牆影顯示系統，多媒體簡報系統及公共廣播系統等方案。' },
      //{ hid: 'og:title'  , property: 'og:title'  , content: '艾克方案有限公司 - iMACK Solutions Co., Ltd'},
      //{ hid: 'og:type' , property: 'og:type' , content: 'website'},
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/imack_icon.png' },
      { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.0.0/animate.min.css' },
      //{ rel: 'stylesheet', href: 'https://unpkg.com/leaflet@1.7.1/dist/leaflet.css'}
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    //"swiper/css/swiper.css",
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    {src: '~plugins/map.js', ssr: false},
    {src: '~/plugins/swiper.js', ssr: false},
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/i18n',
    '@neneos/nuxt-animate.css'
  ],

  i18n: {
    locales: ['en', 'zh', 'cn'],
    defaultLocale: 'zh',
    vueI18nLoader: true,
    vueI18n: {
      fallbackLocale: 'zh',
      messages: {
        "en": {
          "title_home": "Home",
          "title_about": "About",
          "title_services": "Services",
          "title_experience": "Experience",
          "title_salesagent": "Sales Agent",
          "title_contactus": "Contact Us"
        },
        "zh": {
          "title_home": "首頁",
          "title_about": "關於我們",
          "title_services": "業務方案",
          "title_experience": "個案分享",
          "title_salesagent": "品牌代理",
          "title_contactus": "聯絡我們"
        },
        "cn": {
          "title_home": "首页",
          "title_about": "关于我们",
          "title_services": "业务方案",
          "title_experience": "个案分享",
          "title_salesagent": "品牌代理",
          "title_contactus": "联络我们"
        }
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    publicPath: './nuxt/'
  },

  router: {
    mode: "hash"
  }


}
