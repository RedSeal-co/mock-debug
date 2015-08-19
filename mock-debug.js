/// <reference path='typings/node/node.d.ts' />
'use strict';
var util = require('util');
function makeMockLogger() {
    var lines = [];
    var log = function (formatter) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        lines.push(util.format.apply(util, arguments));
    };
    log.get = function () {
        var result = lines;
        lines = [];
        return result;
    };
    return log;
}
exports.makeMockLogger = makeMockLogger;
;
//# sourceMappingURL=mock-debug.js.map