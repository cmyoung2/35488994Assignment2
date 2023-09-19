function guessNumber() {
    const random = Math.floor(Math.random() * 10) + 1;
    let guess = parseInt(prompt('Guess a number from 1 to 10: '));
    
    while(guess !== random) {
        guess = parseInt(prompt('Guess a number from 1 to 10: '));
    }

    if(guess == random) {
        console.log('You guessed the number!');
    }
}

guessNumber();