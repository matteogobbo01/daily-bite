const string1 = "level";
const string2 = "algorithm";
const string3 = "A man, a plan, a canal: Panama.";

function palindrome(str) {
    let len = str.length
    if(len === 0 || len === 1)
        return true;
    if(str[0] === '.' || str[0] === ',' || str[0] === ' ' || str[0] === ':')
        return palindrome(str.slice(1, len));
    if(str[len - 1] === ',' || str[len - 1] === '.' || str[len - 1] === ' ' || str[len - 1] === ':')
        return palindrome(str.slice(0, len - 1));
    if(str[0] === str[len - 1])
        return palindrome(str.slice(1, len - 1));
    return false;
}

console.log(palindrome(string1));
console.log(palindrome(string2));
console.log(palindrome(string3.toLowerCase()));