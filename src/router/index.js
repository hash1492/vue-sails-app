import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import ItemsList from '@/components/ItemsList'
import AddUpdateItem from '@/components/AddUpdateItem'
import Login from '@/components/Login'
import Register from '@/components/Register'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: HelloWorld
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
      path: '/items-list',
      name: 'ItemsList',
      component: ItemsList
    },
    {
      path: '/item',
      name: 'AddItem',
      component: AddUpdateItem
    },
    {
      path: '/item/:id',
      name: 'UpdateItem',
      component: AddUpdateItem
    }
  ]
})
