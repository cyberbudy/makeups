// include gulp
var gulp = require('gulp');

// include other plugins
var jshint = require('gulp-jshint');
var stylus = require('gulp-stylus');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');



// check all js files for errors
gulp.task('lint', function() {
    return gulp.src('resources/js/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});


//  compile stylus to css
gulp.task('stylus', function() {
    return gulp.src('resources/stylus/*.styl')
        .pipe(stylus())
        .pipe(gulp.dest('resources/css'));
});


// concat all js files into one and minifies it
gulp.task('scripts', function() {
    var jsFiles = ['resources/js/*.js'];

    return gulp.src('resources/js/*.js')
        .pipe(concat('all.js'))
        .pipe(gulp.dest('dist'))
        .pipe(rename('all.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist'));
});


// watch changes in files and run tasks automatically
gulp.task('watch', function() {
    gulp.watch('resources/js/*.js', ['lint', 'scripts']);
    gulp.watch('resources/stylus/*.style', ['stylus']);
});

gulp.task('default', ['lint', 'stylus', 'scripts', 'watch']);