module.exports = function arrayMap(arr, fn, thisArg) {
    return arr.reduce(function (newarr,curr,idx,arr) {
        newarr.push(fn.call(thisArg, curr));
        return newarr;
    }, []);
};


/** Their Way:
module.exports = function arrayMap(arr, fn, thisArg) {
    return arr.reduce(function(acc, item, index, arr) {
    acc.push(fn.call(thisArg, item, index, arr))
    return acc
    }, [])
}

**/