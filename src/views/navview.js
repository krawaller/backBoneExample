define(['Backbone','Underscore',"jQuery"], function(Backbone,_,$){
	
	NavView = Backbone.View.extend({
		initialize: function(options){
			this.template = _.template("<ul id='nav'><li to='main'>Main</li><li to='about'>About</li>");
		},
		events: {
			"click li": "navTo"
		},
		navTo: function(e){
			this.trigger("navTo",$(e.currentTarget).attr("to"));
		},
		render: function(){
			$(this.el).html(this.template());
		}
	});
	
	return NavView;
});