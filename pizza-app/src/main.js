import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Home from './components/Home'
import Menu from './components/Menu'
import Admin from './components/Admin'
import About from './components/about/About'
import Login from './components/Login'
import Register from './components/Register'

Vue.use(VueRouter)

const routes = [
	{path:'/',component:Home,name:"homelink"},
	{path:'/menu',component:Menu,name:"menulink"},
	{path:'/admin',component:Admin,name:"adminlink"},
	{path:'/about',component:About,name:"aboutlink"},
	{path:'/login',component:Login,name:"loginlink"},
	{path:'/register',component:Register,name:"registerlink"},
	{path:'*',redirect:'/'}
]

const router = new VueRouter({
	routes,
	mode:'history'
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
