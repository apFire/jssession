var loader = function(url, target) {
	target = '#' + target; 
	$(target).load(url, function(){});
}
