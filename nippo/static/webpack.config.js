'use strict';

var path = require('path')

module.exports = {
  entry: './src/entry.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'js/bundle.js',
  },
}
