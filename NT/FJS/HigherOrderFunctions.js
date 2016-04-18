
module.exports = function repeat(operation, num) {
    if (num < 0) {
        return console.log("negative number");
    };
    if (num === 0) {
        return console.log("finished");
    };
    return repeat(operation, num - 1);
};

/** Their Way:
function repeat(operation, num) {
    if (num <= 0) return
    operation()
    return repeat(operation, --num)
}

module.exports = repeat

**/