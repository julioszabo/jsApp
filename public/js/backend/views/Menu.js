define([
	"templates",
	],	
	function(t){
		return Backbone.Marionette.ItemView.extend({
			template: function(){
				return window.JST["menus/menu.html"];
			},
			initialize: function(options){
				this.delegate = options.delegate;
			},
			events: {
				"click .js-menu-list-clients": "loadClientList",
				"click .js-menu-list-others": "loadOtherList"
			},
			loadClientList: function(){
				this.delegate.load('ClientsList');
			},
			loadOtherList: function(){
				this.delegate.load('Otherlist');
			}
		});
	}
);