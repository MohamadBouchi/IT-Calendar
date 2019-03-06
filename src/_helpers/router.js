import Vue from 'vue'
import Router from 'vue-router'
import HomeOffice from '../views/HomeOffice.vue'
import Vacation from '../views/Vacation.vue'
import Login from '../views/Login.vue'

Vue.use(Router)

const router = new Router({
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
    },
    { path: '/login', component: Login },
    { path: '*', redirect: '/' }
  ]
})

router.beforeEach((to, from, next) => {
  // redirect to login page if not logged in and trying to access a restricted page
  const publicPages = ['/login'];
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = localStorage.getItem('user');

  if (authRequired && !loggedIn) {
    return next('/login');
  }

  next();
})

export default router