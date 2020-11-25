const ValidateResponse = require("../models/registerValidateResponse");
const userRepository = require('../repository/userRepository');

const validateRegistration = (userModel) => {
  return new ValidatorChainBuilder()
    .add(new EmailValidator())
    .add(new PasswordValidator())
    .validate(userModel);
}

// You can extend your own validator here.

class PasswordValidator {
  isValid (userModel) {
    const { password } = userModel;
    if (password.length < 8) {
      return new ValidateResponse(false, 'password must contain at least 8 characters');
    }
    return new ValidateResponse(true, '');
  }
}

class EmailValidator {
  isValid (userModel) {
    if (userRepository.queryUserByEmail(userModel.email)) {
      return new ValidateResponse(false, 'the email address is already registered');
    }
    return new ValidateResponse(true, '');
  }
}

class ValidatorChainBuilder {
  constructor() {
    this.validators = [];
  }
  add (validator) {
    this.validators.push(validator);
    return this;
  }
  validate (userModel) {
    for (let validator of this.validators) {
      let result = validator.isValid(userModel);
      if (!result.isPassed()) {
        return result;
      }
    }
    return new ValidateResponse(true, '');
  }
}

module.exports = validateRegistration;