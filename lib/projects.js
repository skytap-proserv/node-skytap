var debug     = require('debug')('skytap-projects')
  , Q         = require('q')  
  , arghelper = require('./arghelper')
  , rest      = require('./rest');

/**
 * Gets the list of projects
 * 
 * @param {Object} args
 * @config {Object} username
 * @config {Object} token
 * @config {Object} params
 * @callback {Function} next
 * @return {Promise}
 */
function list(args, next) {
  debug('list');

  args.url = 'https://cloud.skytap.com/projects/'  
  return rest.apiGet(args, next);
}


/**
 * Gets a project and its information
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

  args.url = 'https://cloud.skytap.com/projects/:id';
  return rest.apiGet(args, next);
}


/**
 * Gets the templates belonging to a project
 * 
 * @param {Object} args
 * @config {Object} username
 * @config {Object} token
 * @config {Object} params
 * @config {Object} params.id - required
 * @callback {Function} next
 * @return {Promise}
 */
function templates(args, next) {
  debug('templates: %s', (args.params ? args.params.id : 0));

  args.url = 'https://cloud.skytap.com/projects/:id/templates';
  return rest.apiGet(args, next);
}


/**
 * Gets the environments belonging to a project
 * 
 * @param {Object} args
 * @config {Object} username
 * @config {Object} token
 * @config {Object} params
 * @config {Object} params.id - required
 * @callback {Function} next
 * @return {Promise}
 */
function environments(args, next) {
  debug('environments: %s', (args.params ? args.params.id : 0));

  args.url = 'https://cloud.skytap.com/projects/:id/configurations';
  return rest.apiGet(args, next);
}



module.exports = {
  list: list,
  get: get,
  templates: templates,
  environments: environments
};