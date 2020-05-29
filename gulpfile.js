let gulp = require ('gulp'),
    sass = require ('gulp-sass'),
    autoPrefix = require('gulp-autoprefixer'),
    browserSync = require ('browser-sync').create();

gulp.task('scss', function(){
    return gulp.src(
        './scss/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(autoPrefix())
        .pipe(gulp.dest('./css/'))
        .pipe(browserSync.reload({stream: true}))
});

gulp.task('css', function(){
    return gulp.src([
        './css/*.css'])
        .pipe(browserSync.reload({stream: true}))
});

gulp.task('html', function(){
    return gulp.src('./*.html')
        .pipe(browserSync.reload({stream: true}))
});

gulp.task('js', function(){
    return gulp.src('./js/*.js')
        .pipe(browserSync.reload({stream: true}))
});

gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
});

gulp.task('watch', function(){
    gulp.watch('./scss/**/*.scss', gulp.parallel('scss'));
    gulp.watch('./css/*.css', gulp.parallel('css'));
    gulp.watch('./*.html', gulp.parallel('html'));
    gulp.watch('./js/*.js', gulp.parallel('js'));
});

gulp.task('default', gulp.parallel('scss', 'css', 'js', 'html', 'browser-sync', 'watch'));
