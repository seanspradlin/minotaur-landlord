const webpackConfig = require('./webpack.config.js');

module.exports = (config) => {
  config.set({
    browsers: ['PhantomJS'],
    frameworks: ['mocha', 'sinon-chai', 'phantomjs-shim'],
    reporters: ['progress'],
    files: ['test/*.ts'],
    exclude: [],
    preprocessors: {
      'test/**/*.ts': ['webpack'],
    },
    webpack: webpackConfig,
    webpackMiddleware: {
      noInfo: true,
    },
    port: 9876,
    colors: true,
    autoWatch: true,
    singleRun: false,
    concurrency: Infinity,
  });
};

