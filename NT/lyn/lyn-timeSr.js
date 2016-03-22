var net = require('net');
var port = process.argv[2];
var data = new Date().getFullYear().toString() + '-0';
data += new Date().getMonth() + 1;
data += '-' + new Date().getDate() + ' ';
data += new Date().getHours() + ':0';
data += new Date().getMinutes() + '\n';

var server = net.createServer(function (socket) {
    socket.write(data);
    socket.end();
});

server.listen(port);

/** Their Way:
var net = require('net')

function zeroFill(i) {
    return (i < 10 ? '0' : '') + i
}

function now () {
    var d = new Date()
    return d.getFullYear() + '-'
        + zeroFill(d.getMonth() + 1) + '-'
        + zeroFill(d.getDate()) + ' '
        + zeroFill(d.getHours()) + ':'
        + zeroFill(d.getMinutes())
}

var server = net.createServer(function (socket) {
    socket.end(now() + '\n')
})

server.listen(Number(process.argv[2]))

**/