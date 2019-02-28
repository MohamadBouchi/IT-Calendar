import Vue from 'vue'
import Router from 'vue-router'
import HomeOffice from './views/HomeOffice.vue'
import Vacation from './views/Vacation.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'homeoffice',
      component: HomeOffice
    },
    {
      path: '/vacation',
      name: 'vacation',
      component: Vacation
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component: () => import(/* webpackChunkName: "about" */ './views/vacation.vue')
    }
  ]
})
