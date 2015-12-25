/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _notification = __webpack_require__(1);

	var _notification2 = _interopRequireDefault(_notification);

	var _alarm = __webpack_require__(2);

	var _alarm2 = _interopRequireDefault(_alarm);

	var _storage = __webpack_require__(3);

	var _storage2 = _interopRequireDefault(_storage);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	_alarm2.default.setup();

	_notification2.default.create({ message: 'msg' });

	var doSomething = function doSomething() {
	  console.log('doing something');
	};

	_alarm2.default.create('create notification', { when: Date.now() + 1000 }, doSomething);

	_storage2.default.set({ foo: 'bar' }, function (data) {
	  console.log('value saved');
	  _storage2.default.get('foo', function (value) {
	    console.log('value found', value);
	  });
	});

/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var Notification = {

	  iconUrl: '../images/default-128.png',
	  title: 'Set a title',
	  type: 'basic',

	  create: function create() {
	    var data = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	    var cb = arguments.length <= 1 || arguments[1] === undefined ? function () {} : arguments[1];

	    var id = '' + new Date().getTime();

	    chrome.notifications.create(id, {
	      type: data.type || Notification.type,
	      iconUrl: data.icon || Notification.iconUrl,
	      title: data.title || Notification.title,
	      message: data.message || ''
	    }, cb);
	  }
	};

	exports.default = Notification;

/***/ },
/* 2 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var Alarm = {

	  actions: {},

	  create: function create(name, alarmInfo, fn) {
	    chrome.alarms.create(name, alarmInfo);
	    Alarm.actions[name] = fn;
	  },
	  setup: function setup() {
	    chrome.alarms.onAlarm.addListener(function (elem) {
	      Alarm.actions[elem.name]();
	    });
	  },
	  clearAll: function clearAll(cb) {
	    chrome.alarms.clearAll(cb);
	  },
	  clear: function clear(name) {
	    chrome.alarms.clear(name);
	  }
	};

	exports.default = Alarm;

/***/ },
/* 3 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var Storage = {

	  property: chrome.storage.local,

	  set: function set(data) {
	    var cb = arguments.length <= 1 || arguments[1] === undefined ? function () {} : arguments[1];

	    Storage.property.set(data, cb);
	  },
	  get: function get(key) {
	    var cb = arguments.length <= 1 || arguments[1] === undefined ? function () {} : arguments[1];

	    Storage.property.get(key, function (data) {
	      var value = null;
	      if (key in data) {
	        value = data[key];
	      }
	      cb(value);
	    });
	  }
	};

	exports.default = Storage;

/***/ }
/******/ ]);