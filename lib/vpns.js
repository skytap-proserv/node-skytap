var debug     = require('debug')('skytap-vpns')
  , Q         = require('q')  
  , arghelper = require('./arghelper')
  , rest      = require('./rest');


/**
 * Gets the list of VPNs
 * 
 * @param {Object} args
 * @config {Object} username
 * @config {Object} token 
 * @callback {Function} next
 * @return {Promise}
 */
function list(args, next) {
  debug('list');

  args.url = 'https://cloud.skytap.com/vpns';
  return rest.apiGet(args, next);
}


/**
 * Gets the a VPN
 * 
 * @param {Object} args
 * @config {Object} username
 * @config {Object} token 
 * @config {Object} params
 * @config {ObjecT} params.vpn_id
 * @callback {Function} next
 * @return {Promise}
 */
function get(args, next) {
  debug('list');

  args.url = 'https://cloud.skytap.com/vpns/:vpn_id';
  return rest.apiGet(args, next);
}




module.exports = {
  list: list,
  get: get
}