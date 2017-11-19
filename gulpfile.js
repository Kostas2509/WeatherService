'use strict';

const gulp  = require('gulp');
const browerSync = require('browser-sync');

gulp.task('hello', function (callback) {
    console.log('hello a fucking world');
    callback();
});

gulp.task('serve', function () {
    browerSync.init({
        server: './'
    });
    browerSync.watch('./**/*.*').on('change', browerSync.reload);
});