module.exports = {
  context: __dirname + '/src/javascript',
  entry: {
    javascript: './main.jsx'
  },
  output: {
    path: __dirname + '/dist',
    filename: './bundle.js'
  },
  devTool: 'source-map',
  devServer: {
    inline: true
  },
  resolve: {
    extensions: ['.js', '.jsx', '']
  },
  module: {
    loaders: [
      {
        test: /\.js|.jsx$/,
        exclude: /node_modules/,
        loader: 'babel-loader', // 'babel-loader' is also a valid name to reference
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  }
};
