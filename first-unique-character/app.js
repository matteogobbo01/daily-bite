function firstUniqueChar(string) {
    let firstUniqueIndex = null;
    for (var i = 0; i < string.length; i++) {
        let count = 0;
        for (var j = 0; j < string.length; j++) {
            if (string[i] !== string[j]) {
                count++;
            }
        }
        if(firstUniqueIndex === null && count === (string.length - 1)) {
            firstUniqueIndex = i
        }
    }
    return firstUniqueIndex;
}

console.log(firstUniqueChar("abcabd"));
console.log(firstUniqueChar("thedailybyte"));
console.log(firstUniqueChar("developer"));