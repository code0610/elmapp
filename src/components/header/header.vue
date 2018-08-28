<template>
    <div class="header">
      <div  class="header-content">
        <div class="header-content-bg">
          <img class="header-storeImage" src="http://static.galileo.xiaojukeji.com/static/tms/seller_avatar_256px.jpg" />
          <div class="header-content-cont">
            <div class="header-content-title">
              <img src="../header/brand@2x.png"/>
              <div class="header-content-title-text">粥品香坊（大运村）</div>
            </div>
            <div class="header-content-goto">
              蜂鸟专送/30分钟送达
            </div>
            <div class="header-content-pay">
              <img src="../header/decrease_1@2x.png" />
              在线支付满28减5、满50减10
            </div>
          </div>
        </div>
      </div>
        <div class="header-content-msg">
          <img src="../header/bulletin@2x.png" />
          <div class="header-content-msg-text">粥品香坊其烹饪粥料的秘方源于中国千年古法，再融合...</div>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">


</script>

<style scoped>
  .header-storeImage{
    width: 80px;
    height: 80px;
    margin-right: 15px;
    border-radius: 7px;
  }
  .header-content{
    width: 100%;
    height: 100%;
    background-image: url("http://static.galileo.xiaojukeji.com/static/tms/seller_avatar_256px.jpg");
  }
  .header-content-bg{
    display: flex;
    padding: 30px 30px 20px 30px;
    background: #545353;
    opacity: 0.9;
  }
  .header-content-title{
    display: flex;
    margin-top: 10px;
  }
  .header-content-title img{
    width: 30px;
    height: 17px;
    margin-left: 5px;
  }
  .header-content-title-text{
    color: white;
    font-size: 16px;
    margin-left: 5px;
  }
  .header-content-goto{
    margin-top: 8px;
    color: #cecaca;
    font-size: 14px;
    margin-bottom: 10px;
  }
  .header-content-pay{
    color: #cecaca;
    display: flex;
    font-size: 14px;
  }
  .header-content-pay img{
    width: 14px;
    height: 14px;
    margin-right: 5px;
  }
  .header-content-msg{
    display: flex;
    background-color: #545353;
    font-size: 12px;
    height: 30px;
  }
  .header-content-msg img{
    width: 30px;
    height: 18px;
    margin-left: 10px;
    margin-top: 7px;
    margin-right: 5px;
  }
  .header-content-msg-text{
    line-height: 30px;
    color: #cecaca;
  }
</style>
