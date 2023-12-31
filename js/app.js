'use strict';

let correctAnswerTotal = 0;
function questionName() {
  let userName= prompt('What is your name?');
  while (!userName){
    userName = prompt('Enter your name to continue.');
  }
  alert(`Welcome to my site ${userName}! Let's play a guessing game, please answer yes/no OR y/n`);

  let questionOneGuess = prompt('Am I 30 years old?').toLowerCase();

  if (questionOneGuess === 'y' || questionOneGuess === 'yes'){
    alert('You are correct!');
    correctAnswerTotal++;
  } else if (questionOneGuess === 'n' || questionOneGuess === 'no'){
    alert('Sorry, you are wrong.');
  }
}
questionName();

function questionMarried() {
  let questionTwoGuess = prompt('Am I married?').toLowerCase();

  if (questionTwoGuess === 'y' || questionTwoGuess === 'yes'){
    alert('You are correct!');
    correctAnswerTotal++;
  }
  else if (questionTwoGuess === 'n' || questionTwoGuess === 'no'){
    alert('Sorry, you are wrong.');
  }
}
questionMarried();

function questionWhereRaised() {
  let questionThreeGuess = prompt('Did I grow up in Texas?').toLowerCase();

  if (questionThreeGuess === 'n' || questionThreeGuess === 'no'){
    alert('You are correct!');
    correctAnswerTotal++;
  }
  else if (questionThreeGuess === 'y' || questionThreeGuess === 'yes'){
    alert('Sorry, you are wrong, I grew up in Oregon.');
  }
}
questionWhereRaised();

function questionCodeInterest() {
  let questionFourGuess = prompt('Am I interested in full stack, cloud engineering, and machine learning?').toLowerCase();

  if (questionFourGuess === 'y' || questionFourGuess === 'yes'){
    alert('You are correct!');
    correctAnswerTotal++;
  }
  else if (questionFourGuess === 'n' || questionFourGuess === 'no'){
    alert('Sorry, you are wrong');
  }
}
questionCodeInterest();

function questionEducation() {
  let questionFiveGuess = prompt('Is my highest level of education a bachelors degree?').toLowerCase();

  if (questionFiveGuess === 'n' || questionFiveGuess === 'no'){
    alert('You are correct!');
    correctAnswerTotal++;
  }
  else if (questionFiveGuess === 'y' || questionFiveGuess === 'yes'){
    alert('Sorry, you are wrong');
  }
}
questionEducation();

function questionFavoriteNumber() {
  let favoriteNumber = 7;
  let questionSixAllowedGuesses = 4;
  let questionSixRemainingGuesses = questionSixAllowedGuesses;

  while (questionSixRemainingGuesses > 0) {
    let questionSixGuess = parseInt(prompt(`Guess your favorite number (between 1 and 10). You have ${questionSixRemainingGuesses} attempts left.`));

    if (questionSixGuess === favoriteNumber) {
      alert(`Congratulations! ${favoriteNumber} is your favorite number!`);
      correctAnswerTotal++;
      break;
    } else if (questionSixGuess< favoriteNumber) {
      alert('Your guess is too low. Try again.');
    } else if (questionSixGuess > favoriteNumber) {
      alert('Your guess is too high. Try again.');
    }

    questionSixRemainingGuesses--;
  }

  if (questionSixRemainingGuesses === 0) {
    alert(`Sorry, you've used all your attempts. The correct answer is ${favoriteNumber}.`);
  }
}
questionFavoriteNumber();

function questionAnimals() {
  function questionSevenGuess() {
    let questionSevenAnswers = ['dog','rat','bunny'];
    let questionSevenAllowedGuesses = 6;
    let questionSevenRemainingGuesses = questionSevenAllowedGuesses;

    for(let i=0; i < questionSevenAllowedGuesses; i++){
      let questionSevenGuess = prompt(`Can you guess what animals I had as a kid? You have ${questionSevenRemainingGuesses} attempts left!`);

      if (questionSevenAnswers.includes(questionSevenGuess)) {
        let index = questionSevenAnswers.indexOf(questionSevenGuess);

        let remainingAnswersString = '';

        for (let i = 0; i < questionSevenAnswers.length; i++) {
          if (i !== index) {
            remainingAnswersString += questionSevenAnswers[i];
            if (i < questionSevenAnswers.length - 2) {
              remainingAnswersString += ' , ';
            } else if (i === questionSevenAnswers.length - 2) {
              remainingAnswersString += ' and ';
            }
          }
        }
        alert(`You are correct! ${questionSevenGuess} is one of the correct answers! The other correct answers are: ${remainingAnswersString}.`);

        correctAnswerTotal++;
        break;
      } else {
        alert('Incorrect, try again!');
      }
      questionSevenRemainingGuesses--;
    }

    if(questionSevenRemainingGuesses === 0){
      alert(`Sorry, you've used all your attempts. The correct answers are ${questionSevenAnswers}.`);
    }

    alert(`You got ${correctAnswerTotal} out of 7 questions correct!`);
  }
  questionSevenGuess();
}
questionAnimals();
