const path = require('path');
const createExpoWebpackConfigAsync = require('@expo/webpack-config');

module.exports = async function (env, argv) {
  const config = await createExpoWebpackConfigAsync({
    ...env,
    babel: {
      dangerouslyAddModulePathsToTranspile: ['@expo/vector-icons'],
    },
    mode: argv.mode || 'development', // Set the mode to development by default
  });

  config.module.rules.push({
    test: /\.js$/,
    include: /node_modules\/@expo\/vector-icons/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-react'],
        plugins: ['@babel/plugin-proposal-class-properties'],
      },
    },
  });

  // Add your other rules if needed
  
  return config;
};
