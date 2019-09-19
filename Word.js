const Letter = require("./Letter");

class Word {
  constructor(secret) {
    this.secretArr = secret.split("");
    this.displayArr = this.secretArr.map(letter => new Letter(letter));
  }

  display() {
    let built = "";
    this.displayArr.forEach(letter => (built += `${letter.toString()} `));
    console.log(built);
  }
}

module.exports = Word;
