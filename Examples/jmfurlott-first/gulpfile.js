var gulp = require('gulp'),
	rename = require('gulp-rename'),
	connect = require('gulp-connect'),
	babel = require('gulp-babel');

gulp.task('scripts', function(){
	gulp.src(['app/js/**/*.js', '!app/js/**/*.min.js'])
		.pipe(babel())
		.pipe(connect.reload())
		.pipe(rename({
			suffix:'.min'
		}))
		.pipe(gulp.dest('app/js'));
});

gulp.task('webserver',function(){
	connect.server({
		root: 'app',
		port: '1337',
		livereload: true
	});
});

gulp.task('watch', function(){
	gulp.watch('app/js/**/*.js', ['scripts']);
});

gulp.task('default', ['scripts', 'webserver', 'watch']);