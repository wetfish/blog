var fs = require('fs');
var gulp = require('gulp');
var gutil = require('gulp-util');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var watchify = require('watchify');
var browserify = require('browserify');
var concat = require('gulp-concat');
var sass = require('node-sass');

// Initialize watchify
var bundler = watchify(browserify({debug: true}));

// Object to handle bundling / compilation tasks
var bundle =
{
    scss: function()
    {
        var options =
        {
            file: './static/css/main.scss',
        };

        var result = sass.renderSync(options);
        fs.writeFileSync('./static/css/bundle.css', result.css);
    }
};

function watch()
{
    gulp.watch('./static/css/**/*.scss', function()
    {
        setTimeout(function()
        {
            gulp.start('scss');
        }, 500);
    });
}

// By default, do everything
gulp.task('default', ['scss', 'watch']);

// Separate tasks for individual things
gulp.task('scss', bundle.scss);
gulp.task('watch', watch);
