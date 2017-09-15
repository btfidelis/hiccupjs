const { resolve } = require('path')

module.exports = {
  entry: "./src/main",
  output: {
    path: resolve(__dirname, "dist"),
    filename: "bundle.js",
    library: "rendy",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env']
          }
        }
      }
    ]
  },
  devtool: "inline-source-map"
}