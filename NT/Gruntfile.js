﻿// our wrapper function (required by grunt and its plugins)
// all configuration goes inside this function
module.exports = function (grunt) {
    // ==========================================================================
    // CONFIGURE GRUNT ==========================================================
    // ==========================================================================
    grunt.initConfig({
        
        // get the configuration info from package.json -------------------------
        // this way we can use things like name and version (pkg.name)
        pkg: grunt.file.readJSON('package.json'),

    // all of our configuration will go here

    // configure jshint to validate js files -------------------------------------
        jshint: {
            options: {
                // use jshint-stylish to make our errors look and read good
                reporter: require('jshint-stylish'),
                unused: true
            },
            // when this task is run, lint the Gruntfile and all js files in src
            build: ['Gruntfile.js', 'src/**/*.js']
        },

        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build: {
                src: 'src/js/magic.js',
                dest: 'build/magic.min.js'
            }
        }
    });
    
    // ===========================================================================
    // LOAD GRUNT PLUGINS ========================================================
    // ===========================================================================
    // we can only load these if they are in our package.json
    // make sure you have run npm install so our app can find these
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['jshint']);
    grunt.registerTask('default', ['uglify']);
};