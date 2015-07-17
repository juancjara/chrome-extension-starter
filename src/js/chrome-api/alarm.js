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
