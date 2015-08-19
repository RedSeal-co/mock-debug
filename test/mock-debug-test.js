/// <reference path='../typings/chai/chai.d.ts'/>
/// <reference path="../typings/mocha/mocha.d.ts"/>
'use strict';
var chai = require('chai');
var mock_debug_1 = require('../mock-debug');
var expect = chai.expect;
describe('mock-debug', function () {
    it('can be created', function () {
        var dlog = mock_debug_1.makeMockLogger();
        expect(dlog).to.exist;
    });
    it('has the right shape', function () {
        var dlog = mock_debug_1.makeMockLogger();
        expect(dlog).to.be.a('function');
        expect(dlog.get).to.be.a('function');
    });
    it('can be called with a simple list', function () {
        var dlog = mock_debug_1.makeMockLogger();
        dlog('a', 'b', 1, 2);
    });
    it('can be called with a format string', function () {
        var dlog = mock_debug_1.makeMockLogger();
        dlog('Hello %s', 'jim');
    });
    it('retains a history of logged output', function () {
        var dlog = mock_debug_1.makeMockLogger();
        dlog('a', 'b', 1, 2);
        dlog('Hello %s', 'world');
        expect(dlog.get()).to.deep.equal(['a b 1 2', 'Hello world']);
    });
    it('retrieving the history clears the history', function () {
        var dlog = mock_debug_1.makeMockLogger();
        dlog('a', 'b', 1, 2);
        dlog('Hello %s', 'world');
        expect(dlog.get()).to.deep.equal(['a b 1 2', 'Hello world']);
        expect(dlog.get()).to.deep.equal([]);
    });
});
//# sourceMappingURL=mock-debug-test.js.map