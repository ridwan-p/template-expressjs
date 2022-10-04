class InvalidEncryptException extends Error {
  constructor(message = "Invalid Encrypt Password") {
    super(message);
    this.name = this.constructor.name;
  }
}

module.exports = InvalidEncryptException