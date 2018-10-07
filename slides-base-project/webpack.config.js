const hash = require("string-hash");
const { relative } = require("path");

module.exports = {
  module: {
    rules: [
      {
        test: /\.svg$/,
        use: ({ resource }) => [
          {
            loader: "babel-loader?cacheDirectory"
          },
          {
            loader: "react-svg-loader",
            options: {
              svgo: {
                plugins: [
                  {
                    cleanupIDs: {
                      prefix: `svg${hash(relative(__dirname, resource))}`
                    }
                  }
                ]
              }
            }
          }
        ]
      }
    ]
  }
};
