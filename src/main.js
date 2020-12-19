import Vue from 'vue'
import App from './App.vue'
import router from '../router'
import $ from "jquery"
import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'

Vue.config.productionTip = false
new Vue({
  $,
  router,
  render: h => h(App),
  mounted() {
    document.dispatchEvent(new Event('render-event'))
  },
}).$mount('#app')
