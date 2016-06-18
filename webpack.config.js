var path = require('path')
var webpack = require('webpack')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var autoprefixer = require('autoprefixer')
var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  devtool: 'source-map',
  entry: ['./src/client/index'],
  bail: true,
  output: {
    path: path.join(__dirname, 'resources/public'),
    filename: '[hash].js',
    publicPath: ''
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"production"'
    }),
    new HtmlWebpackPlugin({
      template: './src/client/index.html',
      favicon: './src/client/favicon.ico',
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      compress: {
        warnings: false
      }
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new ExtractTextPlugin('[hash].css', {
      allChunks: true
    })
  ],
  module: {
    loaders: [
      {
        test: /\.jsx?/i,
        loader: 'babel',
        include: path.join(__dirname, 'src/client')
      },
      {
        test: /\.scss$/i,
        loader: ExtractTextPlugin.extract('style', 'css?sourceMap!postcss!resolve-url!sass?sourceMap')
      },
      {
        test: /\.css$/i,
        loader: ExtractTextPlugin.extract('style', 'css?sourceMap!postcss!resolve-url')
      },
      {
        test: /\.(jpe?g|png|gif)$/i,
        loaders: ['url?limit=8192', 'img']
      },
      {
        test: /\.woff2?(\?v=\d+\.\d+\.\d+)?$/i,
        loader: 'url?limit=8192&mimetype=application/font-woff'
      },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/i,
        loader: 'url?limit=8192&mimetype=application/octet-stream'
      },
      {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/i,
        loader: 'file'
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/i,
        loader: 'url?limit=8192&mimetype=image/svg+xml'
      },
      {
        test: /\.json$/i,
        loader: 'json'
      },
      {
        test: /\.mp3/i,
        loader: 'file?name=[name].[ext]'
      }
    ]
  },
  postcss: [autoprefixer({
    browsers: ['last 2 versions']
  })]
}
