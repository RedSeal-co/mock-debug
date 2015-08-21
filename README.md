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

## Why not override the log function?

In the [debug](https://www.npmjs.com/package/debug) README.md, the section titled
[stderr vs stdout](https://www.npmjs.com/package/debug) shows that it is possible
to override the log function. This seemingly makes this mock-debug module unnecessary.
However, the debug module still applies all of its formatting functions before
calling the overridden log function, which is inconvenient if you want to write
simple unit test assertions/expectations for the expected log history.

It may be possible to also override the formatting functions, but we prefer the
simplicity of this module.
