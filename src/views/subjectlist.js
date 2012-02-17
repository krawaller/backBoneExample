define(['Backbone','Underscore',"jQuery","SubjectListentryView","SubjectModel"], function(Backbone,_,$,SubjectListentryView,SubjectModel){
	
	SubjectListView = Backbone.View.extend({
		initialize: function(options) {
			this.template = _.template("<h2>Kurser:</h2><div id='subjects'></div><input type='text' id='name'/><input type='text' id='code'/><input id='addsubject' type='button' value='Add'/>"),
			_.bindAll(this, 'render', 'addAll', 'addOne','newSubject');
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
			view = new SubjectListentryView({model: model});
			view.render();
			this.$("#subjects").append(view.el);
			model.save();
		},
		newSubject: function(e){
			this.collection.add(new SubjectModel({name:this.$("#name").val(),code:this.$("#code").val()}));
			this.$("#name").val("")
			this.$("#code").val("")
		},
		events: {
			"click #addsubject":"newSubject"
		}
	});
	
	return SubjectListView;
}); 