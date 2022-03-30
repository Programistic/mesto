// webpack.config.js

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: { main: './src/pages/index.js' },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
        publicPath: ''
  },
  mode: 'development', // режим разработчика

  // настройки локального сервера
  devServer: {
    static: path.resolve(__dirname, './dist'), // путь, куда "смотрит" режим разработчика
    compress: true, // ускорение загрузки
    port: 8080,
    open: true // сайт будет открываться сам при запуске npm run dev
  },

  module: {
    rules: [
      { // объект правил для бабеля
        test: /\.js$/, // регулярное выражение, которое ищет все js файлы
        use: 'babel-loader',
        exclude: '/node_modules/' // файлы в node_modules обрабатывать не нужно
      },

      {
        test: /\.(png|svg|jpg|gif|woff(2)?|eot|ttf|otf)$/, // регулярное выражение, которое ищет все файлы с такими расширениями
        type: 'asset/resource'
      },
      
      {
        test: /\.css$/, // регулярное выражение, которое ищет все css файлы
        use: [MiniCssExtractPlugin.loader, {
          loader: 'css-loader',
          options: {
             importLoaders: 1
          }
        },
        'postcss-loader'
        ]
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin() // подключение плагина для объединения css файлов
  ]
};
