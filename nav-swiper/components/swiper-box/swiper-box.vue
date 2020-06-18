<template>
	<view>
		<swiper class="swiper-box" :indicator-dots="true" :autoplay="true" circular indicator-active-color="#ffffff" :interval="5000" :duration="1000">
			<swiper-item cla v-for="(item,index) in imgList" :key="index">
				<view class="swiper-item">
					<image class="img-box" mode="aspectFill" :src="item"></image>
				</view>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	import uniIcons from "@/components/uni-icons/uni-icons.vue"
	export default {
		components: {
			uniIcons
		},
		props:{
			imgList:{
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
	.swiper-box{
		padding: 0 10px;
		height: 180px;
		background-color: #fff;
		padding-top: 10px;
		padding-bottom: 10px;
		.swiper-item{
			width: 100%;
			height: 180px;
			.img-box{
				height: 100%;
			}
		}
	}
	
</style>
