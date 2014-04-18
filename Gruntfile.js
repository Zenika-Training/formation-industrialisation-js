module.exports = function(grunt) {

    grunt.initConfig({
        connect: {
            options: {
                base: './slides/',
                open: true,
                hostname: 'localhost',
                port: 8000,
                livereload: 32729
            },
            server: {},
            keepalive: {
                options: { keepalive: true },
            },
        },
        watch: {
            options: {
                livereload: 32729,
            },
            content: {
                files: 'slides/*.md',
            },
            assets: {
                files: 'slides/assets/**',
            },
            theme: {
                files: 'slides/zenika/**'
            },
            reveal: {
                files: 'slides/reveal.js/**',
            },
            index: {
                files: 'slides/index.html',
            },
            exercices: {
                files: 'tp/Cahier.md',
            },
            gruntfile: {
                files: 'Gruntfile.js',
            },
        },
    });

    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('serve', ['connect:server', 'watch']);
    grunt.registerTask('default', ['serve']);

};