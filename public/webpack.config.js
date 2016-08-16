var webpack = require('webpack');

module.exports = {
  entry: './main.js',
  output: { path: './', filename: 'bundle.js', sourceMapFilename: 'bundle.js.map'},
  module: {
    loaders: [{
      test: /\.scss$/,
      loaders: ["style", "css", "sass"]
    }, {
      test: /.jsx?$/,
      loader: 'babel-loader',
      exclude: /node_modules/,
      query: {
        presets: ['es2015', 'react']
      }
    }]
  },
};
