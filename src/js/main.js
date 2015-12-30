/* eslint no-undef:0*/

import Notification from './chrome-api/notification';
import Alarm from './chrome-api/alarm';
import Storage from './chrome-api/storage';

Alarm.setup();

Notification.create({ message: 'msg' });

function doSomething() {
  console.log('doing something');
}

Alarm.create('create notification',
             { when: Date.now() + 1000 },
              doSomething);

Storage.set({ foo: 'bar' }, () => {
  console.log('value saved');
  Storage.get('foo', (value) => {
    console.log('value found', value);
  });
});
