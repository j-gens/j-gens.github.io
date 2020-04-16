module.exports = {
  mode: 'development',
  entry: './src/index.jsx',
  output: {
    filename: 'bundled.js',
    path: __dirname + '/public/'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                '@babel/preset-react', '@babel/preset-env',
              ],
              plugins: [
                '@babel/plugin-proposal-class-properties',
              ],
            },
          },
        ],
      }, {
        test: /\.css$/i,
        exclude: /node_modules/,
        use: [
          'style-loader', 'css-loader',
        ],
      },
    ],
  }
};