const Word = require("./Word");
const inquirer = require("inquirer");
const testWord = new Word("testing");

const prompt = async () => {
  let { guess } = await inquirer.prompt([
    {
      type: "input",
      message: "Guess a letter!",
      name: "guess"
    }
  ]);

  testWord.guess(guess);
  testWord.display();
  if (testWord.finished()) {
    return console.log("Done!");
  } else {
    return prompt();
  }
};

prompt();
