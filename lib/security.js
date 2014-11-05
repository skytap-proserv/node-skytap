var debug     = require('debug')('skytap-security')
  , Q         = require('q')
  , arghelper = require('./arghelper')
  , rest      = require('./rest');

/**
 * Retrieves the skytap api token based on the user credentials 
 *
 * @param {Object} args
 * @config {Object} username
 * @config {Object} password 
 * @callback {Function} next
 * @return {Promise}
 */
exports.token = function(args, next) {
  debug('token');
  
  args.url = 'https://cloud.skytap.com/account/api_token';  
  return rest.apiGet(args, next);
}