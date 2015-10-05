let Alarm = {
  actions: {},

  create(name, alarmInfo, fn) {
    chrome.alarms.create(name, alarmInfo);
    Alarm.actions[name] = fn;
  },

  listenAll() {
    chrome.alarms.onAlarm.addListener((elem) => {
      Alarm.actions[elem.name]();
    });
  },

  clearAll(cb) {
    chrome.alarms.clearAll(cb);
  }

};

export default Alarm;
