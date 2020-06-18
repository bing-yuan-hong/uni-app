<template>
	<view>
		<!-- 自定义导航栏 -->
		<navBar :options="options"></navBar> 
	</view>
</template>

<script>
	export default {
		data() {
			return {
				options: {
					navBackground:"#f07373",
					statusBarTextColor:'#ffffff', //仅支持 #ffffff or #000000
					titleDefault:'商品详情',
					swiperList: ['22222','3333333','3444444']
				}
			}
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
