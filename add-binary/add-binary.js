function convertBinaryToDecimal(inputString) {
    let sum = 0;
    let index = inputString.length - 1;

    for (let i = 0; i < inputString.length; i++) {
        let value = parseInt(inputString[i]) * Math.pow(2, index);
        sum = sum + value;
        index = index - 1;
    }

    return sum;
}

function addAndConvert(a, b) {
    let decimalSum = convertBinaryToDecimal(a) + convertBinaryToDecimal(b);
    return decimalSum.toString(2);
}

console.log(addAndConvert("100", "1"));
console.log(addAndConvert("11", "1"));
console.log(addAndConvert("1", "0"));