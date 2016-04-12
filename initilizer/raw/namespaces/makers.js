function formula(a, b) {
	this.a = a;
 	this.b = b;
	this.execute = function() {
		return a + " " + b;	
	}
}
