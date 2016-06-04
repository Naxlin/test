var slice = Array.prototype.slice;

module.exports = function logger(namespace){
    return function (){
        var args = slice.apply(arguments);
        return console.log(namespace, args.join(" "));
    }
};


/** Their Way:
var slice = Array.prototype.slice

function logger(namespace) {
    return function() {
    console.log.apply(console, [namespace].concat(slice.call(arguments)))
    }
}

module.exports = logger

**/