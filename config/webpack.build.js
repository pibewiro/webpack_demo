"use strict";
const path = require("path");
const common = require("./webpack.config");
const webpack = require("webpack");
const { merge } = require("webpack-merge");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const fsExtra = require("fs-extra");
fsExtra.emptyDirSync(path.resolve(__dirname, "..", "dist"));

// rimraf(path.resolve(__dirname, "..", "dist"), function () {
//   console.log("Dist directory removed");
// });

module.exports = merge(common, {
  mode: "production",
  output: {
    filename: "./static/js/main.[contenthash].js",
    path: path.join(__dirname, "..", "dist"),
  },

  plugins: [
    new HTMLWebpackPlugin({
      template: "./src/template.html",
    }),
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: '"production"',
        API_ROOT: '"https://speedbuyerapi.herokuapp.com/api/v1"',
      },
    }),

    new MiniCssExtractPlugin({
      filename: "static/css/style.[contenthash].css",
    }),
  ],

  optimization: {
    minimize: true,
    minimizer: [new CssMinimizerPlugin(), new TerserPlugin()],
  },
});
