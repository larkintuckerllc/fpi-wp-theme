// eslint-disable-next-line
const webpack = require('webpack');
const path = require('path');
// eslint-disable-next-line
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
// eslint-disable-next-line
const ExtractTextPlugin = require('extract-text-webpack-plugin');
// eslint-disable-next-line
const HtmlWebpackPlugin = require('html-webpack-plugin');
// eslint-disable-next-line
const CleanWebpackPlugin = require('clean-webpack-plugin')
// eslint-disable-next-line
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = env => ({
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  devtool: env === 'production' ? 'source-map' : 'cheap-eval-source-map',
  entry: './src/index.jsx',
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['es2015', 'react'],
          plugins: [
            'transform-object-rest-spread',
            'syntax-dynamic-import',
            ['lodash', { id: ['lodash', 'recompose'] }],
          ],
        },
      },
      {
        test: /\.(scss|css)$/,
        use: ExtractTextPlugin.extract({
          use: [
            {
              loader: 'css-loader',
              options: {
                modules: true,
                importLoaders: 2,
                sourceMap: true,
              },
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: true,
              },
            },
            {
              loader: 'postcss-loader',
            },
          ],
          fallback: 'style-loader',
        }),
      },
      {
        test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
        },
      },
    ],
  },
  plugins: [
    new UglifyJSPlugin({ sourceMap: true }),
    new ExtractTextPlugin('styles.css'),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'public', 'index.html'),
    }),
    new CleanWebpackPlugin(['dist']),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: ({ resource }) => (
        resource !== undefined &&
        resource.indexOf('node_modules') !== -1
      ),
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'manifest',
      minChunks: Infinity,
    }),
    new BundleAnalyzerPlugin(),
  ],
});
