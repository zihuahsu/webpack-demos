module.exports = {
  entry: './main.js',
  output: {
    filename: 'bundle.js'
  },
  module: {
    rules:[
      {
        test: /\.css$/,
        // First is CSS-loader to read CSS file,another one is Style-loader to insert <style> tag into HTML page.
        use: [ 'style-loader', 'css-loader' ] 
      },
    ]
  }
};
