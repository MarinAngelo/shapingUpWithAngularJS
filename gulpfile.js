var gulp 		= require('gulp');
// server
var connect 	= require('connect');
var serveStatic = require('serve-static');
var serveIndex  = require('serve-index');
var opn 		= require('opn');


gulp.task('default', function() {
  // place code for your default task here

});

gulp.task('connect', function(cb) {
        var server = connect();
        server.use(serveStatic('app'));
        server.use(serveIndex('app'));

        require('http').createServer(server)
            .listen(9000)
            .on('listening', function() {
                console.log('Started connect web server on http://localhost:9000');
                cb();
            });
    });

    gulp.task('serve', ['connect'], function() {
        opn('http://localhost:9000');
    });