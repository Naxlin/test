var feedCat = require(process.argv[2]);
var test = require('tape');

test('Feeding Cats.', function (t) {
    t.plan(2);
    t.equal(feedCat('food'), 'yum', "food should return yum!");
    t.throws(feedCat.bind(null, 'chocolate'));
});


/** Their Way:
var test = require('tape')
var feedCat = require(process.argv[2])

test('cat feeding', function (t) {
    t.plan(2)
    t.equal(feedCat('food'), 'yum')
    t.throws(feedCat.bind(null, 'chocolate'))
})

**/