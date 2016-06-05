var path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var webpack = require('webpack')
var ExtractTextPlugin = require("extract-text-webpack-plugin")

var PATHS = {
  src: path.join(__dirname, 'src'),
  dist: path.join(__dirname, 'dist')
}

module.exports = {
  entry: {
    index: [
      'webpack-dev-server/client?http://0.0.0.0:3000',
      'webpack/hot/only-dev-server',
      path.join(PATHS.src, 'index.jsx')
    ]
  },
  output: {
    path: PATHS.dist,
    filename: '[name].js'
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style', 'css?modules&localIdentName=[name]__[local]___[hash:base64:5]'),
        include: PATHS.src
      },
      {
        test: /\.jsx?$/,
        loaders: ['react-hot', 'babel'],
        include: PATHS.src
      }
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
        'fetch': 'imports?this=>global!exports?global.fetch!whatwg-fetch'
    }),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      title: 'Homework Helper'
    }),
    new ExtractTextPlugin('[name].css')
  ],
  resolve: {
    extensions: ['', '.jsx', '.js', '.json', '.css']
  },
  devtool: 'eval-source-map'
}
