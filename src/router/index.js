import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Landing from '@/views/Landing.vue'
import Onboarding from '../views/Onboard.vue'
import Home from '../views/Home.vue'
import Profile from '../views/Profile.vue'
import AddTransact from '../views/AddTransact.vue'
import TransExpense from '../views/TransExpense.vue'
import TransIncome from '../views/TransIncome.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'LandingPage',
      component: Landing,
      // children: [
      //   {
      //     path: '/onboard',
      //     name: 'Onboarding',
      //     component: Onboarding,
      //   },
      //   {
      //     path: '/profile',
      //     name: 'Profile',
      //     component: Profile,
      //   },
      //   {
      //     path: '/addtransact',
      //     name: 'AddTransaction',
      //     component: AddTransact,
      //   }
      // ]
    },
    {
      path: '/onboard',
      name: 'Onboarding',
      component: Onboarding,
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile,
    },
    {
      path: '/addtransact',
      name: 'AddTransaction',
      component: AddTransact,
    },
    {
      path: '/transexpense',
      name: 'TransExpense',
      component: TransExpense,
    },
    {
      path: '/transincome',
      name: 'TransIncome',
      component: TransIncome,
    },
  ]
})
