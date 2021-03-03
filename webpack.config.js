const path = require('path');

module.exports = {
  mode: "development",
  entry: [
    "./src/index.tsx",
  ],
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, 'public'),
    publicPath: '/'
  },
  stats: 'errors-only',
  devServer: {
    contentBase: "public",
    compress: true,
    hot: true,
    host: "localhost",
    port: 5000,
    publicPath: "/"
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [{ loader: "ts-loader" }],
        exclude: [path.resolve(__dirname, "node_modules")], 
      },
      {
        test: /\.css/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: { url: false }
          }
        ]
      },
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
    ]
  }
};