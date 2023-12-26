# Brain Games

Welcome to Brain Games - a collection of six interactive console-based JavaScript games to challenge and entertain your mind.

## Games

1. **brain-games:**
   - Simply asks for your name and greets you.

2. **brain-calc:**
   - Perform basic arithmetic operations on two numbers.

3. **brain-even:**
   - Determine if a given number is even or odd.

4. **brain-gcd:**
   - Find the greatest common divisor (GCD) of two numbers.

5. **brain-prime:**
   - Identify whether a given number is prime or not.

6. **brain-progression:**
   - Determine the missing number in a sequence.

## Requirements

- JavaScript (Node.js)
- Git

## Installation

1. **Copy Repository to Your PC:**
   - Open a terminal window.
   - Run the following command to clone the repository to your local machine:
     ```bash
     git clone https://github.com/Stepan19999993/fullstack-javascript-project-44.git
     ```
   - Change into the project directory:
     ```bash
     cd fullstack-javascript-project-44
     ```

2. **Install Dependencies:**
   - Run the following command to install the project dependencies:
     ```bash
     make install
     ```

## Game Commands

### Running Games

Each game can be executed using the following commands:

- **brain-games:**
  ```bash
  make brain-games
  ```

- **brain-calc:**
  ```bash
  make brain-calc
  ```

- **brain-even:**
  ```bash
  make brain-even
  ```

- **brain-gcd:**
  ```bash
  make brain-gcd
  ```

- **brain-prime:**
  ```bash
  make brain-prime
  ```

- **brain-progression:**
  ```bash
  make brain-progression
  ```

### Linting

To lint the project, use the following command:

```bash
make lint
```

This command runs ESLint to check your code for any style or formatting issues.

### Additional Makefile Commands

- **Install Dependencies:**
  ```bash
  make install
  ```
  This command installs project dependencies using npm.

## How to Use Makefile

1. **Install Dependencies:**
   ```bash
   make install
   ```
   This command installs the necessary project dependencies.

2. **Run a Game:**
   ```bash
   make brain-games
   ```
   Replace `brain-games` with the specific game you want to play.

3. **Lint Your Code:**
   ```bash
   make lint
   ```
   This command checks your code for style and formatting issues.

Feel free to use these commands to navigate and interact with the Brain Games project.

## Project Settings

Modify settings in the `src/settings.js` file:

```javascript
// You can change the count of rounds
const roundsCount = 3;

// You can enable "god mode" (no fails).
const noFailMode = false;

// You can enable "cheat mode" (your answer is right, but you still fail).
const youAlwaysRight = false;
```

## Badges

### Hexlet tests and linter status:
[![Actions Status](https://github.com/Stepan19999993/fullstack-javascript-project-44/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/Stepan19999993/fullstack-javascript-project-44/actions)
<a href="https://codeclimate.com/github/Stepan19999993/fullstack-javascript-project-44/maintainability"><img src="https://api.codeclimate.com/v1/badges/a63658e6920252318329/maintainability"/></a>

