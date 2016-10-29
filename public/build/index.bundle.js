webpackJsonp([1],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("C:\\Users\\ekluo\\Documents\\github\\webpackdemo\\node_modules\\react-hot-loader\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("C:\\Users\\ekluo\\Documents\\github\\webpackdemo\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	// Index page
	__webpack_require__(5);
	var spot = __webpack_require__(7);
	var Box = spot.Box;
	var Dot = spot.Dot;
	
	var $topbar = $('.topbar');
	$topbar.slideUp(0).slideToggle();
	
	var fillerRad = 9;
	var rad = 36;
	var margin = {
	    left: rad * 2,
	    right: rad * 2,
	    top: 100,
	    bottom: 200
	};
	var spawnWidth = window.innerWidth - margin.left - margin.right - rad * 2;
	var spawnHeight = window.innerHeight - margin.top - margin.bottom - rad * 2;
	var introMidContainer = $('.intro-mid');
	
	var numFiller = Math.round(Math.random() * Math.random() * 98) + 2;
	for (var i = 0; i < numFiller; i++) {
	    var x = Math.random() * spawnWidth + margin.left;
	    var y = Math.random() * spawnHeight + margin.top;
	    var dot = new Dot(fillerRad, x, y);
	    dot.draw(introMidContainer).slideIn({
	        newOpacity: 0.9,
	        animOptions: { duration: 20 * i, easing: 'easeOutCubic' }
	    });
	    dot.className = 'filler-circle';
	    dot.classList.add('back-gray');
	    dot.dataset.x = x;
	    dot.dataset.y = y;
	}
	
	$('.main-container').hide().fadeIn();
	
	$('[data-name="day"]').click(function () {
	    $('body').toggleClass('night');
	});
	
	var hour = new Date().getHours();
	if (hour >= 22 || hour <= 8) {
	    $('body').addClass('night');
	}

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("C:\\Users\\ekluo\\Documents\\github\\webpackdemo\\node_modules\\react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "index.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(6);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(4)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/autoprefixer-loader/index.js?browsers=last 3 versions!./../../node_modules/sass-loader/index.js?outputStyle=expanded!./index.scss", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/autoprefixer-loader/index.js?browsers=last 3 versions!./../../node_modules/sass-loader/index.js?outputStyle=expanded!./index.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports
	
	
	// module
	exports.push([module.id, "body {\n  margin: 0;\n  font-family: Helvetica, sans-serif;\n}\n\nbody.night {\n  background-color: black;\n  color: whitesmoke;\n}\n\nhtml, body {\n  height: 100%;\n}\n\n.topbar {\n  height: 50px;\n  margin: 0px 40px;\n  border-bottom: 1px solid lightgray;\n  position: relative;\n}\n\n.topbar .menu {\n  position: absolute;\n  bottom: 0px;\n  right: 0;\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n  font-weight: bolder;\n}\n\n.topbar .menu li {\n  display: inline-block;\n  margin: 0;\n  color: lightgray;\n  transition: 0.2s ease color, 0.2s ease background-color;\n  cursor: pointer;\n  padding: 8px 20px;\n}\n\n.topbar .menu li:hover {\n  background-color: black;\n  color: whitesmoke;\n}\n\n.text-circle:hover, .filler-circle:hover {\n  -webkit-transform: scale(1.5);\n      -ms-transform: scale(1.5);\n          transform: scale(1.5);\n  z-index: 2;\n}\n\n.text-circle {\n  text-align: center;\n  text-shadow: 1px 1px 10px black;\n  transition: 0.2s ease transform;\n  cursor: pointer;\n  line-height: 72px;\n  color: white;\n}\n\n.filler-circle {\n  text-align: center;\n  text-shadow: 1px 1px 2px black;\n  transition: 0.2s ease transform, 2s ease background-color;\n  cursor: pointer;\n  line-height: 72px;\n  color: white;\n}\n\n.filler-circle.back-gray {\n  background-color: #313131 !important;\n}\n\n.bottombar {\n  position: absolute;\n  top: calc(100% - 80px);\n  left: 40px;\n  right: 40px;\n  opacity: 0.15;\n  transition: 0.2s ease opacity;\n}\n\n.bottombar.lowered {\n  cursor: pointer;\n}\n\n.bottombar:hover {\n  opacity: 1;\n}\n\n.bottombar section {\n  border-top: 3px solid black;\n  width: 240px;\n  display: inline-block;\n  margin-right: 30px;\n}\n\n.bottombar section .title {\n  font-size: 20px;\n  margin-bottom: 8px;\n}\n", ""]);
	
	// exports


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("C:\\Users\\ekluo\\Documents\\github\\webpackdemo\\node_modules\\react-hot-loader\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("C:\\Users\\ekluo\\Documents\\github\\webpackdemo\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	//spot.js
	
	(function (definition) {
		var lib = definition();
	
		// Attach library as a module or directly to the global scope.
		if (( false ? 'undefined' : _typeof(module)) === 'object' && module.exports) {
			module.exports = lib;
		} else {
			for (var prop in lib) {
				window[prop] = lib[prop];
			}
		}
	})(function () {
		var bindables = {
			grow: function grow(d) {
				d = d || 20;
				$(this).css({
					'left': '-=' + d / 2,
					'top': '-=' + d / 2,
					'width': '+=' + d,
					'height': '+=' + d
				});
				this.radius += d;
				return this;
			},
			shrink: function shrink(d) {
				d = d || 20;
				$(this).css({
					'left': '+=' + d / 2,
					'top': '+=' + d / 2,
					'width': '-=' + d,
					'height': '-=' + d
				});
				this.radius -= d;
				return this;
			},
			slideIn: function slideIn(options) {
				options = options || {};
				var deg = options.deg || Math.random() * 360;
				var animOptions = options.animOptions || null;
				var dist = options.dist || 220;
				var newOpacity = options.newOpacity || 1.0;
	
				var dx = Math.round(Math.cos(deg) * dist);
				var dy = Math.round(Math.sin(deg) * dist);
	
				$(this).css({
					'left': '-=' + dx,
					'top': '-=' + dy,
					'opacity': 0
				}).animate({
					'left': '+=' + dx,
					'top': '+=' + dy,
					'opacity': newOpacity
				}, animOptions);
				return this;
			},
	
			/**
	   * @param  {Object} options For example, {x: 50, y: 20} or {y: -20}, where the numbers are
	   *                          absolute coordinates relative to the origin in the middle of the
	   *                          window.
	   */
			moveToCartesian: function moveToCartesian(options, animOptions) {
				options = options || {};
				animOptions = animOptions || {};
				animOptions.queue = false;
	
				if (typeof options.x !== 'undefined') {
					$(this).animate({ 'left': window.innerWidth / 2 + options.x - this.radius }, animOptions);
				}
				if (typeof options.y !== 'undefined') {
					$(this).animate({ 'top': window.innerHeight / 2 + options.y - this.radius }, animOptions);
				}
			}
		};
	
		// Generic square box.  Coordinates specity top-left corner.
		function Box(radius, x, y) {
			this.el = document.createElement('div');
			var radius = this.el.radius = typeof radius === 'undefined' ? 30 : parseFloat(radius);
			if (typeof x === "undefined") {
				var x = this.el.x = Math.floor(Math.random() * window.innerWidth - radius);
				var y = this.el.y = Math.floor(Math.random() * window.innerHeight - radius);
			} else {
				var x = this.el.x = x;
				var y = this.el.y = y;
			}
			var r = Math.floor(Math.random() * 255);
			var g = Math.floor(Math.random() * 255);
			var b = Math.floor(Math.random() * 255);
			var self = this.el;
	
			//initialize
			this.el.draw = function (elm) {
				elm = elm || $('body');
				elm = $(elm);
				$(self).css({
					'position': 'absolute',
					'left': self.x,
					'top': self.y,
					'width': self.radius * 2,
					'height': self.radius * 2,
					'background-color': 'rgb(' + r + ',' + g + ',' + b + ')'
				});
				elm.append(self);
				return self;
			};
			// this.el.draw();
	
			this.el.fade = function (d, to) {
				d = d || 10;
				to = parseFloat(to) || 0.01;
				var self = this;
				if (parseFloat($(this).css('opacity')) > to) {
					$(this).css('opacity', '-=0.01');
					setTimeout(function () {
						self.fade();
					}, d);
				}
				return this;
			};
	
			for (var prop in bindables) {
				this.el[prop] = bindables[prop];
			}
	
			return this.el;
		}
	
		// A circular box.
		function Dot(radius, x, y) {
			var radius = parseFloat(radius) || 30;
			var dot = new Box(radius, x, y);
			$(dot).css({ 'border-radius': '50%' });
	
			return dot;
		}
		Dot.prototype = new Box();
	
		var Group = function Group() {
			var members = [];
	
			return {
				add: function add(mesh) {
					members.push(mesh);
				},
				x: function x(val) {
					var diff = val - members[0].position.x;
					for (var m in members) {
						if (members.hasOwnProperty(m)) {
							members[m].position.x += diff;
						}
					}
				},
				dx: function dx(val) {
					for (var m in members) {
						if (members.hasOwnProperty(m)) {
							members[m].position.x += val;
						}
					}
				},
				y: function y(val) {
					var diff = val - members[0].position.y;
					for (var m in members) {
						if (members.hasOwnProperty(m)) {
							members[m].position.y += diff;
						}
					}
				},
				dy: function dy(val) {
					for (var m in members) {
						if (members.hasOwnProperty(m)) {
							members[m].position.y += val;
						}
					}
				},
				z: function z(val) {
					var diff = val - members[0].position.z;
					for (var m in members) {
						if (members.hasOwnProperty(m)) {
							members[m].position.z += diff;
						}
					}
				},
				dz: function dz(val) {
					for (var m in members) {
						if (members.hasOwnProperty(m)) {
							members[m].position.z += val;
						}
					}
				},
				yr: function yr(val) {
					for (var m in members) {
						if (members.hasOwnProperty(m)) {
							members[m].rotation.y = val;
						}
					}
				}
			};
		};
	
		return {
			Box: Box,
			Dot: Dot,
			Group: Group
		};
	});
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("C:\\Users\\ekluo\\Documents\\github\\webpackdemo\\node_modules\\react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "spot.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(8)(module)))

/***/ },
/* 8 */
/***/ function(module, exports) {

	module.exports = function(module) {
		if(!module.webpackPolyfill) {
			module.deprecate = function() {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	}


/***/ }
]);
//# sourceMappingURL=index.bundle.js.map