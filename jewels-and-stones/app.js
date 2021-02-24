function jewelsAndStones(string1, string2) {
    let counter = 0;
    for (let i = 0; i < string1.length; i++) {
        for (let j = 0; j < string2.length; j++) {
            if(string1[i] === string2[j]) {
                counter += 1;
            }
        }
    }
    return counter
}

console.log(jewelsAndStones("abc", "ac"))
console.log(jewelsAndStones("Af", "AaaddfFf"))
console.log(jewelsAndStones("AYOPD", "ayopd"))