define(['Backbone','Underscore',"jQuery"], function(Backbone,_,$){
	
	SubjectListentryView = Backbone.View.extend({
		initialize: function(options){
			this.template = _.template("<span class='deletebutton'>X</span> <span class='name'>{{name}}!</span> (<span class='code'>{{code}}</span>)");
			_.bindAll(this,"remove","handleDelete");
			options.model.bind('change', this.render, this);
			options.model.bind('destroy', this.remove);
		},
		render: function(){
			$(this.el).html(this.template(this.model.toJSON()));
		},
		events: {
			"click .deletebutton": "handleDelete"
		},
		remove: function() {
		    $(this.el).remove();
		},
		handleDelete: function(e){
			this.model.destroy();
		}
	});
	return SubjectListentryView
});