define([
	"templates",
	"views/Menu"
	],
function(t, Menu){
	return Backbone.Marionette.Layout.extend({
		initialize: function(options){
			//this.menuView = ;
			//this.menuView.render();
			//this.collection = options.collection;
		},
		regions: {
			menu: ".menu",
			content: ".content"
		},
		template: function(){
			return window.JST["layout/main.html"];
		},
		load: function(view){
			switch(view){
				case "ClientsList":
					this.content.show({});
					break;
				case "OtherList":
					this.content.show({});
					break;
			}
		},
		onShow: function(){
			this.menu.show(new Menu({
				delegate: this
			}));
		}
	});
});