# grunt-process-spawn

## Getting Started

Install from npm.

```console
$ npm install --save-dev grunt-process-spawn
```

May be enabled the plugin in Gruntfile.

```js
grunt.loadNpmTasks('grunt-process-spawn');
```

## Example

```js
grunt.loadNpmTasks('grunt-process-spawn');

grunt.initConfig({
    spawn: {
        ps: {
            command: 'ps',
            args: ['auxw'],
            options: {
                async: false
            }
        }
    }
});

grunt.registerTask('default', ['shell']);
```

## Config

**command**

 - Required
 - Type: string

Executable file.

**args**

 - Default: []
 - Type: array

Command line arguments. Should be array.

## Options

**stdout**

 - Default: true
 - Type: boolean

Display flag of stdout. stdout is ignored if false.

**stderr**

 - Default: true
 - Type: boolean

Display flag of stderr. stderr is ignored if false.

**async**

 - Default: true
 - Type: boolean

Process runs async.
Next task are run without wait for end of process.

**failOnError**

 - Default: true
 - Type: boolean

Grunt will exit with fatal error if exit code is non-0.
Ignored if async is true.

**spawnOptions**

 - Default: {}
 - Type: object

Options of `child_process.spawn`.  
see http://nodejs.org/api/child_process.html#child_process_child_process_spawn_command_args_options

## License

[MIT License](http://www.opensource.org/licenses/mit-license.php)
