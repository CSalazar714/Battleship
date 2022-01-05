const columns = 10
const rows = 10


const player1Arr = []
const player2Arr = []


for(let c = 0; c< columns; c++) {
    player1Arr[c] = [];
    player2Arr[c] = [];
    for(let r = 0 ; r < rows; r++){
        player1Arr[c][r] = 0;
        player2Arr[c][r] = 0
        
    }
}
//console.log (player1Arr);
//console.log (player2Arr);