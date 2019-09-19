const Letter = require("./Letter");

class Word {
  constructor(secret) {
    this.arr = secret.split("").map(letter => new Letter(letter));
  }

  display() {
    let built = "";
    this.arr.forEach(letter => (built += `${letter.toString()} `));
    console.log(built);
  }
}

module.exports = Word;
