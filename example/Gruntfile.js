module.exports = function (grunt) {

    grunt.loadTasks('../tasks');

    grunt.initConfig({
        spawn: {
            web: {
                command: 'node',
                args: ['web.js'],
                options: {
                    async: true
                }
            }
        }
    });

    grunt.registerTask('request', function() {

        var http = require('http');
        var done = this.async();

        http.get({
            host: 'localhost',
            port: 3000,
            path: '/'
        }, function(res) {
            res.on('data', function (data) {
                grunt.log.ok(data);
            });
            res.on('end', function () {
                done();
            });
        });
    });

    grunt.registerTask('default', ['spawn:web', 'request']);
};
