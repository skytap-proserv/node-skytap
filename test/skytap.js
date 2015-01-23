var chai   = require('chai')
  , Skytap = require('../lib/skytap')

  , expect = chai.expect;

describe('Skytap', function() {

  describe('#init', function() {

    it('creates a unique instance of Skytap', function() {
      var skytap1 = Skytap.init({ test: true })
        , skytap2 = Skytap.init({ test: true })
        ;
      expect(skytap1).to.not.equal(skytap2);
    });

    it('stores the connection config in the instance', function() {
      var skytap = Skytap.init({ test: true });
      expect(skytap._config).to.be.an('object');
      expect(skytap._config.test).to.be.true;
    });  

  });

  describe('.getArgs', function() {

    it('returns the instance connection config', function() {
      var skytap = Skytap.init({ test: true })
        , result = skytap.getArgs();
      expect(result.test).to.equal(true);
    });

    it('clones the connection config', function() {
      var connectionConfig = { test: true }
        , skytap = Skytap.init(connectionConfig)
        , result = skytap.getArgs();
      expect(result).to.not.equal(connectionConfig);
    });

  });

});