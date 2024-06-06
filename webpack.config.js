/* eslint-disable no-undef */

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ESLintPlugin = require("eslint-webpack-plugin");
const CompressionPlugin = require('compression-webpack-plugin');

module.exports = (env) => {
  return {
    entry: "./src/index.js",
    mode: env.dev === true ? "development" : "production",
    output: {
      filename: "main.js",
      path: path.resolve(__dirname, "dist"),
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-react", "@babel/preset-env"],
            },
          },
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "public/index.html",
      }),
      new ESLintPlugin({
        exclude: ["node_modules", "dist"],
        context: path.resolve(__dirname, "src"),
      }),
      new CompressionPlugin({
        algorithm: 'gzip',
        test: /\.(js|css|html)$/,
        threshold: 10240,
        minRatio: 0.8,
      }),
    ],
    devServer: {
      static: {
        directory: path.join(__dirname, "dist"),
      },
      compress: false,
      port: 3000,
      historyApiFallback: {
        index: "index.html",
      },
    },
    performance: {
      hints: 'warning',
      maxEntrypointSize: 512000,
      maxAssetSize: 512000,
    },
  };
};
