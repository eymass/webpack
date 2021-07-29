/** @type {import('webpack').Configuration} */

const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");


module.exports = function (env, argv) {
  return {
    entry: "./src/index.js",
    mode: env && env.production ? "production" : "development",
    output: {
      filename: "bundle.js",
      path: path.resolve(__dirname, "dist"),
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          use: {
            loader: "babel-loader",
          },
        },
      ],
    },
    plugins: [new HtmlWebpackPlugin()],
  };
};
