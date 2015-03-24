'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('default', function() {
    return gulp.src('src/*.scss')
        .pipe(sass({
            includePaths: [
                'node_modules/susy/sass/'
            ]
        }))
        .pipe(gulp.dest('build'));
});
