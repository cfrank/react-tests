// Requires
var gulp 	= require('gulp'),
	uglify 	= require('gulp-uglify'),
	sass 	= require('gulp-sass'),
	rename	= require('gulp-rename'),
	connect	= require('gulp-connect'),
	babel	= require('gulp-babel');

// Scrips task
gulp.task('scripts', function(){
	gulp.src(['app/js/**/*.js', '!app/js/**/*.min.js'])
		.pipe(babel())
		.pipe(rename({suffix:'.min'}))
		.pipe(uglify())
		.pipe(gulp.dest('app/js'));
});

// Sass task
gulp.task('sass', function(){
	gulp.src('app/scss/*.scss')
		.pipe(sass.sync().on('error', sass.logError))
		.pipe(sass({outputStyle: 'compressed'}))
		.pipe(gulp.dest('app/css'))
});

// HTML task
gulp.task('html', function(){
	gulp.src('app/**/*.html')
		.pipe(gulp.dest('app/'));
});

// Local server task
gulp.task('webserver', function(){
	connect.server();
});

// Watch task
gulp.task('watch', function(){
	gulp.watch('app/js/**/*.js', ['scripts']);
	gulp.watch('app/scss/**/*.scss', ['sass']);
	gulp.watch('app/**/*.html', ['html']);
});

// Default task
gulp.task('default', ['scripts', 'sass', 'html', 'webserver', 'watch']);