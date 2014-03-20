module.exports = function(grunt) {

    grunt.initConfig({
        connect: {
            options: {
                base: './slides/',
            },
            server: {},
            keepalive: {
                options: { keepalive: true },
            },
        },
        watch: {
            options: {
                livereload: true,
            },
            content: {
                files: 'slides/*.md',
            },
            assets: {
                files: 'slides/assets/*',
            },
            theme: {
                files: 'slides/zenika/*'
            },
            reveal: {
                files: 'slides/reveal.js/*',
            },
            index: {
                files: 'slides/index.html',
            },
            gruntfile: {
                files: 'Gruntfile.js',
            },
        },
    });

    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('default', ['connect:server', 'watch']);

};