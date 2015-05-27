var sinopia = require('sinopia');
var YAML = require('yamljs');
var configFile = __dirname + '/config.yaml';
var config = YAML.load(configFile);
sinopia(config).listen(config.port);
