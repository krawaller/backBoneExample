define(['Backbone','Underscore',"jQuery","NavView","MainView","AboutView","TeacherCollection","SubjectCollection"], function(Backbone,_,$,NavView,MainView,AboutView,TeacherCollection,SubjectCollection){
	
	MainRouter = Backbone.Router.extend({
		routes: {
			"":"main",
			"main":"main",
			"about":"about"
		},
		collections: {},
		views: {},
		initialize: function() {
			_.bindAll(this, 'main', 'about',"navToDest");
			teachers = new TeacherCollection;
			teachers.fetch();
			subjects = new SubjectCollection;
			subjects.fetch();
			this.collections.teachers = teachers;
			this.collections.subjects = subjects;
			
			// fix navigationview
			navview = new NavView
			$("#main").html(navview.el);
			navview.render();
			navview.bind("navTo",this.navToDest)
			
			// fix all views
			mainview = new MainView({teacherCol:teachers,subjectCol:subjects});
			aboutview = new AboutView
			$("#main").append(mainview.el);
			$("#main").append(aboutview.el);
			this.views.main = mainview
			this.views.about = aboutview
		},
		navToDest: function(destination){
			this.navigate(destination,true);
		},
		main: function() {
			this.setBody(this.views.main);
			this.view.render();
		},
		about: function() {
			this.setBody(this.views.about);
			this.view.render()
		},
		setBody: function(view) {
			if (typeof this.view != 'undefined'){
				this.view.unrender();
			}
			this.view = view;
			$("#main").append(view.el);
		}
	});
	
	return MainRouter;
});