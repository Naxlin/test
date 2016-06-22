var fn = require(process.argv[2]);
var test = require('tape');

test('repeating callbacks', function (t) {
    t.plan(3);
    fn(3, function () {
        t.pass('callbacks called');
    });
});


/**
var test = require('tape')
var repeatCallback = require(process.argv[2])

test('repeatCallback', function (t) {
    t.plan(4)
    repeatCallback(4, function () {
        t.pass('callback called')
    })
})

**/