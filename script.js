'use strict';

// document.querySelector('.message').textContent = 'Correct Number!'
// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 20;
// document.querySelector('.guess').value = 23;

const secretNumberFunc = function () {
  const num = Math.trunc(Math.random() * 40) + 1;
  return num;
};

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
const displayScore = function (score) {
  document.querySelector('.score').textContent = score;
};

let secretNumber = secretNumberFunc();
let score = 10;
let highscore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    displayMessage('No number!');
  }
  if (score > 1) {
    if (guess === secretNumber) {
      displayMessage('Correct Number!');
      document.querySelector('body').style.backgroundColor = '#60b347';
      if (score > highscore) {
        highscore = score;
        document.querySelector('.highscore').textContent = highscore;
      }
    } else if (guess !== secretNumber && guess !== 0) {
      displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
      score--;
      displayScore(score);
    }
  } else {
    score--;
    displayScore(score);
    displayMessage('You lost!');
  }
});

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = secretNumberFunc();
  document.querySelector('.number').textContent = secretNumber;
  score = 10;
  displayScore(score);
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('.guess').focus();
  document.querySelector('body').style.backgroundColor = '#222';
  displayMessage('Start guessing...');
});
