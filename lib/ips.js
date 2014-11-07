var debug     = require('debug')('skytap-projects')
  , Q         = require('q')  
  , arghelper = require('./arghelper')
  , rest      = require('./rest');

/**
 * Lists the public IPs
 *
 * @param {Object} args
 * @config {Object} username
 * @config {Object} token
 * @callback {Function} next
 * @return {Promise}
 */
function list(args, next) {
  debug('publicips %j', args);

  args.url = 'https://cloud.skytap.com/ips';
  return rest.apiGet(args, next);
}


// TODO
function acquire(args, next) {
  
}


// TODO
function release(args, next) {
  
}


/**
 * Attaches a public IP address to an interface on a vm
 *
 * @param {Object} args
 * @config {Object} username
 * @config {Object} token
 * @config {Object} params
 * @config {String} params.vm_id - require
 * @config {String} params.interface_id - required
 * @config {String} params.ip - required
 * @callback {Function} next
 * @return {Promise}
 */
function attach(args, next) {
  debug('attach');

  args.url = 'https://cloud.skytap.com/vms/:vm_id/interfaces/:interface_id/ips';
  return rest.apiPost(args, next);
}


/**
 * Attaches a public IP address to an interface on a vm
 *
 * @param {Object} args
 * @config {Object} username
 * @config {Object} token
 * @config {Object} params
 * @config {String} params.vm_id - require
 * @config {String} params.interface_id - required
 * @config {String} params.ip - required
 * @callback {Function} next
 * @return {Promise}
 */
function detach(args, next) {
  debug('detach');

  args.url = 'https://cloud.skytap.com/vms/:vm_id/interfaces/:interface_id/ips/:ip/detach';
  return rest.apiPost(args, next);
}


// TODO
function attached(args, next) {

}


module.exports = {
  list: list,
  attach: attach,
  detach: detach,
  attached: attached
}