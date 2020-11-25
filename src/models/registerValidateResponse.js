class RegisterValidateResponse {
  constructor(passed, message) {
    this.passed = passed;
    this.message = message;
  }

  isPassed () {
    return this.passed;
  }
  getMessage () {
    return this.message;
  }
}

module.exports = RegisterValidateResponse;