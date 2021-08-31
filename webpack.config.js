const path = require("path");

module.exports = {
  mode: "development",

  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    port: 8081,
  },

  // output: {
  //   path: path.resolve(__dirname, "./dist"),
  //   filename: "[name].bundle.js",
  // },
};
