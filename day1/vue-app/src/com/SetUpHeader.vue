<template>
 <div class="setUpHeader">
 	<i class="iconfont" @click="backHander()">&#xe657;</i>
 	<p>设置</p>
 	<p></p>
 </div>
</template>

<script>
	import router from './../router'
 export default{
 	methods:{
 		backHander(){
 			router.go(-1)
 		}
 	}
 }
</script>

<style>

</style>