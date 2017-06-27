<template>
	<div id="index_content">
		<div class="index_banner">
			<mt-swipe :auto="4000">
				<mt-swipe-item  v-for="arr in bannerArr" key={arr}>
					<img v-bind:src="arr.picUrl" />
				</mt-swipe-item>
			</mt-swipe>
		</div>
		<div class="index_nav">
			<ul>
				<li><img src="https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/ae0edc8f-c0de-4aa6-87d3-b6db5ab6de4e.jpg" alt="本周特惠" /></li>
				<li><img src="https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/708cfd59-fb71-4f17-b925-11c2de96c00f.jpg" alt="超值团购" /></li>
				<li><img src="https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/561ab20b-6c98-4f5c-92ac-cf2dcd132844.jpg" alt="充值优惠" /></li>
				<li><img src="https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/832af3ad-aa72-40aa-8c41-98ef436c4a9d.jpg" alt="免费送礼" /></li>
			</ul>
		</div>
		<div class="index_list">
			<ul class='list_top'>
				<li v-for="arr in goodsImg">
					<img :src="arr.items[0].imgUrl "/>
				</li>
   
			</ul>
		</div>
	</div>
</template>

<script>
	import MyAjax from './../md/MyAjax.js'
	export default {
		data() {
			return {
				bannerArr: [],
				goodsImg: []
			}
		},
		mounted() {
			//写dom,ajax的地方
			//注意ajax中的this指向
			var that = this;
			//banner图
			var bannerUrl = "http://api5.wochu.cn/client/v1/app/layoutamend?parameters=%7B%22version%22%3A%2210.0.0%22%2C%22source%22%3A%22H%22%7D";
			MyAjax.fetch(bannerUrl, function(data) {
				that.bannerArr = data.data.carousel;
				//console.log(data)
				//console.log('banner', data.data.carousel)
			}, function(err) {
				console.log(err)
			}) 
			//list
			var goodsImgUrl = "http://api5.wochu.cn/client/v1/actsamend?parameters=%7B%22version%22%3A%2220.0.0%22%2C%22source%22%3A%22H%22%7D";
			MyAjax.fetch(goodsImgUrl, function(data) {
				//console.log(data)
//				console.log('首页列表图片',data.data.acts)
				that.goodsImg = data.data.acts;

			}, function(err) {
				console.log(err)
			})
		}
	}
</script>

<style>
	.index_banner {
		height: 1.66rem;
	}
	
	.mint-swipe-indicator.is-active {
		background: #fff;
		opacity: 1;
	}
</style>