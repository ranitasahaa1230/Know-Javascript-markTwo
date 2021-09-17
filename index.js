const readLineSync = require("readline-sync");
const chalk = require("chalk");

console.log(
  chalk.underline.bgGrey("Let's play a game: ") +
    chalk.yellow("'Do you really know Marvel Series?' ")
);

console.log(chalk.underline.bgMagenta.bold("-- Level 1 --"));

let score = 0, level=1;
const userName = readLineSync.question("Namaste🤩, What's your name? ");
console.log("Welcome, " + chalk.blue(userName));

function play(question, answer) {
  const userAnswer = readLineSync.question(chalk.bold(question));

  if (userAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log(chalk.green("Correct Answer :)"));
    score++;
  } else {
    console.log(chalk.red("Incorrect Answer :("));
    console.log(chalk.green("The Correct answer is : " + answer));
  }
  console.log(" Current Score is: " + score);
  console.log("-------------------------------");
}

const questions = [
  (q1 = {
    question: "1. What year was the first Iron Man movie released, kicking off the Marvel Cinematic Universe? ",
    answer: "2008",
  }),
  (q2 = {
    question: "2. What is the name of Thor’s hammer? ",
    answer: "Mjollnir",
  }),
  (q3 = {
    question: "3. What is Captain America’s shield made of? ",
    answer: "Vibranium",
  }),
  (q4 = {
    question: "4. The Flerkens are a race of extremely dangerous aliens that resembles what? ",
    answer: "Cats",
  }),
  (q5 = {
    question: "5. Before becoming Vision, what is the name of Iron Man’s A.I. butler? ",
    answer: "JARVIS",
  }),
  (q6 = {
    question: "6. What is the real name of the Black Panther? ",
    answer: "T'Challa",
  }),
  (q7 = {
    question: "7. Who was the last holder of the Space Stone before Thanos claims it for his Infinity Gauntlet? ",
    answer: "Loki",
  }),
  (q8 = {
    question: "8. What fake name does Natasha use when she first meets Tony? ",
    answer: "Natalie Rushman",
  }),
  (q9 = {
    question: "9. What is the name of the little boy Tony befriends while stranded in the Iron Man 3? ",
    answer: "Harley",
  }),
  (q10 = {
    question: "10. Who is Black Panther’s sister? ",
    answer: "Shuri",
  }),
  (q11 = {
    question: "11. What type of doctor is Stephen Strange? ",
    answer: "Neurosurgeon",
  }),
  (q12 = {
    question: "12. How many Infinity Stones are there? ",
    answer: "6",
  }),
];

for (var i = 0; i < questions.length; i++) {
  const currentQuestion = questions[i];
  play(currentQuestion.question, currentQuestion.answer);
}

console.log(chalk.white.bgCyan.bold(`Your Final Score is : ${score}`));

if(score>=5 && score<=8){
    level1=level+1;
    console.log(chalk.yellow("Congratulations, you moved to Level "+ level1 +""));
    console.log(chalk.bgRed.bold("You do know about Marvel Series fairly!🎉 "));
    console.log(chalk.underline.bgMagenta.bold(`-- Level ${level1} --`));
  }
  else if(score>=9 && score<=12) {
    level2=level+2;
    console.log(chalk.yellow("Congratulations, you moved to Level "+ level2 +"😍🎉"));   
    console.log(chalk.bgRed.bold("You are a expert at Marvel Series!🎉 "));
    console.log(chalk.underline.bgMagenta.bold(`-- Level ${level2} --`));

  }else{
    console.log(chalk.yellow("OHH OHH!, you did not moved to Next Level. Better Luck Next Time!!😐"));
    console.log(chalk.bgRed.bold("You do not know about Marvel Series! :( "));
  }



