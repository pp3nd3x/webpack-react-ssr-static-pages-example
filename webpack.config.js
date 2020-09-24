const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPrerenderPlugin = require('html-webpack-prerender-plugin');

module.exports = {
  entry: './src/server/app.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
    // This is important, because your app must
    // be executable in both a node AND browser
    // environment.
    libraryTarget: 'umd',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'HtmlWebpackPlugin & React example',
      template: './src/server/index.template.html',
    }),
    new HtmlWebpackPrerenderPlugin({ main: '#root' }),
  ],
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
    ],
  },
};
