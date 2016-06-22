var fancify = require(process.argv[2]);
var test = require('tape');

test('fancify() parameters change functionality', function (t) {
    t.equal(fancify('Hello'), '~*~Hello~*~', 'Hello should be "~*~Hello~*~"');
    t.equal(fancify('Hello', true), '~*~HELLO~*~', 'Hello should be "~*~HELLO~*~"');
    t.equal(fancify('Hello', false, '!'), '~!~Hello~!~', 'Hello should be "~!~Hello~!~"');
    t.end();
});

/** Their Way:
var test = require('tape')
var fancify = require(process.argv[2])

test('fancify', function (t) {
    t.equal(fancify('Wat'), '~*~Wat~*~', 'Wraps a string in ~*~')
    t.equal(fancify('Wat', true), '~*~WAT~*~', 'Optionally makes it allcaps')
    t.equal(fancify('Wat', false, '%'), '~%~Wat~%~', 'Optionally allows to set the character')
    t.end()
})

**/