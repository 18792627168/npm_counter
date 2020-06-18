import Vue from 'vue'
import App from './App.vue'

import vueCounter from './lib/index.js'
Vue.use(vueCounter)

new Vue({
  el: '#app',
  render: h => h(App)
})
