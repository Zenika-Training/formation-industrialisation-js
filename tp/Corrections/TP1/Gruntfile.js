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
        files: { src: ['js/app/*.js'] },
      }
    },
    concat: {
      app: {
        src: ['js/app/*.js'],
        dest: 'target/app.js',
      },
      thirdparty: {
        src: [
          'js/angular/*.js',
          'js/angular-ui/*.js',
          'js/bootstrap/*.js',
          'js/fuse/*.js',
          'js/jquery/*.js',
          'js/markdown/*.js',
        ],
        dest: 'target/thirdparty.js',
      },
    },
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-concat');
};