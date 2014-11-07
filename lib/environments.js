var debug     = require('debug')('skytap-environments')
  , Q         = require('q')
  , arghelper = require('./arghelper')
  , rest      = require('./rest');


/**
 * Gets the list of environments
 * 
 * @param {Object} args
 * @config {Object} username
 * @config {Object} token
 * @config {Object} params - optional
 * @callback {Function} next
 * @return {Promise}
 */
function list(args, next) {
  debug('list');

  args.url = 'https://cloud.skytap.com/configurations';  
  return rest.apiGet(args, next);
}


/**
 * Gets an environment and its information
 * 
 * @param {Object} args
 * @config {Object} username
 * @config {Object} token
 * @config {Object} params
 * @config {Object} params.id - required
 * @callback {Function} next
 * @return {Promise}
 */
function get(args, next) {
  debug('get: %s', (args.params ? args.params.id : 0));

  args.url = 'https://cloud.skytap.com/configurations/:id';  
  return rest.apiGet(args, next);
}


/**
 * Creates a new environment based on a template
 * or existing configuration
 * @param {Object} args
 * @config {Object} username
 * @config {Object} token
 * @config {Object} params
 * @config {Object} params.template_id
 * @config {Object} params.configuration_id
 * @callback {Function} next
 * @return {Promise} 
 */
function create(args, next) {
  debug('create %j', args.params);

  args.url = 'https://cloud.skytap.com/configurations';
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
function update(args, next) {
  debug('update environment %s: %js', args.id, args.params);

  args.url = 'https://cloud.skytap.com/configurations/:id';  
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
function del(args, next) {
  debug('remove environment %s: ', args.params);

  args.url = 'https://cloud.skytap.com/configurations/:id';
  return rest.apiDel(args, next);
}


module.exports = {
  list: list,
  get: get,
  create: create,
  update: update,
  del: del
};