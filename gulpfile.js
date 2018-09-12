var gulp = require('gulp');
var imagemin = require('gulp-imagemin');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var sass = require('gulp-sass');
var rubysass = require('gulp-ruby-sass');
var compass = require('gulp-compass');
var prefix = require('gulp-autoprefixer');
var csso = require('gulp-csso');

gulp.task('sass', function(){
  gulp.src('sass/style.scss')
  .pipe(sass().on('error', function(e){
    console.log(e);
  }))
  .pipe(gulp.dest('css'));
});

gulp.task('rubysass', function(){
  gulp.src('sass/style.scss')
  .pipe(rubysass())
  .pipe(gulp.dest('css'));
});

gulp.task('compass', function(){
  gulp.src('sass/style.scss')
  .pipe(compass({
    confug_file: 'config.rb',
    comments: false,
    css: 'css/',
    sass: 'sass/'
  }))
});

gulp.task('csso', function(){
  gulp.src('css/style.css')
  .pipe(csso())
  .pipe(gulp.dest('css/dest/'));
});

gulp.task('uglify', function(){
  gulp.src('lib/*.js')
  .pipe(uglify().on('error', function(e){
    console.log(e);
  }))
  .pipe(gulp.dest('js'));
});
