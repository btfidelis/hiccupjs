const webpack = require('webpack')
const { resolve } = require('path')
const plugins = () => {
  if (process.env.NODE_ENV === 'production') {
    return [
      webpack.optimize.UglifyJsPlugin({ minize: true })
    ]
  }
  
  return []
}


module.exports = {
  entry: "./src/main",
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
  resolve: {
    modules: [ resolve('./nome_modules'), resolve('./src') ]
  },
  plugins: plugins(),
  devtool: "source-map"
}