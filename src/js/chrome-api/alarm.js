let Alarm = {

  actions: {},

  create(name, alarmInfo, fn) {
    chrome.alarms.create(name, alarmInfo);
    Alarm.actions[name] = fn;
  },

  setup() {
    chrome.alarms.onAlarm.addListener((elem) => {
      Alarm.actions[elem.name]();
    });
  },

  clearAll(cb) {
    chrome.alarms.clearAll(cb);
  },

  clear(name) {
    chrome.alarms.clear(name);
  }


};

export default Alarm;

