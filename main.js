$(document).on('ready', function() {
  
});

// var snake = {
//   deadSkin: 100,
//   molt: function() {
//     var originalMolts = deadSkin;
//     deadSkin = 0;
//     return orignalMolts;
//   }
// };



// var snake = {
//   deadSkin: 100,
//   molt: function() {
//     var original = this.deadSkin
//     this.deadSkin = 0;
//     return this.deadSkin;
//   }
// };
// snake.slither = function() {}


var Athlete = function(fatigue, height, weight) {
  this.fatigue = fatigue;
  this.height = height;
  this.weight = weight;
  this.warmUp = function() {
    console.log("I like to loosen up before exercising!");
  }
};


var RollerBlader = function(isWearingHelmet, skateType, fatigue, height, weight) {
  this.isWearingHelmet = isWearingHelmet;
  this.skateType = skateType;
  Athlete.call(this, fatigue, height, weight);
};
RollerBlader.prototype = new Athlete();
RollerBlader.prototype.constructor = RollerBlader;


var Swimmer = function(breath, fatigue, height, weight) {
  this.breath = breath;	
  Athlete.call(this, fatigue, height, weight);
};
Swimmer.prototype = new Athlete();
Swimmer.prototype.constructor = Swimmer;

var a = new Swimmer("deep", "tired", 6, 100);
console.log(Swimmer);

