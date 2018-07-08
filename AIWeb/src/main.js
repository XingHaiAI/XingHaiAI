// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import qs from 'qs'
import animate from 'animate.css'


Vue.config.productionTip = false

Vue.prototype.$axios = axios


/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  router,

  created () {
    this.$axios.defaults.baseURL='http://localhost:8080'

  },
  components: { App },
  template: '<App/>'
})
