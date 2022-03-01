module.exports = {
  entry: { //多入口，主要是用于多页面应用
    bundle1: './main1.js',
    bundle2: './main2.js'
  },
  output: {
    filename: '[name].js'
  }
};
