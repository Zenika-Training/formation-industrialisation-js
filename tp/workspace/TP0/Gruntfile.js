module.exports = function(grunt) {
  grunt.initConfig({
    connect: { serve: { options: { keepalive:true } } }
  });
  grunt.loadNpmTasks('grunt-contrib-connect');
};