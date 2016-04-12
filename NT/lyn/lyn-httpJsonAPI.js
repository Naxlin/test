var http = require('http');
var url = require('url');
var dateHMS = '{"hour": 24,"minute": 60,"second": 60}';
var dateUni = '{"unixtime": 0}';


var server = http.createServer(function (req, res) {
    res.writeHead(200, { 'content-type': 'application/json' });
    req.pipe(http.get(req.url, function () {
        var url1 = url.parse(req.url, true);
        console.log(url1);
        if (url1.pathname === "/api/parsetime") {
            var date = new Date(url1.query.iso);
            var obj1 = JSON.parse(dateHMS);
            obj1.hour = date.getHours();
            obj1.minute = date.getMinutes();
            obj1.second = date.getSeconds();
            obj1 = JSON.stringify(obj1);
            console.log(obj1);
        } else if (url1.pathname === "/api/unixtime") {
            var date = new Date(url1.query.iso);
            var obj1 = JSON.parse(dateUni);
            obj1 = date.getTime();
            obj1 = JSON.stringify(obj1);
            console.log(obj1);
        } else {
            return console.log('error');
        };
        return obj1
    })).pipe(res);
    res.end();
});

server.listen(process.argv[2]);