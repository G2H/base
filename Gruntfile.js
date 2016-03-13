'use strict';

module.exports = function (grunt) {

  // Load grunt tasks manually
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-wiredep');
  grunt.loadNpmTasks('grunt-injector');
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-clean');
  // add jshint

  // Configure tasks
  grunt.initConfig({

    // Watch: do things if target files change
    watch: {
      // Livereload if the code changes
      src: {
        files: [
          'src/{,**/}*.html',
          'src/{,**/}*.js',
          'src/{,**/}*.scss',
          '.tmp/*.css',
          '!src/bower_components/**',
        ],
        options: {
          livereload: true,
        },
      },

      // Compile sass if the scss files change
      sass: {
        files: [
          'src/{,**/}*.scss',
          '!src/bower_components/**',
        ],
        tasks: ['sass:tmp'],
      },
    },

    // Connect: Start a static server
    connect: {
      tmp: {
        options: {
          port: 9000,
          base: [
            '.tmp',
            'src',
          ],
          livereload: true,
          open: true,
        },
      },
    },

    // Wiredep: automatically inject bower dependencies in index.html
    wiredep: {
      task: {
        src: ['src/index.html'],
      },
    },

    // Injector: automatically inject project assets in index.html
    injector: {
      options: {
        ignorePath: 'src/',
        addRootSlash: false,
      },
      localdependencies: {
        files: {
          'src/index.html': [
            'src/{,**/}*.css',
            'src/{,**/}*.js',
            '!src/bower_components/**',
          ],
        },
      },
    },

    // Sass: convert scss files into css
    sass: {
      options: {
        sourceMap: true,
      },
      tmp: {
        files: {
          '.tmp/styles/main.css': 'src/styles/main.scss',

          // src: ['src/styles/main.scss'],
          // dest: ['src/styles/main.css'],
        },
      },
    },

    // Clean: seriously?
    clean: {
      tmp: {
        files: [
          {
            dot: true,
            src: ['.tmp'],
          },
        ],
      },
    },

  });

  // Tmpbuild: Place all files in the tmp folder
  grunt.registerTask('tmpbuild', [
    'clean:tmp',
    'sass:tmp',
  ]);

  // Serve: should serve and refresh the content of tmp
  // Inject; wiredep; tmpbuild; on src change, delete old, replace newer in tmp;
  // on src/styles change, sass compile to tmp; watch tmp for live reload.
  grunt.registerTask('serve', [
    'injector',
    'wiredep',
    'tmpbuild',
    'connect:tmp',
    'watch'
  ]);

  grunt.registerTask('default', ['serve']);

};

