var fn = require(process.argv[2]);
var assert = require('assert');

assert(fn(42) === true, 'fn() should be true');


/** Their Way:
var isCoolNumber = require(process.argv[2])
var assert = require('assert')
assert(isCoolNumber(42))

**/