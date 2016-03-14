var fs = require('fs');
var lyn5 = require('./lyn5-mod.js')
var dir = process.argv[2];
var ext = process.argv[3];

lyn5(dir, ext, function (err, data) {
    if (err) {
        return callback(err);
    };
    for (i = 0; i < data.length; i++) {
        console.log(data[i]);
    };
});