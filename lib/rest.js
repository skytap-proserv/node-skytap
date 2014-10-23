var request = require('request')
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
    , data = args.data
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

  if(data) {
    opts.data = data;
  }

  request(opts, function(err, res, body) {

    // handle exception
    if(err) {
      deferred.reject(err);
      if(next) next(err);
    } 

    // handle non-200 response 
    else if (res.statusCode !== 200) {
      deferred.reject(body);
      if(next) next(body);
    } 

    // handle success
    else {
      deferred.resolve(body);
      if(next) next(null, body);
    }
      
  });

  return deferred.promise;
}