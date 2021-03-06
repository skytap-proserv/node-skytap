var Q = require('q')
  , _ = require('underscore');

module.exports = function (testFn, validate) {
  var siteUri = 'https://cloud.skytap.com:443'
    , nockNode
    , nockPromise;

  if (!_.isFunction(validate)) {
    validate = _.noop;
  }

  // First we call the fn with node-style callbacks and validate
  return Q.nfcall(testFn(nockNode = require('nock')(siteUri)))
    .then(validate)
    // Nock.done verifies the expected http calls were made
    .then(function () {
      nockNode.done();
    })

    // Now call it in promise mode
    .then(testFn(nockPromise = require('nock')(siteUri)))
    .then(validate)
    .then(function () {
      nockPromise.done();
    });
};
