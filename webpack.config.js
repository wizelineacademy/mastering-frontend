var HTMLWebpackPlugin = require('html-webpack-plugin');
var MiniCssExtractPlugin = require("mini-css-extract-plugin");
var path = require("path");

module.exports = {
  entry: "./scripts/main.js",
  output: {
    path: path.resolve(__dirname, "docs"),
    filename: "bundle.js",
    // publicPath: "/docs"
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "styles.css"
    }),
    new HTMLWebpackPlugin({
      title: 'Mastering FrontEnd | Wizeline Academy',
      template: 'index.html'
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: "babel-loader",
          options: { presets: ["es2015"] }
        }
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: "style-loader" // creates style nodes from JS strings
          },
          {
            loader: MiniCssExtractPlugin.loader // separates css from js
          },
          {
            loader: "css-loader" // translates CSS into CommonJS
          },
          {
            loader: "sass-loader" // compiles Sass to CSS
          }
        ]
      }
    ]
  }
};
