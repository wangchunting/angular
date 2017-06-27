<template>
	<div class="kind_content_right">
		<div class="list_top" v-for="(arr,index) in listArr" v-show="isShow">
			<h2>{{arr.name}}</h2>
			<ul>
				<li v-for="nkx in listArr[index].children">
					<img :src="nkx.imgUrl" />
					<p>{{nkx.name}}</p>
				</li>
			</ul>
		</div>
		<ul  class="list_other" v-show="!isShow">
			<li  v-for="item in listArr" >
				<img :src="item.checkicon"/>
				<span>{{item.name}}</span>
			</li>
		</ul>
	</div>
</template>

<script>
	import MyAjax from "./../md/MyAjax.js";
	export default {
		data() {
			return {
				recommendArr: [],
				kindListArr: [],
				listArr:[],
				isShow: true
			}
//			this.$route.params.activekind;
//			console.log("我是初始化获得的点击的那一个的索", this.$route.params.activekind)
		},
		watch: {
		    '$route' (to, from) {
		     	var activekind = this.$route.params.activekind;
		     	//调用自定义方法，传入参数，改变列表
				this.changeKindList(activekind);
//				alert(2);
		    }
	    },
		mounted() {
			var that = this;
			var recommendUrl = "http://api5.wochu.cn/client/v1/goods/GetCategoryRecommendList";
			MyAjax.fetch(recommendUrl, function(data) {
				that.recommendArr = data.data;
				that.listArr = that.recommendArr;
			}, function(err) {
				console.log(err)
			});

			var kindlistUrl = "./src/js/kindlist.json";
			MyAjax.fetch(kindlistUrl, function(data) {
				console.log(data);
				that.kindListArr = data;
			}, function(err) {
				console.log(err);
			})

		},
		methods: {
			changeKindList(activekind) {
//				alert(activekind)
				if(activekind == 0) {
					this.listArr = this.recommendArr;
					this.isShow = true;
				} else {
					this.isShow = false;
					this.listArr=this.kindListArr[activekind-1]
				}
//				console.log(this.kindListArr);
			}

		}
	}
</script>

<style>

</style>