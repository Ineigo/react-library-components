var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
const autoprefixer = require('autoprefixer');

module.exports = {
    stats: { children: false },
    entry: {
        app: './index.js'
    },
    output: {
        filename: '[name].bundle.js?[hash]'
    },
    devtool: 'source-map',
    module: {
        loaders: [
            {
                exclude: /(node_modules)/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react'],
                    plugins: ['transform-class-properties', 'transform-react-jsx']
                }
            },
            {
                test: /[^(?:\.m)]\.less$/,
                loader: ExtractTextPlugin.extract('css?sourceMap!postcss!less?sourceMap')
            },
            {
                test: /\.m\.less$/,
                loader: ExtractTextPlugin.extract('css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]&sourceMap!postcss!less?sourceMap')
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('css?sourceMap!postcss')
            },
            {
                test: /\.html$/,
                loader: 'html-loader'
            },
            {
                test: /\.(jpe?g|png|gif)$/i,
                loader: 'file-loader'
            },
            {
                test: /\.(eot|woff|woff2|ttf)$/,
                loader: 'url-loader?limit=30000&name=[name]-[hash].[ext]'
            },
            { test: /\.svg$/, loader: 'svg-react' },
            {
                test: /\.svg$/,
                loader: 'svg-sprite?name=[name]__[hash]'
            },
            {
                test: /\.hbs$/,
                loader: 'handlebars-loader'
            }
        ]
    },
    postcss: function() {
        return [
            autoprefixer({browsers: ['last 5 versions']})
        ];
    },
    resolve: {
        modulesDirectories: [
            'web_modules',
            'node_modules'
        ],
        alias: {
        },
        extensions: ['', '.js']
    },
    plugins: [
        new ExtractTextPlugin('[name].css', {
            allChunks: true
        }),
        new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /ru/),
        new webpack.DefinePlugin({
            __BUILD_NUMBER__: JSON.stringify(""),
        })
    ]
};

