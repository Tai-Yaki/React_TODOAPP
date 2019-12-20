const debug   = process.env.NODE_ENV !== "production";
const webpack = require("webpack");
const path    = require("path");

module.exports = {
  context: path.join(__dirname, "src"),
  entry: "./js/App.jsx",
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-react", "@babel/preset-env"]
            }
          }
        ],
      },
      {
        test: /\.(css|scss)$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader",
            options: {
              modules: {
                localIdentName: "[name]___[local]___[hash:base64:5]"
              }
            }
          },
          {
            loader: "sass-loader"
          }
        ]
      },
      {
        enforce: "pre",
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: "eslint-loader"
      }
    ]
  },
  output: {
    path: __dirname + "/src/",
    filename: "client.min.js"
  },
  plugins: debug ? [] : [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
  ]
}
