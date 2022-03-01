module.exports = {
  entry: './main.js',
  output: {
    filename: 'bundle.js'
  },
  module: {
    rules:[
      {
        test: /\.(png|jpg)$/,
        use: [
          {
            loader: 'url-loader', //A loader for webpack which transforms files into base64 URIs.
            options: {
              limit: 8192
            }
          }
        ]
      }
    ]
  }
};
