const path = require("path");

const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = function(options = {}) {
  return {
    mode: "development",
    entry: ["./src/index.js"],

    module: {
      rules: [
        // Javascript
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: "babel-loader"
        }
      ]
    },

    resolve: {
      alias: {
        react: "preact-compat",
        "react-dom": "preact-compat"
      }
    },

    plugins: [new HtmlWebPackPlugin({ template: "src/index.html" })]
  };
};
