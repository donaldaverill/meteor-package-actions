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
