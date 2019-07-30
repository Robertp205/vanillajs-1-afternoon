const arr = [];

const topLeft = arr[0];
const topMid = arr[1];
const topRight = arr[2];
const middleLeft = arr[3];
const middle = arr[4];
const middleRight = arr[5];
const botLeft = arr[6];
const botMid = arr[7];
const botRight = arr[8];


const play = (clickId) => {
    let playerSpan = document.getElementById('player');
    let clickedElement = document.getElementById(clickId);

    if(playerSpan.innerText === 'X'){
        playerSpan.innerText = 'O';
        clickedElement.innerText = 'X';
        arr[clickId] = 'X';
    }
    else {playerSpan.innerText = 'X';
    clickedElement.innerText = 'O';
    arr[clickId] = 'O';
};
if(arr[0] !== undefined && arr[0] === arr[1] && arr[0] === arr[2]){
    alert('Winner') 
};
if(arr[3] !== undefined && arr[3] === arr[4] && arr[3] === arr[5]){
    window.alert('Winner')
};

if(arr[6] !== undefined && arr[6] === arr[7] && arr[6] === arr[8]){
    alert('Winner')
};

if(arr[0] !== undefined && arr[0] === arr[4] && arr[0] === arr[8]){
    alert('Winner')
};

if(arr[2] !== undefined && arr[2] === arr[4] && arr[2] === arr[6]){
    alert('Winner')
};

if(arr[2] !== undefined && arr[2] === arr[5] && arr[2] === arr[8]){
    alert('Winner')
};
if(arr[0] !== undefined && arr[0] === arr[3] && arr[0] === arr[6]){
    alert('Winner')
};
if(arr[1] !== undefined && arr[1] === arr[4] && arr[1] === arr[7]){
    alert('Winner');
    return;
    let boardful = true;
        for(let i = 0; i <= arr.length - 1; i++){
            if(arr[i] === undefined){
                boardful = false
            };
        };
        if(boardful === true){
            alert("Srry but its a CATS game, y'all lose.")
        };
};


console.log(arr)
};
