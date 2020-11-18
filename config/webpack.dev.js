const path = require("path");
const common = require("./webpack.config");
const { merge } = require("webpack-merge");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const FaviconsWebpackPlugin = require("favicons-webpack-plugin");
const colors = require("colors");

module.exports = merge(common, {
  mode: "development",
  output: {
    path: path.join(__dirname, "..", "public"),
    filename: "bundle.js",
  },

  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: '"development"',
        API_ROOT: '"http://localhost:9000/api/v1"',
      },
    }),
  ],

  devServer: {
    contentBase: path.join(__dirname, "..", "public"),
    host: "localhost",
    port: 3000,
    hot: true,
    onListening: function (server) {
      const port = server.listeningApp.address().port;
      console.log(colors.green(`Listening on Port ${port}`));
    },
  },
});
