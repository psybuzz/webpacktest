webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("C:\\Users\\ekluo\\Documents\\github\\webpackdemo\\node_modules\\react-hot-loader\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("C:\\Users\\ekluo\\Documents\\github\\webpackdemo\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	// so deep!
	__webpack_require__(1);
	
	var UI = {
	    main: $('.content'),
	    status: $('#status-circle'),
	    waitToSave: null
	};
	
	// Delayed save
	function actuallySave() {
	    var items = $('.container');
	    var len = items.length;
	    var dataObj = new Array(len);
	
	    for (var i = 0; i < len; i++) {
	        dataObj[i] = $(items[i]).html();
	    }
	
	    // simulate the time of saving
	    setTimeout(function () {
	        // localStorage
	        localStorage.opus = JSON.stringify({
	            notes: dataObj
	        });
	
	        // save status
	        UI.status.removeClass('saving').addClass('saved');
	    }, 2000); // simulated save time
	}
	
	function saveIfReady() {
	    UI.waitToSave = Date.now() + 3000;
	
	    setTimeout(function () {
	        var now = Date.now();
	        if (now > UI.waitToSave) {
	            UI.status.removeClass('saved');
	            UI.status.addClass('saving');
	            actuallySave();
	        }
	    }, 3001);
	}
	
	UI.main.focus();
	
	$('#main').on('keyup', '.container', function () {
	    UI.status.removeClass('saved');
	    saveIfReady();
	});
	
	UI.status.click(function () {
	    UI.status.addClass('saving').removeClass('saved');
	    actuallySave();
	});
	
	// load from localStorage
	function loadNotes() {
	    if (typeof localStorage.opus !== 'undefined') {
	        var notes = JSON.parse(localStorage.opus).notes;
	        var html = '';
	
	        for (var i = 0, len = notes.length; i < len; i++) {
	            html += '<div class=\'container\'>' + notes[i] + '</div>';
	        }
	
	        $('#main').html(html);
	    }
	}
	loadNotes();
	
	// searching
	$('#searchbox').keyup(function () {
	    var text = $('#searchbox').val();
	    psy.imageBox(text, function (box) {
	        if (text.length > 0) {
	            $(box).addClass('image');
	            $('#searchResults').empty().append(box);
	        } else {
	            $('#searchResults').empty();
	        }
	    }, 'img');
	});
	
	// add container button
	$('#addContainer').click(function () {
	    var el = document.createElement('div');
	    var elHeading = document.createElement('div');
	    var elContent = document.createElement('div');
	
	    el.className = 'container';
	    elHeading.className = 'heading';
	    elContent.className = 'content';
	
	    elHeading.contentEditable = elContent.contentEditable = 'true';
	    elHeading.textContent = "Hey";
	    elContent.innerHTML = "So...<br><ul><li>First: </li></ul>";
	
	    el.appendChild(elHeading);
	    el.appendChild(elContent);
	
	    $('#main').append(el);
	});
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("C:\\Users\\ekluo\\Documents\\github\\webpackdemo\\node_modules\\react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "deep.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(2);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(4)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/autoprefixer-loader/index.js?browsers=last 3 versions!./../../node_modules/sass-loader/index.js?outputStyle=expanded!./deep.scss", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/autoprefixer-loader/index.js?browsers=last 3 versions!./../../node_modules/sass-loader/index.js?outputStyle=expanded!./deep.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports
	
	
	// module
	exports.push([module.id, "body {\n  background: #e4e4e4;\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  font-weight: 200;\n  color: #333;\n  padding-bottom: 100px;\n  padding-top: 50px;\n}\n\n.browsehappy {\n  margin: 0.2em 0;\n  background: #ccc;\n  color: #000;\n  padding: 0.2em 0;\n}\n\n#bigContainer {\n  position: relative;\n  left: 90px;\n}\n\n#main {\n  width: 50%;\n  min-width: 300px;\n  z-index: 1;\n}\n\n#rightpane {\n  /*background-color: lightseagreen;*/\n  width: 50%;\n  height: 100%;\n  right: 0px;\n  top: 0px;\n  position: fixed;\n  box-sizing: border-box;\n  padding-left: 160px;\n  /* Testing */\n  /*z-index: -1;*/\n  /*opacity: 0.5;*/\n}\n\n#searchbox {\n  position: relative;\n  width: 60%;\n  height: 30px;\n  background-color: gray;\n  top: 60px;\n  left: 30px;\n  border: 1px solid dimgray;\n  outline: none;\n  font-size: 16px;\n  font-family: Helvetica;\n  font-weight: lighter;\n  padding: 0px 8px;\n  color: white;\n  opacity: 0.2;\n  transition: 0.2s ease opacity;\n}\n\n#searchbox:hover, #searchbox:focus {\n  opacity: 1;\n}\n\n#searchResults {\n  width: 60%;\n  position: relative;\n  top: 90px;\n  left: 30px;\n  height: 100%;\n}\n\n.image {\n  width: 180px;\n  height: 160px;\n}\n\n#leftbar {\n  position: fixed;\n  left: 0px;\n  top: 0px;\n  width: 80px;\n  height: 100%;\n}\n\n#leftbar > ul {\n  list-style-type: none;\n  font-size: 15px;\n  font-weight: bold;\n  padding: 0px;\n}\n\n#leftbar > ul > li {\n  width: 50px;\n  height: 20px;\n  text-align: center;\n  opacity: 0.2;\n  transition: 0.2s ease opacity;\n}\n\n#leftbar:hover > ul > li {\n  opacity: 1;\n}\n\n#leftbar > ul > li:hover {\n  color: red;\n}\n\n.container {\n  width: 100%;\n  min-height: 150px;\n  box-shadow: 0px 3px 5px gray;\n  outline: none;\n  margin-bottom: 20px;\n  /* testing */\n  /*background-color: lightseagreen;*/\n  transition: 0.2s ease all;\n  border-top: 3px solid transparent;\n  position: relative;\n  padding: 20px;\n  background-color: whitesmoke;\n  border-top: 3px solid black;\n}\n\n.content {\n  outline: none;\n}\n\n#addContainer {\n  width: 50%;\n  min-width: 300px;\n  background-color: lightgray;\n  border: 1px dotted gray;\n  color: gray;\n  text-align: center;\n  font-size: 40px;\n  font-weight: bolder;\n  position: relative;\n  bottom: 0px;\n  left: 90px;\n  padding: 19px;\n}\n\n#addContainer:hover {\n  background-color: #a0a0a0;\n}\n\n#status-circle {\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n  border: 3px solid lightblue;\n  position: fixed;\n  z-index: 2;\n  top: 15px;\n  right: 15px;\n  transition-property: background-color, border-color, border-width, right, top;\n  transition-duration: 0.2s;\n  transition-timing-function: ease;\n}\n\n#status-circle:hover {\n  background-color: lightgray;\n  border-color: blue;\n  border-width: 6px;\n  top: 12px;\n  right: 12px;\n}\n\n.saving {\n  border-color: orange !important;\n  background-color: gray !important;\n  -webkit-animation: save-pulse 1s infinite;\n  /* Safari 4+ */\n  /* Fx 5+ */\n  /* Opera 12+ */\n  animation: save-pulse 1s infinite;\n  /* IE 10+ */\n}\n\n.saved {\n  border-color: green !important;\n}\n\n@-webkit-keyframes save-pulse {\n  0% {\n    background-color: lightgray;\n  }\n  100% {\n    background-color: dimgray;\n  }\n}\n\n@keyframes save-pulse {\n  0% {\n    background-color: lightgray;\n  }\n  100% {\n    background-color: dimgray;\n  }\n}\n\n#status-label {\n  border: 1px solid gray;\n  font-size: 14px;\n}\n\n.heading {\n  font-size: 40px;\n}\n\n/* Responsive: Phones */\n@media screen and (max-width: 768px) {\n  .container {\n    margin-bottom: 15px;\n  }\n  #main {\n    width: 72%;\n  }\n  #rightpane {\n    display: none;\n  }\n}\n", ""]);
	
	// exports


/***/ }
]);
//# sourceMappingURL=deep.bundle.js.map