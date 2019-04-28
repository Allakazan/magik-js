var webpackConfig = require('./webpack.config.js')
webpackConfig.mode = 'production'
webpackConfig.entry = ''

module.exports = function (config) {
    config.set({
        frameworks: ['mocha', 'chai'],
        files: [
            './dist/bundle.js',
            './test/**/*.spec.js'
        ],
        preprocessors: {   
            './test/**/*.spec.js': ['webpack']
        },
        webpack: webpackConfig,
        webpackMiddleware: {
          noInfo: true
        },    
        reporters: ['progress'],
        port: 9876,  // karma web server port
        colors: true,
        logLevel: config.LOG_INFO,
        browsers: ['ChromeHeadless', 'Firefox', 'FirefoxDeveloper', 'FirefoxNightly', 'IE'],
        autoWatch: false,
        concurrency: Infinity,
        customLaunchers: {
            FirefoxHeadless: {
                base: 'Firefox',
                flags: ['-headless'],
            },
        },
    })
}