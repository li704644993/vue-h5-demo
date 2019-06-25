import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home.vue'
import MainLayout from '@/components/layout/MainLayout.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/',
      name: 'layout',
      component: MainLayout,
      children: [
        {
          path: 'test',
          name: 'test',
          component: () => import('@/views/Test.vue')
        }
      ]
    }
  ]
})
