const HTMLWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
  mode: 'development',
  devServer: {
    port: 4002,
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: './public/index.html',
    }),

    new ModuleFederationPlugin({
      name: 'products',
      filename: 'remoteEntry.js',
      exposes: {
        './ProductsIndex': './src/index.js',
      },
      shared: ['faker'],
    }),
  ],
};
