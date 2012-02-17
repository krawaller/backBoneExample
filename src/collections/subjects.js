define(['Backbone','SubjectModel'], function(Backbone,SubjectModel){

	SubjectCollection = Backbone.Collection.extend({
		localStorage: new Store("subjects"),
		model: SubjectModel
	});

	return SubjectCollection
});