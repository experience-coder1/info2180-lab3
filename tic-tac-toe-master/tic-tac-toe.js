document.addEventListener("DOMContentLoaded", function () {
    const squares = document.querySelectorAll("#board > div");
    const status = document.getElementById("status");
    const newGameButton = document.querySelector(".btn");
    const originalMessage = status.textContent;

    const gameState = Array(9).fill(null)
    let currentPlayer = "X";
    let gameOver = false;

    const winningCombos = [
      [0,1,2], [3,4,5], [6,7,8],
      [0,3,6], [1, 4, 7], [2,5,8],
      [0, 4, 8,], [2,4, 6]
    ];
    function checkWinner() {
      for (const [a, b, c] of winningCombos) {
        if (
          gameState[a] !== null &&
          gameState[a] === gameState[b] &&
          gameState[a] === gameState[c]
        ) {
          return gameState[a];
      }
    }
      return null;
    }

    squares.forEach(function (square, index) {
      square.classList.add("square");

      square.addEventListener("mouseenter", function () {
        square.classList.add("hover");
      });
  
      square.addEventListener("mouseleave", function () {
        square.classList.remove("hover");
      });

      square.addEventListener("click",function(){
        if (gameState[index] !== null || gameOver) return;
        gameState[index] = currentPlayer;
        square.textContent = currentPlayer;
        square.classList.add(currentPlayer);
      
        const winner = checkWinner();
        if (winner) {
          status.textContent = "Congratulations! " + winner + " is the Winner!";
          status.classList.add("you-won");
          gameOver = true;
          return;
        }
        
      
        currentPlayer = currentPlayer === "X" ? "O" : "X";
      });
    });
    newGameButton.addEventListener("click", function () {
      gameState.fill(null);
      currentPlayer = "X";
      gameOver = false;
  
      squares.forEach(function (square) {
        square.textContent = "";
        square.classList.remove("X", "O");
      });
  
      status.textContent = originalMessage;
      status.classList.remove("you-won");
    });
  });


