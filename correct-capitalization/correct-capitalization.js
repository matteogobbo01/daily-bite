function checkCapitalization(inputString) {

    if(inputString.toLowerCase() === inputString || 
        inputString.toUpperCase() === inputString || 
        inputString[0].toUpperCase() === inputString[0]) {
        return true;
    }
    return false;
}

console.log(checkCapitalization('USA'));
console.log(checkCapitalization('Calvin'));
console.log(checkCapitalization('compUter'));
console.log(checkCapitalization('coding'));