var fs = require('fs');
var buf = fs.readFile(process.argv[2]);
var str = buf.toString();
var res = str.split("\n");
console.log(res.length - 1);
