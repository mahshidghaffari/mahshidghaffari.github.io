import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { loadLanguageAsync } from '@/composables/lang';
import {DEF_LANG, SUPPORTED_LANG_TYPE} from "@/composables/constants";

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/contact',
    name:'contact',
    component: () => import(/* webpackChunkName: "about" */ '../views/ContactView.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
router.beforeEach((to, from, next) => {
  const lang = to.params.lang || localStorage.getItem("lang") || DEF_LANG
  loadLanguageAsync(lang as SUPPORTED_LANG_TYPE).then(()=> {
    console.log("here 0")
    next()
  })
});



export default router
