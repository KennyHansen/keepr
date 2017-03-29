import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Login from '@/components/Login'
import Register from '@/components/Register'
import Keeps from '@/components/Keeps'
import Dashboard from '@/components/Dashboard'
import ActiveVault from '@/components/ActiveVault'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/keeps',
      name: 'Keeps',
      component: Keeps
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard
    },
    {
      path: '/vaults/:id',
      name: 'Active vault',
      component: ActiveVault
    }
  ]
})
