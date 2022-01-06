const columns = 10;
const rows = 10;
const squareSize = 50;

const player1Arr = []
const player2Arr = []


let titleContent = document.getElementById("Title");
let p1Select = document.getElementById("playerOneSelect");
let p2Select = document.getElementById("playerTwoSelect");
let p1NextStart = document.getElementById("p1NextPlayerStart")
let p2NextStart = document.getElementById("p2NextPlayerStart")
let p1NextPlayer = document.getElementById("nextPlayerScreenP1");
let p2NextPlayer = document.getElementById("nextPlayerScreenP2");
let p1GameScreen = document.getElementById("playerOneGameScreen");
let p2GameScreen = document.getElementById("playerTwoGameScreen");
let winnerScreen = document.getElementById("endGameScreen");
//This goes from TITLE to PLAYER ONE NEXT PLAYER SCREEN


function toggleP1Select(){ console.log("clicked");
    titleContent.classList.toggle("hide");
    p1NextStart.style.display == "none" ? titleContent.style.display = "none" : p1NextStart.style.display = "block";
}

//This goes from PLAYER ONE NEXT PLAYER SCREEN to PLAYER ONE SELECT SCREEN
function toggleP1StartSelect(){
    p1NextStart.style.display = "none"
    p1Select.style.display == "none" ? p1NextStart.style.display = "none" : p1Select.style.display = "block";
}
//This command goes from PLAYER ONE SELECT SCREEN to PLAYER TWO NEXT PLAYER SCREEN //
function toggleP2NextPlayer(){
    p1Select.style.display = "none"
    p2NextStart.style.display == "none" ? p1Select.style.display = "none" : p2NextStart.style.display = "block";
}
//This command goes from PLAYER TWO NEXT PLAYER SCREEN to PLAYER TWO SELECT SCREEN//
function toggleP2Select(){
    p2NextStart.style.display = "none"
    p2Select.style.display == "none" ? p2NextStart.style.display = "none" : p2Select.style.display = "block";
}
//This command goes from PLAYER TWO SELECT SCREEN to PLAYER ONE NEXT PLAYER SCREEN//
function toggleP1NextStartGame(){
    p2Select.style.display = "none"
    p1NextPlayer.style.display == "none" ? p2Select.style.display = "none" : p1NextPlayer.style.display = "block";
}
//This command goes from PLAYER ONE NEXT PLAYER SCREEN to PLAYER ONE GAME SCREEN//
function toggleP1GameScreen(){
    p1NextPlayer.style.display = "none"
    p1GameScreen.style.display == "none" ? p1NextPlayer.style.display = "none" : p1GameScreen.style.display = "block";
}
//This goes from PLAYER ONE GAME SCREEN to PLAYER TWO NEXT PLAYER SCREEN//
function toggleOnGoingP2Next(){
    p1GameScreen.style.display = "none"
    p2NextPlayer.style.display == "none" ? p1GameScreen.style.display = "none" : p2NextPlayer.style.display = "block";
}
//This goes from PLAYER TWO NEXT PLAYER SCREEN to PLAYER TWO GAME SCREEN//
function toggleP2GameScreen(){
    p2NextPlayer.style.display = "none"
    p2GameScreen.style.display == "none" ? p2NextPlayer.style.display = "none" : p2GameScreen.style.display = "block";
}
//This goes from PLAYER TWO GAME SCREEN to PLAYER ONE NEXT PLAYER SCREEN
function toggleOnGoingP1Next(){
    p2GameScreen.style.display = "none"
    p1NextPlayer.style.display == "none" ? p2GameScreen.style.display = "none" : p1NextPlayer.style.display = "block";
}

let boardgameGrid = document.getElementById("boardgame")

for(let c = 0; c < columns; c++) {
    // player1Arr[c] = [];
    // player2Arr[c] = [];
    for(let r = 0 ; r < rows; r++){
        // player1Arr[c][r] = 0;
        // player2Arr[c][r] = 0
       let square = document.createElement("div");
       boardgameGrid.appendChild(square) ;
       square.id = 'x'+ c + r;

    let top = c * squareSize;
    let left = r * squareSize
    square.style.top = top + 'px';
	square.style.left = left + 'px';
}
}



//console.log (player1Arr);
//console.log (player2Arr);


let board = [
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0]]
    
    
    submitBtn.addEventListener("click",toggleP1Select)
    P1NextStart.addEventListener("click",toggleP1StartSelect)
    p1SelectStart.addEventListener("click",toggleP2NextPlayer)
    p2NextStart.addEventListener("click",toggleP2Select)
    p2SelectStart.addEventListener("click",toggleP1NextStartGame)
    p1GameStart.addEventListener("click",toggleP1GameScreen)
    p1GameNextStart.addEventListener("click",toggleOnGoingP2Next)
    p2NextPlayer.addEventListener("click",toggleP2GameScreen)
    p2GameScreen.addEventListener("click",toggleOnGoingP1Next)
    // endGameScreen.addEventListener("click",toggleOnGoingP2Next)