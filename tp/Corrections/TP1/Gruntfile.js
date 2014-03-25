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
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
};