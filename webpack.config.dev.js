const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {

    mode: 'development',
    entry: '/frontend/src/index.js',
    output: {
        publicPath: "/static/frontend/",
        clean: true,
        sourceMapFilename: "[name].js.map",
        assetModuleFilename: 'images/[hash][ext][query]',
    },

    devtool: "source-map",

    module: {
        rules: [
            {
            test: /\.m?js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
                    loader: "babel-loader",
                }
            },
                        {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
                generator: {
                    filename: "fonts/[hash][ext][query]"
                }
            },
            {
             test: /\.s[ac]ss$/i,
             use: ['style-loader',
                 {
                     loader: 'css-loader',
                     options: { sourceMap:true }
                 },
                 {
                     loader: 'sass-loader',
                     options: { sourceMap: true }
                 }]
            },
            {
                test: /\.(css)$/,
                use: ['style-loader','css-loader']
            },
            {
                test: /\.(gif|png|jpe?g|svg)$/i,
                type: "asset/resource",
            },
        ]
    },
    resolve: {
        extensions: ['*', '.js', '.jsx', 'scss', 'css', 'jpg', 'png']
    },
    plugins: [

        new HtmlWebpackPlugin({
            template: 'frontend/src/based.html',
            filename: path.resolve(__dirname, './frontend/templates/index.html'),
        })],
}