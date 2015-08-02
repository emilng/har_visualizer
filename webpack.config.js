module.exports = {
  entry: './src/main.js',
  output: {
    path: 'dist',
    publicPath: 'dist',
    filename: 'har_visualizer.js'
  },
  devServer: {
    host: 'localhost',
    port: '8080'
  }
};
