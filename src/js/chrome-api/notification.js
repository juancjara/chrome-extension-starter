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