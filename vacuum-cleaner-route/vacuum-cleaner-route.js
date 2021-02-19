const UP = 'U'
const DOWN = 'D'
const LEFT = 'L'
const RIGHT = 'R'

let pos = {
    "x": 0,
    "y": 0
}

function moves(action) {
    switch(action) {
        case 'U':
            pos.y = pos.y + 1
            return pos.y
        case 'D':
            pos.y = pos.y - 1
            break;
        case 'L':
            pos.x = pos.x - 1
            break;
        case 'R':
            pos.x = pos.x + 1
            break;
        default:
            return null
    }
}

function allMoves(inputString) {
    pos.x = 0;
    pos.y = 0;

    for (char of inputString) {
        moves(char);
    }

    return isHome(pos);
}

function isHome(pos) {
    if(pos.x === 0 && pos.y === 0) {
        return true;
    }
    return false;
}

console.log(allMoves("LR"));
console.log(allMoves("URURD"));
console.log(allMoves("RUULLDRD"));