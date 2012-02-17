define(['jQuery','Underscore','Backbone','MainRouter'], function($,_,BackBone,MainRouter){
	return {
		init: function(){
			this.router = new MainRouter
			Backbone.history.start()
		}
	};
});