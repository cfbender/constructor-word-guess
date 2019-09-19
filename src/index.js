const Word = require("./Word");

const testWord = new Word("testing");
testWord.display();

testWord.guess("e");
testWord.display();
