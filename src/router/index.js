import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Landing from '@/views/landing.vue'
import Onboarding from '../views/onboard.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'LandingPage',
      component: Onboarding,
      // children: [
      //   {
      //     path: '/onboard',
      //     name: 'Onboarding',
      //     component: Onboarding,
      //   }
      // ]
    },
    //have problems switching to this route
    // {
    //   path: '/onboard',
    //   name: 'Onboarding',
    //   component: Onboarding,
    // }
  ]
})
