const path = require("path");

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        "@": path.resolve("src"),
        "@atoms": path.resolve("src/components/atoms"),
        "@components": path.resolve("src/components"),
        "@globals": path.resolve("src/components/globals"),
        "@images": path.resolve("src/assets/images"),
        "@layouts": path.resolve("src/layouts"),
        "@molecules": path.resolve("src/components/molecules"),
        "@organisms": path.resolve("src/components/organisms"),
        "@views": path.resolve("src/views")
      }
    }
  }
};
