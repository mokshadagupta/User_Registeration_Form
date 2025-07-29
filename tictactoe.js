//Create a tic-tac-toe game using node js
//npm install prompt-sync
// num = prompt("Enter number: ")
// console.log(Square of ${num} is ${num * num});

const prompt = require("prompt-sync")();

board = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

function printBoard(board) {
    console.clear()
    for(let i = 0; i < 3; i++) {
        output = ``
        for(let j = 0; j < 3; j++)
            output += ${board[i][j]} \t
        console.log(output);
    }    
}

printBoard(board)



for(let i = 1; i < 10; i++) {
    player = i % 2 == 1 ? "X" : "O"
    pos = Number(prompt(`Player ${player}: Enter position: `))
    
    switch (pos) {
        case 1: board[0][0] = player; break;
        case 2: board[0][1] = player; break;
        case 3: board[0][2] = player; break;
        case 4: board[1][0] = player; break;
        case 5: board[1][1] = player; break;
        case 6: board[1][2] = player; break;
        case 7: board[2][0] = player; break;
        case 8: board[2][1] = player; break;
        case 9: board[2][2] = player; break;
    }
            
    printBoard(board)

    if(checkWinPattern(board)) {
        console.log(`Player ${player} is winner`);
        break;
    }
        
}

function checkWinPattern(board) {
    if(board[0][0] == board[0][1] && board[0][0] == board[0][2])
        return true

    return false;
}