var request = require('request')
  , security = require('./security')
  , environments = require('./environments');

// security.token({ 
//   username: 'brian.mancini@fticonsulting.com',
//   password: 'password'
// })
// .then(function(token) {
//   console.log(token);
// });

// environments.list({
//   username: 'brian.mancini@fticonsulting.com',
//   password: 'token'
// })
// .then(function(list) {
//   console.log(list);
// });

// environments.get({
//   id: 1,
//   username: 'brian.mancini@fticonsulting.com',
//   password: 'token'
// })
// .then(function(list) {
//   console.log(list);
// })

// environments.changeState({
//   id: 1,
//   newstate: 'running',
//   username: 'brian.mancini@fticonsulting.com',
//   password: 'token'
// })
// .then(function() {
//   return environments.waitForState({
//     id: 1,
//     runstate: 'running',
//     username: 'brian.mancini@fticonsulting.com',
//     password: 'token'
//   });
// });


// environments.changeState({
//     id: 1,
//     newstate: 'suspended',
//     username: 'brian.mancini@fticonsulting.com',
//     password: 'token'
//   })  
// })
// .then(function() {
//   return environments.waitForState({
//     id: 1,
//     runstate: 'suspended',
//     username: 'brian.mancini@fticonsulting.com',
//     password: 'token'
//   });
// })
