(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

exports["default"] = Alarm;
module.exports = exports["default"];

},{}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
var Notification = {
  iconUrl: '../images/default-128.png',
  title: 'Set a title',
  type: 'basic',

  create: function create(data, cb) {
    data = data || {};
    cb = cb || function () {};
    var id = '' + new Date().getTime();

    chrome.notifications.create(id, {
      type: data.type || Notification.type,
      iconUrl: data.icon || Notification.iconUrl,
      title: data.title || Notification.title,
      message: data.message || ''
    }, cb);
  }
};

exports['default'] = Notification;
module.exports = exports['default'];

},{}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var Storage = {
  property: chrome.storage.local,

  set: function set(data, cb) {
    cb = cb || function () {};
    Storage.property.set(data, cb);
  },

  get: function get(key, cb) {
    cb = cb || function () {};

    Storage.property.get(key, function (data) {
      var value = undefined;
      if (key in data) {
        value = data[key];
      } else {
        value = null;
      };
      cb(value);
    });
  }

};

exports["default"] = Storage;
module.exports = exports["default"];

},{}],4:[function(require,module,exports){
'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _chromeApiNotification = require('./chrome-api/notification');

var _chromeApiNotification2 = _interopRequireDefault(_chromeApiNotification);

var _chromeApiAlarm = require('./chrome-api/alarm');

var _chromeApiAlarm2 = _interopRequireDefault(_chromeApiAlarm);

var _chromeApiStorage = require('./chrome-api/storage');

var _chromeApiStorage2 = _interopRequireDefault(_chromeApiStorage);

_chromeApiAlarm2['default'].setup();

_chromeApiNotification2['default'].create({ message: 'msg' });

var doSomething = function doSomething() {
  console.log('doing something');
};

_chromeApiAlarm2['default'].create('create notification', { when: Date.now() + 1000 }, doSomething);

_chromeApiStorage2['default'].set({ foo: 'bar' }, function (data) {
  console.log('value saved');
  _chromeApiStorage2['default'].get('foo', function (value) {
    console.log('value found', value);
  });
});

},{"./chrome-api/alarm":1,"./chrome-api/notification":2,"./chrome-api/storage":3}]},{},[4]);
