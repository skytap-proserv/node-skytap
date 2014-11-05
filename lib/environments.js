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

  var opts = {
    url: 'https://cloud.skytap.com/configurations',
    method: 'GET'
  };  
  opts = arghelper.combine(opts, args);
  return rest.apiGet(opts, next);
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

  var opts = { 
    url: 'https://cloud.skytap.com/configurations/:id',    
    method: 'GET'
  };
  opts = arghelper.combine(opts, args);
  return rest.apiGet(opts, next);
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

  var opts = { 
    url: 'https://cloud.skytap.com/configurations/:id',
    method: 'PUT'
  };
  opts = arghelper.combine(opts, args);
  return rest.apiPut(opts, next);
}


module.exports = {
  list: list,
  get: get,
  update: update
};