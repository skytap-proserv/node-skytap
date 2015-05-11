# Nockspect
Lots of our tests use a fn named [`nockspect`](https://github.com/ftikbogle/node-skytap/blob/test-documentation/test/util/nockspect.js). This wraps [nock](https://github.com/pgte/nock) to mock network calls, along with automatically testing both the callback and promise-based calls.

## Example

For example this test...
```javascript
it('requests a list of users', function () {
  return nockspect(function (nock) {
    nock.get('/users').reply(200);
    return _.bind(skytap.users.list, skytap.users);
  });
});
```

Checks that the `list` fn issues a `GET` request with the `/users` URI.

The usage for writing one of these tests is this:
```javascript

it('does something', function() {

  // Call nockspect with a test function to perform
  return nockspect(function(nock) {

    // Setup a network mock
    // See nock documentation for more information: https://github.com/pgte/nock
    nock.get('/my-expected-url?with=params').reply(200, {
      foo: 'bar'
    });

    // Create and return a function binding that can be executed multiple times
    // will execute: skytap.area.myFunc({args: 'to-pass-func' });
    return _.bind(skytap.area.myFunc, skytap.area, { args: 'to-pass-func' });

    /* 
    // Which is the equivalent of using native binding  
    return skytap.area.myFunc.bind(skytap.area, { args: 'to-pass-func' });

    // Or creating a function expression
    return function() {
      skytap.area.myFunc({ arg: 'to-pass-func' });
    };
    */    
  }, function (result) {
    // This is an optional function to test the result of the api fn call.
    // If this function is omitted nockspect will skip this step
    expect(result).to.be.ok;
  });
});
```
