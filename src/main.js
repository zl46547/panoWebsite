import Vue from 'vue'
import App from './App.vue'
import router from '../router'
import $ from "jquery"
import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import MetaInfo from 'vue-meta-info'
import store from '../store'
import "@/assets/font"
Vue.use(MetaInfo)
import i18n from '../i18n'

Vue.config.productionTip = false

new Vue({
  $,
  store,
  i18n,
  router,
  render: h => h(App),
  mounted() {
    document.dispatchEvent(new Event('render-event'))
  },
}).$mount('#app')
