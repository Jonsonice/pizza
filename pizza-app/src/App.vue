<template>
  <div id="app">
		<div class="container">
			<app-header></app-header>
		</div>
		<div class="container">
			<router-view></router-view>
		</div>
  </div>
</template>

<script>
import Header from './components/Header';
	
export default {
	components:{
		appHeader:Header
		//驼峰不要需要引号
	}
}
</script>

<style>

</style>
