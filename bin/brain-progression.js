#!/usr/bin/env node

import readlineSync from 'readline-sync'; // take readline-sync to see your answ

const getNumb = () => { // random number (1-100)
    return Math.round(Math.random() * 100); 
}

const getMinNumb = () => { // random number (1-10)
    return Math.round(Math.random() * 10);
}

function progressGame() { // function game
    console.log('What number is missing in the progression?'); // weclome alert
    for (let i = 0; i < 3; i += 1) { // try win
        let result = [getNumb()];
        let length = getMinNumb() + 3;
        const getAdd = getNumb(); // take what we need
    
        if (length < 6) {
            length = length + 5;
        } // check not be too small
        for (let i = 0; i < length; i += 1) {
            result.push(result[i] + getAdd);
        } // make array

        const hole = length - getMinNumb(); // take random numb
        result = result.sort((a, b) => a - b); // sort array
        const rightAnsw = result[hole]; // find answer

        result[hole] = '..'; // change answer
        result = result.join(' '); // array => str

        console.log(`Question: ${result}`); // ask qustion
        
        const userAnsw= readlineSync.question('Your answer: '); // take answ
        
        if (Number(userAnsw) === rightAnsw) { // check answ
            console.log('Correct!');
        } else {
            console.log(`'${userAnsw}' is wrong answer ;(. Correct answer was '${rightAnsw}'.`);
            console.log(`Let's try again, ${userName}!`);
            return;
        }
    }
    console.log(`Congratulations, ${userName}!`); // win logo
}

console.log('Welcome to the Brain Games!');

const userName = readlineSync.question('May I have your name? ');
console.log(`Hello, ${userName}!`);

progressGame(); // start


