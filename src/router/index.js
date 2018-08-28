import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

//import App from "../App"

import Goods from "@/components/Goods/Goods"
import Ratings from "@/components/Ratings/Ratings"
import Seller from "@/components/Seller/Seller"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Goods
    },
    {
      path: "/goods",
      name: "Goods",
      component: Goods
    },
    {
      path: "/ratings",
      name: "Ratings",
      component: Ratings
    },
    {
      path: "/seller",
      name:"Seller",
      component: Seller
    }
  ]
})
