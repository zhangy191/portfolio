module.exports = function(grunt) {
  'use strict'; 

  // Project configuration.
  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

  });

  //Load all grunt tasks from the Grunt folder
  var files = grunt.file.expand(['./grunt/*.js']);

  files.forEach(function (filename) {
    require(filename)(grunt);
  });

  require("jit-grunt")(grunt);

  grunt.registerTask('default', ['compass', 'connect', 'watch']);

  //grunt.registerTask('prod', ['handlebars', 'compass:prod', 'requirejs', 'watch']);

};