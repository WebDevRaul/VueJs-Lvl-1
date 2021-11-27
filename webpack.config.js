module.exports = {
  entry: './webpack/index.js', // or no entry option if src/index.js
  output: {
    filename: 'bundle.js',
    path: __dirname + '/dist'
  }
}