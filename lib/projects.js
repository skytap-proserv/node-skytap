var Q = require('q')
  , debug = require('debug')('projects')
  , rest = require('./rest');

/**
 * Gets the list of projects
 * 
 * @param {Object} args
 * @callback {Function} next
 * @return {Promise}
 */
function list(args, next) {
  debug('list');

  var opts = {
    url: 'https://cloud.skytap.com/projects/',
    username: args.username,
    password: args.token || args.password
  };
  return rest.apiGet(opts, next);
}


/**
 * Gets a project and its information
 * 
 * @param {Object} args
 * @config {Object} id The id of the project
 * @callback {Function} next
 * @return {Promise}
 */
function get(args, next) {
  debug('get: %s', args.id);

  var opts = { 
    url: 'https://cloud.skytap.com/projects/' + args.id,
    username: args.username,
    password: args.token || args.password
  };
  return rest.apiGet(opts, next);
}


/**
 * Gets the templates belonging to a project
 * 
 * @param {Object} args
 * @config {Object} id The id of the project
 * @callback {Function} next
 * @return {Promise}
 */
function templates(args, next) {
  debug('templates: %s', args.id);

  var opts = { 
    url: 'https://cloud.skytap.com/projects/' + args.id + '/templates',
    username: args.username,
    password: args.token || args.password
  };
  return rest.apiGet(opts, next);
}


/**
 * Gets the environments belonging to a project
 * 
 * @param {Object} args
 * @config {Object} id The id of the project
 * @callback {Function} next
 * @return {Promise}
 */
function environments(args, next) {
  debug('templates: %s', args.id);

  var opts = { 
    url: 'https://cloud.skytap.com/projects/' + args.id + '/configurations',
    username: args.username,
    password: args.token || args.password
  };
  return rest.apiGet(opts, next);
}



module.exports = {
  list: list,
  get: get,
  templates: templates,
  environments: environments
};