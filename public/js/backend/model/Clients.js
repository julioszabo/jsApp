define([],
function(){
	var Model = Backbone.Model.extend({
		defaults:{
			name: "Juan",
			lastname: "Perez",
			age: 18
		},
		grow: function(){
			this.set("age", this.get("age") + 1);
		}
	}),
	Collection = Backbone.Collection.extend({
		model: Model
	});
	return {
		Model: Model,
		Collection: Collection
	};
});