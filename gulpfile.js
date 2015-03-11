// include gulp and plugins
var gulp = require('gulp'), 
    jshint = require('gulp-jshint'),
    stylus = require('gulp-stylus'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    jade = require('gulp-jade'),
    connect = require('gulp-connect');

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
        // .on('error', console.log)
})


// gulp.task('watch', function() {

// })


gulp.task('watch', function() {
    gulp.watch('./src/template/**/*.jade', ['jade']);
});

gulp.task('default', ['connect', 'watch', 'jade']);


// gulp.task('default', function() {
//     gulp.run('jade');

//     gulp.watch('./src/template/**/.jade', function(event){
//         gulp.run('jade');
//     });
// });

// var server = lr();

// // compile stylus
// gulp.task('stylus', function() {
//     gulp.src('./assets/stylus/screen.styl')
//         .pipe(stylus({
//             use: ['nib']
//         })) // собираем stylus
//     .on('error', console.log) // Если есть ошибки, выводим и продолжаем
//     .pipe(gulp.dest('./public/css/')) // записываем css
//     .pipe(refresh(server)); // даем команду на перезагрузку css
// });



// // Собираем html из Jade

// gulp.task('jade', function() {
//     gulp.src(['./assets/template/*.jade', '!./assets/template/_*.jade'])
//         .pipe(jade({
//             pretty: true
//         }))  // Собираем Jade только в папке ./assets/template/ исключая файлы с _*
//         .on('error', console.log) // Если есть ошибки, выводим и продолжаем
//     .pipe(gulp.dest('./public/')) // Записываем собранные файлы
//     .pipe(refresh(server)); // даем команду на перезагрузку страницы
// }); 



// // Собираем JS
// gulp.task('js', function() {
//     gulp.src(['./assets/js/**/*.js', '!./assets/js/vendor/**/*.js'])
//         .pipe(concat('index.js')) // Собираем все JS, кроме тех которые находятся в ./assets/js/vendor/**
//         .pipe(gulp.dest('./public/js'))
//         .pipe(refresh(server)); // даем команду на перезагрузку страницы
// });



// // Копируем и минимизируем изображения

// // gulp.task('images', function() {
// //     gulp.src('./assets/img/**/*')
// //         .pipe(imagemin())
// //         .pipe(gulp.dest('./public/img'))

// // });



// // Локальный сервер для разработки
// gulp.task('lr-server', function() {
//     server.listen(35729, function(err) {
//         if (err) return console.log(err);
//     });
// });
// // gulp.task('http-server', function() {
// //     connect()
// //         .use(require('connect-livereload')())
// //         .use(connect.static('./public'))
// //         .listen('5000');

// //     console.log('Server listening on http://localhost:9000');
// // });

// // Запуск сервера разработки gulp watch
// gulp.task('default', function() {
//     // Предварительная сборка проекта
//     gulp.run('lr-server', 'stylus', 'jade', 'js');


//     // watches
//     gulp.watch('assets/stylus/**/*.styl', function() {
//         gulp.run('stylus');
//     });
//     gulp.watch('assets/template/**/*.jade', function() {
//         gulp.run('jade');
//     });
//     // gulp.watch('assets/img/**/*', function() {
//     //     gulp.run('images');
//     // });
//     gulp.watch('assets/js/**/*', function() {
//         gulp.run('js');
//     });

//     // gulp.run('http-server');
// });

// gulp.task('build', function() {
//     // css
//     gulp.src('./assets/stylus/screen.styl')
//         .pipe(stylus({
//             use: ['nib']
//         })) // собираем stylus
//     .pipe(myth()) // добавляем префиксы - http://www.myth.io/
//     .pipe(csso()) // минимизируем css
//     .pipe(gulp.dest('./build/css/')) // записываем css

//     // jade
//     gulp.src(['./assets/template/*.jade', '!./assets/template/_*.jade'])
//         .pipe(jade())
//         .pipe(gulp.dest('./build/'))

//     // js
//     gulp.src(['./assets/js/**/*.js', '!./assets/js/vendor/**/*.js'])
//         .pipe(concat('index.js'))
//         .pipe(uglify())
//         .pipe(gulp.dest('./build/js'));

//     // image
//     // gulp.src('./assets/img/**/*')
//     //     .pipe(imagemin())
//     //     .pipe(gulp.dest('./build/img'))

// });
// // gulp.task('watch', function() {
// //     gulp.watch('resources/js/*.js', ['lint', 'scripts']);
// //     gulp.watch('resources/stylus/*.style', ['stylus']);
// // });

// // gulp.task('default', ['lint', 'stylus', 'scripts', 'watch']);