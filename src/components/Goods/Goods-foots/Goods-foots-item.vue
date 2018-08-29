<template>
  <div class="goods-foots-content">
    <div class="goods-foots-title">单人特色套餐</div>
    <div class="goods-foots-item" v-for="item in items">
      <img class="goods-foots-item-icon" src="http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114" />
      <div class="goods-foots-item-text">
        <p class="text-title">皮蛋瘦肉粥配包子套餐</p>
        <p class="text-type">咸粥</p>
        <p class="text-msg">月售1132份，好评率100%</p>
        <p class="text-pay"><span>￥24</span><span>￥28</span></p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name:"goodFootsItem",
    data:function(){
      return {
        items:[1,1,2,3,4,5]
      }
    }
  }
</script>

<style scoped>
  .goods-foots-title{
    height: 30px;
    background-color: gainsboro;
    border-left: solid 2px gainsboro;
    padding-left: 10px;
    line-height: 30px;
    color: #807c7c;
  }
  .goods-foots-item{
    display: flex;
    border-bottom: solid 1px #e6dfdf;
    background-color: white;
    padding-bottom: 15px;
  }
  .goods-foots-item-icon{
    width: 80px;
    height: 85px;
    padding: 15px 10px 15px 10px;
  }
  .goods-foots-item-text{
    font-size: 16px;
    padding-top: 15px;
    /*font-weight: 700;*/
  }
  .text-title{
    font-weight: 700;
    margin-bottom: 8px;
    /*color: #606060;*/
    /*font-size: ;*/
  }
  .text-type{
    margin-bottom: 8px;
    color: #606060;
  }
  .text-msg{
    font-size: 14px;
    color: #606060;
  }
  .text-pay{
    margin-top: 10px;
  }
  .text-pay span:nth-child(1){
    color: red;
    font-weight: 700;
    font-size: 16px;
  }
  .text-pay span:nth-child(2){
    text-decoration: line-through;
    font-weight: 700;
    font-size: 16px;
    margin-left: 10px;
    color: #747474;
  }
</style>
