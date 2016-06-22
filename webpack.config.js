'use strict';

const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');

const pluginsProd = [
  new ExtractTextPlugin('style.css', {allChunks: true}),
  new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false
    }
  })];
const pluginsDev = [
  new webpack.HotModuleReplacementPlugin(),
  new ExtractTextPlugin('style.css', {allChunks: true})
];

const isDevelopment = !process.env.NODE_ENV || process.env.NODE_ENV == 'development';

module.exports = {
  watch: isDevelopment,
  devtool: isDevelopment ? 'cheap-module-inline-cource-map' : null,

  entry: [
    'webpack-hot-middleware/client',
    './src/index.js'
  ],

  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'index.js',
    publicPath: '/'
  },

  plugins: isDevelopment ? pluginsDev : pluginsProd,

  module: {
    loaders: [
      {test: /\.js?$/, exclude: /node_modules/, loaders: ['react-hot', 'babel']},
      {test: /\.scss$/, loader: ExtractTextPlugin.extract(['css','postcss', 'sass?sourceMap'])},
      {test: /\.json$/, exclude: /node_modules/, loader: 'json-loader'},
      {test: /\.jade/, exclude: /node_modules/, loader: 'jade-loader'}
    ]
  },
  postcss: [autoprefixer]
};
