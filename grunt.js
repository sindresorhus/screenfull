/*global config:true, task:true*/
config.init({
	min: {
		'screenfull.min.js': 'screenfull.js'
	},
	lint: {
		files: 'screenfull.js'
	},
	jshint: {
		options: {
			curly: true,
			eqeqeq: true,
			latedef: true,
			newcap: true,
			noarg: true,
			sub: true,
			undef: true,
			eqnull: true,
			browser: true
		}
	}
});

// Default task
task.registerTask('default', 'lint min');