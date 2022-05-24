/*----- constants -----*/
const PLAYER1_MARK = 'red';
const PLAYER2_MARK = 'blue';
/*----- app's state (variables) -----*/

let currentPlayer;
const player1Boxes = [];
const player2Boxes = [];

/*----- cached element references -----*/
const mainEl = document.querySelector('main');
const resetBtnEl = document.querySelector('.reset');
const playerEl = document.querySelector('#js-player');
const playBtnEl = document.querySelector('#js-play-btn');
const welcomeModalEl = document.querySelector('.modal-welcome');
const boxes = document.querySelectorAll('.box');
/*----- event listeners -----*/
mainEl.addEventListener('click', changeGrid);
playBtnEl.addEventListener('click', init);
resetBtnEl.addEventListener('click', init);
/*----- functions -----*/
function init() {
	welcomeModalEl.classList.add('hide');
    currentPlayer = 1;
	playerEl.innerText = 'Player: 1';
    player1Boxes.length = 0;
    player2Boxes.length = 0;
    boxes.forEach(function(box) {
        box.style.backgroundColor = 'lightgray';
    })
}

function changeGrid(element) {
    const box = element.target;
    if (box.classList.contains('box')) {
        const boxId = parseInt(box.id);
        if(player1Boxes.includes(boxId) || player2Boxes.includes(boxId)) {
            alert('Please pick a different box')
        }    
		else if (currentPlayer === 1 ){
            player1Boxes.push(parseInt(boxId))
            box.style.backgroundColor = PLAYER1_MARK;
            currentPlayer = 2;
            playerEl.innerText = 'Player: 2'
        }else {
            player2Boxes.push(parseInt(boxId));
            box.style.backgroundColor = PLAYER2_MARK;
            currentPlayer = 1;
            playerEl.innerText = 'Player: 1';
	} 
	}
}
