var favicons = require('gulp-favicons');
var gulp = require("gulp");

gulp.task("default", function () {

  gulp
    .src('./favicon.png')
    .pipe(
      favicons({
        appName: 'app',
        appShortName: 'App',
        appDescription: 'app',
        developerName: '',
        developerURL: '',
        background: '',
        path: 'favicons/',
        url: '',
        display: 'standalone',
        orientation: 'portrait',
        scope: './',
        start_url: '/?homescreen=1',
        version: 1.0,
        logging: false,
        html: 'index.html',
        pipeHTML: true,
        replace: true,
      })
    )
    .pipe(gulp.dest('./dest'));
});