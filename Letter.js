class Letter {
  constructor(secret) {
    this.secret = secret;
    this.guessed = false;
  }

  test(guess) {
    if (this.secret === guess) {
      this.guessed = true;
    }
  }
  toString() {
    if (this.guessed) {
      return this.secret;
    } else {
      return "_";
    }
  }
}

module.exports = Letter;
