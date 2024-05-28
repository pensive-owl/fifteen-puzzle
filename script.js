const tileArray = Array.from(document.querySelectorAll('div.tile'));

console.log(tileArray);

const puzzleSlot1 = document.getElementById('puzzle-slot-1');
console.log(puzzleSlot1);

function tileInSlot (puzzleSlot) {
    return puzzleSlot.children[0];
}
function tileNeighbors (tile) {
    
}

console.log(tileInSlot(puzzleSlot1));

// function tileArray (element) {
//     tileArray = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
//     return tileArray;
// }

// console.log(tileArray(element));