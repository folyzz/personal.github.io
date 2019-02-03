var gulp = require('gulp');                  //يتم استيراد الحزم المثبة في ملف gulp
var cleanCSS = require('gulp-clean-css');
var uglify = require('gulp-uglify');
var connect = require('gulp-connect');
var del = require('del');

gulp.task('html', function() {
    return gulp.src('src/*.html')
    .pipe(gulp.dest('build'))
    .pipe(connect.reload());
});

gulp.task('css', function() {
    return gulp.src('src/css/*.css')
    .pipe(cleanCSS())
    .pipe(gulp.dest('build/css'))
    .pipe(connect.reload());
});

gulp.task('js', function() {
    return gulp.src('src/js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('build/js'))
    .pipe(connect.reload());
});

gulp.task('images', function() {
    return gulp.src('src/img/**/*')
    .pipe(gulp.dest('build/img'))
    .pipe(connect.reload());
});

gulp.task('connect', function() {
    connect.server({
        root: 'build',
        livereload: true,
        port: 8080,
    })
});

gulp.task('watch', function() {
    return gulp.watch('src/**/*', ['build']);
});

gulp.task('delete', function() {
    return del.sync('build'); //ديل يقوم بالحذف فعلياً , وسينس حتى نمنع المهام من بدأ التنفيذ حتى تكتمل عملية الحذف بشكل كامل
});

gulp.task('build',['delete', 'html', 'css', 'js', 'images']);

gulp.task('default',['build', 'connect', 'watch']);