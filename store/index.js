import Vue from 'vue'
import Vuex from 'vuex'
import home from './modules/home'
import {getLangType} from '@/utils'

Vue.use(Vuex)

const store = new Vuex.Store({
  state:{
    lang:getLangType()
  },
  modules: {
    home,
  }
})

export default store