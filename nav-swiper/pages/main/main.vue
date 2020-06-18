<template>
	<view class="content">
		<search-box class="response" @search="onTabSearch"></search-box>
		<swiper-box class="response margin-bottom-sm" :imgList="imgList"></swiper-box>
		<radio-box class="response"></radio-box>
		<image class="logo" src="/static/logo.png" @click="goToPage()"></image>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				imgList:[
					'https://fangxinoss.1fangxin.net/member/sources/5af7cf115e7f0.jpg',
					'https://fangxinoss.1fangxin.net/member/source/5b36f22a6ace2.jpg',
					'https://fangxinoss.1fangxin.net/member/sources/5af7cf115e7f0.jpg'
				],
			}
		},
		onLoad() {
			console.log(this.$api)
		},
		onTabItemTap(e) {
			console.log(e)
		},
		methods: {
			onTabSearch(value){
				uni.showToast({
					title:value
				})
			},
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

<style lang="scss">
	page{
		background-color: #f5f5f5;
	}
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
