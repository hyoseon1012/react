const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// entry : 시작 위치
// output : 출력 정보.
// __dirname : 예약어, 현재폴더
module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [ "style-loader", "css-loader" ]
      },
      {
        test: /\.scss$/,
        use: [ "style-loader", "css-loader", "sass-loader" ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin()
  ]
};