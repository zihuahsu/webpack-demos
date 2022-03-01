module.exports = {
  entry: './main.jsx',
  output: {
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader', //此处的loader是一个预处理器
          options: {
            presets: ['es2015', 'react'] // 上面的代码片段使用了 babel-loader，它需要 Babel 的预设插件 babel-preset-es2015 和 babel-preset-react 来转译 ES6 和 React。
          }
        }
      }
    ]
  }
};
