# Tic Tac Toe

This project is an interactive Tic Tac Toe game built with HTML, CSS, and JavaScript. It allows two players to play Tic Tac Toe, with the ability to input player names, switch turns between "X" and "O", and display the winner or a draw at the end of the game. It also includes a restart feature to play again without refreshing the page.

## Features

* **Player Name Input**: Players can input their names to personalize the game.
* **Grid Layout**: The game is played on a 3x3 grid where players click on empty cells to place their marker (X or O).
* **Turn-Based Gameplay**: The game alternates between Player 1 (X) and Player 2 (O), displaying whose turn it is.
* **Winner & Draw Detection**: The game checks for winning conditions or a draw after every move and announces the result.
* **Restart Game Button**: Once the game is over, a restart button appears, allowing players to reset the game without reloading the page.
* **Responsive Layout**: The layout is designed to work well on different screen sizes.

## Tech Stack

* **HTML**: Structure of the game interface including the grid, player name inputs, and buttons.
* **CSS**: Custom styling using:

  * Flexbox for centering and positioning elements.
  * Grid for the Tic Tac Toe board layout.
* **JavaScript**: Logic for game functionality including:
  
  * Factory functions.
  * Click event listeners for cells.
  * Win condition checking.
  * Dynamic status updates and player switching.

## What I Learned

* **Factory Functions**:
  In this project, I focused on using **factory functions** to manage the game's state and functionality. This approach allowed me to organize the game logic in a more modular and reusable way.

  Key points:

  * **Game Initialization**: The game logic and state (like the board, current player, and winner) were encapsulated inside a factory function called `TicTacToe`. This function helped group all relevant game behaviors together, making the code more organized.

  * **Event Handling**: By using a factory function, I centralized the event listeners for user interactions like cell clicks and form submissions. This made it easier to manage and clean up event listeners when the game restarts.

  * **Encapsulation of State**: The game's state (e.g., current player, game board, and win conditions) was encapsulated within the factory object, providing a clear structure and easier access to these properties throughout the code.

  * **Modular Code**: Using factory functions helped me break down the game logic into smaller, reusable units. Functions like `startGame`, `changePlayer`, and `checkWinner` were contained within the factory object, making it easy to update or expand the game’s features without cluttering the code.

  * **Maintaining Clean Code**: Factory functions helped me maintain a clean and modular approach to building the game. Each function handled a specific part of the logic, making the code easier to understand and maintain. This also made it simple to implement game restart functionality by resetting state and event listeners.