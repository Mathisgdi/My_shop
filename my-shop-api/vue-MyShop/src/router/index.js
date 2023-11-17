import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'
import Test from '../views/Test.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Admin from '../views/Admin.vue'
import AdminOrUsers from '../views/AdminOrUsers.vue'




const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/test',
      name: 'test',
      component: Test
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/admin',
      name: 'admin',
      component: Admin
    },
    {
      path: '/testgrid',
      name: 'testgrid',
      component: testgrid
    },
    {
      path: '/adminorusers',
      name: 'adminorusers',
      component: AdminOrUsers
    },
  ]
})

export default router
