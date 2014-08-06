// Revealing modular pattern
// Create moon-game namespace to contain game variables


var MoonGame = (function() {


	// Constants
	var NUM_BIRDS = 20;
	var MAX_TOP = 60;
	var MAX_LEFT = 90;

	// *** Bird constructor
	var Bird = function() {
	};

	Bird.prototype.create = function() {
	this.el = $("<i class='bird icon-twitter-bird'>");
	this.el.css({
		top: Math.random() * MAX_TOP + "%", 
		left: Math.random() * MAX_LEFT + "%"
	})
	return this.el;
}

	






	// **** Penguin constructor
	var Penguin = function() {
	}
	Penguin.prototype.create = function() {
		this.el = $("<i class = 'penguin icon-plancast'>");
		return this.el;
	}


	// *** Flock constructor
	var Flock = function(penguin) {
		this.penguin = penguin;
		this.birds = [];
	};
	Flock.prototype.create = function() {
		var newEl = $("<div class='flock'>");
		newEl.append(this.penguin.create());
		newEl.el.css("bottom", this.birds.length * 50); 
		





		return this.el;	
	}
	flock.prototype.addBirdClickHandler = function(bird) {
		var self = this;
		bird.el.on("click", function() {
		self.birds.push(bird)
		self.create()
		})
	};

	// *** Declare empty array
	var birds = [];
	var flock = null;
	

	//  *** Create birds in the sky
	var init = function() {
	  for (var i = 0; i < NUM_BIRDS; i++) {	
		var bird = new Bird();
		var birdEl = bird.create();
		$(".sky").append(birdEl);
		birds.push(bird);
	  }
	
	  



	//  *** Create the flock
	 var penguin = new Penguin;
	 flock = new Flock(penguin);
	 $(".sky").append(flock.create());

	}


	return {
		init: init
	};

})();







$(document).on('ready', function() {
  MoonGame.init();


});