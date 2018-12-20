import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Home from './components/Home'
import Menu from './components/Menu'
import Admin from './components/Admin'
import About from './components/about/About'
import Login from './components/Login'
import Register from './components/Register'

// 二级路由
import Contact from './components/about/Contact'
import Delivery from './components/about/Delivery'
import History from './components/about/History'
import OrderingGuide from './components/about/OrderingGuide'

// 三级路由
import Phone from './components/about/contact/Phone'
import PersonName from './components/about/contact/PersonName'

Vue.use(VueRouter)

const routes = [
	{path:'/',component:Home,name:"homelink"},
	{path:'/menu',component:Menu,name:"menulink"},
	{path:'/admin',component:Admin,name:"adminlink"},
	{path:'/about',component:About,name:"aboutlink",redirect:'/about/history',children:[
		{path:'/about/contact',name:'contactLink',component:Contact,redirect:'/personname',children:[
			{path:'/phone',name:'phoneLink',component:Phone},
			{path:'/personname',name:'personNameLink',component:PersonName}
		]},
		{path:'/about/delivery',name:'deliveryLink',component:Delivery},
		{path:'/about/history',name:'historyLink',component:History},
		{path:'/about/orderingGuide',name:'orderingGuideLink',component:OrderingGuide}
		]
	},
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
