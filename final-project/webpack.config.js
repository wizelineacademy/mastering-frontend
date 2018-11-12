var MiniCssExtractPlugin = require("mini-css-extract-plugin");
var path = require("path");
var BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = {
  entry: "./scripts/main.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: "/dist"
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "styles.css"
    }),
    new BrowserSyncPlugin({
      host: 'localhost',
      port: 3000,
      proxy: 'http://localhost:8080/',
      files: [{
        match: [
          '**/*.html'
        ],
        fn: function(event, file) {
          if (event === "change") {
            const bs = require('browser-sync').get('bs-webpack-plugin');
            bs.reload();
          }
        }
      }]
    }, {
      reload: false
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
        test: /\.css$/,
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
