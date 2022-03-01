var webpack = require('webpack');
var UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  entry: './main.js',
  output: {
    filename: 'bundle.js'
  },
  // 通过插件系统扩展功能
  // todo: 没测试成功。。。后面再看看
  plugins: [
    new UglifyJsPlugin() //  UglifyJs Plugin will minify output(bundle.js) JS codes
  ]
};
