import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/ydcell',
      name: 'ydcell',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/ydcell.vue')
    },
    {
      path: '/storedetail',
      name: 'storedetail',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/storedetail.vue')
    },
    {
      path: '/lisert',
      name: 'List',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/List.vue')
    },
    // {
    //   path: '/index',
    //   name: 'index',
    //   component: () => import(/* webpackChunkName: "about" */ './views/index.vue')
    // },
    {
      path: '/index',
      name: 'index',
      redirect:'/food',
      component: () => import('./views/index.vue'),
      children:[
        {
          path:'/food',
          name:'food',
          component:() => import('./views/food.vue')
        }

      ]
    }



  ]
})
