module.exports = function (grunt) {
	
	grunt.config.merge({

		watch: {
	      styles: {
	        files: ["app/styles/scss/**/*.scss"],
	        tasks: ["compass"]
	      }
	    }

	});

};