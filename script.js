const answer = 25;
let userGuess = 0;

const button = document.querySelector('.btn');
const userDisplay = document.querySelector('.guess-output');


button.addEventListener('click', () => {
    getUserGuess();
});

function getUserGuess() {
    const inputElement = document.querySelector('.input-bar');
    const userInput = inputElement.value.trim();

    userGuess = Number(userInput);

    if(Number.isNaN(userGuess) || userGuess === ''){
        alert('Please enter a number!!');
    } else {
        checkGuess(userGuess);
    }
    inputElement.value = '';
    console.log(userGuess);
}

function checkGuess(guess) {
    if(guess === answer) {
        userDisplay.innerHTML = 'NICE!!';
        return;
    }

    userDisplay.innerHTML = '';

    const distance = Math.abs(guess - answer);

    userDisplay.innerHTML = `You are ${distance} numbers away!!`;
}
