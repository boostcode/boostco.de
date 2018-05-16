// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import VueAnalytics from 'vue-analytics'

import('babel-polyfill')
import('../node_modules/vuetify/dist/vuetify.min.css')

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
})

/* Vue.use(VueAnalytics, {
  id: 'UA-637174-33',
  router: router
}) */
