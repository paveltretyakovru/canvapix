const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/index',
  
  devtool: 'eval-source-map',

  output: {
    path: __dirname + './dist',
    filename: 'bundle.js',
    publicPath: '/',
  },

  plugins: [
    new HtmlWebpackPlugin(),
  ],

  devServer: {
    contentBase: './dist',
  },
}