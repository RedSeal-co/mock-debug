/// <reference path='../typings/chai/chai.d.ts'/>
/// <reference path="../typings/mocha/mocha.d.ts"/>

'use strict';

import chai = require('chai');
import { makeMockLogger, DebugLogger } from '../mock-debug';

var expect = chai.expect;

describe('mock-debug', () => {
  it('can be created', () => {
    var dlog: DebugLogger = makeMockLogger();
    expect(dlog).to.exist;
  });
  it('has the right shape', () => {
    var dlog: DebugLogger = makeMockLogger();
    expect(dlog).to.be.a('function')
    expect(dlog.get).to.be.a('function')
  });
  it('can be called with a simple list', () => {
    var dlog: DebugLogger = makeMockLogger();
    dlog('a', 'b', 1, 2);
  });
  it('can be called with a format string', () => {
    var dlog: DebugLogger = makeMockLogger();
    dlog('Hello %s', 'jim');
  });
  it('retains a history of logged output', () => {
    var dlog: DebugLogger = makeMockLogger();
    dlog('a', 'b', 1, 2);
    dlog('Hello %s', 'world');
    expect(dlog.get()).to.deep.equal(['a b 1 2', 'Hello world']);
  });
  it('retrieving the history clears the history', () => {
    var dlog: DebugLogger = makeMockLogger();
    dlog('a', 'b', 1, 2);
    dlog('Hello %s', 'world');
    expect(dlog.get()).to.deep.equal(['a b 1 2', 'Hello world']);
    expect(dlog.get()).to.deep.equal([]);
  });
});
