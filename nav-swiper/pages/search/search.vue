<template>
	<view class="search-history bg-white">
		<view class="flex home-header align-center">
			<view v-if="!is_history" @click="showSelectModal" class="flex flex-twice flex-direction align-center justify-center padding-top-sm padding-left-sm">
				<view class="cuIcon-sort icon-sort"></view>
				<view class="sort-box">分类</view>
			</view>
			<search-box class="response" :isSearch=true @search="onTabSearch"></search-box>
		</view>
		<view v-if="!is_history" class="flex justify-around align-center search-con padding-tb-sm solid-bottom">
			<view class="text-red">
				综合
			</view>
			<view class="">
				销量
			</view>
			<view class="flex align-center justify-center">
				<view class="">价格</view>
				<view class="flex flex-direction align-center justify-center text-0">
					<view class="cuIcon-triangleupfill icon up"></view>
					<view class="cuIcon-triangledownfill icon down"></view>
				</view>
			</view>
		</view>
		
		<view v-if="is_history" class="home-list padding-sm">
			<view class="flex justify-between align-center">
				<view class="">
					历史搜索
				</view>
				<view class="icon-del cuIcon-delete text-xl text-red"></view>
			</view>
			<view v-if="historyLists.length > 0" class="label-content flex flex-wrap margin-bottom">
				<view class="label-content__item" v-for="(item,index) in historyLists" :key="index">
					{{item.name}}
				</view>
			</view>
			<view v-else class="no-data">
				没有搜索历史
			</view>
			
			<view class="flex justify-between align-center">
				<view class="">
					热门搜索
				</view>
				<view class="icon-del cuIcon-eye text-xl text-red"></view>
			</view>
			<view v-if="historyLists.length > 0" class="label-content flex flex-wrap">
				<view class="label-content__item" v-for="(item,index) in historyLists" :key="index">
					{{item.name}}
				</view>
			</view>
			<view v-else class="no-data">
				没有搜索历史
			</view>
		</view>
		<view v-else class="">
			<product-list class="response" :list="productList"></product-list>
		</view>
		<view class="cu-modal drawer-modal justify-end" :class="{'show':is_showSelect}" @click="hideSelectModal">
		  <view class="cu-dialog basis-lg" catchtap :style="{top:CustomBar+'px',height:100+'%'}">
		    <view class="cu-list menu text-left">
		      <view class="cu-item arrow" v-for="(item,index) in 5" :key="index">
		        <view class="content">
		          <view>Item {{index +1}}</view>
		        </view>
		      </view>
		    </view>
		  </view>
		</view>

	</view>
</template>

<script>
	import {mapState} from 'vuex'
	export default {
		data() {
			return {
				CustomBar:0,
				is_showSelect:false,
				is_history:true,
				productList:[{
					path:'https://fangxinoss.1fangxin.net/member/sources/5af7cf115e7f0.jpg',
					title:'使用uni-app框架开发，支持多端小程序,一键生成多端一键生成多端一键生成多端',
					price:'1200'
				},
				{
					path:'https://fangxinoss.1fangxin.net/member/source/5b36f22a6ace2.jpg',
					title:'使用uni-app框架开发，支持多端小程序,一键生成多端一键生成多端一键生成多端一键生成多端',
					price:'1200'
				},
				{
					path:'https://fangxinoss.1fangxin.net/member/sources/5af7cf115e7f0.jpg',
					title:'使用uni-app框架开发，支持多端小程序,一键生成多端一键生成多端一键生成多端一键生成多端',
					price:'1200'
				}]
				 // historyLists: []
			}
		},
		computed:{
			...mapState(['historyLists'])
		},
		methods: {
			onTabSearch(value){
				console.log(value)
				this.is_history = false
				this.$store.dispatch('set_history',{name:value})
			},
			showSelectModal(){
				this.is_showSelect = true
			},
			hideSelectModal(){
				this.is_showSelect = false
			},
		}
	}
</script>

<style lang="scss">
	.search-history {
		display: flex;
		flex-direction: column;
		.search-con{
			
			.text-0{
				font-size: 0;
			}
			.icon{
				font-size: 14px;
			}
			.up{
				margin-bottom: -10px;
			}
			.down{
				// margin-top: -5px;
			}
		}
		.home-header{
			.icon-sort{
				font-size: 20px;
			}
			.sort-box{
				width: 25px;
			}
		}
		
		.home-list {
			.icon-del{
				font-size: 16px;
			}
			.label-content__item {
				padding: 2px 10px;
				margin-top: 12px;
				margin-right: 10px;
				border-radius: 10px;
				border: 1px solid #666;
				font-size: 14px;
				color: #666;
			}
		}
	}

	.no-data {
		height: 80px;
		line-height: 80px;
		width: 100%;
		text-align: center;
		font-size: 12px;
		color: #666;
	}
</style>
