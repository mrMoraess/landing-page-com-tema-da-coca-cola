const gulp = require('gulp')
const html = require('gulp-htmlmin')
const css = require('gulp-uglifycss')

function appHTML () {
    return gulp.src('./src/index.html')
        .pipe(html({ collapseWhitespace: true }))
        .pipe(gulp.dest('public'))
}

function appCSS () {
    return gulp.src('./src/assets/css/style.css')
        .pipe(css({ 'uglifyComments': true }))
        .pipe(gulp.dest('public/assets/css'))
}

function IMGs () {
    return gulp.src('./src/assets/img/*.png')
        .pipe(gulp.dest('public/assets/img'))
}

gulp.task('appHTML', appHTML)
gulp.task('appCSS', appCSS)
gulp.task('IMGs', IMGs)
module.exports = {
    appHTML,
    appCSS,
    IMGs
}