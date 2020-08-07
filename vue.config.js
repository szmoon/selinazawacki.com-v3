const path = require("path");
// // vue.config.js
// function resolve(dir) {
//   return path.join(__dirname, dir);
// }

// eslint-disable-next-line no-unused-vars
module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        "@": path.resolve("src"),
        "@components": path.resolve("src/components"),
        "@layouts": path.resolve("src/layouts"),
        "@views": path.resolve("src/views")
      }
    }
  }
};
