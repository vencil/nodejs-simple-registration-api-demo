// This demo use an array to simulate db operation.
// In real world, you must build your own db instance and implement the query command here.

const data = [];

/**
 * @param {string} email
 */
const queryUserByEmail = (email) => {
  if (email.trim().length === 0) return null;
  return data.find((userData) => userData.email === email);
}

/**
 * @param {User} user 
 */
const addUser = (user) => {
  data.push(user);
}

/**
 * @param {User} user 
 */
const removeUser = (user) => {
  let index = data.findIndex((userData) => userData.email === user.email);
  if (index !== -1) {
    data.splice(index, 1);
  }
}

module.exports = {
  queryUserByEmail,
  addUser,
  removeUser
};