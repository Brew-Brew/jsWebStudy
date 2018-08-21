console.log(process.env.NODE_ENV)
const path = require('path')
const HtmlWebpackPlugin=require('html-webpack-plugin')
module.exports = {
  entry: "./src/index.js",
  output:{
    filename: '[name].[hash].bundle.js'
  },
  mode: process.env.NODE_ENV == 'development' ? 'development': 'production',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/,
        use: [ {loader:'style-loader'}, {loader:'css-loader',options:{modules: true}} ]
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'static/[name][hash:8][ext].[ext]',
              limit: 100
            }
          }
        ]
      }
    ]
  },
  plugins:[ new HtmlWebpackPlugin({
    template: 'public/index.html'
  })],
  devServer:{
    contentBase: path.join(__dirname,'public')
  }
};
