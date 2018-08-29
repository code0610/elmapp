<!-- 商品展示  -->
<style>
  .goods{
    display: flex;
  }
  .goods-menu{
    width: 26%;
    height: auto;
    /*align-self: stretch;*/
    background-color: gainsboro;
  }
  .goods-menu ul li{
    height: 50px;
    text-align: left;
    padding-left: 12px;
    padding-right: 3px;
    /*line-height: 50px;*/
    display: flex;
    align-items: center;
    /*font-family: "微软雅黑";*/
    color: #3c3b3b;
    line-height: 18px;
    border-bottom: solid 1px #d4cbcb;
  }
  .goods-menu ul li.active{
    background-color: white;
  }
  .goods-foots{
    background-color: gainsboro;
  }
</style>
<template>
  <div class="goods">
    <div class="goods-menu">
      <ul>
        <li class="active">热销榜</li>
        <li>单人特色套餐</li>
        <li>特色粥品</li>
        <li>热销榜</li>
        <li>单人特色套餐</li>
        <li>特色粥品</li>
        <li>热销榜</li>
        <li>单人特色套餐</li>
        <li>特色粥品</li>
        <li>热销榜</li>
        <li>单人特色套餐</li>
        <li>特色粥品</li>
      </ul>
    </div>
    <div class="goods-foots">
      <vgoods-foots-item></vgoods-foots-item>
    </div>
  </div>

</template>

<script>
  import GoodsFootsItem from "@/components/Goods/goods-foots/Goods-foots-item"
  export default {
    data:function(){
      return {

      }
    },
    components:{
      vgoodsFootsItem:GoodsFootsItem
    }
  }
</script>

