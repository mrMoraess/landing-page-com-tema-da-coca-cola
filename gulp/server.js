const gulp = require('gulp')
const server = require('gulp-webserver')

function startServer () {
    return gulp.src('public')
        .pipe(server({
            port: 8080,
            open: true,
            livereload: true
        }))
}

gulp.task('startServer', startServer)

module.exports = {
    startServer
}