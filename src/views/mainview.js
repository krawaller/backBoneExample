define(['Backbone','Underscore',"jQuery","BaseView","TeacherListView","SubjectListView"], function(Backbone,_,$,BaseView,TeacherListView,SubjectListView){

	MainView = BaseView.extend({
		initialize: function(options){
			this.template = _.template("<div id='teacherlist'>WUU</div><div id='subjectlist'>Waa</div>");
			this.teacherCol = options.teacherCol;
			this.subjectCol = options.subjectCol;
		},
		render: function(){
			$(this.el).html(this.template());
			teacherlistview = new TeacherListView({collection: this.teacherCol});
			subjectlistview = new SubjectListView({collection: this.subjectCol});
			teacherlistview.render();
			subjectlistview.render();
			this.$("#teacherlist").html(teacherlistview.el);
			this.$("#subjectlist").html(subjectlistview.el);
		}
	});
	
	return MainView;
});