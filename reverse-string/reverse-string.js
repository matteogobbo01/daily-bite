const string1 = "Cat"
const string2 = "The Daily Byte"
const string3 = "civic"

function reverseString(str) {
    let temp = [];
    for(i = str.length - 1; i >= 0; i--) {
        temp.push(str[i]);
    }
    return(temp.join(""));
}

console.log(reverseString(string1))
console.log(reverseString(string2))
console.log(reverseString(string3))