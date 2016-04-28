var fs = require('fs');
var file = 'C:\\Windows\\Logs\\DISM\\dism.log';
var result = 'C:\\src\\Results.txt';

function findErrors(file){
    fs.readFile(file, 'utf8', function (err, data) {
        var lines = data.toString().split(',');
        fs.writeFile(result, lines.filter(function (line) {
            return (line.substring(1,6) === "Error" || line.substring(1,8) === "Warning");
        }));
    });
};

findErrors(file);