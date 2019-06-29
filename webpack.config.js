const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'development',
    entry: ['./src/index.js'],
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname,'./dist')
    },
    module: {
        rules: [
            {
                test: require.resolve('jquery'),
                use: [
                    {
                        loader: 'expose-loader',
                        options: '$'
                    },
                    {
                        loader: 'expose-loader',
                        options: 'jQuery'
                    }
                ]
            },
            {
                test: /\.css$/,
                use: ['style-loader','css-loader']
            },
            {
                test: /\.(jpg|jpeg|gif|ico|bmp|png)$/,
                use: 'url-loader'
            },
            {
                test: /\.(eot|ttf|woff)$/,
                use: 'file-loader'
            },
            {
                test: /\.(htm|html)$/,
                use: 'html-withimg-loader'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            // title: "小米商城 - 小米9、小米MIX 3、红米Note 7，小米电视官方网站",
            filename: 'index.html',
            template: path.resolve(__dirname,'./src/index.html'),
            favicon: path.resolve('./src/images/favicon.ico')   //添加icon图标

        })
    ],
    devServer: {
        contentBase: path.resolve(__dirname,'./dist'),
        open: true,
        hot: true,
        port: 3001
    }
}