<template>
	<view class="search">
		<view class="search-con padding-lr-sm padding-tb-15 flex justify-start align-center bg-gray response">
			<view class="icon-search cuIcon-search margin-right-sm"></view>
			<view class="search-input">
				<view class="response text-grey" v-if="!isSearch" @click="goToSearch">商品搜索</view>
				<input type="text" v-else class="response" value="" placeholder="请输入要搜索的内容" placeholder-class="text-gray" confirm-type="search" @confirm="onTabSearch" />
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			isSearch: {
				type: Boolean,
				default:false
			}
		},
		data() {
			return {

			};
		},
		methods:{
			onTabSearch(e){
				console.log(e)
				this.$emit('search',e.detail.value)
			},
			goToSearch(){
				uni.navigateTo({
					url:'/pages/search/search'
				})
			}
		}
	}
</script>

<style lang="scss">
	.search {
		width: 100%;
		padding: 10px;
		padding-bottom: 0;
		box-sizing: border-box;
		background-color: #fff;
		.icon-search {
			font-size: 16px;
			color: #999;
		}

		.search-con {
			display: flex;
			width: 100%;
			border-radius: 20px;
			.search-input{
				width: 100%;
			}
		}
	}
</style>
