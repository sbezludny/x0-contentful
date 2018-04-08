module.exports = {
  resolve: {
    extensions: ['.tsx', '.js', '.md']
  },
  module: {
    rules: [
      { test: /\.tsx$/, loader: 'awesome-typescript-loader' },
      {
        test: /\.md$/,
        loader: 'raw-loader'
      }
    ]
  }
};
