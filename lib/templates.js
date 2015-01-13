var debug     = require('debug')('skytap-templates')
  , Q         = require('q')
  , arghelper = require('./arghelper')
  , rest      = require('./rest');



/** 
 * Template API helper:
 * http://help.skytap.com/#API_Documentation.html#Template
 *
 * @param {Skytap} reference to parent object
 */
function Templates(skytap) {  
  this.getArgs = function getArgs() {
    return skytap.getArgs();
  };
}


/**
 * Export the module
 */
module.exports = Templates;



/**
 * Gets the list of templates
 * 
 * @callback {Function} next
 * @return {Promise}
 */
Templates.prototype.list = function list(next) {
  debug('list');

  var args = this.getArgs();
  args.url = 'https://cloud.skytap.com/templates';  
  return rest.apiGet(args, next);
};


/**
 * Gets a template
 * 
 * @param {Number} template_id 
 * @callback {Function} next
 * @return {Promise}
 */
Templates.prototype.get = function get(params, next) {
  debug('get %j', params);

  var args = this.getArgs();
  args.url = 'https://cloud.skytap.com/templates/:template_id';
  args.params = params;
  return rest.apiGet(args, next);
};


/**
 * Creates a new template based on
 * the supplied configuration
 *
 * @param {Object} params 
 * @config {Number} configuration_id
 * @callback {Function} next
 * @return {Promise} 
 */
Templates.prototype.create = function create(params, next) {
  debug('create %j', params);

  var args = this.getArgs();
  args.url = 'https://cloud.skytap.com/templates';
  args.params = params;
  return rest.apiPost(args, next);
};


/**
 * Updates a templates's values
 * 
 * @params {Object} params
 * @config {Number} configuration_id
 * @callback {Function} next
 * @return {Promise}
 */
Templates.prototype.update = function update(params, next) {
  debug('update %j', params);

  var args = this.getArgs();
  args.url = 'https://cloud.skytap.com/templates/:template_id';  
  args.params = params;  
  return rest.apiPut(args, next);
};


/**
 * Deletes an environment 
 *  
 * @params {Object} params
 * @config {Number} configuration_id
 * @callback {Function} next
 * @return {Promise}
 */
Templates.prototype.del = function del(params, next) {
  debug('delete %j: ', params);

  var args = this.getArgs();
  args.url = 'https://cloud.skytap.com/templates/:template_id';
  args.params = params;
  return rest.apiDel(args, next);
};