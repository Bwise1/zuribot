const { merge } = require('webpack-merge');
const singleSpaDefaults = require('webpack-config-single-spa-react');

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: 'zuri',
    projectName: 'plugin-zuribot',
    webpackConfigEnv,
    argv,
  });

  return merge(defaultConfig, {
    // modify the webpack config however you'd like to by adding to this object
    devtool: 'inline-source-map',
    devServer: {
      historyApiFallback: true,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods':
          'GET, POST, PUT, DELETE, PATCH, OPTIONS',
        'Access-Control-Allow-Headers':
          'X-Requested-With, content-type, Authorization',
      },
    },
  });
};
