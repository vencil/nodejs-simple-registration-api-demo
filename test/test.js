const assert = require('assert');
const User = require('../src/models/user');
const userRepository = require('../src/repository/userRepository');
const registerValidate = require('../src/services/registerValidate');

const testUser = new User("Chiu Poyu", "vencsvencil@gmail.com", "00000000");

describe('registration validation test', function() {
  before(() => {
    // add test data
    userRepository.addUser(testUser);
  });
  
  after(() => { // runs after all tests in this block
    userRepository.removeUser(testUser);
  });

  it ('Should fail when user has registered', (done) => {
    let response = registerValidate(testUser);
    assert.strictEqual(false, response.isPassed());
    done();
  })

  it ('Should success when user has never registered', (done) => {
    let response = registerValidate(new User("test", "abc@abc.com", "00001234"));
    assert.strictEqual(true, response.isPassed());
    done();
  })
});