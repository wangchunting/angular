<template>
	<div id="myapp">
		<header>
			<router-view name="header"></router-view>
		</header>
		<div id="content">
			<router-view name="content"></router-view>
		</div>
		<!--footer标签不包是因为每个底部都可能不一样-->
			<router-view name="footer"></router-view>
	</div>
</template>

<script>
	export default {
		
	}
</script>

<style>

</style>