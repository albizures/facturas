const webpack = require('webpack'),
      util = require('util'),
      path = require('path'),
      HtmlWebpackPlugin = require('html-webpack-plugin'),
      ExtractTextPlugin = require('extract-text-webpack-plugin');

const ROOT_PATH = path.resolve(__dirname),
      APP_PATH = path.resolve(ROOT_PATH,'client', 'js','index.js'),
      CLIENT_PATH = path.resolve(ROOT_PATH, 'client'),
      BUILD_PATH = path.resolve(ROOT_PATH, '..' ,'dist'),
      MODULES_PATH = path.resolve(__dirname, '..', 'node_modules'),
      ASSETS_PATH = path.resolve(BUILD_PATH, 'assets');
module.exports = {
  devtool : 'eval',//'eval-source-map',
  entry:  APP_PATH,
  output: {
    path: BUILD_PATH,
    filename: "app.js"
  },
  plugins: [
    //new webpack.HotModuleReplacementPlugin(),
    //new webpack.NoErrorsPlugin(),
    new HtmlWebpackPlugin({
      title: 'Jade demo',
      filename: 'index.html',
      template: path.resolve(CLIENT_PATH,'template', 'index.jade')
    }),
    new ExtractTextPlugin('style.css', { allChunks: true })
  ],

  // Transform source code using Babel and React Hot Loader
  module: {
    loaders: [
      {
        test: /\.js$/, include: CLIENT_PATH,
        loaders: ['ng-annotate' ,"babel-loader"]
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
            'file?name=/assets/images/[name].[ext]',
            'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
        ]
      },
      {
        test: /\.jade$/,
        loader: 'jade-loader'
      },
      {
        test: /\.css?$/,
        loaders: ExtractTextPlugin.extract('style-loader', 'css-loader')
      },
      {
        test: /\.styl?$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader!stylus-loader')
				//loader: 'style-loader!css-loader!stylus-loader'
      }
    ],
    preLoaders: [
      {
        test: /\.js?$/, exclude:  [/build/, /node_modules/, /easel/],
        loaders: ['eslint-loader', 'jscs-loader']
      }
    ]
  },
  // Automatically transform files with these extensions
  resolve: {
    extensions: ['', '.js','.css', '.styl', '.jade']
  },
  resolveLoader : {
    root : MODULES_PATH
  }
}
