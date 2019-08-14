const path = require('path');//node path
module.exports  = {
    //入口文件 配置入口文件地址 可以是单个，也可以是多个
    entry:{
        //./代表当前路径
        index:'./src/index.js'
    },
    //出口文件 配置出口文件地址 
    output:{
        path:path.resolve(__dirname,'dist'),//绝对路径
        filename:'[name].js'
    }
}