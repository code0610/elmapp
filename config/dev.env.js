'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

//var appData = require('../data.json');
//var seller = appData.seller;
//var goods = appData.goods;
//var ratings = appData.ratings;
//
//var apiRoutes = express.Router();

//apiRoutes.get("/seller",function(req,res){
//  console.log(req,res);
//})

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"'
})
