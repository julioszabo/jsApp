define([
	"views/MainLayout"
	],
	function(MainLayout){
		var app = new Backbone.Marionette.Application();

		app.addRegions({
			"mainRegion": "#app"
		});

		//messages.fetch();

		app.addInitializer(function(){
			this.mainRegion.show(new MainLayout({
				//collection: messages
			}));
		});

		return app;
	});