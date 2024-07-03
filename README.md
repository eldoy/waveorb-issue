# Waveorb issue

Waveorb issue stores any kind of issue that happens in the system.

Based on Mongodb. Saves errors in the 'issue' collection in the database.

### Install

```
npm install waveorb-issue
```

### Usage

```js
// Requires mongowave
var mongodb = require('mongowave')
var db = await mongodb('firmalisten')

var issues = require('waveorb-issue')({ db })

// The name of the issue
var name = 'issue-name'

// The message
var message = 'This happened'

// Data
var data = { some: 'data' }

// Register issue
await issues.register({ name, message, data })

// Remove all issues
var result = await issues.clear()
```

Created by [Eldøy Projects](https://eldoy.com)

Enjoy!
