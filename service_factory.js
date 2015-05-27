var Service = require('node-windows').Service;
var script = __dirname + '\\service.js';
var svc = new Service({
  name: 'Private Node Registry',
  description: 'A private node registry to act as a passthrough from the proxy as well as overriding public node modules and storing private ones.',
  script: script
});
svc.on('install',function(){
  console.log('service installed!');
  console.log('starting service...');
  svc.start();
});
svc.on('uninstall',function(){
  console.log('service uninstalled!');
  console.log('installing service again...');
  svc.install();
});
svc.on('alreadyinstalled', function(){
  console.log('service already installed. uninstalling...');
  svc.uninstall();
});
svc.install();