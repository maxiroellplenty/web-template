'use strict';

var autoprefixer = require('gulp-autoprefixer');
var csso = require('gulp-csso');
var del = require('del');
var gulp = require('gulp');
var htmlminify = require("gulp-html-minify");
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
const imagemin = require('gulp-imagemin');

// Set the browser that you want to supoprt
const AUTOPREFIXER_BROWSERS = [
  'ie >= 10',
  'ie_mob >= 10',
  'ff >= 30',
  'chrome >= 34',
  'safari >= 7',
  'opera >= 23',
  'ios >= 7',
  'android >= 4.4',
  'bb >= 10'
];

// Gulp task to minify CSS files
gulp.task('styles', function () {
  return gulp.src('./*.scss')
    // Compile SASS files
    .pipe(sass({
      outputStyle: 'nested',
      precision: 10,
      includePaths: ['.'],
      onError: console.error.bind(console, 'Sass error:')
    }))
    // Auto-prefix css styles for cross browser compatibility
    .pipe(autoprefixer({browsers: AUTOPREFIXER_BROWSERS}))
    // Minify the file
    .pipe(csso())
    // Output
    .pipe(gulp.dest('./dist/css'))
});

// Gulp task to minify JavaScript files
gulp.task('scripts', function() {
  return gulp.src('./views/**/*.js')
    // Minify the file
    .pipe(uglify())
    // Output
    .pipe(gulp.dest('./dist'))
});

gulp.task('build-html' , function(){
  return gulp.src("./index.html")
      .pipe(htmlminify())
      .pipe(gulp.dest("./dist"))
});
gulp.task('build-js', function() {
  return gulp.src('./index.js')
    // Minify the file
    .pipe(uglify())
    // Output
    .pipe(gulp.dest('./dist'))
});

gulp.task('build-views-html' , function(){
  return gulp.src("./views/**/*.html")
      .pipe(htmlminify())
      .pipe(gulp.dest("./dist"))
});

gulp.task('build-views-sass' , function(){
  return gulp.src('./views/**/*.scss')
    // Compile SASS files
    .pipe(sass({
      outputStyle: 'nested',
      precision: 10,
      includePaths: ['.'],
      onError: console.error.bind(console, 'Sass error:')
    }))
    // Auto-prefix css styles for cross browser compatibility
    .pipe(autoprefixer({browsers: AUTOPREFIXER_BROWSERS}))
    // Minify the file
    .pipe(csso())
    // Output
    .pipe(gulp.dest('./dist'))
});

gulp.task('images', () =>
    gulp.src('assets/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/assets/images'))
);

// Clean output directory
gulp.task('clean', () => del(['dist']));

// Gulp task to minify all files
gulp.task('build', 
  gulp.series(
      'clean',
      'styles',
      'scripts',
      'build-html',
      'build-js',
      'build-views-html',
      'build-views-sass'
  )
);
