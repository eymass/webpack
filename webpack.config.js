/** @type {import('webpack').Configuration} */

const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

const htmlPluginConfig = {
  title: "Webpack 5 Title",
  filename: "index.html",
  inject: "body",
  template: "./dist/template.html"
};

module.exports = function (env, argv) {
  return {
    entry: "./src/index.js",
    mode: env && env.production ? "production" : "development",
    // mode: "development",
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
        {
          test: /\.(css)$/,
          use: ["style-loader","css-loader"],          
        },
        {
          test: /\.(png|jpg|gif|svg)$/,
          use: {
            loader: "file-loader",
          },
        },
      ],
    },
    plugins: [new HtmlWebpackPlugin(htmlPluginConfig)],    
  };
};
