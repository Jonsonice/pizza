import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import {
	routes
} from './routes'
// const前加export  再引入

Vue.use(VueRouter)


const router = new VueRouter({
	routes,
	mode: 'history'
})


new Vue({
	el: '#app',
	router,
	render: h => h(App)
})
