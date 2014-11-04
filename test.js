var request = require('request')
  , security = require('./lib/security')
  , environments = require('./lib/environments');

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

// environments.update({
//     id: 2459664,
//     username: 'brian.mancini@fticonsulting.com',
//     password: '',
//     body: {
//       description: 'asdfasdf',
//       suspend_on_idle: 14400
//     }
//   },  
//   function(err, result) {
//     console.log(err || result);
//   }
// );