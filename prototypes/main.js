var Truck = function(color) {
	// initializer
	if(color) {
	  	this.color = color;
	}
	this.iconType = "truck";
	this.fuelLevel = 100;	

	// this.create = function() {
	// 	var el = $("<i>").addClass("icon-" + this.iconType)
	// 		.css("color", this.color);
	// return el;	
	// }
};

Truck.prototype.color = "red";
Truck.prototype.create = function() {
	this.el = $("<i>")
		.addClass("icon-" + this.iconType)
		.css("color", this.color);
	return this.el;	
};
Truck.prototype.drive = function() {
	this.fuelLevel -=10;	
};
Truck.prototype.updateColor = function() {
	this.el.css("color", this.color);
};



var Ambulance = function() {
	this.iconType = "ambulance";
}
Ambulance.prototype = new Truck("blue");
Ambulance.prototype.constructor = Ambulance;


var burritoTruck = new Truck();
$("body").append(burritoTruck.create());

var tofurkeyTruck = new Truck();
$("body").append(tofurkeyTruck.create());

var ambulance = new Ambulance();
$("body").append(ambulance.create());




$(document).on('ready', function() {
  
});