var Q = require('q')
  , debug = require('debug')('environments')
  , rest = require('./rest');


/**
 * Gets the list of environments
 * 
 * @param {Object} args
 * @config {Object} id The id of the environment
 * @callback {Function} next
 * @return {Promise}
 */
function list(args, next) {
  debug('list');

  var opts = { 
    url: 'https://cloud.skytap.com/configurations',
    username: args.username,
    password: args.password
  };  
  return rest.apiGet(opts, next);
}


/**
 * Gets an environment and its information
 * 
 * @param {Object} args
 * @config {Object} id The id of the environment
 * @callback {Function} next
 * @return {Promise}
 */
function get(args, next) {
  debug('get: %s', args.id);

  var opts = { 
    url: 'https://cloud.skytap.com/configurations/' + args.id,
    username: args.username,
    password: args.password
  };
  return rest.apiGet(opts, next);
}


/**
 * Changes the state of an environment
 * 
 * @param {Object} args
 * @config {Object} id The id of the environment
 * @config {Object} newstate The new state of the environment.
 *    Valid options: 'running', 'suspended', 'stopped'
 * @callback {Function} next
 * @return {Promise}
 */
function changeState(args, next) {
  debug('changeState: %s, %s', args.id, args.newstate);

  var opts = { 
    url: 'https://cloud.skytap.com/configurations/' + args.id,
    username: args.username,
    password: args.password,
    data: { 
      runstate: args.newstate
    }
  };
  return rest.apiPut(opts, next);
}


/**
 * Waits for an environment to reach a state
 * 
 * @param {Object} args
 * @config {Object} id The id of the environment
 * @config {Object} runstate The state of the environment to wait for
 *    Valid options: 'running', 'suspended', 'stopped'
 * @callback {Function} next
 * @return {Promise}
 */
function waitForState(args, next) {
  debug('waitForState: %s, %s', args.id, args.runstate);

  var deferred = Q.defer()
    , runstate = args.runstate

  var execTimeout = function() {
    get(args).then(function(env) {
      debug('currentState: %s, %s', env.id, env.runstate);

      // success
      if(env.runstate === runstate) {
        deferred.resolve(env);
        if(next) next(next);
      } 

      // still waiting
      else {
        setTimeout(execTimeout, 10000);
      }
    });
  }
  execTimeout();

  return deferred.promise;
}


module.exports = {
  list: list,
  get: get,
  changeState: changeState,
  waitForState: waitForState
};