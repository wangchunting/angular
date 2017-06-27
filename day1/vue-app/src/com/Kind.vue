<template>
	<div id="kind_content">
		<div class="kind_content_left">
			<ul>
				<li v-for="(arr,index) in kindLeftList" @click="activeKind(index)">{{arr}}</li>
			</ul>
		</div>
	<router-view></router-view>
	</div>
</template>

<script>
	import router from './../router'
	import MyAjax from './../md/MyAjax.js';
	export default{
		data(){
			return{
				kindLeftList:["推荐","我厨优选","餐馆名菜","家常净菜","儿童专区","蔬菜","水果","肉禽蛋","水产海鲜","乳饮西点","点心速食","粮油副食"]
			}
		},
		methods:{
			activeKind(index){
				router.push("/kind/kindlist/"+index);
			}
		}
	}
	
</script>
 