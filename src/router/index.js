import Vue from 'vue'
import Router from 'vue-router'
import Articles from '@/components/Articles'
import Blog from '@/components/Blog'
import NewArticle from '@/components/NewArticle'
import EditArticle from '@/components/EditArticle'
import Account from '@/components/Account'
import Login from '@/components/Login'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Articles',
      component: Articles
    },
    {
      path: '/account',
      name: 'Account',
      component: Account
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/article/new',
      name: 'NewArticle',
      component: NewArticle
    },
    {
      path: '/article/:id',
      name: 'Blog',
      component: Blog
    },
    {
      path: '/article/:id/edit',
      name: 'EditArticle',
      component: EditArticle
    },
  ]
})
