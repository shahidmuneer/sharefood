const pkg = require('./package')


module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    
    ]

  },

  /*
  ** Customize the progress-bar color
  */
  loading: {name: 'folding-cube',
  color: 'green',
  background: 'white'},

  /*
  ** Global CSS
  */
  css: [
  ],

  /*
  ** Plugins to load before mounting the App
  */
 plugins: [],

  /*
  ** Nuxt.js modules
  */
  modules: [,
    // Doc: https://bootstrap-vue.js.org/docs/
    'bootstrap-vue/nuxt',
    // Simple usage
 
      // With options
      ['nuxt-google-maps-module', {
        /* module options */
        key: 'AIzaSyB3LPtKY3ubh04GUu6QgFBSFmcOgttAU8w', // Default
      }],
      // Passing options directly
     
  ],

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      
    }
  },
  env: {
    baseUrl:"http://fatshares.com/API/1.0"
  }

}
