define([
	"templates",
	],	
	function(t){

		var itemView = Backbone.Marionette.ItemView.extend({

			template: function(serialized){
				return window.JST["menus/menuOption.html"](serialized);
			},
			initialize: function(options){
				this.delegate = options.delegate;
				this.parent = options.parent;
			},
			events: {
				"click": "loadMenuOption"
			},
			loadMenuOption: function() {
				if(this.parent.active) {
					this.parent.active.removeClass("active");
				}
						
				this.$el.addClass("active");
				this.parent.active = this.$el;

				this.delegate.handleMenuClick(this.model.get("menuName"));
			},
			onShow: function(){
				if(this.model.get("active")){
					this.loadMenuOption();
				}
			},
			tagName: "li"
		}), 
		CollectionView = Backbone.Marionette.CollectionView.extend({
			itemView: itemView,
			initialize: function(options){
				this.delegate = options.delegate;
				this.itemViewOptions = {
					parent: this,
					delegate: this.delegate
				};
			},
			tagName: "ul",
			className: "nav nav-pills"
		});


		return CollectionView;

	}
);