import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/api-styles/composition',
      name: 'CompositionStyle',
      component: () => import('../api-styles/CompositionStyle.vue')
    },
    {
      path: '/api-styles/options',
      name: 'OptionsStyle',
      component: () => import('../api-styles/OptionsStyle.vue')
    },

    // conditional-rendering
    {
      path: '/conditional-rendering/v-if',
      name: 'VIf',
      component: () => import('../conditional-rendering/VIf.vue')
    },
    {
      path: '/conditional-rendering/v-else-if',
      name: 'VElseIf',
      component: () => import('../conditional-rendering/VElseIf.vue')
    },
    {
      path: '/conditional-rendering/v-else',
      name: 'VElse',
      component: () => import('../conditional-rendering/VElse.vue')
    },
    {
      path: '/conditional-rendering/v-show',
      name: 'VShow',
      component: () => import('../conditional-rendering/VShow.vue')
    }
  ]
})

export default router
