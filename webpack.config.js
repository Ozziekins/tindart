const path = require('path')
const ESLintPlugin = require('eslint-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: '/src/index.tsx',
  output: {
    path: path.resolve('dist'),
    filename: 'bundle.js',
    clean: true
  },
  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
  devServer: {
    port: 3000,
    historyApiFallback: true,
    client: {
      overlay: {
        errors: true,
        warnings: false
      }
    }
  },
  devtool: 'inline-source-map',
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx']
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'ts-loader'
        }
      },
      {
        test: /\.(png|svg|jpg)$/,
        use: 'file-loader'
      },
      {
        test: /\.(sass|less|css)$/,
        loader: 'css-loader'
      }
    ]
  },
  plugins: [
    // new ESLintPlugin({
    //   extensions: ['js', 'jsx'],
    //   exclude: 'node_modules'
    // }),
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ]
  // externals: ['fs', 'path']
}
