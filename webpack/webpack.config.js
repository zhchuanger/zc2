const path = require('path');//node path
const HtmlWebpackPlugin = require('html-webpack-plugin');
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
    },
    plugins:[
        new HtmlWebpackPlugin({
            minify:{//对html文件进行压缩，去掉属性的双引号
                removeAttributeQuotes:true
            },
            hash:true,//有效避免缓存js
            template:'./src/index.html'//要打包的html模板路径和文件名称
        })

    ],
    devServer:{//热更新
        contentBase:path.resolve(__dirname,'dist'),//根目录
        host:'localhost',//服务器ip地址
        
    }
}
