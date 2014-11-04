var debug   = require('debug')('skytap-rest')
  , request = require('request')
  , Q       = require('Q');

var headers = {
  'Accept': 'application/json',
  'Content-Type': 'application/json',
};

exports.apiGet = function(args, next) {
  args.method = 'GET';
  return apiRequest(args, next);
}

exports.apiPost = function(args, next) {
  args.method = 'POST';
  return apiRequest(args, next);
}

exports.apiPut = function(args, next) {
  args.method = 'PUT';
  return apiRequest(args, next);
}

exports.apiDel = function(args, next) {
  args.method = 'DELETE';
  return apiRequest(args, next);
}

function apiRequest(args, next) {

  var deferred = Q.defer()
    , url = args.url
    , username = args.username
    , password = args.password
    , method = args.method
    , body = args.body
    , opts;

  opts = {
    url: url,
    method: method,
    json: true,
    headers: headers,
    auth: {
      user: username,
      pass: password
    }
  };

  if(body) {
    opts.body = body;
  }

  debug('apiRequest: %j', opts);
  request(opts, function(err, res, data) {

    // handle exception
    if(err) {
      deferred.reject(err);
      if(next) next(err);
    } 

    // handle non-200 response 
    else if (res.statusCode !== 200) {
      deferred.reject(data);
      if(next) next(data);
    } 

    // handle success
    else {
      deferred.resolve(data);
      if(next) next(null, data);
    }
      
  });

  return deferred.promise;
}