node-skytap
===========

This library wraps the Skytap API for use in Node.js applications. It is designed to work with node style callbacks as well as with Promises.  This library is still under active development to build out the full feature set of API calls plus additional functions that are common to managing Skytap environments.

### Usage

Install the module via NPM
```bash
npm install node-skytap
```

You can then include it as needed
```javascript
var Skytap = require('node-skytap');
```

You can obtain your API token
```javascript
var params = { 
  username: 'skytap_username',
  password: 'sktyap_password'
};

var token = Skytap.token(params, function(err, token) {
  console.log(err || token);
})
```

You should make calls using your token, though you can use the password if you so choose. To initialize the API, use the `init` static function to obtain an instance of the API code and include your `username` and `token`.
```javascript
var skytap = Skytap.init({
  username: 'skytap_username',
  token: 'skytap_token'
})
```


You can then use this instance to make calls to the API.  Calls support both node callbacks and Promises.
```javascript
// Using Node callbacks
skytap.projects.list(function(err, projects) {
  console.log(err || projects);
});

// Using Promises
skytap.projects.list()
.then(function(projects) {
  console.log(projects);  
})
.fail(function(err) {
  console.log(err);
})
```

Refer to the source code for a full list of function calls and required parameters. Some of the functionality is listed below with examples of usage.

####Projects
```javascript
// List Projects 
skytap.projects.list(next);

// Get a project by id
skytap.projects.get({ project_id: 123 }, next);

// Get templates in a project
skytap.projects.templates({ project_id: 123 }, next);

// Get environments in a project
skytap.projects.environments({ project_id: 123 }, next);

// Add environment to a project
skytap.projects.addEnvironment({ project_id: 123, configuration_id: 1234 }, next);

// Remove environment form a project
skytap.projects.removeEnvironment({ project_id: 123, configuration_id: 1234 }, next);
```

####Environments
```javascript
// List environments
skytap.environments.list(next);

// Get a specific environment
skytap.environments.get({ configuration_id: 1234 }, next);

// Create an environment from a template
skytap.environments.create({ template_id: 2222 }, next);

// Create an envirnoment from a configuration
skytap.environments.create({ configuration_id: 1234 }, next);

// Update an environment
skytap.environments.update({ configuration_id: 1234, name: 'My new name' }, next);

// Delete an environment
skytap.environments.del({ configuration_id: 1234 }, next);

// Start an environment
skytap.environments.start({ configuration_id: 1234 }, next);

// Stop an environment
skytap.environments.stop({ configuration_id: 1234 }, next);

// Suspend an environment
skytap.environments.suspend({ configuration_id: 1234 }, next);

// Wait for environment status
skytap.environments.waitForState({ configuration_id: 1234, runstate: 'running' }, next);
skytap.environments.waitForState({ configuration_id: 1234, runstate: 'stopped' }, next);
skytap.environments.waitForState({ configuration_id: 1234, runstate: 'suspended' }, next);

// Get user_data
skytap.environments.userdata({ configuration_id: 1234 }, next);

// Update user_data
skytap.environments.updateUserdata({ configuration_id: 1234, contents: 'Something' }, next);
```

####VMs
```javascript
// Get a VM
skytap.vms.get({ configuration_id: 1234, vm_id: 1 }, next);
skytap.vms.get({ template_id: 2222, vm_id: 2}, next);

// Update a VM
skytap.vms.update({ configuration_id: 1234, vm_id: 1, name: 'new name' }, next);
skytap.vms.update({ template_id: 2222, vm_id: 2, name: 'new name' }, next);

// Deletes a VM
skytap.vms.del({ configuration_id: 1234, vm_id: 1 }, next);
skytap.vms.del({ template_id: 2222, vm_id: 2 }, next);

// Get user_data
skytap.vms.userdata({ configuration_id: 1234, vm_id: 1 }, next);
skytap.vms.userdata({ template_id: 2222, vm_id: 2 }, next);

// Update user_data
skytap.vms.userdata({ configuration_id: 1234, vm_id: 1, contents: 'Something' }, next);
skytap.vms.userdata({ template_id: 2222, vm_id: 2, contents: 'Something' }, next);
```


### Contributing

Formatting uses spaces instead of tabs and 2-space tabs.  

Please use JSHint via the grunt task `grunt validate`.

Please add proper unit test coverage in accordance with existing test patterns (API methods do not yet have test coverage or parameter validation).
