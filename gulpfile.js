// include gulp and plugins
var gulp = require('gulp'), 
    jshint = require('gulp-jshint'),
    stylus = require('gulp-stylus'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    jade = require('gulp-jade'),
    babel = require('gulp-babel'),
    connect = require('gulp-connect');
    image = require('gulp-image')

var dir = 'build/development';

gulp.task('connect', function() {
    connect.server({
        root: [dir],
        livereload: true
    });
});


gulp.task('jade', function() {
     var LOCAL = {};

    return gulp.src('./src/template/**/*.jade')
        .pipe(jade({
            pretty: true,
            locals: LOCAL
        }))
        .pipe(gulp.dest('./build/development/'))
        .pipe(connect.reload())
});


gulp.task('css', function() {
    return gulp.src('./src/stylus/**/*.styl')
        .pipe(stylus({}))
        .pipe(gulp.dest('./build/development/css/'))
        .pipe(connect.reload())
});


gulp.task('js6-5', function() {
    return gulp.src('./src/js/**/*.js')
        .pipe(babel())
        .pipe(gulp.dest('./build/development/js/'))
        .pipe(connect.reload())
})

gulp.task('image', function() {
    return gulp.src('./src/files/img/*')
        .pipe(image())
        .pipe(gulp.dest('./build/development/files/img/'))
        .pipe(connect.reload())
});


gulp.task('watch', function() {
    gulp.watch('./src/template/**/*.jade', ['jade']);
    gulp.watch('./src/stylus/**/*.styl', ['css']);
    gulp.watch('./src/js/**/*.js', ['js6-5']);
    gulp.watch('./src/files/img/*.*', ['image']);
});

gulp.task('default', ['connect', 'watch', 'jade', 'css', 'image', 'js6-5']);

