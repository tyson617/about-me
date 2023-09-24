'use strict';

console.log('hey world hey');

let userName= prompt('What is your name?');
alert(`Welcome to my site ${userName}! Let's play a guessing game, please answer yes/no OR y/n`);

let questionOneGuess = prompt('Am I 30 years old?').toLowerCase();

if (questionOneGuess === 'y' || questionOneGuess === 'yes'){
  //console.log('You are correct!');
  alert('You are correct!');
} else if (questionOneGuess === 'n' || questionOneGuess === 'no'){
  alert('Sorry, you are wrong.');
}

let questionTwoGuess = prompt('Am I married?').toLowerCase();

if (questionTwoGuess === 'y' || questionTwoGuess === 'yes'){
  //console.log('You are correct!');
  alert('You are correct!');
}
else if (questionTwoGuess === 'n' || questionTwoGuess === 'no'){
  alert('Sorry, you are wrong.');
}

let questionThreeGuess = prompt('Did I grow up in Texas?').toLowerCase();

if (questionThreeGuess === 'n' || questionThreeGuess === 'no'){
  //console.log('You are correct!');
  alert('You are correct!');
}
else if (questionThreeGuess === 'y' || questionThreeGuess === 'yes'){
  alert('Sorry, you are wrong, I grew up in Oregon.');
}

let questionFourGuess = prompt('Am I interested in full stack, cloud engineering, and machine learning?').toLowerCase();

if (questionFourGuess === 'y' || questionFourGuess === 'yes'){
  //console.log('You are correct!');
  alert('You are correct!');
}
else if (questionFourGuess === 'n' || questionFourGuess === 'no'){
  alert('Sorry, you are wrong');
}

let questionFiveGuess = prompt('Is my highest level of education a bachelors degree?').toLowerCase();

if (questionFiveGuess === 'n' || questionFiveGuess === 'no'){
  //console.log('You are correct!');
  alert('You are correct!');
}
else if (questionFiveGuess === 'y' || questionFiveGuess === 'yes'){
  alert('Sorry, you are wrong');
}
