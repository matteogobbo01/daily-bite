function validAnagram(string1, string2) {
    if(string1.length !== string2.length) {
        return false;
    }

    if (orderString(string1) === orderString(string2)) {
        return true;
    }
}

function orderString(string) {
    return string.split('').sort().join('');
}

console.log(validAnagram("cat", "tac"));
console.log(validAnagram("listen", "silent"));
console.log(validAnagram("program", "function"));