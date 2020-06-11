<template>
	<view class="content">
		<!-- 自定义导航栏 -->
		<navBar :options="options"></navBar> 
		<image class="logo" src="/static/logo.png" @click="goToPage()"></image>
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
		onLoad() {
			console.log(this.$api)
		},
		onTabItemTap(e) {
			console.log(e)
		},
		methods: {
			getLabel(){
				this.$api.get_label({
					name:'get_label'
				}).then((res)=>{
					
				}).catch((err)=>{
					
				})
			},
			goToPage(){
				uni.navigateTo({
					url:"../detail/detail"
				})
			}
		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
