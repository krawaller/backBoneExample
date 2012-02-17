define(['Backbone','Underscore',"jQuery","TeacherListentryView","TeacherModel"], function(Backbone,_,$,TeacherListEntryView,TeacherModel){

	
	TeacherListView = Backbone.View.extend({
		initialize: function(options) {
			this.template = _.template("<h2>Lärare:</h2><div id='teachers'></div><input type='text' id='firstname'/><input type='text' id='lastname'/><input id='addteacher' type='button' value='Add'/>"),
			_.bindAll(this, 'render', 'addAll', 'addOne','newTeacher');
			this.collection.bind('add', this.addOne);
		},
		render: function() {
			$(this.el).html(this.template());
			this.addAll();
			return this;
		},
		addAll: function() {
			this.collection.each(this.addOne);
		},
		addOne: function(model) {
			view = new TeacherListEntryView({model: model});
			view.render();
			this.$("#teachers").append(view.el);
			model.save();
		},
		newTeacher: function(e){
			this.collection.add(new TeacherModel({firstname:this.$("#firstname").val(),lastname:this.$("#lastname").val()}));
			this.$("#firstname").val("")
			this.$("#lastname").val("")
		},
		events: {
			"click #addteacher":"newTeacher"
		}
	});
	
	return TeacherListView;
});




