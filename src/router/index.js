import Vue from 'vue'
import Router from 'vue-router'
import Landing from '@/views/landing.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'LandingPage',
      component: Landing,
    },
    {
      path: '/onboard',
      name: 'Onboarding',
      component: () => import('../views/onboard.vue'),
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('../views/Login.vue'),
    },
    {
      path: '/home',
      name: 'Home',
      component: () => import('../views/Home.vue'),
    },
    {
      path: '/profile',
      name: 'Profile',
      component: () => import('../views/Profile.vue'),
    },
    {
      path: '/addtransact',
      name: 'AddTransaction',
      component: () => import('../views/AddTransact.vue'),
    },
    {
      path: '/transexpense',
      name: 'TransExpense',
      component: () => import('../views/TransExpense.vue'),
    },
    {
      path: '/transincome/',
      name: 'TransIncome',
      component: () => import('../views/TransIncome.vue'),
      props: true,
    },
  ]
})
