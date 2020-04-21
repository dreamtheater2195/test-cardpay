const gulp = require('gulp');
const browserSync = require("browser-sync");

gulp.task('connect', function () {
    browserSync.init({
        ghostMode: false,
        server: {
            baseDir: ['./'],
            middleware: function (req, res, next) {
                res.setHeader('Access-Control-Allow-Origin', '*');
                next();
            }
        },
        https: true,
        port: 3001
    });
    gulp.watch("./www/clients/**/*.css").on('change', browserSync.reload);
});

gulp.task('default', ['connect']);
