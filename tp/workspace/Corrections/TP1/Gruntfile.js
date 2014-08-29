module.exports = function(grunt) {
  grunt.initConfig({
    connect: { serve: { options: { keepalive:true } } },
    compress: {
      app: {
        options: { archive: 'dist.zip' },
        files: [{ src: ['css/', 'img/', 'js/', 'view/', 'index.html'], dest: '/' }]
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-compress');
  grunt.loadNpmTasks('grunt-contrib-connect');
};