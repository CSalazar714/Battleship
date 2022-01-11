let rows = 10;
let columns = 10;
let squareSize = 50;

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
//Buttons
// submitBtn.addEventListener("click",toggleP1Select)
// P1NextStart.addEventListener("click",toggleP1StartSelect)
// p1SelectStart.addEventListener("click",toggleP2NextPlayer)
// p2NextStart.addEventListener("click",toggleP2Select)
// p2SelectStart.addEventListener("click",toggleP1NextStartGame)
// p1GameStart.addEventListener("click",toggleP1GameScreen)
// p1GameNextStart.addEventListener("click",toggleOnGoingP2Next)
// p2NextPlayer.addEventListener("click",toggleP2GameScreen)
// p2GameScreen.addEventListener("click",toggleOnGoingP1Next)
//// Toggle show and hide features to change pages
// let ToggleView = document.querySelector("#Pages");
// ToggleView.addEventListener("click", ToggleFunc, false);

// function ToggleFunc(event) {
// 	if(event.target.className == 'Pages')
// 	{
// 		let next = event.target.nextElementSibling;

// 		if(next.style.display == "none"){
// 			next.stlye.display = "block";
// 		} else {
// 			next.style.display = "none";
// 		}
// 	}
// }


//This goes from TITLE to PLAYER ONE NEXT PLAYER SCREEN
// titleContent.classList.toggle("show")
// function toggleP1Select(){ console.log("clicked");
//     titleContent.classList.toggle("hide");
//     titleContent.classList.toggle("show")
//     p1NextStart.classList.toggle("show");
// }

// //This goes from PLAYER ONE NEXT PLAYER SCREEN to PLAYER ONE SELECT SCREEN
// function toggleP1StartSelect(){
//     p1NextStart.classList.toggle("hide");
//     p1NextStart.classList.remove("show");
//     p1Select.classList.toggle("show");
// }
// //This command goes from PLAYER ONE SELECT SCREEN to PLAYER TWO NEXT PLAYER SCREEN //
// function toggleP2NextPlayer(){
//     p1Select.classList.toggle("hide");
//     p1Select.classList.remove("show")
//     p2NextStart.classList.toggle("show")
// }
// //This command goes from PLAYER TWO NEXT PLAYER SCREEN to PLAYER TWO SELECT SCREEN//
// function toggleP2Select(){
//     p2NextStart.classList.toggle("hide");
//     p2NextStart.classList.remove("show");
//     p2Select.classList.toggle("show")
// }
// //This command goes from PLAYER TWO SELECT SCREEN to PLAYER ONE NEXT PLAYER SCREEN//
// function toggleP1NextStartGame(){
//     p2Select.classList.toggle("hide");
//     p2Select.classList.remove("show");
//     p1NextPlayer.classList.toggle("show")
    
// }
// //This command goes from PLAYER ONE NEXT PLAYER SCREEN to PLAYER ONE GAME SCREEN//
// function toggleP1GameScreen(){
//     p1NextPlayer.classList.toggle("hide");
//     p1NextPlayer.classList.remove("show");
//     p1GameScreen.classList.toggle("show")
// }
// //This goes from PLAYER ONE GAME SCREEN to PLAYER TWO NEXT PLAYER SCREEN//
// function toggleOnGoingP2Next(){
//     p1GameScreen.classList.toggle("hide");
//     p1GameScreen.classList.remove("show");
//     p2NextPlayer.classList.toggle("show")
// }
// //This goes from PLAYER TWO NEXT PLAYER SCREEN to PLAYER TWO GAME SCREEN//
// function toggleP2GameScreen(){
//     p2NextPlayer.classList.toggle("hide");
//     p2NextPlayer.classList.remove("show");
//     p2GameScreen.classList.toggle("show")
// }
// //This goes from PLAYER TWO GAME SCREEN to PLAYER ONE NEXT PLAYER SCREEN
// function toggleOnGoingP1Next(){
//     p2GameScreen.classList.toggle("hide");
//     p2GameScreen.classList.remove("show");
//     p1NextPlayer.classList.toggle("show")
    
// }


let gameBoardGrid = document.getElementById("board");
// gameBoardGrid.className = classname;

for (c = 0; c < columns; c++) {
	for (r = 0; r < rows; r++) {
		
		let square = document.createElement("div");
		gameBoardGrid.appendChild(square);

		square.id = 'x' + r + c;			
		
		let top = r * squareSize;
		let left = c * squareSize;			
		
		square.style.top = top + 'px';
		square.style.left = left + 'px';						
	}
}

let hitCount = 0;

let gameBoard = [
				[0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0]
				]

// set event listener for all elements in gameboard, run fireTorpedo function when square is clicked
gameBoardGrid.addEventListener("click", fireTorpedo, false);
// gameBoardGrid.addEventListener("click", shipPlacementP1, false);
// gameBoardGrid.addEventListener("click", shipPlacementP2, false);

let gameBoardPlayer1 = gameBoard
let gameBoardPlayer2 = gameBoard

// https://www.kirupa.com/html5/handling_events_for_many_elements.htm#tutorialInformation
function fireTorpedo(e) {
   
	if (e.target !== e.currentTarget) {
        // extract row and column # from the HTML element's id
		let row = e.target.id.substring(1,2);
		let col = e.target.id.substring(2,3);
        //console.log("Clicked on row " + row + ", col " + col);
				
		if (gameBoard[row][col] == 0) {
			e.target.style.background = 'blue';
			gameBoard[row][col] = 3;
			console.log(gameBoard)
			
		    } else if (gameBoard[row][col] == 1) {
			    e.target.style.background = 'red';
			    gameBoard[row][col] = 2;
			    hitCount++;
				console.log(hitCount)
			
			    if (hitCount == 17) {alert("Game Over You Win!")
				//Run Endgame Victory Screen
			    }
		    } else if (gameBoard[row][col] > 1) {
			    alert("This location has already been hit!");
		}		
    }
    e.stopPropagation();
}

function shipPlacementP1(e) {
    // if item clicked (e.target) is not the parent element on which the event listener was set (e.currentTarget)
	let row = e.target.id.substring(1,2);
	let col = e.target.id.substring(2,3);
		if(gameBoardGrid.className = PlayerOneBoard) {	
	
	if (e.target !== e.currentTarget) {
        
		if (gameBoardPlayer1[row][col] == 0) {
			e.target.style.background = '#bbb';
			
			gameBoardPlayer1[row][col] = 1;
			e.target.style.background = 'blue'
		} else if (gameBoardPlayer1[row][col] == 1) {
			e.target.style.background = '#bbb';
			gameBoardPlayer1[row][col] = 0;
            
			shipCount++;
			if (shipCount == 17) {
				alert(`You have placed all your ships click "Continue" to finish` );
			}
			
		
		} 	

	else if(gameBoardGrid.className = PlayerTwoBoard){
	if (e.target !== e.currentTarget) {
        
		if (gameBoardPlayer2[row][col] == 0) {
			e.target.style.background = '#bbb';
			
			gameBoardPlayer2[row][col] = 1;
			e.target.style.background = 'blue'
		} else if (gameBoardPlayer2[row][col] == 1) {
			e.target.style.background = '#bbb';
			gameBoardPlayer2[row][col] = 0;
            
			shipCount++;
			if (shipCount == 17) {
				alert(`You have placed all your ships click "Continue" to finish` );
			}
}
    }}
    e.stopPropagation();
}}}

