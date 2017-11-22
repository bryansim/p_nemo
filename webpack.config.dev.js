import path from 'path'
import webpack from 'webpack';

export default {
  entry: [
    'react-hot-loader/patch',
    'webpack-hot-middleware/client',
    path.join(__dirname, '/client/index.js')
],
  output: {
    filename:'bundle.js',
    path: '/',
    publicPath: '/'
  },
  plugins: [
  new webpack.NoEmitOnErrorsPlugin(),
  new webpack.optimize.OccurrenceOrderPlugin(),
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NamedModulesPlugin()
],
  module: {
    loaders: [
      {
         test: /\.js$/,
         include: path.join(__dirname, 'client'),
         loaders: ['babel-loader']
      }
    ]
   },
  resolve: {
    extensions: ['.js' ]
  }
}
