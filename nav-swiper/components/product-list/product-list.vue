<template>
	<view class="bg-white padding product">
		<view class="grid col-2 grid-square">
			<view class="solid" v-for="(item,index) in list" :key="index">
				<view class="bg-img flex">
					<image class="product-img" :src="item.path" mode="aspectFit"></image>
				</view>
				<view class="detail padding-xs">
					<view class="text-cut-2 text-df">
						{{item.title}}
					</view>
					<view class="price text-red flex justify-start align-center">
						<text class="text-price text-xl"></text>
						<text class="text-xl margin-right-xs">{{item.price}}</text>
						<view class="cu-tag bg-orange">包邮</view>
					</view>
				</view>
			</view>

		</view>
	</view>
</template>

<script>
	export default {
		props: {
			list: {
				type: Array,
				default () {
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
	.product {
		.product-img {
			height: 120px;
		}

		.grid.col-2.grid-square>view {
			padding-bottom: unset;
			height: unset;
		}

		.grid.grid-square .cu-tag {
			position: unset;
			right:unset;
			top: unset;
			border-bottom-left-radius:unset;
			padding:unset;
			height: unset;
			background-color: unset;
			border: 1px solid #E54D42;
			padding: 0 6px;
			color: #E54D42;
		}

	}
</style>
