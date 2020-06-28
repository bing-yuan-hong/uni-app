<template>
	<view>
		搜索列表
	</view>
</template>

<script>
	export default {
		data() {
			return {
				value:''
			}
		},
		onLoad(options) {
			this.searchValue = options.value
			
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
