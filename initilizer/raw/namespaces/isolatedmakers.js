var isolatedmakers = isolatedmakers || {};
isolatedmakers.formula = function(a, b) {
	this.a = a;
 	this.b = b;
	this.execute = function() {
		return a + " " + b;	
	}
	return this;
}
