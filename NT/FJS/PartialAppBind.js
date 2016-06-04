var slice = Array.prototype.slice;

module.exports = function logger(namespace){
    return function (){
        var fix = logger.bind(undefined, namespace);
        var log = fix(slice.apply(arguments).join(" "))
        return console.log(log);
    }
};


/** Their Way:
module.exports = function (namespace) {
    return console.log.bind(console, namespace)
}

**/