import Vue from 'vue'
import Router from 'vue-router'
const Home = () => import('@/views/home.vue');
const About = () => import('@/views/aboutus.vue');
const Team = () => import('@/views/team.vue');
const Contact = () => import('@/views/contact.vue');
const Social = () => import('@/views/social.vue');


Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/team',
      name: 'Team',
      component: Team
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/social',
      name: 'Social Media',
      component: Social
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    return {
      x: 0,
      y: 0
    }
  }
})
