const puzzleSlots = document.querySelectorAll('div.puzzle-slot');
const puzzleSlot1 = document.getElementById('puzzle-slot-1');
const emptySlot = document.getElementById('puzzle-slot-empty');

const puzzleBox = document.getElementById('fifteen-puzzle');

// Array to contain pieces
let pieceArray = [];


// Constructs 15 puzzle pieces and 1 empty piece
function puzzleConstructor() {
    for (let i = 1; i <= 16; i++) {

        // Create puzzle slots and append to puzzle box
        const slot = document.createElement('div');
        slot.classList.add('slot');
        slot.id = `slot-${i}`;
        puzzleBox.appendChild(slot);
        
        // Create pieces and append to slots
        if (i != 16) {
            const puzzlePiece = document.createElement('button');
            puzzlePiece.classList.add('piece');
            puzzlePiece.id = `piece-${i}`;
            puzzlePiece.addEventListener('click', pieceOnClick)
            const pieceContent = document.createTextNode(`${i}`);
            puzzlePiece.appendChild(pieceContent);
            // slot.appendChild(puzzlePiece);
            pieceSlotConstructor(puzzlePiece, slot);
        // } else { 
        //     const puzzlePiece = document.createElement('button');
        //     puzzlePiece.classList.add('empty');
        //     puzzlePiece.id = `empty-piece`;
        //     // slot.appendChild(puzzlePiece);
        //     pieceSlotConstructor(puzzlePiece, slot);
        }
        // Establish slot - piece relationship with object constructor

        
    }
    // console.log(pieceArray);
    // return pieceSlotObject
}
puzzleConstructor();

// Function to construct piece-slot object
function pieceSlotConstructor (piece, slot) {
    const pieceSlotObject = new Object({
        piece: piece,
        slot: slot,
        binding: slot.appendChild(piece),
    })
    pieceArray.push(pieceSlotObject);
}


// Piece on-click function
function pieceOnClick (e) {
    const targetSlot = e.target.parentElement;
    const emptySlot = findEmptySlot();
    emptySlot.appendChild(e.target.Object);
}

// Search the puzzle box for a slot with no child nodes
function findEmptySlot () {
    slots = puzzleBox.childNodes;
    slots.forEach(slot => {
        if (slot.childNodes.length === 0) { 
            console.log(slot);
            return slot;
        }
    });

}

// findEmptySlot();








// function puzzleState ()

// need to make the tiles buttons?

// const tileLeftClick = (e) => {
    
    
//     console.log(e.target);
// };

// tileArray.forEach((tile) => {
//    addEventListener('click', tileLeftClick);
    

    
// })
// function findEmptySlot (array) {
//     array.forEach((tile) => { 
//         if (tile === null) {
//             return 'hello';
//         } else {
//             return Error('No empty tiles')
//         }
//     })
// }
// console.log(findEmptySlot(tileArray));
// console.log(tileInSlot(tileArray[15]));

// function tileArray (element) {
//     tileArray = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
//     return tileArray;
// }

// console.log(tileArray(element));