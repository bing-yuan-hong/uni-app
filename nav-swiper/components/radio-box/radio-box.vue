<template>
	<view class="radio-box flex paddind-tb-sm padding-lr align-center">
		<view class="icon-radio cuIcon-notification margin-right-sm"></view>
		<view class="radio-box_con flex align-center">
			<swiper class="swiper-box_radio" vertical :autoplay="true" :interval="6000" circular :duration="1000">
				<swiper-item class="flex align-center">
					<view class="swiper-item flex align-center">多端小程序即将上线</view>
				</swiper-item>
				<swiper-item class="flex align-center">
					<view class="swiper-item">使用uni-app框架开发，支持多端小程序</view>
				</swiper-item>
			</swiper>
		</view>
	</view>
</template>

<script>
	export default {
		props:{
			radioList:{
				type:Array,
				default(){
					return []
				}
			}
		},
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss">
	.radio-box{
		background-color: #fff;
		.icon-radio{
			font-size: 20px;
			color: #ff0000;
		}
		.radio-box_con{
			width: 100%;
			padding-top: 5px;
			padding-bottom: 5px;
			height:40px;
			box-sizing: border-box;
			.swiper-box_radio{
				width: 100%;
				height:30px;
				padding-top: 5px;
				padding-bottom: 5px;
				box-sizing: border-box;
				display: flex;
				align-items: center;
			}
			.swiper-item{
				color: #999;
			}
		}
	}
</style>
