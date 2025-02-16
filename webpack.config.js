const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");

//production development
module.exports = {
  mode: "production",
  entry: {
    app:path.resolve(__dirname, "src/App.jsx"),
    },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name]-[fullhash].js",
    //filename: "app.js",
    publicPath:"/",
  },
  
  resolve: {
    modules: [path.resolve(__dirname, "node_modules")],
    extensions: [".js", ".jsx"],
    alias:{"react/jsx-dev-runtime":"react/jsx-dev-runtime.js","react/jsx-runtime":"react/jsx-runtime.js"},
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env","@babel/preset-react"],
              plugins: ['@babel/plugin-transform-runtime'],
            },
          },
        ],
      },

    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src/index.html"),
    }),

  ],
};