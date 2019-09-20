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

  guess(userGuess) {
    let correct = false;
    this.arr.forEach(letter => {
      letter.test(userGuess);
      if (letter.guessed) {
        correct = true;
      }
    });

    if (correct) {
      console.log("Correct!");
    }
  }

  finished() {
    let finished = true;
    this.arr.forEach(letter => {
      if (!letter.guessed) {
        finished = false;
      }
    });

    return finished;
  }
}

module.exports = Word;
