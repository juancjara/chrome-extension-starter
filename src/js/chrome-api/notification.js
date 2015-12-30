/* eslint no-undef:0*/

let Notification = {

  iconUrl: '../images/default-128.png',
  title: 'Set a title',
  type: 'basic',

  create(data = {}, cb = () => {}) {
    var id = '' + (new Date()).getTime();

    chrome.notifications.create(id, {
      type: data.type || Notification.type,
      iconUrl: data.icon || Notification.iconUrl,
      title: data.title || Notification.title,
      message: data.message || '',
    }, cb);
  },

};

export default Notification;
