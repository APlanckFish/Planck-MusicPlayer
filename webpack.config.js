const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: "development",
    entry: "./src/index.js",
    output: {
        path: path.join(__dirname, "/dist"),
        filename: "bundle.js"
    },
    module: {
        rules: [{
            test: /\.js/,
            loader: "babel-loader"
        },{
            test: /\.tsx/,
            use: ["babel-loader", "ts-loader"]
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: path.join(__dirname,'/dist/index.html'), // 生成的html文件存放的地址和文件名
            template: path.join(__dirname,"/src/index.html"), // 基于index.html模板进行生成html文件
          }),
    ],
    devServer: { // 配置webpack-dev-server， 在本地启动一个服务器运行
        host: 'localhost', // 服务器的ip地址 希望服务器外可以访问就设置 0.0.0.0
        port: 8088, // 端口
        open: true, // 自动打开页面
    },
}