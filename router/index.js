import VueRouter from 'vue-router'
import Vue from 'vue'
import HomeEn from '@/pages/home/index_en'
import HomeZh from '@/pages/home/index_zh'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  routes:[
    {
      path: '/',
      redirect:'/home/zh'
    },
    {
      path: '/home/zh',
      component:HomeZh
    },
    {
      path: '/home/en',
      component:HomeEn
    },
    {path: '/about', component:()=>import("@/pages/about")},
  ]
})