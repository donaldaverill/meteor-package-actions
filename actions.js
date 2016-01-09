Reflux = null;

if (Package['fourquet:reflux-core']) {
  Reflux = Package['fourquet:reflux-core'].Reflux;
}

if (Package['fourquet:reflux']) {
  Reflux = Package['fourquet:reflux'].Reflux;
}

if (!Reflux) {
  throw new Meteor.Error('no-reflux-found', 'Can\'t find Reflux. Add a package such as fourquet:reflux-core.');
}

Actions = Reflux;
