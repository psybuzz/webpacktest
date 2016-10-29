webpackJsonp([2],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("C:\\Users\\ekluo\\Documents\\github\\webpackdemo\\node_modules\\react-hot-loader\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("C:\\Users\\ekluo\\Documents\\github\\webpackdemo\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	/**
	 * Login page logic
	 */
	
	__webpack_require__(9);
	var userEl = $('#userBox').focus();
	var passEl = $('#passBox');
	var loginFormEl = $('#login-box');
	var prettyNameEl = $('#prettyName').hide();
	var mainContainerEl = $('.main-container');
	
	// Initialize view logic.
	loginFormEl.on('keypress', function (e) {
	    if (e.keyCode === 13) {
	        if (isFormValid()) {
	            prettyNameEl.text(userEl.val().trim());
	            closeLoginForm(onLoginSubmit);
	        }
	    }
	});
	
	function isFormValid() {
	    return userEl.val().length > 0 && passEl.val().length > 0;
	}
	
	// Animates elements upon successful login.
	function closeLoginForm(cb) {
	    prettyNameEl.delay(350).slideDown(400);
	    loginFormEl.animate({ height: '1px' }, 80, function () {
	        userEl.hide();
	        passEl.hide();
	    }).delay(1400).animate({ padding: '0px 80px' }, 300, function () {
	        mainContainerEl.fadeOut(cb);
	
	        // open screen?
	    });
	}
	
	// Acts after final animations have completed.
	function onLoginSubmit() {
	    window.location = '/?fromLogin=1';
	}

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("C:\\Users\\ekluo\\Documents\\github\\webpackdemo\\node_modules\\react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "login.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 9:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(10);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(4)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/autoprefixer-loader/index.js?browsers=last 3 versions!./../../node_modules/sass-loader/index.js?outputStyle=expanded!./login.scss", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/autoprefixer-loader/index.js?browsers=last 3 versions!./../../node_modules/sass-loader/index.js?outputStyle=expanded!./login.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 10:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports
	
	
	// module
	exports.push([module.id, "body {\n  margin: 0;\n  overflow: hidden;\n}\n\nhtml, body {\n  height: 100%;\n}\n\n.main-container {\n  overflow: hidden;\n  width: 100%;\n  height: 100%;\n}\n\n.ring-container {\n  position: absolute;\n  width: 600px;\n  height: 100%;\n  top: 0;\n  left: 0;\n  right: 0;\n  margin: 0 auto;\n}\n\n.login-container {\n  width: 100%;\n  position: absolute;\n  top: 30%;\n  text-align: center;\n}\n\n.login-container #login-box {\n  position: relative;\n  width: 400px;\n  margin: 0 auto;\n  top: 30%;\n  background-color: black;\n  color: white;\n  overflow: hidden;\n}\n\n.login-container #login-box:before {\n  box-shadow: inset -50px 0px 182px -132px black;\n  content: \" \";\n  height: 100%;\n  width: 223px;\n  position: absolute;\n  left: -223px;\n  top: 0;\n}\n\n.login-container #login-box:after {\n  box-shadow: inset 50px 0px 182px -132px black;\n  content: \" \";\n  height: 100%;\n  width: 255px;\n  position: absolute;\n  left: 100%;\n  top: 0;\n}\n\n.login-container input {\n  color: white;\n  background-color: black;\n  line-height: 20px;\n  font-size: 15px;\n  width: 100%;\n  border: 0px;\n  outline: none;\n  padding: 20px;\n}\n\n.login-container #userBox {\n  padding-bottom: 4px;\n}\n\n.login-container #passBox {\n  padding-top: 4px;\n}\n\n.login-container #prettyName {\n  font-size: 55px;\n  font-style: oblique;\n  letter-spacing: 2px;\n  padding-top: 50px;\n}\n", ""]);
	
	// exports


/***/ }

});
//# sourceMappingURL=login.bundle.js.map