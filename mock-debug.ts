/// <reference path='typings/node/node.d.ts' />

'use strict';

import util = require('util');

export interface DebugLogger {
  // A DebugLogger is callable with the same signature as a debug function
  // created using require('debug')(string)
  // See https://www.npmjs.com/package/debug
  (formatter: any, ...args: any[]): void;

  // This function returns an array of strings, one for each logging call
  // made to this DebugLogger. The function is only available with
  get?(): string[];
}

export function makeMockLogger(): DebugLogger {
  var lines: string[] = [];

  var log: DebugLogger = function(formatter: any, ...args: any[]): void {
    lines.push(util.format.apply(util, arguments));
  };

  log.get = function() {
    var result = lines;
    lines = [];
    return result;
  }

  return log;
};
