module.exports = function doubleAll(numbers) {
    return numbers.map(function (num) {
        return num * 2;
    });
};

/** Their Way:
module.exports = function doubleAll(numbers) {
    return numbers.map(function double(num) {
    return num * 2
    })
}

**/