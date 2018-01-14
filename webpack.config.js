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
    new HtmlWebpackPlugin({
      template: "./src/index.html"
    }),
  ],

  module: {
    rules: [
      {
        test: /\.html$/,
        use: 'raw-loader'
      }
    ]
  },

  devServer: {
    contentBase: './dist',
  },
}