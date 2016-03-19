var bl = require('bl');
var http = require('http');
var async = require('async');
var urls = [process.argv[2], process.argv[3], process.argv[4],];
var results = {};
var waiting = 0;

urls.forEach(function (url) {
    results[url] = '';
    http.get(url, function (response) {
        waiting[url] = true;
        response.pipe(bl(function (err, data) {
            results[url] = data.toString();
        }));
        response.on('end', function () {
            waiting++
            if (waiting >= 3) {
                for (var i in results) {
                    console.log(results[i]);
                };
            };
        });
        response.on('error', console.error);
    });
});

/** Their way:
var http = require('http')
var bl = require('bl')
var results = []
var count = 0

function printResults() {
    for (var i = 0; i < 3; i++)
        console.log(results[i])
}

function httpGet(index) {
    http.get(process.argv[2 + index], function (response) {
        response.pipe(bl(function (err, data) {
            if (err)
                return console.error(err)
            
            results[index] = data.toString()
            count++
            
            if (count == 3)
                printResults()
        }))
    })
}

for (var i = 0; i < 3; i++)
    httpGet(i)

**/