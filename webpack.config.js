const webpack = require('webpack');

module.exports = {
    entry: {
        home: './resources/pages/home/main',
        // 'poll-single': './resources/pages/poll-single/main',
        // 'poll-create': './resources/pages/poll-create/main',
        // 'created-polls': './resources/pages/profile/created-polls/main'
    },
    output: {
        path: './public/assets/scripts/',
        filename: '[name].min.js',
        publicPath: ''
    },
    module: {
        // preLoaders: [
        //     { test: /\.js$/, loader: 'eslint', exclude: /node_modules/ }
        // ],
        loaders: [
            { test: /\.js$/, loader: 'babel', exclude: /node_modules/ }
        ]
    },
    devtool: 'eval'
    // plugins: [
    //     new webpack.optimize.CommonsChunkPlugin('vendors.min.js')
    // ]
};

if (process.env.NODE_ENV === 'production') {
    module.exports.devtool = '#source-map';
    module.exports.plugins = (module.exports.plugins || []).concat([
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
                drop_debugger: true
            },
            comments: false,
            sourceMap: false
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': '"production"'
        })
    ]);
}
