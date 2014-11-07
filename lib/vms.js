var debug     = require('debug')('skytap-vms')
  , Q         = require('q')  
  , arghelper = require('./arghelper')
  , rest      = require('./rest');



/**
 * Gets a VM for the template or configuration
 * 
 * @param {Object} args
 * @config {Object} username
 * @config {Object} token
 * @config {Object} params
 * @config {Number} params.template_id
 * @config {Number} params.configuration_id
 * @config {Number} params.vm_id
 * @callback {Function} next
 * @return {Promise}
 */
exports.get = function(args, next) {
  debug('get');

  if(args.params.template_id) {
    args.url = 'https://cloud.skytap.com/templates/:template_id/vms/:vm_id'
  } else if (args.params.configuration_id) {
    args.url = 'https://cloud.skytap.com/configurations/:configuration_id/vms/:vm_id'
  }
  return rest.apiGet(args, next);
}


/**
 * Updates a VM in the template or configuration
 * 
 * @param {Object} args
 * @config {Object} username
 * @config {Object} token
 * @config {Object} params
 * @config {Number} params.template_id
 * @config {Number} params.configuration_id
 * @config {Number} params.vm_id
 * @callback {Function} next
 * @return {Promise}
 */
exports.update = function(args, next) {
  debug('update');

  if(args.params.template_id) {
    args.url = 'https://cloud.skytap.com/templates/:template_id/vms/:vm_id'
  } else if (args.params.configuration_id) {
    args.url = 'https://cloud.skytap.com/configurations/:configuration_id/vms/:vm_id'
  }
  return rest.apiPut(args, next); 
}


/**
 * Deletes a VM in the template or configuration
 * 
 * @param {Object} args
 * @config {Object} username
 * @config {Object} token
 * @config {Object} params
 * @config {Number} params.template_id
 * @config {Number} params.configuration_id
 * @config {Number} params.vm_id
 * @callback {Function} next
 * @return {Promise}
 */
exports.del = function(args, next) {
  debug('del');

  if(args.params.template_id) {
    args.url = 'https://cloud.skytap.com/templates/:template_id/vms/:vm_id'
  } else if (args.params.configuration_id) {
    args.url = 'https://cloud.skytap.com/configurations/:configuration_id/vms/:vm_id'
  }
  return rest.apiPut(args, next); 
}