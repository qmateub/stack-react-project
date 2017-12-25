/* eslint-disable import/no-extraneous-dependencies, prettier/prettier */

var path = require('path');
var devConfig = require('./webpack.config.js');

var DIST_DIR = path.resolve(__dirname, 'dist');

var prodConfig = devConfig;

prodConfig.output = {
  path: DIST_DIR + '/app',
  filename: 'bundle.js',
};

module.exports = prodConfig;
