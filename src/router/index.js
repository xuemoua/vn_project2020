import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import News from '@/components/News'
import About from '../views/About'
import Manual from '@/components/Manual'
import Notice from '@/components/Notice'
import Contact from '@/components/Contact'
import Search from '../views/search.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'ໜ້າຫຼັກ',
    component: Home
  },
  {
    path: '/news',
    name: 'ຂ່າວສານ',
    component: News
  },
  {
    path: '/about',
    name: 'ອົງກອນ',
    component: About
  },
  {
    path: '/notice',
    name: 'ແຈ້ງການ',
   
    component: Notice
  },
  {
    path: '/manual',
    name: 'ຄູ່ມື',
   
    component: Manual
  },

  {
    path: '/contact',
    name: 'ຕິດຕໍ່',
   
    component: Contact
  },
  {
    path: '/search',
    name: 'ຄົ້ນຫາ',
   
    component: Search
  }
  
 
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
