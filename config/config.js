/**
 * Loads the appropriate configuration files.
 */

// Returns either a config object or an empty object.
function loadConfig (file) {
 	try {
 		var module = require(file);
 		return module;
 	} catch (e) {
 		console.error('Could not load config:', file);
 		return {};
 	}
}

// Returns a new object with a's properties updated with b's.
function updateObject (a, b) {
	var merged = {};
	for (var prop in a) {
		merged[prop] = a[prop];
	}
	for (var prop in b) {
		merged[prop] = b[prop];
	}
	return merged;
}


var configs = {
	MAIN 			: loadConfig('./main.json'),
	FEATURE_FLAGS	: loadConfig('./feature-flags.json')
};

module.exports = updateObject(configs.MAIN, configs.FEATURE_FLAGS);
