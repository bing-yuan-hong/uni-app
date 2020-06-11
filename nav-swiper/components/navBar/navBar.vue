<template>
	<view class="navbar">
		<view class="navbar-fixed" :style="{backgroundColor:options.navBackground}">
			<!-- 状态栏 -->
			<view :style="{height:statusBarHeight+'px'}"></view>
			<view class="navbar-content" :style="{height:navBarHeight+'px',width:windowWidth+'px',paddingRight:menuButton?0:10+'px'}">
				<view class="icon-box">
					<uni-icons v-if="showHomeBnt" @click="goHome()" type="home" :color="options.statusBarTextColor" size="22"></uni-icons>
					<uni-icons v-else @click="goBack()" type="arrowleft" :color="options.statusBarTextColor" size="22"></uni-icons>
				</view>
				<view class="navber-search" :style="{width:titleWidth+'px'}">
					<swiper v-if='options.swiperList.length>0' :style="{width:titleWidth+'px',}" style="height:30px;line-height:30px;text-align:center;" class="swiper-box flex flex-direction justify-between"
					 vertical :autoplay="options.swiperList.length>0" display-multiple-items="1" circular :interval="2000">
						<swiper-item v-for="(item,index) in options.swiperList" :key="index" :style="{color:options.statusBarTextColor}" catchtouchmove='true'>
							{{item}}
						</swiper-item>
					</swiper>
					<view v-else :style="{color:options.statusBarTextColor}">{{options.titleDefault}}</view>
				</view>
				<view class="icon-box" v-if="!menuButton"></view>
			</view>
		</view>
		<view :style="{height:statusBarHeight+ navBarHeight+'px'}"></view>
	</view>
</template>

<script>
	import uniIcons from "@/components/uni-icons/uni-icons.vue"
	export default {
		name: 'NavBar',
		components: {
			uniIcons
		},
		props: {
			options: {
				type: Object,
				default: function() {
					return {
						navBackground: '#f07373',
						statusBarTextColor: '#000000', //仅支持 #ffffff or #000000
						titleDefault: '详情信息',
						swiperList: []
					}
				}
			}
		},
		data() {
			return {
				statusBarHeight: 20,
				navBarHeight: 45,
				windowWidth: 375,
				titleWidth: 200,
				menuButton: false,
				showHomeBnt: false
			};
		},
		created() {
			console.log('传值', this.options)
			// 获取手机信息
			const info = uni.getSystemInfoSync();
			this.statusBarHeight = info.statusBarHeight;
			this.windowWidth = info.windowWidth
			this.titleWidth = info.windowWidth - 70
			// 获取胶囊位置
			// #ifndef H5 || APP-PLUS ||MP-ALIPAY
			const menuButtonInfo = uni.getMenuButtonBoundingClientRect();
			this.navBarHeight = (menuButtonInfo.bottom - info.statusBarHeight) + (menuButtonInfo.top - info.statusBarHeight)
			this.windowWidth = menuButtonInfo.left
			this.titleWidth = menuButtonInfo.left - 25 - menuButtonInfo.width + 10
			this.menuButton = true
			// #endif
			
			// 设置状态栏颜色 开始
			uni.setNavigationBarColor({
				frontColor: this.options.statusBarTextColor,
				backgroundColor: this.options.navBackground,
				animation: {
					duration: 400,
					timingFunc: 'easeIn'
				}
			})
			// 设置状态栏颜色 结束
			// this.swiperList = this.options.swiperList.length?this.options.swiperList:[]
			// this.titleDefault = this.options.titleDefault?this.options.titleDefault:'详情信息'
			
			console.log(this.options.navBackground)
			
			
			const pages = getCurrentPages()
			if (pages.length === 1) {
				this.showHomeBnt = true
			} else {
				this.showHomeBnt = false
			}
		},
		methods: {
			goHome() {
				console.log('首页')
				uni.switchTab({
					url: "../../pages/index/index"
				})
			},
			goBack() {
				console.log('返回上一级')
				uni.navigateBack({
					delta: 1
				})
			}
		}
	}
</script>

<style lang="scss">
	$mk-base-color:#f07373;

	.navbar {
		.navbar-fixed {
			position: fixed;
			top: 0;
			left: 0;
			z-index: 99;
			width: 100%;
			// background-color: $mk-base-color;

			.navbar-content {
				display: flex;
				justify-content: space-between;
				align-items: center;
				padding-left: 10px;
				box-sizing: border-box;

				.icon-box {
					text-align: left;
					width: 25px;
				}

				.navber-search {
					display: flex;
					align-items: center;
					justify-content: center;
					width: 120px;
					height: 30px;
					color: #fff;

					.swiper-box {
						display: flex;
						justify-content: center;
					}

					.navber-search_icon {
						width: 10px;
						height: 10px;
						margin-right: 10px;
						border: 1px solid red;
					}

					.navber-search_text {
						font-size: 12px;
						color: #999;
					}
				}
			}

		}
	}
</style>
