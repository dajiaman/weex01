/* global Vue */
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

import Index from '@/pages/index'

Vue.use(Router)

export const router = new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: Index
    }
  ]
})
