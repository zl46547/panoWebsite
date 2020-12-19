import VueRouter from 'vue-router'
import Vue from 'vue'
import Home from '@/pages/home'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  routes:[
    {
      path: '/home',
      title: '拍乐云Pano - 高清实时通信云_实时音视频SDK_顶级音视频团队构建',
      component:Home
    },
    {path: '/about', component:()=>import("@/pages/about")},
  ]
})