define([
	"templates",
	"model/Clients",
	"views/clients/ClientsEntityList"
	],
function(t, Clients, ClientsEntityList){
	return Backbone.Marionette.Layout.extend({
		initialize: function(options){
			this.clients = new Clients.Collection();
		},
		regions: {
			main: ".js-clients"
		},
		template: function(){
			return window.JST["clients/layout.html"];
		},
		onShow: function(){
			this.main.show(new ClientsEntityList({
				collection: this.clients
			}));
		}
	});
});