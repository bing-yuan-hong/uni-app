<template>
	<view>
		<!-- 自定义导航栏 -->
		<navBar :options="options"></navBar>
		<view class="swiper-box">
			<swiper-box class="response margin-bottom-sm" :height='320' :indicatorDots="false" :imgList="imgList"></swiper-box>
		</view>
		<view class="product-info">
			<view class="title-box flex justify-start align-center padding-top padding-lr bg-white">
				<view class="title-box_txt margin-right">
					飞科（FLYCO）电吹风机家用FH6232大功率吹风筒 2000W
				</view>
				<view class="flex align-center">
					<view class="flex flex-direction align-center justify-center flex-shrink padding-lr-sm">
						<view class="cuIcon-share"></view>
						<view class="text-xs">
							分享
						</view>
					</view>
					<view class="flex flex-direction align-center justify-cente flex-shrink padding-lr-sm">
						<view class="cuIcon-like"></view>
						<view class="text-xs">
							收藏
						</view>
					</view>
				</view>
			</view>
			<view class="product-price text-red bg-white padding-lr padding-top-xs padding-bottom-xs margin-bottom-sm">
				<text class="text-price text-xxl"></text>
				<text class="text-xxl">55.00</text>
			</view>
			<view class="">
				
			</view>
		</view>
		<view class="padding-sm bg-white">
			<view class="flex justify-between align-center text-sm margin-bottom">
				<view class="text-grey">
					快递:免费
				</view>
				<view class="text-grey">
					销量：3004件
				</view>
				<view class="text-grey">
					点击量：3433
				</view>
			</view>
			<view class="flex justify-start align-center text-sm padding-bottom-xs">
				<text class="margin-right">7天无理由退货</text>
				<text class="margin-right-lg">闪电退款</text>
				<text>货到付款</text>
				<text class="cuIcon-right margin-left-auto"></text>
			</view>
		</view>
		
		
		
		<view class="cu-bar bg-white tabbar border shop foot">
			<view class="action text-black">
			  <view class="cuIcon-shop"></view> 首页
			</view>
		    <button class="action" open-type="contact">
		      <view class="cuIcon-service text-black">
		        <view class="cu-tag badge"></view>
		      </view>
		      客服
		    </button>
		   
		    <view class="action">
		      <view class="cuIcon-cart">
		        <view class="cu-tag badge">99</view>
		      </view>
		      购物车
		    </view>
			<view class="bg-orange submit">加入购物车</view>
		    <view class="bg-red submit">立即购买</view>
		  </view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				options: {
					navBackground: "#fff",
					statusBarTextColor: '#000', //仅支持 #ffffff or #000000
					titleDefault: '商品详情',
					swiperList: []
				},
				imgList: [
					'https://fangxinoss.1fangxin.net/member/sources/5af7cf115e7f0.jpg',
					'https://fangxinoss.1fangxin.net/member/source/5b36f22a6ace2.jpg',
					'https://fangxinoss.1fangxin.net/member/sources/5af7cf115e7f0.jpg'
				],
				id: ''
			}
		},
		onLoad(options) {
			this.id = options.id
		},
		onShow() {

		},
		methods: {

		}
	}
</script>

<style>

</style>
