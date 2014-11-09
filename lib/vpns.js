var debug     = require('debug')('skytap-vpns')
  , Q         = require('q')  
  , arghelper = require('./arghelper')
  , rest      = require('./rest');



/** 
 * VPNs API helper:
 * http://help.skytap.com/#API_Documentation.html#VPN
 *
 * @param {Skytap} reference to parent object
 */
function VPNs(skytap) {  
  this.getArgs = function getArgs() {
    return skytap.getArgs();
  };
}


/**
 * Export the module
 */
module.exports = VPNs;




/**
 * Gets the list of VPNs
 * 
 * @callback {Function} next
 * @return {Promise}
 */
VPNs.prototype.list = function list(next) {
  debug('list');

  var args = this.getArgs();
  args.url = 'https://cloud.skytap.com/vpns';
  return rest.apiGet(args, next);
};


/**
 * Gets the a VPN
 * 
 * @param {Object} params
 * @config {ObjecT} vpn_id
 * @callback {Function} next
 * @return {Promise}
 */
VPNs.prototype.get = function get(params, next) {
  debug('list');

  var args = this.getArgs();
  args.url = 'https://cloud.skytap.com/vpns/:vpn_id';
  args.params = params;
  return rest.apiGet(args, next);
};