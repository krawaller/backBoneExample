define(['Backbone','Underscore',"jQuery"], function(Backbone,_,$){
	
	TeacherListentryView = Backbone.View.extend({
		initialize: function(options){
			this.template = _.template("<span class='deletebutton'>X</span> <span class='firstname'>{{firstname}}</span> <span class='lastname'>{{lastname}}</span>");
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
	return TeacherListentryView;
});


