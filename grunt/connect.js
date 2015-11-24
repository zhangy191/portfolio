module.exports = function (grunt) {

	grunt.config.merge({

		connect: {
			server: {
				options: {
					open: true,
					port: 8181,
					base: 'app',
					hostname: '0.0.0.0',
					livereload: true
				}
			}
		}
	});
	
};