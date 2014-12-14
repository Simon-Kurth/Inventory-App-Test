// filepath: js/main.js 

requirejs.config({
	paths: {
		jquery: 'lib/jquery-min',
		backbone: 'lib/backbone-min',
		localStorage: 'lib/backbone.localStorage-min',
		underscore: 'lib/underscore-min'
		
	}, 

	 // Shim declaration
  	'shim': {
	    'underscore': {
	      'exports': '_'
	    },
	    'backbone': {
	      'deps': ['jquery', 'underscore'],
	      'exports': 'Backbone'
	    }
	}
});

// call app.js to load sample data
require(['jquery', 'app'], function(App) {
	var app_view = new App;
});