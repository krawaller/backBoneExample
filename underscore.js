define( ['order!lib/underscore-full'],
	function(x) {
		_.templateSettings = {
		  interpolate : /\{\{(.+?)\}\}/g
		};
		return _;
	}
);