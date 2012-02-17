define(['Backbone','Underscore',"jQuery","BaseView","TeacherListView","SubjectListView"], function(Backbone,_,$,BaseView,TeacherListView,SubjectListView){
	
	AboutView = BaseView.extend({
		initialize: function(options){
			this.template = _.template("<p>This is a teeest program!</p>");
		},
		render: function(){
			$(this.el).html(this.template());
		}
	});
	
	return AboutView;
});