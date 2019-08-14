const path = require('path'); //node path
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: {//入口文件 配置入口文件地址 可以是单个，也可以是多个
        index: './src/index.js' //./代表当前路径
    },
    output: {//出口文件 配置出口文件地址 
        path: path.resolve(__dirname, 'dist'), //绝对路径
        filename: '[name].js'
    },
    module: {//css 文件打包
        rules: [
            {
                test:/\.css$/,
                use:['style-loader','css-loader']
            }
        ]
    },
    plugins: [//html文件打包
        new HtmlWebpackPlugin({
            minify: { //对html文件进行压缩，去掉属性的双引号
                removeAttributeQuotes: true
            },
            hash: true, //有效避免缓存jsF
            template: './src/index.html' //要打包的html模板路径和文件名称
        })

    ],
    devServer: { //热更新
        contentBase: path.resolve(__dirname, 'dist'), //根目录
        host: 'localhost', //服务器ip地址
    },

}