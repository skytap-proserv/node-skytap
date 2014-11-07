var debug     = require('debug')('skytap-networks')
  , Q         = require('q')  
  , arghelper = require('./arghelper')
  , rest      = require('./rest');


/**
 * Gets the list of networks for a template or configuration.
 * You must supply a template or configuration as networks 
 * are not top level objects in the API.
 * 
 * @param {Object} args
 * @config {Object} username
 * @config {Object} token
 * @config {Object} params
 * @config {Number} params.template_id
 * @config {Number} params.configuration_id
 * @callback {Function} next
 * @return {Promise}
 */
function list(args, next) {
  debug('list');

  if(args.params.template_id) {
    args.url = 'https://cloud.skytap.com/templates/:template_id/networks';
  } else if(args.params.configuration_id) {
    args.url = 'https://cloud.skytap.com/configurations/:configuration_id/networks'
  }
  return rest.apiGet(args, next);
}


/**
 * Gets the a networks in a template or configuration.
 * You must supply a template or configuration as networks 
 * are not top level objects in the API.
 * 
 * @param {Object} args
 * @config {Object} username
 * @config {Object} token
 * @config {Object} params
 * @config {Number} params.template_id
 * @config {Number} params.configuration_id
 * @config {Number} params.network_id
 * @callback {Function} next
 * @return {Promise}
 */
function get(args, next) {
  debug('get');
  
  if(args.params.template_id) {
    args.url = 'https://cloud.skytap.com/templates/:template_id/networks/:network_id';
  } else if(args.params.configuration_id) {
    args.url = 'https://cloud.skytap.com/configurations/:configuration_id/networks/:network_id'
  }
  return rest.apiGet(args, next);
}


/**
 * Updates the network in a template or configuration
 * with the supplied network fields.
 * 
 * @param {Object} args
 * @config {Object} username
 * @config {Object} token
 * @config {Object} params
 * @config {Number} params.template_id
 * @config {Number} params.configuration_id
 * @config {Number} params.network_id
 * @callback {Function} next
 * @return {Promise}
 */
function update(args, next) {
  debug('get');
  
  if(args.params.template_id) {
    args.url = 'https://cloud.skytap.com/templates/:template_id/networks/:network_id';
  } else if(args.params.configuration_id) {
    args.url = 'https://cloud.skytap.com/configurations/:configuration_id/networks/:network_id'
  }
  return rest.apiPut(args, next);
}



module.exports = {
  list: list,
  get: get,
  update: update  
}