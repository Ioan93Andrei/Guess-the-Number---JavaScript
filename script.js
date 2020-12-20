let randomNumber = Math.floor(Math.random() * 100) + 1;

const guesses = document.querySelector(".guesses");
const lastResult = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");

const guessField = document.querySelector(".guessField");
const guessSubmit = document.querySelector(".guessSubmit");

let guessCount = 1;
let resetButton;
guessField.focus()

function checkGuess(){
  let userGuess = Number(guessField.value);
  if(guessCount === 1) {
    guesses.textContent = "Previous guesses: ";
  }
  guesses.textContent += userGuess + " ";

function setGameOver() {
    guessField.disabled = true;
    guessSubmit.disabled = true;
    resetButton = document.createElement('button');
    resetButton.textContent = 'Start new game';
    divContainer = document.getElementsByClassName("container")[0]
    divContainer.append(resetButton);
    resetButton.addEventListener('click', resetGame);
  }
  
function resetGame() {
  guessCount = 1;
  
  const resetParas = document.querySelectorAll('.resultParas p');
  for (let i = 0 ; i < resetParas.length ; i++) {
    resetParas[i].textContent = '';
  }
  
  resetButton.parentNode.removeChild(resetButton);
  
  guessField.disabled = false;
  guessSubmit.disabled = false;
  guessField.value = '';
  guessField.focus();
  
  lastResult.style.backgroundColor = 'white';
  
  randomNumber = Math.floor(Math.random() * 100) + 1;
}

if(userGuess === randomNumber){
  lastResult.textContent = "Congratulations! You got it right.";
  lastResult.style.backgroundColor = "green";
  lowOrHi.textContent = " ";
  setGameOver();
} else if(guessCount === 10){
  lastResult.textContent = "Game over! No more turns!";
  setGameOver();
} else{
  lastResult.textContent = "Wrong";
  lastResult.style.backgroundColor = "red";
  if(userGuess < randomNumber){
    lowOrHi.textContent = "Your last guess was too low!";
  }else if(userGuess > randomNumber){
    lowOrHi.textContent = "Your last guess was too high!";
  }
}

guessCount++;
guessField.value = " ";
guessField.focus();
}

guessSubmit.addEventListener("click", checkGuess);
