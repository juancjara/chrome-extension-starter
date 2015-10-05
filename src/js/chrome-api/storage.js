let Storage = {
  property: chrome.storage.local,

  set(data, cb) {
    cb = cb || () => {};
    Storage.property.set(data, cb);
  },

  get(key, cb) {
    cb = cb || () => {};

    Storage.property.get(key, (data) => {
      let value;
      if (key in data) {value = data[key]}
      else {value = null};
      cb(value);
    });
  }

};

export default Storage;
