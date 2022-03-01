module.exports = {
  entry: './main.jsx',
  output: {
    filename: 'bundle.js'
  },
  module: {
    rules:[
      {
        test: /\.js[x]?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015', 'react']
          }
        }
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader'
          },
        // First is CSS-loader to read CSS file,another one is Style-loader to insert <style> tag into HTML page.
          {
             loader: 'css-loader',
             options: {
               // css-loader?modules (the query parameter modules) enables the CSS Module which gives a local scoped CSS to your JS module's CSS. You can switch it off with :global(selector)
               // 将JS模块内的CSS样式与其它的隔离开
               modules: true
             }
          }
        ]
      }
    ]
  }
};
