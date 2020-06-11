<template>
	<view>
		<navBar :options="options"></navBar>
		<view v-for="(item,index) in 100" :key="index">
			{{item}} 详情页面
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				options: {
					navBackground:"#ffffff",
					statusBarTextColor:'#000000', //仅支持 #ffffff or #000000
					titleDefault:'商品详情',
					swiperList: []
				}
			}
		},
		onLoad() {
			setTimeout(()=>{
				this.options.swiperList = ['222222','3333333','666666666']
			},2000)
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
