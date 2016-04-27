module.exports = function checkUsersValid(goodUsers) {
    return function AllUsersValid(submittedUsers) {
        return submittedUsers.every(function (ele, idx, arr) {
            return goodUsers.some(function (gele, gidx, garr) {
                return (ele.id === gele.id);
            });
        });
    };
};

/** Their Way:
 module.exports = function checkUsersValid(goodUsers) {
      return function allUsersValid(submittedUsers) {
        return submittedUsers.every(function(submittedUser) {
          return goodUsers.some(function(goodUser) {
            return goodUser.id === submittedUser.id
          })
        })
      }
    }

**/