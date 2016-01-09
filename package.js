Package.describe({
  name: 'fourquet:actions',
  version: '0.0.1',
  summary: 'Actions for Meteor',
  git: 'https://github.com/fourquet/meteor-package-actions',
  documentation: 'README.md',
  license: 'LICENSE',
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use('ecmascript@0.1.6');
  api.use([
    'fourquet:reflux-core@0.3.0',
  ], [
    'server',
    'client',
  ], {
    weak: true,
  });
  api.use(
    [
      'fourquet:reflux@0.3.0',
    ], [
      'server',
      'client',
    ], {
      weak: true,
    });
  api.addFiles('actions.js');
  api.export('Actions');
});


Package.onTest(function(api) {
  api.use('ecmascript@0.1.6', ['client', 'server']);
  api.use('tinytest', ['client', 'server']);
  api.use(['fourquet:actions', 'fourquet:reflux-core'], ['client', 'server']);
  api.addFiles('actions-tests.js', ['client', 'server']);
});
