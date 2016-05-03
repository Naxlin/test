module.exports = function reduce(arr, fn, init) {
    if (!arr.length) return init;
    fn(init, arr[0], 0, arr)
    var next = arr.slice(1);
    var cur = init;
    return reduce(next, fn, cur);
};

/** Their Way:
function reduce(arr, fn, initial) {
    return (function reduceOne(index, value) {
        if (index > arr.length - 1) return value // end condition
        return reduceOne(index + 1, fn(value, arr[index], index, arr)) // calculate & pass values to next step
    })(0, initial) // IIFE. kick off recursion with initial values
}

module.exports = reduce

**/