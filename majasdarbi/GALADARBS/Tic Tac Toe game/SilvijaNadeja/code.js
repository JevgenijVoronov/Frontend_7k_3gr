// Pilnīgs basic ar interneta palīdzību, bet tik un tā kaut kas nestrādā. Skat komentāru line 77



const player_x_class = 'x';
const player_o_class = 'circle';
const winning_combinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

const cellElements = document.querySelectorAll('[data-cell]');

const boardElement = document.getElementById('board');

const winningMsgElement = document.getElementById('winningMsg');

const restartBtn = document.getElementById('restartBtn');

const winningMsgTextElement = document.getElementById('winningMsgText');

let isPlayer_O_Turn = false;

startGame()

restartBtn.addEventListener('click', startGame);

function startGame() {
    isPlayer_O_Turn = false
    cellElements.forEach(cell => {
        cell.classList.remove(player_x_class)
        cell.classList.remove(player_o_class)
        cell.removeEventListener('click', handleCellClick)
        cell.addEventListener('click', handleCellClick, { once: true})
    })
    setBoardHoverClass()
    winningMsgElement.classList.remove('show')
};



function handleCellClick(e) {
    const cell = e.target
    const currentClass = isPlayer_O_Turn ? player_o_class : player_x_class;
    placeMark(cell, currentClass)
    if (handleCellClick(currentClass)) {
        endGame(false)
    } else if (isDraw()) {
        endGame(true)
    } else {
        swapTurns()
        setBoardHoverClass()
    }
};

function endGame(draw) {
    if (draw) {
        winningMsgTextElement.innerText = "It's a draw!"
    } else {
        winningMsgTextElement.innerText = `Player with ${isPlayer_O_Turn ? "O's" : "X's"} wins!` 
    }
    winningMsgTextElement.classList.add('show')
};

function isDraw() {
    return [...cellElements].every(cell => {
        return cell.classList.contains(player_x_class || cell.classList.contains(player_o_class))
    })
};

// cell.classList.add(currentClass) met ārā error:
// Uncaught TypeError: Cannot read properties of undefined (reading 'classList')

function placeMark(cell, currentClass) {
    cell.classList.add(currentClass)
};

function swapTurns() {
    isPlayer_O_Turn = !isPlayer_O_Turn
};

function setBoardHoverClass() {
    boardElement.classList.remove(player_x_class)
    boardElement.classList.remove(player_o_class)
    if (isPlayer_O_Turn) {
        boardElement.classList.add(player_o_class)
    } else {
        boardElement.classList.add(player_x_class)
    }
};

function chckWin(currentClass) {
    return winning_combinations.some(combination => {
        return combination.every(index => {
            return cellElement[index].classList.contains(currentClass)
        })
    })
};











