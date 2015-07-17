(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var Alarm = {
  actions: {},

  create: function(name, alarmInfo, fn) {
    chrome.alarms.create(name, alarmInfo);
    Alarm.actions[name] = fn;
  },

  listenAll: function() {
    chrome.alarms.onAlarm.addListener(function(elem) {
      Alarm.actions[elem.name]();
    });
  },

  clearAll: function(cb) {
    chrome.alarms.clearAll(cb);
  }

}

module.exports = Alarm;

},{}],2:[function(require,module,exports){
var Notification = {
  iconUrl: '../images/default-128.png',
  title: 'Set a title',
  type: 'basic',

  create: function(data, cb) {
    data = data || {};
    cb = cb || function() {};
    var id = '' + (new Date()).getTime();

    chrome.notifications.create(id, {
      type: data.type || Notification.type,
      iconUrl: data.icon || Notification.iconUrl,
      title: data.title || Notification.title, 
      message: data.message || ''
    }, cb);
  }
}

module.exports = Notification;
},{}],3:[function(require,module,exports){
var Storage = {
  property: chrome.storage.local,

  set: function(data, cb) {
    cb = cb || function() {};
    Storage.property.set(data, cb);
  },

  get: function(key, cb) {
    cb = cb || function() {};

    Storage.property.get(key, function(data) {
      var value;
      if (key in data) {value = data[key]}
      else {value = null};
      cb(value);
    });
  }  

};

module.exports = Storage;

},{}],4:[function(require,module,exports){
var Notification = require('./chrome-api/notification');
var Alarm = require('./chrome-api/alarm');
var Storage = require('./chrome-api/storage');

Notification.create({message: 'msg'});

var doSomething = function() {
  console.log('doing something');
};

Alarm.create('create notification',
             {when: Date.now() + 1000},
              doSomething);

Storage.set({foo: 'bar'}, function(data) {
  console.log('value saved');
  Storage.get('foo', function(value) {
    console.log('value found', value)
  })
})

//promises

},{"./chrome-api/alarm":1,"./chrome-api/notification":2,"./chrome-api/storage":3}]},{},[4]);
