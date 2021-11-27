const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './webpack/index.js', // or no entry option if src/index.js
  output: {
    filename: 'bundle.js',
    path: __dirname + '/dist'
  },
  module: {
    rules: [
      {
        test: /\.js%/,
        exclude: /(node_modules)/,
        use: 'babel-loader'
      },
      // Sass 
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader, // or 'style-loader' for plain style css in head html file
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'main.css'   
    })
  ]
}