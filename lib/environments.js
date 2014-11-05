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


module.exports = {
  list: list,
  get: get,
  update: update
};