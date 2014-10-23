var Q = require('q')
  , rest = require('./rest');


exports.token = function(args, next) {
  var opts = {
    username: args.username,
    password: args.password,
    url: 'https://cloud.skytap.com/account/api_token'
  };
  return rest.apiGet(opts, next);
}