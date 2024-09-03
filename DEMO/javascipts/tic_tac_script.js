const cells = document.querySelectorAll('.cell');
const message = document.getElementById('message');
const resetButton = document.getElementById('reset');

let currentPlayer = 'X';
let board = Array(9).fill(null);

const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

function checkWinner() {
    for (const [a, b, c] of winningCombinations) {
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            return board[a];
        }
    }
    return board.includes(null) ? null : 'Draw';
}

function handleClick(event) {
    const cell = event.target;
    const index = cell.getAttribute('data-index');
    
    if (board[index] || checkWinner()) return;

    board[index] = currentPlayer;
    cell.textContent = currentPlayer;
    cell.classList.add(currentPlayer.toLowerCase());

    const winner = checkWinner();
    if (winner) {
        if (winner === 'Draw') {
            message.textContent = "It's a draw!";
        } else {
            message.textContent = `${winner} wins!`;
        }
    } else {
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        message.textContent = `Player ${currentPlayer}'s turn`;
    }
}

function resetGame() {
    board = Array(9).fill(null);
    currentPlayer = 'X';
    message.textContent = "Player X's turn";
    cells.forEach(cell => {
        cell.textContent = '';
        cell.classList.remove('x', 'o');
    });
}

cells.forEach(cell => cell.addEventListener('click', handleClick));
resetButton.addEventListener('click', resetGame);