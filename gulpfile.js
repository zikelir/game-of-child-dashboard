var gulp = require('gulp');
var browserSync = require('browser-sync');
var reload = browserSync.reload;

gulp.task('default', function() {

});

// watch files for changes and reload
gulp.task('serve', function() {
  browserSync({
    server: {
      baseDir: 'client'
    }
  });

  gulp.watch(['*.html', 'styles/**/*.css', 'app/*.js'], {cwd: 'app'}, reload);
});
