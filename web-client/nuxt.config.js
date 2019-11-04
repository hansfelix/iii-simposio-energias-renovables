const pkg = require('./package')

module.exports = {
  // mode: 'spa',

  /*
  ** Headers of the page
  */
  head: {
    title: 'III Simposio de Energías Renovables',//pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        name: 'description', content: `El III Simposio de Energías Renovables es un evento organizado por la Rama Estudiantil IEEE Universidad de Piura - Sede Lima, Este 2019 tenemos como objetivo fortalecer la red de conocimiento en energías renovables, además de generar espacios de propuestas en el sector energético con viabilidad técnica, social, ambiental y económica para un desarrollo sostenible.`
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon-32x32.png' },
      { rel: 'stylesheet', type: 'text/css', href: 'https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css' },
      { rel: 'stylesheet', type: 'text/css', href: 'https://fonts.googleapis.com/css?family=Raleway:400,600,800&display=swap' },
      { rel: 'stylesheet', type: 'text/css', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css' },
    ],
    script: [
      { src: '/fb-sdk.js' },
      { src: 'https://kit.fontawesome.com/3b64c4f053.js' }
    ],

    plugins: ['~/plugins/firebase.js'],

    build: {
      transpile: [/^vue2-google-maps($|\/)/]
    }
  },

  modules: ['@nuxtjs/style-resources'],
  styleResources: {
    scss: [
      '@/assets/css/main.scss'
    ]
  },

  // css: [
  //   '@/assets/css/main.scss' // use our build, as entered via app.scss
  // ],

  /*   
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  plugins: [{ src: "~/plugins/google-maps.js", ssr: false }],


  build: {
    transpile: [/^vue2-google-maps($|\/)/],

    extend(config, ctx) {
      if (ctx.isDev) {
        config.devtool = ctx.isClient ? 'source-map' : 'inline-source-map'
      }
    }
  }
}
