module.exports = function (grunt) {
	
	grunt.config.merge({

		compass: {
	      options: {
        	sassDir: 'app/styles/scss',
			cssDir: 'app/styles/css',
			fontsDir: 'fonts',
			importPath: 'app/bower_components/foundation/scss/',
			relativeAssets: false,
			assetCacheBuster: false,
			raw: 'Sass::Script::Number.precision = 10\n'
	      },
	      server: {
	      	options: {
	      		sourcemap: true
	      	}
	      }
	    }

	});

};