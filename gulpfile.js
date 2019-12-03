const { src, dest, watch } = require('gulp');
const pug = require('gulp-pug');
const less = require('gulp-less');
const minifyCSS = require('gulp-csso');
const connect = require('gulp-connect');

function html() {
  return src('client/templates/*.pug')
    .pipe(pug())
    .pipe(dest('build/html'))
    .pipe(connect.reload())
}

function css() {
  return src('client/stylesheets/*.less')
    .pipe(less())
    .pipe(minifyCSS())
    .pipe(dest('build/css'))
    .pipe(connect.reload())
}

function js() {
  return src('client/javascript/*.js', { sourcemaps: true })
    .pipe(dest('build/js', { sourcemaps: true }))
    .pipe(connect.reload())
}

exports.js = js;
exports.css = css;
exports.html = html;

exports.default = function () {
  watch('client/templates/**/*.pug', html);
  watch('client/stylesheets/*.less', css);
  watch('client/javascript/*.js', js);

  connect.server({
    root: 'build/',
    livereload: true,
    port: 5000
  })
}