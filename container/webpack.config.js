const HTMLWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
  mode: 'development',
  devServer: {
    port: 3000,
  },

  plugins: [
    new HTMLWebpackPlugin({
      template: './public/index.html',
    }),

    new ModuleFederationPlugin({
      name: 'container',
      remotes: {
        products: 'products@http://localhost:4002/remoteEntry.js',
        cart: 'cart@http://localhost:4001/remoteEntry.js',
      },
    }),
  ],
};
