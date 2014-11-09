module.exports = function(grunt) {

  grunt.initConfig({
    jshint: {
      lib: {
        options: {
          "laxcomma": true
        },
        src: [ 'lib/**/*.js' ]
      },
      test: {
        options: {
          "laxcomma": true,
          "expr": true
        },
        src: [ 'test/**/*.js' ]     
      }
    },
    mochaTest: {
      src: [ 'test/**/*.js' ]
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-mocha-test');

  grunt.registerTask('validate', [ 'jshint', 'mochaTest' ]);
}