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
    deps: function(done)
    {
        var dependencies =
        [
            './static/js/deps/basic.js',    // Load wetfish basic first
            './static/js/deps/*.js',        // Load everything else
        ];

        gulp.src(dependencies)
        .pipe(concat('deps.js'))
        .pipe(gulp.dest('./static/js'));
        done();
    },

    js: function(done)
    {
        bundler.bundle()
        // Log errors if they happen
        .on('error', gutil.log.bind(gutil, 'Browserify Error'))
        .pipe(source('bundle.js'))
        .pipe(gulp.dest('./static/js'));
        done();
    },

    scss: function(done)
    {
        var options =
        {
            file: './static/css/main.scss',
        };

        var result = sass.renderSync(options);
        fs.writeFileSync('./static/css/bundle.css', result.css);
        done();
    }
};

gulp.task('fonts', function(done){
    gulp.src('./node_modules/font-awesome/fonts/**/*.{ttf,woff,woff2,eof,svg}')
    .pipe(gulp.dest('./static/fonts'));
    done();
});

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

// Add main script file to the bundle
bundler.add('./static/js/main.js');
bundler.on('update', bundle.js);
bundler.on('log', gutil.log);

// Separate tasks for individual things
gulp.task('deps', bundle.deps);
gulp.task('js', bundle.js);
gulp.task('scss', bundle.scss);
gulp.task('watch', watch);

// By default, do everything
gulp.task('default', gulp.series('deps', 'js', 'scss','fonts', 'watch'));