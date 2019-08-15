const path = require('path'); //node path
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports = {
    mode:"development",
    entry: {//入口文件 配置入口文件地址 可以是单个，也可以是多个
        index: './src/index.js' //./代表当前路径
    },
    output: {//出口文件 配置出口文件地址 
        path: path.resolve(__dirname, 'dist'), //绝对路径
        filename: '[name].js',
        
    },
    module: {//css 文件打包
        rules: [
            {
                test:/\.css$/,
                // use:['style-loader','css-loader']
                use:ExtractTextPlugin.extract({
                    fallback:"style-loader",
                    use:[{
                        loader:"css-loader",
                        options:{importLoaders:1}
                    },'postcss-loader']
                })
            },{
                test:/\.(png|jpg|gif)/,
                use:[{
                    loader:"url-loader",
                    options:{
                        limits:20,
                        outputPath:'images/'
                    }
                }]
            },{
                test:/\.(htm|html)$/i,
                loader:"html-withimg-loader"
            },{
                test:/\.(scss|sass)$/,
                use:ExtractTextPlugin.extract({
                    fallback:"style-loader",
                    use: ["css-loader","sass-loader"]
                })
            },{
                test: /\.js$/,
                use: [
                    {
                        loader: "babel-loader",
                        options:{
                            presets:['@babel/preset-env']
                        }
                    },
                ],
                exclude:/node_modules/
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
        }),
        new ExtractTextPlugin("styles.css")

    ],
    devServer: { //热更新
        contentBase: path.resolve(__dirname, 'dist'), //根目录
        host: 'localhost', //服务器ip地址
    },

}