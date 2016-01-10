# Actions for Meteor [![Build Status](https://travis-ci.org/fourquet/meteor-package-actions.svg?branch=master)](https://travis-ci.org/fourquet/meteor-package-actions)

An umbrella package for [Reflux](https://github.com/reflux/reflux-core) with a new namespace.

## Install
`meteor add fourquet:actions`

Works well with Stores, Routes, and Logs (coming soon).

Reflux needs to be included in the app with a package such as [fourquet:reflux-core](https://github.com/fourquet/meteor-package-reflux-core),  [fourquet:reflux](https://github.com/fourquet/meteor-package-reflux) or from [NPM](https://www.npmjs.com/package/reflux-core).

Example:
```javascript
// example.js

if (Meteor.isClient) {
  Session.setDefault('counter', 0);
  Actions.Client = Actions.createActions([
    'counterAction',
    'consoleAction'
  ]);
  Actions.Client.counterAction.listen((count = 0) =>  {
    Session.set('counter', count);
  });
  Actions.Client.consoleAction.listen((count = 0) =>  {
    console.log('consoleAction fired with value : ', count);
  });
  Template.hello.helpers({
    counter() {
      return Session.get('counter');
    }
  });
  Template.hello.events({
    'click button'() {
      Actions.Client.counterAction(Session.get('counter') + 1);
      Actions.Client.consoleAction(Session.get('counter') + 1);
    }
  });
}

if (Meteor.isServer) {
  Actions.Server = Actions.createActions([
    'timerAction'
  ]);
  Actions.Server.timerAction.listen((count = 0) => {
    console.log('timeAction fired at:', count);
  });
  let timer = 0;
  const timerSpeed = 2000;
  Meteor.setInterval(() => {
    Actions.Server.timerAction(timer);
    timer += timerSpeed;
  }, timerSpeed);
}
```

See the
[example](https://github.com/fourquet/meteor-package-actions/tree/master/example) app for more.


#### Version
0.0.1

#### License
MIT
