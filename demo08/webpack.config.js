var HtmlwebpackPlugin = require('html-webpack-plugin');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');

module.exports = {
  entry: './main.js',
  output: {
    filename: 'bundle.js'
  },
  plugins: [
    // html-webpack-plugin could create index.html for you, 
    // and open-browser-webpack-plugin could open a new browser tab when Webpack loads.
    // 运行之后自动打开，不需要写index.html, 不需要手动打开浏览器
    new HtmlwebpackPlugin({
      title: 'Webpack-demos',
      filename: 'index.html'
    }),
    new OpenBrowserPlugin({
      url: 'http://localhost:8080'
    })
  ]
};
