var path = require('path');
var fs = require('fs');

module.exports = function (dir, ext, callback){ 
    fs.readdir(dir, function (err, list) {
        ext = '.' + ext;        
        var list1 = list.filter(function (file) {
            var x = (ext === path.extname(file));
            return x;
        });
        callback(null, list1);
    })
};
