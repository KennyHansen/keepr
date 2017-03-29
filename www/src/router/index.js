import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Login from '@/components/Login'
import Register from '@/components/Register'
import Keeps from '@/components/Keeps'
import Vaults from '@/components/Vaults'

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
      path: '/vaults',
      name: 'vaults',
      component: Vaults
    },
    {
      path: '/vaults/:id',
      name: 'vault',
      component: Vault
    }
  ]
})
