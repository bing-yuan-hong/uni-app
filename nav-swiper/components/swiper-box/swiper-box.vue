<template>
	<view>
		<swiper class="swiper-box" :style="{height: height+'px'}" :indicator-dots="indicatorDots" :autoplay="true" circular indicator-active-color="#ffffff" :interval="5000" :duration="1000">
			<swiper-item v-for="(item,index) in imgList" :key="index">
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
			height:{
				type:[Number,String],
				default:180
			},
			indicatorDots:{
				type:Boolean,
				default:true
			},
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
		background-color: #fff;
		.swiper-item{
			width: 100%;
			height: 100%;
			.img-box{
				height: 100%;
			}
		}
	}
	
</style>
