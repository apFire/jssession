var isolatedbreakers = isolatedbreakers || {};
isolatedbreakers.formula = function(a, b, c) {
	this.a = a;
 	this.b = b;
	this.c = c;
	this.execute = function() {
		return a + " " + b + " " + c;	
	}
 	return this;
}
