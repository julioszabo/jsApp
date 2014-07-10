define([
	"templates"
	],
	function(t, Clients){
		var ClientGridRowView = Backbone.Marionette.ItemView.extend({
				template: function(serialized){
					return window.JST["clients/clientEntityRow.html"](serialized);
				}
			}),
			ClientsGridView = Backbone.Marionette.CompositeView.extend({
				tagName: "table",
				template: function(serialized){
					return window.JST["clients/clientsEntityList.html"](serialized);
				},
				itemView: ClientGridRowView,
				appendHtml: function(collectionView, itemView){
        			collectionView.$("tbody").append(itemView.el);
    			}
			});

		return ClientsGridView;
	}
);