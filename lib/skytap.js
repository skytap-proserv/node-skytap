var debug = require('debug')('skytap')
  , _     = require('underscore')
  , Env   = require('./environments');
  


/**
 * Skytap API Library
 *
 * @param {Object} config 
 */
function Skytap (config) {
    
  this.getArgs = function(args) {      
    return _.clone(config);    
  };

  this.environments = new Env(this);
}


/** 
 * Export the module
 */
module.exports = Skytap;