var path = require("path");

module.exports = {
  entry: {
    main: './src/js/main.js',
    bg: './src/js/background/bg-main.js',
    cs: './src/js/content-script/cs-main.js'
  },
  output: {
    path: path.join(__dirname, "build/js"),
    filename: '[name].bundle.js'
  },
  module: {
    preLoaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "eslint-loader"
      }
    ],
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        query: {
          presets: ['es2015']
        }
      },
      {
        test: /\.less$/,
        loader: 'style-loader!css-loader!less-loader'
      }
    ]
  }
};
