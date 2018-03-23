module.exports = {
  resolve: {
    extensions: ['.tsx', '.js']
  },
  module: {
    rules: [
      { test: /\.tsx$/, loader: 'awesome-typescript-loader' }
    ]
  }
}