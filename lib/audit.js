var debug     = require('debug')('skytap-usage')
  , Q         = require('q')
  , arghelper = require('./arghelper')
  , rest      = require('./rest')
  , vargs     = require('vargs-callback');


/**
 * Usage API helper:
 * https://help.skytap.com/API_Documentation.html#Auditing
 *
 * THIS MODULE DOES NOT WORK WITH V2
 *
 * @param {Skytap} reference to parent object
 */
function Audit(skytap) {
  this.getArgs = function getArgs() {
    return skytap.getArgs();
  };
}


/**
 * Export the module
 */
module.exports = Audit;


/**
 * Create a audit report
 *
 * @param {String} activity
 * @param {String} user
 * @param {String} department
 * @param {String} project
 * @param {String} region
 * @param {Date} date_start
 * @param {Date} date_end
 * @callback {Function} next
 * @return {Promise}
 */
Audit.prototype.create = vargs(function list(params, next) {
  debug('list');

  var args = this.getArgs();
  params = params || {};
  args.url = 'https://cloud.skytap.com/auditing/exports.json';

  params.activity = params.activity || 'all';
  params.user = params.user || 'all';
  params.department = params.department || 'all';
  params.project = params.project || 'all';
  params.region = params.region || 'all';


  args.params = params;
  return rest.apiPost(args, next);
});


/**
 * Check a audit report status
 *
 * @param {Object} params
 * @config {Number} report_id
 * @callback {Function} next
 * @return {Promise}
 */
Audit.prototype.check = function get(params, next) {
  debug('get %j', params);

  var args = this.getArgs();
  args.url = 'https://cloud.skytap.com/auditing/exports/:report_id' + '.json';
  args.params = params;
  return rest.apiGet(args, next);
};


/**
 * Fetch a report
 *
 * @param {Object} params
 * @config {Number} report_id
 * @callback {Function} next
 * @return {Promise}
 */
Audit.prototype.fetch = function get(params, next) {
  debug('get %j', params);

  var args = this.getArgs();
  args.url = 'https://cloud.skytap.com/auditing/exports/'+params.report_id+'.csv';
  return rest.apiGet(args, next);
};
