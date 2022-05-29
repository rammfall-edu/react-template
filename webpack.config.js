const { join, resolve } = require('path');

module.exports = (config) => {
  console.log(config);
  return {
    entry: './src/index.js',
    output: {
      path: resolve(__dirname, 'build'),
      filename: '[name]-[fullhash].js',
      clean: true,
      publicPath: '/',
    },
    module: {
      rules: [
        {
          test: /\.m?js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react'],
              plugins: ['@babel/plugin-transform-runtime'],
            },
          },
        },
      ],
    },
    devServer: {
      port: 3000,
      static: {
        directory: join(__dirname, 'src/static/'),
      },
      historyApiFallback: true,
    },
    devtool: 'inline-source-map',
  };
};
