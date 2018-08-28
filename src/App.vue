<template>
  <div id="app">
      <vheader></vheader>
      <div class="tab">
          <div class="tab-item" v-for="(tabs,index) in tabItems" :class="{active:tabs.isShow}" @click="toTab(index)">
              <router-link :to=" '/' + tabs.tolink">{{ tabs.tabTitle }}</router-link>
          </div>
      </div>
      <router-view></router-view>
  </div>
</template>

<script type="text/ecmascript-6">
  import header from "@/components/header/header"
  export default {
    name: 'App',
    data:function(){
      return {
        tabItems:[
          {tabTitle:"商品",isShow:true,tolink:"goods"},
          {tabTitle:"评价",isShow:false,tolink:"ratings"},
          {tabTitle:"商家",isShow:false,tolink:"seller"}
        ]
      }
    },
    methods:{
      toTab:function(e){
          for(var i = 0;i<this.tabItems.length;i++){
            this.tabItems[i].isShow = false;
          }
          this.tabItems[e].isShow = true;
      }
    },
    components:{
      vheader:header
    }
  }
</script>

<style scoped>
    .tab{
      display: flex;
      justify-content: space-between;
      border-bottom: solid 1px rgba(7,17,27,0.1);
    }
    .tab-item{
      height: 50px;
      text-align: center;
      line-height: 50px;
      width: 33%;
    }
    .tab-item a{
      font-weight: 700;
      font-size: 18px;
      font-family: 宋体;
    }
    .tab-item.active a{
      color: red;
    }
</style>
