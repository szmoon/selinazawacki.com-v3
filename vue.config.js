const path = require('path');

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        '~': path.resolve(__dirname, 'src'),
        images: path.resolve('src/assets/images'),
        '~atoms': path.resolve('src/components/atoms'),
        '~components': path.resolve('src/components'),
        '~data': path.resolve('src/data'),
        '~globals': path.resolve('src/components/globals'),
        '~layouts': path.resolve('src/layouts'),
        '~molecules': path.resolve('src/components/molecules'),
        '~organisms': path.resolve('src/components/organisms'),
        styles: path.resolve('src/styles'),
        '~views': path.resolve('src/views')
      }
    }
  }
};
