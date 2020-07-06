<template>
	<view class="content">
		<search-box class="response" :isSearch="false" @search="onTabSearch"></search-box>
		<view class="padding-sm response bg-white margin-bottom-sm">
			<swiper-box class="response margin-bottom-sm" :imgList="imgList"></swiper-box>
		</view>
		<radio-box class="response margin-bottom-sm"></radio-box>
		<product-list class="response" :list="productList" @goToDetail = 'goToDetail'></product-list>
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
				productList:[{
					id:1,
					path:'https://fangxinoss.1fangxin.net/member/sources/5af7cf115e7f0.jpg',
					title:'使用uni-app框架开发，支持多端小程序,一键生成多端一键生成多端一键生成多端',
					price:'1200'
				},
				{
					id:2,
					path:'https://fangxinoss.1fangxin.net/member/source/5b36f22a6ace2.jpg',
					title:'使用uni-app框架开发，支持多端小程序,一键生成多端一键生成多端一键生成多端一键生成多端',
					price:'1200'
				},
				{
					id:3,
					path:'https://fangxinoss.1fangxin.net/member/sources/5af7cf115e7f0.jpg',
					title:'使用uni-app框架开发，支持多端小程序,一键生成多端一键生成多端一键生成多端一键生成多端',
					price:'1200'
				}]
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
				uni.navigateTo({
					url:"/pages/search/search"
				})
			},
			getLabel(){
				this.$api.get_label({
					name:'get_label'
				}).then((res)=>{
					
				}).catch((err)=>{
					
				})
			},
			goToDetail(item){
				console.log(item)
				uni.navigateTo({
					url:'/pages/detail/detail?id='+item.id
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
