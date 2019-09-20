const Word = require("./Word");
const inquirer = require("inquirer");
let guessed = [];
let secret = "";
const words = [
  "awkward",
  "bagpipes",
  "banjo",
  "bungler",
  "croquet",
  "crypt",
  "dwarves",
  "fervid",
  "fishhook",
  "fjord",
  "gazebo",
  "gypsy",
  "haiku",
  "haphazard",
  "hyphen",
  "ivory",
  "jazzy",
  "jiffy",
  "jinx",
  "jukebox",
  "kayak",
  "kiosk",
  "klutz",
  "memento",
  "mystify",
  "numbskull",
  "ostracize",
  "oxygen",
  "pajama",
  "phlegm",
  "pixel",
  "polka",
  "quad",
  "quip",
  "rhythmic",
  "rogue",
  "sphinx",
  "squawk",
  "swivel",
  "toady",
  "twelfth",
  "unzip",
  "waxy",
  "wildebeest",
  "yacht",
  "zealous",
  "zigzag",
  "zippy",
  "zombie"
];

const init = () => {
  return new Promise((resolve, reject) => {
    secretWord = words[Math.floor(Math.random() * words.length)];
    guessed = [];
    resolve(new Word(secretWord));
  });
};

const done = async () => {
  let res = await inquirer.prompt([
    {
      type: "confirm",
      name: "again",
      message: "Would you like to play again?"
    }
  ]);

  return res;
};

const prompt = async () => {
  let { guess } = await inquirer.prompt([
    {
      type: "input",
      message: "Guess a letter!",
      name: "guess",
      validate: input => /^[a-zA-Z]$/.test(input)
    }
  ]);
  guess = guess.toLowerCase();
  if (/^[a-z]$/.test(guess)) {
    if (!guessed.includes(guess)) {
      guessed.push(guess);
      secret.guess(guess);
      secret.display();
      if (secret.finished()) {
        console.log("Done!");
        let { again } = await done();
        if (again) {
          let newWord = await init();
          secret = new Word(newWord);
          prompt();
        } else {
          return;
        }
      } else {
        return prompt();
      }
    } else {
      console.log(`You have already guessed ${guess}!`);
      return prompt();
    }
  } else {
    console.log(`${guess} is not a valid guess! Enter only one character a-z.`);
  }
};

(async () => {
  secret = await init();
  prompt();
})();
