const { parallel, series } = require('gulp')
const { appHTML, appCSS, IMGs } = require('./gulp/app')
const { startServer } = require('./gulp/server')

module.exports.default = series(
    parallel(
        series(appHTML, appCSS, IMGs)
    ),
    startServer
)