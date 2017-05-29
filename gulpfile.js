var gulp = require('gulp'),
    sass = require('gulp-sass'),
    livereload = require('gulp-livereload'),
    connect = require('gulp-connect');

// watch files for changes and reload
gulp.task('sass', function() {
    gulp.src('client/scss/*.scss')
        .pipe(sass({
            includePaths: ['client/scss']
        }))
        .pipe(gulp.dest('client/css'))
        .pipe(livereload());
});

gulp.task('serve', function(done) {
    var express = require('express');
    var app = express();
    app.use(express.static(__dirname + '/client'));
    app.listen(4000, function() {
        done();
    });
});

gulp.task('connect', function() {
    connect.server({
        livereload: true
    });
});

gulp.task('html', function() {
    gulp.src('client/**/*.html')
        .pipe(livereload());
});

gulp.task('watch', function() {
    gulp.watch('client/scss/*.scss', ['sass']);
    gulp.watch('client/**/*.html', ['html']);

    livereload.listen();
    console.log('loading');
});

gulp.task('default', ['watch', 'serve']);