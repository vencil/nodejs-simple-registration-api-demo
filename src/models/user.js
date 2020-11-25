class User {
  constructor(name, email='', password) {
    this.name = name;
    this.email = email;
    this.password = password;      // note: in real world, we should use hashed result instead of raw password  
  }
}

module.exports = User;