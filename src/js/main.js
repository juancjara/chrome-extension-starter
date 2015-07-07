var Notification = require('./chrome-api/notification');
var Alarm = require('./chrome-api/alarm');
var Storage = require('./helpers/storage');

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
