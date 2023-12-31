// Import the runEngine function from the 'index.js' file
import runEngine from '../index.js';

// Import utility functions for generating random numbers and getting user answers
import { getRandomInRange } from '../functions.js';

/*
 * ARITHMETIC PROGRESSION GAME LOGIC
 * The logic for a game where the user identifies the missing number in an arithmetic progression.
*/

// Generate an arithmetic progression, mark a hole, and return the question-answer pair
const progressGame = () => {
  // Initialize the array with the first element
  const array = [getRandomInRange(1, 10)];

  // Generate the length, hole position, and addition for the arithmetic progression
  const length = getRandomInRange(8, 18);
  const hole = length - getRandomInRange(1, 7);
  const add = (getRandomInRange(0, 10) === 10) ? getRandomInRange() : getRandomInRange(1, 10);

  // Generate the entire arithmetic progression
  for (let i = 0; i < length; i += 1) {
    array.push(array[i] + add);
  }

  // Mark the hole and convert the array to a string
  const rightAnsw = array[hole];
  array[hole] = '..';
  const string = array.join(' ');

  // Get the qustion answer
  const question = `Question: ${string}`;

  // Return the question-answer pair as an array
  return [rightAnsw, question];
};

// Set the rule for the arithmetic progression game
const rule = 'What number is missing in the progression?';
export default () => { runEngine(rule, progressGame); };
