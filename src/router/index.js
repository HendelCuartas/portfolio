import Vue from 'vue'
import Router from 'vue-router'
import MenuNav from '@/components/MenuNav'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MenuNav',
      component: MenuNav
    }
  ]
})
