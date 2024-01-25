'use strict';

// document.querySelector('.message').textContent = 'Correct Number!'
// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 20;
// document.querySelector('.guess').value = 23;

const secretNumberFunc = function () {
  const num = Math.trunc(Math.random() * 40) + 1;
  return num;
};
let secretNumber = secretNumberFunc();
let score = 10;
let highscore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    document.querySelector('.message').textContent = 'No number!';
  } 
  if (score > 1) {
    if (guess === secretNumber) {
      document.querySelector('.message').textContent = 'Correct Number!';
      document.querySelector('body').style.backgroundColor = '#60b347';
      if (score > highscore){
        highscore = score;
        document.querySelector('.highscore').textContent = highscore;
      }
    } else if (guess > secretNumber && guess !== 0) {
      document.querySelector('.message').textContent = '📈 Too high!';
      score--;
      document.querySelector('.score').textContent = score;
    } else if (guess < secretNumber && guess !== 0) {
      document.querySelector('.message').textContent = '📉 Too low!';
      score--;
      document.querySelector('.score').textContent = score;
    }
  } else {
    score--;
    document.querySelector('.score').textContent = score;
    document.querySelector('.message').textContent = 'You lost!';
  }
});

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = secretNumberFunc();
  document.querySelector('.number').textContent = secretNumber;
  score = 20;
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('.guess').focus();
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.message').textContent = 'Start guessing...';
});
