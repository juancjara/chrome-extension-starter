/* eslint no-undef:0*/

let Storage = {

  property: chrome.storage.local,

  set(data, cb = () => {}) {
    Storage.property.set(data, cb);
  },

  get(key, cb = () => {}) {
    Storage.property.get(key, data => {
      let value = null;
      if (key in data) {
        value = data[key];
      }
      cb(value);
    });
  },

};

export default Storage;
