import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginView from '@/views/screen/Auth/Login'
import HomeView from '@/views/screen/LandingPage/Home'
import notFound from '@/views/screen/LandingPage/404'
import DashboardView from '@/views/screen/Admin/Dashboard'
import UsermanagementView from '@/views/screen/Admin/UserManagement'
import AboutView from '@/views/screen/LandingPage/Aboutus'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: LoginView
  },
  {
    path: '/Dashboard',
    name: 'Dashboard',
    component: DashboardView
  },
  {
    path: '/About',
    name: 'About',
    component: AboutView
  },
  {
    path: '/Usermanagement',
    name: 'Usermanagement',
    component: UsermanagementView
  },
  {
    path: '*',
    name: 'notFound',
    component: notFound
  },
  {
    path: '/Home',
    name: 'Home',
    component: HomeView
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})



router.beforeEach((to, from, next)=>{
  const isAuthenticated = JSON.parse(sessionStorage.getItem(('token')))
  if(to.name !== 'Login' && !isAuthenticated) next({name:'Login'});
  if(to.name === 'Login' && isAuthenticated) next({name:'Dashboard'});

  else next()
})


export default router
