const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './client/index.html',
  filename: 'index.html',
  inject: 'body'
})
module.exports = {
    mode: 'production',
  entry: './client/index.js',
  output: {
    path: path.resolve('dist'),
    filename: 'index_bundle.js'
  },
  module: {
    rules: [
      { test: /\.css$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" }
        ]
      },
      {
        test: /\.scss$/,
        loader: [
          require.resolve('style-loader'),
          require.resolve('css-loader'),
          require.resolve('sass-loader'),
        ]
    },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }, {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.(png|jpg|gif|svg|ico)$/,
        use: [
          {
            loader: 'file-loader',
            options: {}
          }
        ]
      },
      // {
      //   test: /\.(ico)?$/,
      //   loaders: [ 'file' ],
      //   include: __dirname
      // }
      // { test: /\.(png|woff|woff2|eot|ttf|svg)$/, use: ['url-loader?limit=100000'] }
    ]
  },
  plugins: [HtmlWebpackPluginConfig],
  performance: {
    hints: process.env.NODE_ENV === 'production' ? "warning" : false
  },
}