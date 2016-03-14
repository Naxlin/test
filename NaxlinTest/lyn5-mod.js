var path = require('path');
var fs = require('fs');
var dir = process.argv[2];

module.exports = function(dir, ext, callback){
    fs.readdir(dir, function (err, list) {
    if (err) {
            return callback(err);
    };
    var ext = '.' + ext;
    for (i = 0; i < list.length; i++) {
        var ext1 = path.extname(list[i]);
        if (ext1 === ext) {
            var item = list[i];
        };
    };
    callback(null, list)
    })
};