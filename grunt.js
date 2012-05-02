module.exports = function( grunt ) {
	'use strict';

	grunt.initConfig({
		pkg: '<json:package.json>',
		meta: {
			banner: '/*!\n' +
				'* <%= pkg.name %>\n' +
				'* v<%= pkg.version %> - ' +
				'<%= grunt.template.today("yyyy-mm-dd") %>\n' +
				'<%= pkg.homepage ? "* " + pkg.homepage + "\n" : "" %>' +
				'* (c) <%= pkg.author.name %>;' +
				' <%= _.pluck(pkg.licenses, "type").join(", ") %> License\n' +
				'*/'
		},
		concat: {
			dist: {
				src: ['<banner:meta.banner>', 'src/screenfull.js'],
				dest: 'dist/screenfull.js'
			}
		},
		min: {
			dist: {
				src: ['<banner:meta.banner>', 'src/screenfull.js'],
				dest: 'dist/screenfull.min.js'
			}
		},
		lint: {
			files: 'src/screenfull.js'
		},
		jshint: {
			options: {
				es5: true,
				esnext: true,
				bitwise: true,
				curly: true,
				eqeqeq: true,
				latedef: true,
				newcap: true,
				noarg: true,
				noempty: true,
				regexp: true,
				undef: true,
				strict: true,
				trailing: true,
				smarttabs: true,
				browser: true,
				nonstandard: true
			}
		}
	});

        grunt.registerTask('default', 'lint');

        grunt.registerTask('release', 'lint concat min');

};