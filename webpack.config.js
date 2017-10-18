
/*
 * Backend webpack config
 */

const path = require('path')
const PATH = (...p) => path.resolve(__dirname, ...p)

const isProduction = process.env.NODE_ENV === 'production'
const package = require('./package.json')

// === Vendor paths ===
const nodeModulesPath = PATH('./node_modules')

// === Webpack plugins ===
const {
  LoaderOptionsPlugin,
  NoEmitOnErrorsPlugin,
  ProgressPlugin,
  EnvironmentPlugin,
} = require('webpack')

// === Webpack optimization plugins ===
const {
  CommonsChunkPlugin,
  ModuleConcatenationPlugin,
} = require('webpack').optimize

// === Webpack expernal plugins ===
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const MinifyPlugin      = require('babel-minify-webpack-plugin')

// === Custom webpack plugins ===
const WebpackCleanPlugin     = require('./webpack/clean')
const WebpackFaviconsPlugin  = require('./webpack/favicon')
const WebpackManifestPlugin  = require('./webpack/manifest')
const WebpackNunjucksPlugin  = require('./webpack/nunjucks')
const WebpackPostCSSPlugin   = require('./webpack/postcss')
const WebpackRobotsTXTPlugin = require('./webpack/robots')
const WebpackSupressPlugin   = require('./webpack/suppress')
const WebpackZopfliPlugin    = require('./webpack/zopfli')

// === Post css plugin modules ===
const PostcssAutoprefixer     = require('autoprefixer')
const PostcssCSSO             = require('postcss-csso')
const PostcssDiscardComments  = require('postcss-discard-comments')
const PostcssDiscardFontFace  = require('postcss-discard-font-face')
const PostcssNesting          = require('postcss-nesting')
const PostcssSelectorMatches  = require('postcss-selector-matches')
const PostcssSelectorNot      = require('postcss-selector-not')

// === Loader plugins ===
const postcssLoaderPlugins = [
  PostcssNesting(),
  PostcssSelectorNot(),
  PostcssSelectorMatches(),
  PostcssDiscardComments({
    removeAll: isProduction
  }),
  PostcssDiscardFontFace(['woff', 'woff2']),
]

// === Final plugins ===
const postcssFinalPlugins = [
  PostcssAutoprefixer({
    browsers: package.browserslist
  }),
  PostcssCSSO({
    comments: false,
    sourceMap: !isProduction
  })
]

// === Extract css chunks plugins
const ExtractStylesCSS = new ExtractTextPlugin('css/[name].[hash].css')
const ExtractVendorCSS = new ExtractTextPlugin('css/vendor.[hash].css')

// === Webpack config ===
module.exports = {
  target: 'web',

  context: PATH('./src'),

  entry: {
    main:   [ PATH('./src/main.ts') ],
    styles: [ PATH('./src/styles/index.ts') ],
    svg:    [ PATH('./src/svg/index.ts') ],
    img:    [ PATH('./src/img/index.ts') ]
  },

  output: {
    path: PATH('./dist'),
    publicPath: '/',
    filename: 'js/[name].[hash].js',
    chunkFilename: 'js/[id].[hash].chunk.js',
  },

  resolve: {
    extensions: ['.ts', '.js'],
    mainFields: ['browser', 'module', 'main'],
    symlinks: true,
    alias: {
      '@lib': PATH('../lib')
    }
  },

  module: {
    rules: [{

      // === Load js source map ===
      test: /\.js$/,
      enforce: 'pre',
      loader: 'source-map-loader',
      exclude: [
        /\/node_modules\//
      ]

    },{

      // === Load json files ===
      test: /\.json$/i,
      loader: 'json-loader'

    },{

      // === Load html files ===
      test: /\.(html)$/i,
      loader: 'raw-loader'

    },{

      // === Load fonts files ===
      test: /\.(woff|woff2)$/,
      loader: 'file-loader',
      options: {
        outputPath: 'fonts/',
        name: '[name].[ext]'
      }

    },{

      // === Load images files ===
      test: /\.(gif|png|jpg)$/i,
      loader: 'file-loader',
      options: {
        outputPath: 'img/',
        name: '[name].[ext]'
      }

    },{

      // === Load SVG files
      test: /\.svg$/i,
      use: [{
        loader: 'file-loader',
        options: {
          outputPath: 'svg/',
          name: '[name].[ext]'
        }
      },{
        loader: 'svgo-loader',
        options: {
          plugins: [
            { cleanupIDs:        false },
            { convertPathData:   false },
            { removeUselessDefs: false },
            { removeXMLProcInst: false },
          ]
        }
      }]

    },{

      // === Global css styles ===
      test: /\.css$/i,
      include: [
        PATH('./src/styles')
      ],
      loader: ExtractStylesCSS.extract({
        use: [{
          loader: 'css-loader'
        },{
          loader: 'postcss-loader',
          options: {
            ident: 'postcss',
            plugins: postcssLoaderPlugins
          }
        }]
      })

    },{

      // === Vendor css styles ===
      test: /\.css$/i,
      include: [
        nodeModulesPath
      ],
      loader: ExtractVendorCSS.extract({
        use: [{
          loader: 'css-loader'
        },{
          loader: 'postcss-loader',
          options: {
            ident: 'postcss',
            plugins: postcssLoaderPlugins
          }
        }]
      })

    },{

      // === Typescript loader ===
      test: /\.ts$/,
      loader: 'awesome-typescript-loader',
      options: {
        configFileName: PATH('./tsconfig.json')
      }
    }]
  },

  plugins: [
    new ProgressPlugin(),

    new WebpackCleanPlugin(),

    new LoaderOptionsPlugin({
      debug: !isProduction,
      sourceMap: !isProduction,
      minimize: isProduction,
    }),

    new EnvironmentPlugin({
      NODE_ENV: isProduction ? 'production' : '',
      DEBUG: !isProduction,
      APP_NAME: package.name,
      APP_VERSION: package.version
    }),

    new NoEmitOnErrorsPlugin(),
    new ModuleConcatenationPlugin(),

    new CommonsChunkPlugin({
      name: 'vendor',
      chunks: [ 'main' ],
      minChunks: module => /node_modules/.test(module.resource)
    }),

    ExtractVendorCSS,
    ExtractStylesCSS,
    new WebpackPostCSSPlugin({
      plugins: postcssFinalPlugins
    }),

    new WebpackSupressPlugin({
      pattern: /(styles|svg|img)\.([a-z0-9]+\.)?js$/
    }),

    new WebpackFaviconsPlugin({
      template: PATH('./src/svg/favicon.svg')
    }),
    new WebpackManifestPlugin(),
    new WebpackRobotsTXTPlugin(),

    new WebpackNunjucksPlugin({
      from: PATH('./src/templates'),
      data: [
        PATH('./src/menu.yml'),
        PATH('./src/asic.yml'),
        PATH('./src/gpu.yml'),
        PATH('./src/psu.yml'),
        PATH('./src/farm.yml'),
      ],
      options: {
        autoescape: true,
        trimBlocks: true,
        lstripBlocks: true
      },
      minify: isProduction ? {
        caseSensitive: true,
        collapseWhitespace: true,
        keepClosingSlash: true,
        removeComments: true
      } : {}
    }),
  ].concat( isProduction ? [
    // === Minify js ===
    new MinifyPlugin({
      booleans: false,
      infinity: false,
      simplify: false,
      simplifyComparisons: false,
      typeConstructors: false,
      undefinedToVoid: false
    },{
      comments: false,
      sourceMap: false
    }),

    // === Gzip files ===
    new WebpackZopfliPlugin({
      pattern: /\.(js|css|svg)$/
    })
  ] : []),

  node: false,
  devtool: isProduction ? false : 'inline-source-map',
  stats: 'errors-only'
}
