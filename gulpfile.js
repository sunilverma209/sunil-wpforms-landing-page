const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function compileSass() {
    return gulp.src('src/scss/styles.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('dist/css'));
}

function watchFiles() {
    gulp.watch('src/scss/**/*.scss', compileSass);
}

const build = gulp.series(compileSass, watchFiles);

exports.default = build;
