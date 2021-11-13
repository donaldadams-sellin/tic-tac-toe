//set up variables to be used in game
let board;
//turn will be int either -1 or 1, for x and o respectively
let turn;
//winner variable starts as null to indicate no winner
let winner;
let winMessage = document.querySelector('#winMessage');
let turnMessage = document.querySelector('#turnMessage');


//set up event listener for the board
document.querySelector('#board').addEventListener('click', handleClick);
//listen for button click
document.querySelector('button').addEventListener('click', init);
//get all boxes as variable to update
boxes = document.querySelectorAll('.box');


//function to initialize board and game state
function init(){
    board = [null, null, null, null, null, null, null, null, null]
    turn = -1;
    winner = null;
    winMessage.textContent = '';
    turnMessage.textContent = '';
    render(board,turn);
}
//function to handle player clicking
function handleClick(evt){
    
    let boardSpace = evt.target.id;
    
    console.log(evt.target.innerText);
    //if statement uses &nbsp; copied from browser, wouldnt work otherwise maybe want to change
    if(winner === null){
        if (evt.target.innerText === ' '){
        switch (boardSpace) {
            case 'box1' :
                board[0] = turn;
                break;

            case 'box2' :
                board[1] = turn;
                break;

            case 'box3' :
                board[2] = turn;
                break;
            
            case 'box4' :
                board[3] = turn;
                break;

            case 'box5' :
                board[4] = turn;
                break;

            case 'box6' :
                board[5] = turn;
                break;

            case 'box7' :
                board[6] = turn;
                break;

            case 'box8' :
                board[7] = turn;
                break;  

            case 'box9' :
                board[8] = turn;
                break;  
        }
        checkWin();
        
        turn = turn*(-1)
        render(board, turn);
   }}
    
}
//function to display board each turn
function render(board, turn){
    //sets each board space to appropriate text
    board.forEach(function(space, i){
        
        if (space === null){
            //uses same nbsp from before
            boxes[i].textContent = ' '
        } else if (space === -1) {
            boxes[i].textContent = 'X';
        } else if (space === 1){
            boxes[i].textContent = 'O'
        }
    });
    //displays appropriate message in case of win or tie
    if (winner !== null){
        
        if(winner === -1){
            winMessage.textContent = 'X Wins!';
        } else if (winner === 1){
            winMessage.textContent = 'O Wins!';
        } else {
            winMessage.textContent = "It's a tie!"
        }
        
    }
    //displays turn
    if (turn === -1){
        turnMessage.textContent = "X's Turn";
    } else if (turn === 1) {
        turnMessage.textContent = "O's Turn";
    }
}

//function to check if there is a winner, and set which player it is, or set a tie
function checkWin (){
    if (board[0]===board[1]&& board[0]=== board[2] && board[0] !== null){
        if(board[0] === -1){
            winner = -1;
        } else {
            winner = 1;
        }
    } else if (board[0]===board[3]&& board[0]===board[6] && board[0] !== null){
        if(board[0] === -1){
            winner = -1;
        } else {
            winner = 1;
        }
    } else if (board[0]===board[4]&& board[0]===board[8] && board[0] !== null){
        if(board[0] === -1){
            winner = -1;
        } else {
            winner = 1;
        }
    } else if (board[1]===board[4]&& board[1]===board[7] && board[1] !== null){
        if(board[1] === -1){
            winner = -1;
        } else {
            winner = 1;
        }
    } else if (board[2]===board[5]&& board[2]===board[8] && board[2] !== null){
        if(board[2] === -1){
            winner = -1;
        } else {
            winner = 1;
        }
    } else if (board[2]===board[4]&& board[2]===board[6] && board[2] !== null){
        if(board[2] === -1){
            winner = -1;
        } else {
            winner = 1;
        }
    } else if (board[3]===board[4]&& board[3]===board[5] && board[3] !== null){
        if(board[3] === -1){
            winner = -1;
        } else {
            winner = 1;
        }
    } else if (board[6]===board[7]&& board[6]===board[8] && board[6] !== null){
        if(board[6] === -1){
            winner = -1;
        } else {
            winner = 1;
        }
    }
    if (winner === null && board[0] !== null && board[1] !== null && board[2] !== null && board[3] !== null && board[4] !== null && board[5] !== null && board[6] !== null && board[7] !== null && board[8] !== null) {
        
        winner = 'tie';
        
    }
    
}

//intial run of init function
init();