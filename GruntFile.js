module.exports = function(grunt) {
	'use strict';
	require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
	grunt.initConfig({
		pkg: '<json:component.json>',
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
			options: {
				banner: '<% = meta.banner %>'
			},
			dist: {
				src: [
					'src/screenfull.js'
				],
				dest: 'dist/screenfull.js'
			}
		},
		uglify: {
			options: {
				banner: '<% = meta.banner %>'
			},
			dist: {
				files: {
					'dist/screenfull.min.js':	['src/screenfull.js']
				}
			}
		},
		jshint: {
			options: {
				jshintrc: '.jshintrc'
			},
			all: ['GruntFile.js', 'src/screenfull.js']
		}
	});

	grunt.registerTask('default', 'jshint');
	grunt.registerTask('release', 'jshint concat uglify');
};
