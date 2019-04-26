const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const autoprefixer = require('autoprefixer');



module.exports = {
    stats: { children: false },
    entry: {
        app: './index.js'
    },
    output: {
        filename: '[name].bundle.js',
        path: __dirname + '/static/'
    },
    devtool: 'source-map',
    module: {
        rules: [
            {
                exclude: /(node_modules)/,
                loader: 'babel-loader',
                query: {
                    presets: [ 'es2015', 'stage-0', 'react', 'react-hmre' ],
                    plugins: [
                        'transform-decorators-legacy',
                        'transform-class-properties', 
                        'transform-react-jsx'
                    ]
                }
            },
            {
                test: /(?!\.m)..\.less$/,
                use: ExtractTextPlugin.extract({
                    use: [
                        { loader: 'css-loader', options: { sourceMap: true } },
                        { loader: 'less-loader', options: { sourceMap: true } },
                    ]
                })
            },
            {
                test: /\.m\.less$/,
                //loader: ExtractTextPlugin.extract('css&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]&sourceMap!less?sourceMap')
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: 'css-loader', query : {
                                modules: true,
                                importLoaders: 1,
                                localIdentName: '[name]__[local]___[hash:base64:5]',
                                sourceMap: true
                            }
                        },
                        { loader: 'less-loader' },
                    ]
                })
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        { loader: 'css-loader', options: { sourceMap: true } }
                    ]
                })
            },
            {
                test: /\.html$/,
                loader: 'html-loader'
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loader: 'file-loader'
            },
            {
                test: /\.(eot|woff|woff2|ttf)$/,
                loader: 'url-loader?limit=30000&name=[name]-[hash].[ext]'
            },
            {
                test: /\.hbs$/,
                loader: 'handlebars-loader'
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin({
            filename: '[name].css',
            allChunks: true
        }),
        new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /ru/),
        new webpack.DefinePlugin({
            __BUILD_NUMBER__: JSON.stringify(""),
        })
    ],
    devServer: {
        historyApiFallback: {
            index: 'index.html'
        }
    }
};

