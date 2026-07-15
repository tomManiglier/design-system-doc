const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const devConfig = require('./webpack.dev.js');
const prodConfig = require('./webpack.prod.js');

module.exports = (env, argv) => {
  return merge(common, argv.mode === 'production' ? prodConfig : devConfig);
};
