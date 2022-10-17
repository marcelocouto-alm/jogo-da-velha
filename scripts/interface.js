document.addEventListener('DOMContentLoaded', () => {

    let squares = document.querySelectorAll(".square");

    squares.forEach((square) => {
        square.addEventListener('click', handleClick);
    })

})

function handleClick(event) {

    let square = event.target;
    let position = square.id;

    if (handleMove(position)) {

        const result =
`<h2>O ${symbols[playerTime]} venceu.</h2>`;

        const winner = document.getElementById('result');

        winner.innerHTML = result;
    };
    updateSquare(position);
}

function updateSquare(position) {
    let square = document.getElementById(position.toString());
    let symbol = board[position];
    square.innerHTML = `<div class='${symbol}'></div>`
}

let restartGame = document.getElementById("restartButton");

restartGame.addEventListener("click", () => {
    board = [
        '', '', '',
        '', '', '',
        '', '', '',
    ];

    playerTime = 0;
    gameOver = false;

    // Reset Game Board

    let squares = document.querySelectorAll(".square")
    squares.forEach((square) => {
        square.innerHTML = "";
    });

    // Reset Result

    const winner = document.getElementById('result');

    winner.innerHTML = "";
})