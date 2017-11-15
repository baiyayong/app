
import Vue from 'vue'
import App from './App'
import router from './router'
import './mock/mockServer'
import './common/stylus/fonts.styl'
import '../src/filters'
import vueResource from 'vue-resource'
import store from './store'
Vue.use(vueResource)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h =>h(App)
})
