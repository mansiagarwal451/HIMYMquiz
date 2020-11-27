var chalk = require('chalk')
var readlineSync = require('readline-sync');
var name = readlineSync.question("Hello there! What's your name? ")
console.log(chalk.red.bgBlue.bold("Welcome " + name + " to HIMYM quiz!"))

console.log("Every correct answer fetches you 1 point but no marks will be deducted for incorrect answers!")

question1 = {
  question: "When does Ted narrate the story to the kids? \n \
  A.)2010 \n \
  B.)2020 \n \
  C.)2030 \n \
  D.)2040 \n ",
  answer: "C",
},
question2 = {
  question:" What is the name of Lily and Marshall's son? \n \
  A.) Mark \n \
  B.) Mitchell \n \
  C.) Marvin \n \
  D.) Michael \n",
  answer: "C",
},
question3 = {
  question: "Who is the mother? \n \
  A.) Trudy \n \
  B.) Robin \n \
  C.) Stella \n \
  D.) Tracy \n",
  answer: "D",
},
question4 = {
  question:" What is the theme song of HIMYM? \n \
  A.) You are beautiful \n \
  B.) Hey, beautiful \n \
  C.) I will be there for you \n \
  D.) Down the street \n",
  answer: "B",
}
question5 = {
  question: "Which subject did the mother learn? \n \
  A.) Architecture \n \
  B.) Physics \n \
  C.) Maths \n \
  D.) Economics \n",
  answer: "D",
}

var score = 0;
function play(question,answer) {
  var userAnswer = readlineSync.question(question);
  if(userAnswer.toUpperCase()===answer)
  {
    console.log('right')
    score = score + 1;
  }
  else
  {
    console.log('wrong')
  }
}
var highscore1 = {
  name: 'Amit',
  value: 5,
}
var highscore2 = {
  name: 'Gwen',
  value: 3,
}

var questions = [question1, question2, question3, question4, question5]

for(var j=0;j<questions.length;j++)
{
  var current = questions[j];
  play(current.question, current.answer);
}
console.log("Your final score is: " + score);

var highscores = [highscore1,highscore2];
for(var j=0;j<highscores.length;j++)
{
  var curr = highscores[j];
  if(score>curr.value)
  {
    console.log(chalk.red.bgBlue.bold("Congratulations, You have beaten the high score!"));
    console.log(chalk.blue.bgRed.bold("Please send a screenshot to us!"))
  }
}
