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
			menu: ".js-menu",
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
			alert(menuName);
			switch(menuName){
				case "": 
					break;
				default: 
					break;
			}
		}
	});
});