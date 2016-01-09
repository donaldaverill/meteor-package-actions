if (Meteor.isServer) {
  Tinytest.add('Actions - defined on server', (test) => {
    test.notEqual(Actions, undefined, 'Expected ' +
      'Actions to be defined on the server.');
  });
}

if (Meteor.isClient) {
  Tinytest.add('Actions - defined on client', (test) => {
    test.notEqual(Actions, undefined, 'Expected ' +
      'Actions to be defined on the client.');
  });
}
