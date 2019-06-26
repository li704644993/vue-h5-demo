import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        title: "home title",    //要现实的title
    }
    },
    {
      path: '/test',
      name: 'test',
      component: () => import('@/views/Test.vue'),
      meta: {
        title: "title test",
      }
    },
    // {
    //   path: '/',
    //   name: 'navbar',
    //   //component: NavbarLayout,
    //   children: [
    //     {
    //       path: 'test',
    //       name: 'test',
    //       component: () => import('@/views/Test.vue')
    //     }
    //   ]
    // }
  ]
})
