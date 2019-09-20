const Letter = require("./Letter");
const chalk = require("chalk");

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
      if (letter.secret === userGuess && letter.guessed) {
        correct = true;
      }
    });

    if (correct) {
      console.log(chalk.green("\nCorrect!\n"));
    } else {
      console.log(chalk.red("\nIncorrect!\n"));
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
