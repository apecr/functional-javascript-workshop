const checkUsersValid = goodUsers =>
  submittedUsers =>
    submittedUsers.every(user => goodUsers.map(userin => userin.id).includes(user.id));

module.exports = checkUsersValid;