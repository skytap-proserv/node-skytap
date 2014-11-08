var debug     = require('debug')('skytap-environments')
  , Q         = require('q')
  , arghelper = require('./arghelper')
  , rest      = require('./rest');



/** 
 * Environment API helper:
 * http://help.skytap.com/#API_Documentation.html#Configur
 *
 * @param {Skytap} reference to parent object
 */
function Environments(skytap) {  
  this.getArgs = function getArgs() {
    return skytap.getArgs();
  }
}


/**
 * Export the module
 */
module.exports = Environments;



/**
 * Gets the list of environments
 * 
 * @callback {Function} next
 * @return {Promise}
 */
Environments.prototype.list = function list(next) {
  debug('list');

  var args = this.getArgs();
  args.url = 'https://cloud.skytap.com/configurations';  
  return rest.apiGet(args, next);
}


/**
 * Gets an environment and its information
 * 
 * @param {string} environment_id 
 * @callback {Function} next
 * @return {Promise}
 */
Environments.prototype.get = function get(params, next) {
  debug('get %j', params);

  var args = this.getArgs();
  args.url = 'https://cloud.skytap.com/configurations/:configuration_id';
  args.params = params;
  return rest.apiGet(args, next);
}


/**
 * Creates a new environment based on a template
 * or existing configuration
 *
 * @param {Object} params 
 * @config {Object} template_id
 * @config {Object} configuration_id
 * @callback {Function} next
 * @return {Promise} 
 */
Environments.prototype.create = function create(params, next) {
  debug('create %j', params);

  var args = this.getArgs();
  args.url = 'https://cloud.skytap.com/configurations';
  args.params = params;
  return rest.apiPost(args, next);
}


/**
 * Updates an environment's values
 * 
 * @param {Object} args
 * @config {Object} username
 * @config {Object} token
 * @config {Object} params
 * @config {Object} params.id - required
 * @callback {Function} next
 * @return {Promise}
 */
Environments.prototype.update = function update(params, next) {
  debug('update %j', params);

  var args = this.getArgs();
  args.url = 'https://cloud.skytap.com/configurations/:configuration_id';  
  args.params = params;  
  return rest.apiPut(args, next);
}


/**
 * Deletes an environment 
 * 
 * @param {Object} args
 * @config {Object} username
 * @config {Object} token
 * @config {Object} params
 * @config {Object} params.id - required
 * @callback {Function} next
 * @return {Promise}
 */
Environments.prototype.del = function del(params, next) {
  debug('delete %j: ', params);

  var args = this.getArgs();
  args.url = 'https://cloud.skytap.com/configurations/:configuration_id';
  args.params = params;
  return rest.apiDel(args, next);
}