const webpack = require('webpack');
module.exports = {
    entry: {
        app: './index.js'
    },
    output: {
//        path: __dirname + '/public/js',
        filename: '[name].bundle.js'
    },
    module: {
        loaders: [
            {
                exclude: /(node_modules)/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react'],
                    plugins: ['transform-class-properties', 'transform-react-jsx']
                }
            }
        ]
    },
    plugins: [
        // new webpack.optimize.DedupePlugin(),
        // new webpack.optimize.OccurrenceOrderPlugin(),
        // new webpack.optimize.UglifyJsPlugin(),
        // new webpack.DefinePlugin({
        //    "process.env": { NODE_ENV: JSON.stringify("production") }
        // }),
    ]
};
