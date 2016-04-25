module.exports = function getShortMessages(messages) {
    //console.log(messages);
    return shortMessages = messages.filter(function (mes) {
        return mes.message.length < 50;
    }).map(function (mes) {
        return mes.message;
    });
};


/** Their Way:
module.exports = function getShortMessages(messages) {
    return messages.filter(function(item) {
        return item.message.length < 50
    }).map(function(item) {
        return item.message
    })
}

**/