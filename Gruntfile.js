module.exports = function (grunt) {
    'use strict';

    grunt.initConfig({
        dest: 'build',
        assemble: {
            options: {
                flatten: true,
                assets: '<%= dest %>/assets/',
                layout: 'index.hbs',
            },
            content: {
                src: 'content/*.md',
                dest: '<%= dest %>/',
            },
        },
        copy: {
            assets: {
                expand: true,
                cwd: 'content/',
                src: 'assets/**',
                dest: '<%= dest %>/',
            },
            theme: {
                expand: true,
                cwd: 'theme/',
                src: '**',
                dest: '<%= dest %>/assets/zenika/',
            },
        },
        bowercopy: {
            options: {
                srcPrefix: 'bower_components',
                destPrefix: '<%= dest %>/assets'
            },
            reveal: {
                options: {
                    srcPrefix: '<%= bowercopy.options.srcPrefix %>/reveal.js',
                    destPrefix: '<%= bowercopy.options.destPrefix %>/reveal.js',
                },
                files: {
                    'reveal.min.css': 'css/reveal.min.css',
                    'pdf.css': 'css/print/pdf.css',
                    'reveal.min.js': 'js/reveal.min.js',
                    'lib/js/head.min.js': 'lib/js/head.min.js',
                    'lib/js/classList.js': 'lib/js/classList.js',
                    'plugin': 'plugin',
                },
            },
        },
        clean: ['<%= dest %>/'],
        connect: {
            options: {
                base: '<%= dest %>/',
            },
            server: {},
            keepalive: {
                options: {
                    keepalive: true,
                },
            },
        },
        watch: {
            options: {
                livereload: true,
            },
            content: {
                files: '<%= assemble.content.src %>',
                tasks: 'assemble:content'
            },
            assets: {
                files: '<%= copy.assets.cwd %><%= copy.assets.src %>',
                tasks: 'copy:assets',
            },
            theme: {
                files: '<%= copy.theme.cwd %><%= copy.theme.src %>',
                tasks: 'copy:theme',
            },
            bower: {
                files: '<%= bowercopy.options.srcPrefix %>',
                tasks: 'bowercopy',
            },
            gruntfile: {
                files: 'Gruntfile.js',
                tasks: ['clean', 'default'],
            },
        },
    });

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-assemble');
    grunt.loadNpmTasks('grunt-bowercopy');
    grunt.registerTask('design', ['default', 'connect:server', 'watch']);
    grunt.registerTask('default', ['bowercopy', 'assemble', 'copy']);

};