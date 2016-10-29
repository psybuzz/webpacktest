//spot.js

(function (definition) {
	var lib = definition();

	// Attach library as a module or directly to the global scope.
	if (typeof module === 'object' && module.exports) {
		module.exports = lib;
	} else {
		for (var prop in lib) {
			window[prop] = lib[prop];
		}
	}
})(function () {
	var bindables = {
		grow: function(d) {
			d = d || 20;
			$(this).css({
				'left': '-='+(d/2),
				'top': '-='+(d/2),
				'width': '+='+d,
				'height': '+='+d,
			});
			this.radius += d;
			return this;
		},
		shrink: function(d) {
			d = d || 20;
			$(this).css({
				'left': '+='+(d/2),
				'top': '+='+(d/2),
				'width': '-='+d,
				'height': '-='+d,
			});
			this.radius -= d;
			return this;
		},
		slideIn: function(options) {
			options = options || {};
			var deg = options.deg || Math.random()*360;
			var animOptions = options.animOptions || null;
			var dist = options.dist || 220;
			var newOpacity = options.newOpacity || 1.0;

			var dx = Math.round(Math.cos(deg)*dist);
			var dy = Math.round(Math.sin(deg)*dist);

			$(this)
					.css({
						'left': '-='+dx, 
						'top': '-='+dy, 
						'opacity': 0
					})
					.animate({
						'left': '+='+dx, 
						'top': '+='+dy, 
						'opacity': newOpacity,
					}, animOptions)
			return this;
		},

		/**
		 * @param  {Object} options For example, {x: 50, y: 20} or {y: -20}, where the numbers are
		 *                          absolute coordinates relative to the origin in the middle of the
		 *                          window.
		 */
		moveToCartesian: function (options, animOptions) {
			options = options || {};
			animOptions = animOptions || {};
			animOptions.queue = false;

			if (typeof options.x !== 'undefined') {
				$(this).animate({'left': (window.innerWidth/2)+options.x-this.radius}, animOptions);
			}
			if (typeof options.y !== 'undefined') {
				$(this).animate({'top': (window.innerHeight/2)+options.y-this.radius}, animOptions);
			}
		}
	};

	// Generic square box.  Coordinates specity top-left corner.
	function Box (radius, x, y) {
		this.el = document.createElement('div');
		var radius = this.el.radius = typeof radius === 'undefined' ? 30 : parseFloat(radius);
		if (typeof x === "undefined"){
			var x = this.el.x = Math.floor(Math.random()*window.innerWidth-radius);
			var y = this.el.y = Math.floor(Math.random()*window.innerHeight-radius);
		} else {
			var x = this.el.x = x;
			var y = this.el.y = y;
		}
		var r = Math.floor(Math.random()*255);
		var g = Math.floor(Math.random()*255);
		var b = Math.floor(Math.random()*255);
		var self = this.el;
		
		//initialize
		this.el.draw = function(elm){
			elm = elm || $('body');
			elm = $(elm);
			$(self).css({
				'position': 'absolute',
				'left': self.x,
				'top': self.y,
				'width': self.radius*2,
				'height': self.radius*2,
				'background-color': 'rgb('+r+','+g+','+b+')'
			});
			elm.append(self);
			return self;
		}
		// this.el.draw();

		this.el.fade = function(d, to){
			d = d || 10;
			to = parseFloat(to) || 0.01;
			var self = this;
			if (parseFloat($(this).css('opacity')) > to){
				$(this).css('opacity', '-=0.01');
				setTimeout(function(){
					self.fade();
				}, d);
			}
			return this;
		}

		for (var prop in bindables) {
			this.el[prop] = bindables[prop];
		}

		return this.el;
	}


	// A circular box.
	function Dot(radius, x, y){
		var radius = parseFloat(radius) || 30;
		var dot = new Box(radius, x, y);
		$(dot).css({'border-radius': '50%'});

		return dot;
	}
	Dot.prototype = new Box();

	
	var Group = function (){
		var members = [];

		return {
			add: function(mesh){
				members.push(mesh);
			},
			x: function(val){
				var diff = val - members[0].position.x;
				for (var m in members){
					if (members.hasOwnProperty(m)){
						members[m].position.x += diff;
					}
				}
			},
			dx: function(val){
				for (var m in members){
					if (members.hasOwnProperty(m)){
						members[m].position.x += (val);
					}
				}
			},
			y: function(val){
				var diff = val - members[0].position.y;
				for (var m in members){
					if (members.hasOwnProperty(m)){
						members[m].position.y += diff;
					}
				}
			},
			dy: function(val){
				for (var m in members){
					if (members.hasOwnProperty(m)){
						members[m].position.y += (val);
					}
				}
			},
			z: function(val){
				var diff = val - members[0].position.z;
				for (var m in members){
					if (members.hasOwnProperty(m)){
						members[m].position.z += diff;
					}
				}
			},
			dz: function(val){
				for (var m in members){
					if (members.hasOwnProperty(m)){
						members[m].position.z += (val);
					}
				}
			},
			yr: function(val){
				for (var m in members){
					if (members.hasOwnProperty(m)){
						members[m].rotation.y = (val);
					}
				}
			},
		}
	};


	return {
		Box 	: Box,
		Dot 	: Dot,
		Group 	: Group
	};
});
