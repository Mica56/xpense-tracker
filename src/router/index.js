import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Landing from '@/views/Landing.vue'
import Onboarding from '../views/Onboard.vue'
import Profile from '../views/Profile.vue'
import AddTransact from '../views/AddTransact.vue'

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
      path: '/profile',
      name: 'Profile',
      component: Profile,
    },
    // {
    //   path: '/addtransact',
    //   name: 'AddTransaction',
    //   component: AddTransact,
    // }
  ]
})
