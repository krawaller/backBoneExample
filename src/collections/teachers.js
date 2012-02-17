define(['Backbone','TeacherModel'], function(Backbone,TeacherModel){

	TeacherCollection = Backbone.Collection.extend({
		localStorage: new Store("teachers"),
		model: TeacherModel
	});

	return TeacherCollection
});

