'use strict';
module.exports = function (grunt) {
	require('load-grunt-tasks')(grunt);

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		meta: {
			banner: '/*!\n' +
				'* <%= pkg.name %>\n' +
				'* v<%= pkg.version %> - ' +
				'<%= grunt.template.today("yyyy-mm-dd") %>\n' +
				'<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
				'* (c) <%= pkg.author.name %>;' +
				' <%= pkg.license %> License\n' +
				'*/\n'
		},
		concat: {
			options: {
				banner: '<%= meta.banner %>'
			},
			dist: {
				files: {
					'dist/screenfull.js': 'src/screenfull.js'
				}
			}
		},
		uglify: {
			options: {
				banner: '<%= meta.banner %>'
			},
			dist: {
				files: {
					'dist/screenfull.min.js': 'src/screenfull.js'
				}
			}
		}
	});

	grunt.registerTask('default', [
		'concat',
		'uglify'
	]);
};
