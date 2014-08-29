var gulp = require('gulp');
var browserify = require('gulp-browserify');
var concat = require('gulp-concat');
var order = require('gulp-order');

gulp.task('browserify', function() {
  gulp.src('src/js/main.js')
    .pipe(browserify({ transform: 'reactify' }))
    .pipe(concat('main.js'))
    .pipe(gulp.dest('dist/js'));
});

gulp.task('copy', function() {
  gulp.src('src/index.html')
    .pipe(gulp.dest('dist'));
  gulp.src('src/server.js')
    .pipe(gulp.dest('dist'));
  gulp.src('src/assets/**/*.*')
    .pipe(gulp.dest('dist/assets'));
  gulp.src('src/styles/**/*.css')
    .pipe(order([
      'normalize.css',
      '*.css'
    ]))
    .pipe(concat('main.css'))
    .pipe(gulp.dest('dist/styles'));
});

gulp.task('default', ['browserify', 'copy']);

gulp.task('watch', function() {
  gulp.watch('src/**/*.*', ['default']);
});
