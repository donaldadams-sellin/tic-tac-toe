//set up variables to be used in game
let board;
//turn will be int either -1 or 1, for x and o respectively
let turn;
//set up event listener for the board
document.querySelector('#board').addEventListener('click', handleClick);
//listen for button click
document.querySelector('button').addEventListener('click', init);
//get all boxes as object to update
boxes = document.querySelectorAll('.box');


//function to initialize board and game state
function init(){
    board = [null, null, null, null, null, null, null, null, null]
    turn = -1;
    render(board,turn);
}
//function to handle player clicking
function handleClick(evt){
    
    let boardSpace = evt.target.id;
    
    console.log(evt.target.innerText);
    //if statement uses &nbsp; copied from browser, wouldnt work otherwise maybe want to change
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
        render(board, turn);
        turn = turn*(-1)
   }
    
}
//function to display board each turn
function render(board, turn){
    // evt.target.textContent = turn;
    
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
}

//intial run of init function
init();