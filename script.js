'use strict';

let highscore = 0;
let rand = Math.floor(Math.random() * 21);
let score = 10;
if (rand === 0) rand++;

document.querySelector('.check').addEventListener('click', function () {
  // the user_input value is in form of 'string', so convert it to 'number'.
  let user_input = Number(document.querySelector('.guess').value);
  // console.log(user_input);
  if (!user_input) {
    // it means when user has not gvn the input and click on check
    document.querySelector('.message').textContent = '🚫 No inupt gvn.';
  } else if (user_input === rand) {
    document.querySelector('.message').textContent = '🎉won the game.';
    document.querySelector('.number').textContent = rand;
    if (highscore < score) highscore = score;
    document.querySelector('.highscore').textContent = highscore;
    // if match is won then need to change the background color of the webpage to green.
    document.querySelector('body').style.backgroundColor = '#60b347';
    // now increasing the width of 'number' class div element.
    document.querySelector('.number').style.width = '30rem';
  } else {
    /*
    if (user_input > rand)
      document.querySelector('.message').textContent = '👆too high';
    else document.querySelector('.message').textContent = '👇too low';*/
    
    document.querySelector('.message').textContent = user_input > rand ? '👆too high' : '👇too low';

    if (score > 1) {
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '👻Loss Game';
      document.querySelector('.score').textContent = score - 1;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  rand = Math.trunc(Math.random() * 21); // mainly cut non-decimal part.
  score = 10;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = score;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.guess').value = '';
  document.querySelector('.number').style.width = '15rem';
});
