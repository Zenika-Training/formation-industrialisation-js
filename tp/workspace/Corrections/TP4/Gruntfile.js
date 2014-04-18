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
          'bower_components/jquery/dist/jquery.js',
          'bower_components/bootstrap/dist/js/bootstrap.js',
          'bower_components/angular/angular.js',
          'bower_components/angular-cookies/angular-cookies.js',
          'bower_components/angular-resource/angular-resource.js',
          'bower_components/angular-route/angular-route.js',
          'bower_components/angular-ui-utils/ui-utils.js',
          'bower_components/markdown/lib/markdown.js',
          'bower_components/fuse/fuse.js',
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
    karma: {
      unit: {
        configFile: 'test/karma.conf.js',
        singleRun: true,
      },
    },
    watch: {
      options: {
        livereload: true,
      },
      js: {
        files: ['js/app/*.js'],
        tasks: ['jshint:app', 'karma'],
      },
      tests: {
        files: ['test/unit/*.js'],
        tasks: ['karma:unit'],
      },
      html: {
        files: ['index.html', 'view/*.html'],
      },
      gruntfile: {
        files: ['Gruntfile.js'],
        tasks: ['default'],
      },
    },
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-karma');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['jshint', 'karma', 'concat', 'uglify']);
};