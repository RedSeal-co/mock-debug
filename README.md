# mock-debug

A simple mock for Visionmedia's module [debug](https://www.npmjs.com/package/debug).

## Examples

```
var debug = require('debug');  // Visionmedia's debug module
var dlog = debug('label');     // a debug logging function

var makeMockDebug = require('mock-debug');    // A mock module
var mlog = makeMockDebug();                   // a mock debug logging function

dlog('Hello %s', 'world'); // logs to stderr
mlog('Hello %s', 'world'); // logs to an array of strings
mlog(...); // more calls to mlog

var history = mlog.get();  // retrieve the history of log lines
                           // ['Hello world', ...]
```
