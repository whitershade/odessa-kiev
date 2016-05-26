(function () {
  'use strict';

  module.exports = function (grunt) {

    // Automatically load required Grunt tasks
    require('jit-grunt')(grunt, {
      useminPrepare: 'grunt-usemin'
    });
    
    // Time how long tasks take. Can help when optimizing build times
    require('time-grunt')(grunt);

    // Define the configuration for all the tasks
    grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),

      clean: {
        build: {
          src: ['dist/']
        }
      },
      jshint: {
        all: {
          src: [
          'Gruntfile.js',
          'app/js/{,*/}*.js'
        ]
        }
      },
      copy: {
        dist: {
          cwd: 'app',
          src: ['**', '!css/**/*.css', '!js/**/*.js', '!css/**/*.css.map', '!css/**/*.scss', '!img/**'],
          dest: 'dist',
          expand: true
        }
      },

      useminPrepare: {
        html: 'app/index.html',
        options: {
          dest: 'dist'
        }
      },

      // Concat
      concat: {
        css: {
          options: {
            separator: ""
          },
        },
        js: {
          options: {
            separator: ";\n"
          },
        },
        // dist configuration is provided by useminPrepare
        dist: {}
      },
      purifycss: {
        options: {

        },
        target: {
          src: ['app/*.html', '.tmp/concat/js/main.js'],
          css: ['.tmp/concat/css/main.css'],
          dest: '.tmp/concat/css/main.css'
        }
      },
      ngAnnotate: {
        options: {
          remove: true,
          add: true,
          singleQuotes: true
        },
        app: {
          files: {
            'js/main.js': 'js/main.js'
          }
        }
      },
      // Uglify
      uglify: {
        // dist configuration is provided by useminPrepare
        dist: {}
      },
      cssmin: {
        dist: {}
      },
      usemin: {
        html: ['dist/*.html'],
        css: ['dist/css/*.css'],
        options: {
          assetsDirs: ['dist', 'dist/css']
        }
      },
      autoprefixer: {
        options: {
          // Task-specific options go here.
          browsers: ['last 15 versions']
        },
        your_target: {
          // Target-specific file lists and/or options go here.
          src: 'dist/css/main.css',
          dest: 'dist/css/main.css'
        },
      },
      imagemin: {
        dynamic: {
          files: [{
            expand: true,
            cwd: 'app/img',
            src: ['**/*.{png,jpg,gif}'],
            dest: 'dist/img/'
        }]
        }
      },
      revizor: {
        options: {
          nameSuffix: '--',
          compressFilePrefix: ''
        },
        src: ['dist/css/*.css', 'dist/*.html', 'dist/js/*.js']
      }
    });
    // Указываем, какие задачи выполняются, когда мы вводим «grunt» в терминале
    grunt.registerTask('default', ['clean', 'jshint', 'useminPrepare',
    'concat', 'purifycss', 'cssmin', 'uglify', 'copy', 'usemin', 'autoprefixer', 'imagemin', 'revizor']);
  };
}());