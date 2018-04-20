import Vue from 'vue'
import Router from 'vue-router'
import ContentHome from '@/components/ContentHome'
import ContentAbout from '@/components/ContentAbout'
import ContentProjects from '@/components/ContentProjects'
import ContentContact from '@/components/ContentContact'
import ContentAbilities from '@/components/ContentAbilities'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ContentHome',
      component: ContentHome
    },
    {
      path: '/about',
      name: 'ContentAbout',
      component: ContentAbout
    },
    {
      path: '/projects',
      name: 'ContentProjects',
      component: ContentProjects
    },
    {
      path: '/contact',
      name: 'ContentContact',
      component: ContentContact
    },
    {
      path: '/abilities',
      name: 'ContentAbilities',
      component: ContentAbilities
    }
  ]
})
