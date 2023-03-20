const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
//const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const CompressionPlugin = require("compression-webpack-plugin");
const devMode = process.env.NODE_ENV !== "production";

module.exports = {
    mode: "production",
    performance: {

    },
/*    optimization: {
        splitChunks: {
            maxSize: 300000,
            chunks: "all"
        }
    },*/

    /*devtool: 'source-map',*/
    entry: path.resolve(__dirname, './frontend/src/index.js'),
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules|bower_components)/,
                use: ['babel-loader']
            },
            {
                test: /\.(gif|png|jpe?g|svg)$/i,
                exclude: /node_modules/,
                type: "asset/resource",
                generator: {
                    filename: "images/[hash][ext][query]"
                }
            },
            {
                test: /\.(s[ac]ss)$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', {
                    loader: 'sass-loader',
                    options: {
                        sassOptions: {
                            includePaths: [path.resolve(__dirname, './frontend/src')],
                        },
                    },
                }],
            },
            {
                test: /\.(css)$/i,
                use: [MiniCssExtractPlugin.loader,'css-loader']
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
                generator: {
                    filename: "fonts/[hash][ext][query]"
                }
            },
        ]
    },
    resolve: {
        extensions: ['*', '.js', '.jsx', 'scss', 'css', 'jpg', 'png']
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: devMode ? "[name].css" : "[name].[fullhash].css",
            chunkFilename: devMode ? "[id].css" : "[id].[fullhash].css",
    }),
        new HtmlWebpackPlugin({
            template: 'frontend/src/based.html',
            filename: path.resolve(__dirname, './frontend/templates/index.html'),
        }),
        //new BundleAnalyzerPlugin(),
        new CompressionPlugin()],

    output: {
        filename: '[name].js',
        publicPath: "/static/build/"
    },
};