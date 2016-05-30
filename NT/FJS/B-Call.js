module.exports = function duckCount() {
    var args2 = Array.from(arguments).filter(function (duck) {
        console.log(duck);
        return Object.prototype.hasOwnProperty.call(duck, 'quack');
    });
    return args2.length;
};

/** Their Way:
function duckCount() {
    return Array.prototype.slice.call(arguments).filter(function(obj) {
    return Object.prototype.hasOwnProperty.call(obj, 'quack')
    }).length
}

module.exports = duckCount

**/