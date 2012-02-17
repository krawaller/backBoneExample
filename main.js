require.config({
	paths: {
		jQuery : 'jquery',
		Underscore : 'underscore',
		Backbone : 'backbone',
		TeacherModel: 'src/models/teacher',
		SubjectModel: 'src/models/subject',
		TeacherListentryView: 'src/views/teacherlistentry',
		SubjectListentryView: 'src/views/subjectlistentry',
		TeacherListView: 'src/views/teacherlist',
		SubjectListView: 'src/views/subjectlist',
		BaseView: 'src/views/baseview',
		MainRouter: 'src/routers/main',
		MainView: 'src/views/mainview',
		AboutView: 'src/views/aboutview',
		NavView: 'src/views/navview',
		TeacherCollection: 'src/collections/teachers',
		SubjectCollection: 'src/collections/subjects'
	}
});

require( ['src/app'], function( App ) { App.init(); } );