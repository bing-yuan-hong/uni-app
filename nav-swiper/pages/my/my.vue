<template>
	<view>
		<cu-custom bgColor="bg-gradual-pink" :isBack="true"><block slot="backText">返回</block><block slot="content">操作条</block></cu-custom>
		<!-- <view class="status_bar">
			<!- 这里是状态栏 -->
		<!-- </view> -->
		<view> 状态栏下的文字 </view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {

		}
	}
</script>

<style lang="scss">
	// .status_bar {
	// 	height: var(--status-bar-height);
	// 	width: 100%;
	// }
</style>
