module.exports = function countWords(inputWords) {
    return inputWords.reduce(function (prev, crnt, idx, ary) {
        if (isNaN(prev[crnt])) {
            prev[crnt] = 0;
        };
        prev[crnt] = ++prev[crnt];
        return prev;
    }, {} );
};

/** Their Way:
function countWords(arr) {
    return arr.reduce(function(countMap, word) {
    countMap[word] = ++countMap[word] || 1 // increment or initialize to 1
    return countMap
    }, {}) // second argument to reduce initialises countMap to {}
}

module.exports = countWords

**/