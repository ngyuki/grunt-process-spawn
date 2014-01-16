'use strict';

var spawn = require('child_process').spawn;

module.exports = function (grunt) {

    grunt.registerMultiTask('spawn', 'Spawn process', function() {

        var options = this.options({
            stdout: true,
            stderr: true,
            async: true,
            failOnError: true,
            spawnOptions: {}
        });

        var command = this.data.command;
        var args = this.data.args || [];
        var opts = options.spawnOptions;

        if (process.platform === 'win32')
        {
            command = command.replace(/\//g, '\\');
        }

        grunt.verbose.writeflags([command], 'Command');
        grunt.verbose.writeflags(args, 'Args');

        if (!opts.stdio)
        {
            opts.stdio = [process.stdin];

            if (options.stdout || grunt.option('verbose'))
            {
                opts.stdio.push(process.stdout);
            }
            else
            {
                opts.stdio.push('ignore');
            }

            if (options.stderr || grunt.option('verbose'))
            {
                opts.stdio.push(process.stderr);
            }
            else
            {
                opts.stdio.push('ignore');
            }
        }

        var child = spawn(command, args, opts);

        process.on('exit', function () {
            child.kill();
        });

        if (options.async == false)
        {
            var done = this.async();

            child.on('close', function (code) {
                if (code == 0)
                {
                    grunt.log.ok("Done, with exit(" + code + ").");
                }
                else
                {
                    grunt.log.error("Done, with exit(" + code + ").");
                    grunt.fatal("Command failed");
                }

                done();
            });
        }
    });
};
