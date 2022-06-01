#!/usr/bin/env node
import readlineSync from 'readline-sync';

const QUESTIONS = [15, 2, 4];

export const runEvenGame = (questions) => {

  console.log("Welcome to the Brain Games!");
  const name = readlineSync.question("May I have your name? ");
  console.log("Hello, "+ name + "!");
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  console.log(questions.length);
  for(var i = 0; i < questions.length; i+=1) {
    console.log("Question: " + questions[i]);
    const answer = readlineSync.question("Your answer: ");
    if ((answer == 'yes' && (questions[i] % 2 == 0)) || (answer == 'no' && (questions[i] % 2 == 1))) {
      console.log("Correct!");
    } else {
      if (answer == 'yes') {
        console.log("'yes' is wrong answer ;(. Correct answer was 'no'.");
      } else {
        console.log("'no' is wrong answer ;(. Correct answer was 'yes'.");
      };
      console.log("Let's try again, " + name + "!");
      return;
    };
  };
  console.log("Congratulations, " + name + "!");
  return;
};


runEvenGame(QUESTIONS);



