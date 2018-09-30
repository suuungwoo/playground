// external
const autoprefixer = require('autoprefixer');
const path = require('path');
const webpack = require('webpack');
const ignoredFiles = require('react-dev-utils/ignoredFiles');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
const paths = require('./config/paths');
const env = require('./config/env');

const postCSSLoaderOptions = {
  // 外部CSS読み込みに対応した設定
  ident: 'postcss',
  plugins: () => [
    require('postcss-flexbugs-fixes'),
    autoprefixer({
      browsers: ['> 1% in JP'],
      flexbox: 'no-2009',
      grid: true,
    }),
  ],
};
const protocol = process.env.HTTPS === 'true' ? 'https' : 'http';
const host = process.env.HOST || '0.0.0.0';

module.exports = {
  mode: 'development',
  devtool: 'cheap-module-source-map',
  entry: [
    '@babel/polyfill',
    'whatwg-fetch',
    require.resolve('react-dev-utils/webpackHotDevClient'),
    paths.scss,
    paths.js,
  ],
  output: {
    pathinfo: true,
    filename: 'static/js/[name].js',
    chunkFilename: 'static/js/[name].chunk.js',
    publicPath: '/',
    // Point sourcemap entries to
    // original disk location (format as URL on Windows)
    devtoolModuleFilenameTemplate: info =>
      path.resolve(info.absoluteResourcePath).replace(/\\/g, '/'),
  },
  devServer: {
    disableHostCheck: process.env.DANGEROUSLY_DISABLE_HOST_CHECK === 'true',
    compress: true,
    clientLogLevel: 'warning',
    contentBase: paths.public,
    watchContentBase: true,
    hot: true,
    hotOnly: true,
    publicPath: '/',
    quiet: false,
    watchOptions: {
      ignored: ignoredFiles(paths.src),
    },
    https: protocol === 'https',
    host: host,
    overlay: false,
    historyApiFallback: {
      // See https://github.com/facebook/create-react-app/issues/387.
      disableDotRule: true,
    },
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      name: 'vendors',
    },
    runtimeChunk: true,
  },
  resolve: {
    mainFields: ['browser', 'main', 'module'],
    // Webpackがmoduleを探しに行く時のfallback処理
    modules: ['node_modules', paths.nodeModules].concat(
      process.env.NODE_PATH.split(path.delimiter).filter(Boolean),
    ),
    extensions: ['.web.js', '.js', '.mjs', '.json', '.web.jsx', '.jsx'],
    alias: {
      '~config': paths.srcConfig,
      '~validates': paths.srcValidates,
      '~reducers': paths.srcReducers,
      '~apis': paths.srcApis,
      '~actions': paths.srcActions,
      '~store': paths.srcStore,
      '~utils': paths.srcUtils,
      '~Children': paths.componentChildren,
      '~Common': paths.componentCommon,
      '~Pages': paths.componentPages,
    },
  },
  module: {
    strictExportPresence: true,
    rules: [
      {
        // ECMAScripts標準ではない機能をOFF
        parser: {requireEnsure: false},
      },
      {
        oneOf: [
          {
            // fileを解決するためのloader
            test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
            loader: require.resolve('url-loader'),
            options: {
              limit: 10000,
              name: 'static/media/[name].[hash:8].[ext]',
            },
          },
          {
            // src以下を対象にしたbabel
            test: /\.(js|jsx|mjs)$/,
            type: 'javascript/auto',
            include: paths.src,
            exclude: [/[/\\\\]node_modules[/\\\\]/],
            use: [
              // compileのチューニングloader
              require.resolve('thread-loader'),
              {
                loader: require.resolve('babel-loader'),
                options: {
                  plugins: [
                    [
                      // https://github.com/FWeinb/babel-plugin-named-asset-import
                      require.resolve('babel-plugin-named-asset-import'),
                      {
                        loaderMap: {
                          svg: {
                            ReactComponent: 'svgr/webpack![path]',
                          },
                        },
                      },
                    ],
                  ],
                  cacheDirectory: true,
                  highlightCode: true,
                },
              },
            ],
          },
          {
            // 外部jsファイルを対象にしたbabel
            test: /\.js$/,
            type: 'javascript/auto',
            use: [
              // compileのチューニングloader
              require.resolve('thread-loader'),
              {
                loader: require.resolve('babel-loader'),
                options: {
                  compact: false,
                  cacheDirectory: true,
                  highlightCode: true,
                },
              },
            ],
          },
          {
            // CSS Modulesを除くloader preprocesses
            test: [/\.css$/, /\.scss$/],
            exclude: /\.module\.css$/,
            use: [
              require.resolve('style-loader'),
              {
                loader: require.resolve('css-loader'),
                options: {
                  importLoaders: 3,
                },
              },
              {
                loader: require.resolve('resolve-url-loader'),
              },
              {
                loader: require.resolve('sass-loader'),
                options: {
                  sourceMap: true,
                },
              },
              {
                loader: require.resolve('postcss-loader'),
                options: postCSSLoaderOptions,
              },
            ],
          },
          {
            // CSS Modulesを対象にしたloader preprocesses
            test: /\.module\.css$/,
            use: [
              require.resolve('style-loader'),
              {
                loader: require.resolve('css-loader'),
                options: {
                  importLoaders: 1,
                  modules: true,
                  localIdentName: '[path]__[name]___[local]',
                },
              },
              {
                loader: require.resolve('postcss-loader'),
                options: postCSSLoaderOptions,
              },
            ],
          },
          {
            // GraphQLを対象にしたloader preprocesses
            test: /\.(graphql)$/,
            loader: 'graphql-tag/loader',
          },
          {
            // HTMLを対象にしたloader preprocesses
            test: /\.html/,
            loader: require.resolve('html-loader'),
          },
          {
            // 何もマッチしなかったときのfallback loader preprocesses
            exclude: [/\.(js|jsx|mjs)$/, /\.html$/, /\.json$/],
            loader: require.resolve('file-loader'),
            options: {
              name: 'static/media/[name].[hash:8].[ext]',
            },
          },
          // ** STOP ** Are you adding a new loader?
          // Make sure to add the new loader(s) before the "file" loader.
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: paths.html,
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    // 環境変数をjsで参照できるようにする。(e.g.: process.env.NODE_ENV)
    new webpack.DefinePlugin(env.stringified),
    // bundle時に大文字小文字を区別する。
    new CaseSensitivePathsPlugin(),
    // moment.jsはpreprocessesしない。
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
  ],
  node: {
    // nodeのmodulesはbundleしない。
    dgram: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    child_process: 'empty',
  },
  performance: {
    // bundleの最適化警告をOFFにする。
    hints: false,
  },
};
