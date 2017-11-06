const webpack = require('webpack')
const { resolve } = require('path')
const plugins = () => {
  if (process.env.NODE_ENV === 'production') {
    return [
      new webpack.optimize.UglifyJsPlugin({ minize: true })
    ]
  }

  return []
}


module.exports = {
  entry: "./src/hiccup.js",
  output: {
    path: resolve(__dirname, "lib"),
    filename: "hiccup.js",
    library: "hiccupjs",
    libraryTarget: "umd",
    umdNamedDefine: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env']
          }
        }
      }
    ]
  },
  resolve: {
    modules: [ resolve('./nome_modules'), resolve('./src') ]
  },
  plugins: plugins(),
  devtool: "source-map"
}