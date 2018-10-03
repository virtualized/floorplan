const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist'
  },
  mode: 'development',
  watchOptions: {
    ignored: /node_modules/
  },
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      title: 'Floorplan management'
    })
  ],
  externals: {
    'jsdom/lib/jsdom/utils': JSON.stringify({Canvas: null}),
    'jsdom/lib/jsdom/living/generated/utils': JSON.stringify({ implForWrapper: null }),
    'jsdom': 'null',
    'xmldom': JSON.stringify({ DOMParser: null }),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  }
};