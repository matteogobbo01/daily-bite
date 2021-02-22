const string1 = "abcba";
const string2 = "fabbof";
const string3 = "abccab";

let changes = 0;

function palindrome(str) {
    let len = str.length;
    if(len === 0 || len === 1)
        return true;

    if(str[0] === str[len - 1]) {
        return palindrome(str.slice(1, len - 1));
    } 

    if(str[0] !== str[len-1] && len === 2) {
        return true;
    }

    if(str[0] !== str[len-1] && len !== 2 && changes === 0) {
        changes = changes + 1;
        return palindrome(str.replace(str[0], str[len-1]).slice(0, len));
    }

    return false;
}

console.log(palindrome(string1));
console.log(palindrome(string2));
console.log(palindrome(string3));