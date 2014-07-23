define([
	"templates",
	"views/Menu",
	"views/clients/ClientLayout"
	],
function(t, Menu, ClientLayout){
	return Backbone.Marionette.Layout.extend({
		initialize: function(options){
			//this.menuView = ;
			//this.menuView.render();
			//this.collection = options.collection;
		},
		regions: {
			menu: ".js-menu",
			content: ".content"
		},
		template: function(){
			return window.JST["layout/main.html"];
		},
		onShow: function(){
			var collection = new Backbone.Collection();
			collection.add([
					{menuName: "Home", active: true},
					{menuName: "Clients"},
					{menuName: "Others"}
				]);
			this.menu.show(new Menu({
				delegate: this,
				collection: collection
			}));
		},
		handleMenuClick: function(menuName){
			var layout;
			switch(menuName){
				case "Clients":
					layout = new ClientLayout();
					break;
				default: 
					break;
			}
			if(layout){
				this.content.show(layout);
			}
		}
	});
});