'use strict';

// for Random Secret Number
let secretNumber = Math.trunc(Math.random() * 20 + 1);

// to show Secret Number
// document.querySelector('.number').textContent = secretNumber;

let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // for NO INPUT
  if (!guess) {
    displayMessage('⛔️ Invalid Number!');
    document.querySelector('.message').style.fontSize = '2.5rem';

    // when player WINS
  } else if (guess === secretNumber) {
    displayMessage('🥳 You Won!!');

    // to show Secret Number
    document.querySelector('.number').textContent = secretNumber;

    // to change Styles
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.message').style.fontSize = '3rem';
    document.querySelector('.number').style.width = '35rem';

    // highscore
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    // when guess is WRONG
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too High!' : '📉 Too Low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('😭 You Loose!!');
      document.querySelector('.score').textContent = 0;
      document.querySelector('.message').style.fontSize = '3rem';
    }
  }
});

// again button
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  displayMessage('Start to play...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.message').style.fontSize = '2rem';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('body').style.backgroundColor = '#fff';
});

