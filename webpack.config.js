var HTMLWebpackPlugin = require("html-webpack-plugin");
var MiniCssExtractPlugin = require("mini-css-extract-plugin");
var SVGSpritePlugin = require("svg-sprite-loader/plugin");
var CopyWebpackPlugin = require("copy-webpack-plugin");
var path = require("path");

module.exports = {
  entry: "./scripts/main.js",
  output: {
    path: path.resolve(__dirname, "docs"),
    filename: "bundle.js"
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "styles.css"
    }),
    new HTMLWebpackPlugin({
      title: "Mastering FrontEnd | Wizeline Academy",
      template: "index.html"
    }),
    new SVGSpritePlugin({
      plainSprite: true
    }),
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, "./img"),
        to: path.resolve(__dirname, "./docs/img")
      }
    ])
  ],
  module: {

    // Compile new js to compatible one
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: "babel-loader"
        }
      },

      // scss stylesheets
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
            loader: "postcss-loader" // compiles Sass to CSS
          }
        ]
      },

      // SVGs files to an sprite
      {
        test: /.svg\/.*\.svg$/,
        loader: "svg-sprite-loader",
        options: {
          extract: true,
          spriteFilename: "icons.svg"
        }
      }
    ]
  }
};
