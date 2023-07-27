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

// load the default lang file or local storage one
router.beforeEach((to, from, next) => {
  const lang = to.params.lang || localStorage.getItem("lang") || DEF_LANG
  loadLanguageAsync(lang as SUPPORTED_LANG_TYPE).then(()=> {
    next()
  })
});



export default router
