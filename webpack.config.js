const path = require('path');

module.exports = {
  mode: "development",
  entry: [
    "./src/index.tsx",
  ],
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  stats: 'errors-only',
  devServer: {
    contentBase: "dist",
    compress: true,
    hot: true,
    host: "localhost",
    port: 3000,
    publicPath: "/"
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".css", ".json"],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [{ loader: "ts-loader" }],
        exclude: [path.resolve(__dirname, "node_modules")], 
      },
    ]
  }
};