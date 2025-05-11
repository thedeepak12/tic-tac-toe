document.addEventListener("DOMContentLoaded", function() {
    const TicTacToe = (function() {
        const cells = document.querySelectorAll(".cell");
        const statusText = document.querySelector("#status-text");
        const restartBtn = document.querySelector("#restart-btn");
        const playerForm = document.querySelector("#playerForm");
        const player1Input = document.querySelector("#player1Name");
        const player2Input = document.querySelector("#player2Name");

        const winConditions = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8],
            [0, 3, 6], [1, 4, 7], [2, 5, 8],
            [0, 4, 8], [2, 4, 6]
        ];
        let options = ["", "", "", "", "", "", "", "", ""];
        let currentPlayer = "X";
        let running = false;
        let player1 = "";
        let player2 = "";

        function initializeGame() {
            playerForm.style.display = "block";
            restartBtn.style.display = "none";
            statusText.textContent = "Enter player names to start";
            player1Input.value = "";
            player2Input.value = "";

            cells.forEach(cell => cell.addEventListener("click", cellClicked));
            restartBtn.addEventListener("click", restartGame);

            playerForm.addEventListener("submit", function(e) {
                e.preventDefault();
                player1 = player1Input.value.trim() || "Player 1";
                player2 = player2Input.value.trim() || "Player 2";
                playerForm.style.display = "none";
                startGame();
            });
        }

        function startGame() {
            cells.forEach(cell => cell.addEventListener("click", cellClicked));
            restartBtn.addEventListener("click", restartGame);
            statusText.textContent = `${currentPlayer === "X" ? player1 : player2}'s turn`;
            running = true;
        }

        function cellClicked(e) {
            e.preventDefault();
            const cellIndex = parseInt(this.getAttribute("cell-index"), 10);

            if (isNaN(cellIndex) || cellIndex < 0 || cellIndex > 8) {
                console.warn("Invalid cell index");
                return;
            }

            if (options[cellIndex] !== "" || !running) {
                return;
            }

            updateCell(this, cellIndex);
            checkWinner();
        }

        function updateCell(cell, index) {
            options[index] = currentPlayer;
            cell.textContent = currentPlayer;
            cell.classList.add(`player-${currentPlayer}`);
        }

        function changePlayer() {
            currentPlayer = currentPlayer === "X" ? "O" : "X";
            statusText.textContent = `${currentPlayer === "X" ? player1 : player2}'s turn`;
        }

        function checkWinner() {
            let roundWon = false;
            let winningCombo = null;

            for (let i = 0; i < winConditions.length; i++) {
                const condition = winConditions[i];
                const cellA = options[condition[0]];
                const cellB = options[condition[1]];
                const cellC = options[condition[2]];

                if (cellA === "" || cellB === "" || cellC === "") {
                    continue;
                }

                if (cellA === cellB && cellB === cellC) {
                    roundWon = true;
                    winningCombo = condition;
                    break;
                }
            }

            if (roundWon) {
                statusText.textContent = `${currentPlayer === "X" ? player1 : player2} wins!`;
                running = false;
                if (winningCombo) {
                    winningCombo.forEach(index => {
                        cells[index].classList.add('winner');
                    });
                }
                restartBtn.style.display = "block";
            } else if (!options.includes("")) {
                statusText.textContent = `Draw!`;
                running = false;
                restartBtn.style.display = "block";
            } else {
                changePlayer();
            }
        }

        function restartGame() {
            currentPlayer = "X";
            options = ["", "", "", "", "", "", "", "", ""];

            cells.forEach(cell => {
                cell.textContent = "";
                cell.classList.remove('player-X', 'player-O', 'winner');
            });

            restartBtn.style.display = "none";

            running = false;

            cells.forEach(cell => {
                cell.removeEventListener("click", cellClicked);
            });
            restartBtn.removeEventListener("click", restartGame);

            startGame();
        }

        return {
            start: initializeGame
        };
    })();

    TicTacToe.start();
});