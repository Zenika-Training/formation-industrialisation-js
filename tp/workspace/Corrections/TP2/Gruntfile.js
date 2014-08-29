module.exports = function(grunt) {
  grunt.initConfig({
    jshint: {
      options: {
        reporter: require('jshint-stylish'),
      },
      gruntfile: ['Gruntfile.js'],
      app: {
        options: {
          jshintrc: true,
        },
        src: 'js/app/*.js',
      }
    },
    concat: {
      app: {
        src: [
          'js/app/app.js',
          'js/app/controllers.js',
          'js/app/services.js',
          'js/app/filters.js',
          'js/app/directives.js',
        ],
        dest: 'target/app.js',
      },
      thirdparty: {
        src: [
          'js/jquery/*.js',
          'js/bootstrap/*.js',
          'js/angular/angular.js',
          'js/angular/angular-*.js',
          'js/angular-ui/*.js',
          'js/markdown/*.js',
          'js/fuse/*.js',
        ],
        dest: 'target/thirdparty.js',
      },
    },
    uglify: {
      app: {
        src: 'target/app.js',
        dest: 'target/app.min.js',
      },
      thirdparty: {
        src: 'target/thirdparty.js',
        dest: 'target/thirdparty.min.js',
      },
    },
    clean: ['target/'],
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-clean');

  grunt.registerTask('default', ['jshint', 'concat', 'uglify']);
};