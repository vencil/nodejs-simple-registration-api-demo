const registerValidate = require('./registerValidate');
const User = require('../models/user');
const userRepository = require('../repository/userRepository');
const jwt = require('jsonwebtoken');
const {secret} = require('../../config.json');

const register = (req, res) => {
  let tempUser = new User(req.body.name, req.body.email, req.body.pwd);
  let result = registerValidate(tempUser);
  if (!result.isPassed()) {
    res.json({"error_message" : result.getMessage()});
  } else {
    userRepository.addUser(tempUser);  // in real world, we need to do error handling for db transaction failure. 
    let token = jwt.sign({"user": tempUser.name, "password": tempUser.password}, secret);
    res.json({"token" : token});
  }
}

module.exports = { register };