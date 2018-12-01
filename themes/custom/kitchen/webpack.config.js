var path = require('path');

module.exports = {
  entry: {
    app: "./dev/js/app.js"
  },
  mode: "development",
  output: {
    path: path.resolve(__dirname, "./js/"),
    filename: "[name].min.js"
  },
  module: {
    rules: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        },
        test: /\.js$/,
        exclude: /node_modules/
      }
    ]
  }
}
