var http = require('http');

var link = process.argv[2];

http.get(link, function (response) {
    var data = "";
    response.on("data", function (chunk) {
        data += chunk + '\n';
    });
    response.on("end", function () {
        console.log(data);
    })
}).on("error", function () {
    callback(null);
});


/** Their Way:
var http = require('http')

http.get(process.argv[2], function (response) {
    response.setEncoding('utf8')
    response.on('data', console.log)
    response.on('error', console.error)
})

**/