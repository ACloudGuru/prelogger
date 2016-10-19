# prelogger
Node Logger which supports prefixing log messages with metadata such as correlation IDs

# Installation
`npm install prelogger`

# Usage
## Constructor
If you just want a simple string prefix like `prefix     message`
```
var PreLogger = require('prelogger');
var logger = new PreLogger('prefix');

logger.log('message');
```

If you want a number of prefixes you can optionally construct Prelogger with an object
```
var PreLogger = require('prelogger');
var logger = new PreLogger({
    correlationId: 'id',
    workflow: 'wflow'
});

logger.log('message');
```
This would output `correlationId:id workflow:wflow     message`

# Contribute
Please fork this repo to make changes and then issue a pull request back to this repo.
You can run the unit tests using `npm test`

# Contributors
[Daniel Parker (@rlgod)](Rlgod)
