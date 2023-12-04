const path = require('path');

module.exports = {
  entry: './ReactNative_webApp/app.js', // Adjust the entry point based on your project structure
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
