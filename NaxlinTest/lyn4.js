var fs = require('fs');
var path = require('path');
var dir = process.argv[2];
var ext1 = '.' + process.argv[3];

fs.readdir(dir, function (err, list) {
    for (i = 0; i < list.length; i++) {
        var ext2 = path.extname(list[i]);
        if (ext2 === ext1) {
            var item = list[i];
            console.log(item);
        };
    };
});

/** Their Way:

var fs = require('fs')
var path = require('path')

fs.readdir(process.argv[2], function (err, list) {
    list.forEach(function (file) {
        if (path.extname(file) === '.' + process.argv[3])
            console.log(file)
    })
})

**/