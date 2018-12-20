<template>
	<div>
		<h1>Home</h1>
		<button @click="goToUp" class="btn btn-success">返回上一页</button>
		<button @click="goToMenu" class="btn btn-success">Menu</button>
		<button @click="goToAbout" class="btn btn-success">About</button>
		<button @click="goToLogin" class="btn btn-success">Login</button>
	</div>
</template>
<script>
	export default{
		methods:{
			goToUp(){
				//跳转到上一次浏览的页面
				this.$router.go(-1)
			},
			goToMenu(){
				//跳转到指定地址
				this.$router.replace('/menu')
			},
			goToAbout(){
				//指定跳转路由的名字下
				this.$router.replace({name:'aboutlink'})
			},
			goToLogin(){
				// 通过push进行跳转
				// this.$router.push({name:'loginlink'})
				this.$router.push('/login')
			}
		}
	}
</script>