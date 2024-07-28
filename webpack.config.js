const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ESLintPlugin = require('eslint-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = (env) => {
  return {
    entry: {
      main: './src/index.js'
    },
    mode: env && env.dev ? 'development' : 'production',
    output: {
      filename: '[name].[contenthash].js',
      path: path.resolve(__dirname, 'dist')
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-react', '@babel/preset-env']
            }
          }
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader']
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: 'public/index.html',
        inject: 'body'
      }),
      new CleanWebpackPlugin(),
      new ESLintPlugin({
        exclude: ['node_modules', 'dist'],
        context: path.resolve(__dirname, 'src')
      })
    ],
    optimization: {
      splitChunks: {
        chunks: 'all'
      }
    },
    devServer: {
      static: {
        directory: path.join(__dirname, 'dist')
      },
      compress: false,
      port: 3000,
      historyApiFallback: true
    },
    performance: {
      hints: 'warning',
      maxEntrypointSize: 512000,
      maxAssetSize: 512000
    },
    transform: {
      '^.+\\.[t|j]sx?$': 'babel-jest'
    }
  }
}
