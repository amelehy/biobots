module.exports = function(grunt) {

  var jsCompiledDir = 'webroot/js/build/';
  var jsSourceDir = 'webroot/js/source/';
  var jsCompiledDirTmp = 'webroot/js/build/tmp/';
  var applicationJsName = jsCompiledDir + 'application.min.js';

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    sass: {
      dist: {
        options: {
          style: 'compressed'
        },
        files: {
          'webroot/css/style.min.css' : 'webroot/sass/style.scss'
        }
      } 
    },
    clean: [jsCompiledDirTmp],
    babel: {
      options: {
        plugins: ['transform-react-jsx'],
        presets: ['es2015', 'react']
      },
      jsx: {
        files: [{
          expand: true,
          cwd: jsSourceDir, 
          src: ['**/*.jsx'],
          dest: jsCompiledDirTmp, 
          ext: '.js'
        }]
      }
    },
    concat: {
      options: {
        separator: '',
      },
      dist: {
        src: [jsCompiledDirTmp + '**/*.js'],
        dest: applicationJsName,
      },
    },
    uglify: {
      js: {
        src: applicationJsName, 
        dest: applicationJsName
      }
    },
    watch: {
      scripts: {
        files: [jsSourceDir + '**/*.jsx', jsSourceDir + '**/*.js'],
        tasks: ['babel', 'concat', 'uglify', 'clean'],
        options: {
          spawn: false
        },
      }, 
      css: {
        files: ['webroot/sass/**/*.scss'],
        tasks: ['sass'],
        options: {
          spawn: false
        }
      } 
    }
  });

  grunt.loadNpmTasks('grunt-babel');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
};