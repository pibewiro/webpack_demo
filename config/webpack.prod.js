const path = require("path");
const merge = require("webpack-merge");
const common = require("./webpack.config");
module.exports = merge(common, {
  mode: "production",
  output: {
    path: path.join(__dirname, "public"),
    filename: "./static/js/bundle.js",
  },
});
