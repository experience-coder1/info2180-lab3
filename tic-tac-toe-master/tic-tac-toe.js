document.addEventListener("DOMContentLoaded", function () {
    const squares = document.querySelectorAll("#board > div");

    const gameState = Array(9).fill(null)
    let currentPlayer = "X";

    squares.forEach(function (square, index) {
      square.classList.add("square");

      square.addEventListener("mouseenter", function () {
        square.classList.add("hover");
      });
  
      square.addEventListener("mouseleave", function () {
        square.classList.remove("hover");
      });

      square.addEventListener("click",function(){
        gameState[index] = currentPlayer;
        square.textContent = currentPlayer;
        square.classList.add(currentPlayer);

        currentPlayer = currentPlayer === "X" ? "O" : "X";
      });
    });
  });

