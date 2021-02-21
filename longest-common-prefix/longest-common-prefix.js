function longestCommonPrefix(array) {
    let index = 0;

    for (let j = 1; j < array.length; j++) {
        for (let i = 0; i < array[j-1].length; i++) {
            if(array[j-1][i] === array[j][i]) {
                // console.log(i+') '+ array[j-1][i] + ' ' + array[j][i] + ' ' + index);
                index = i;
            }
        }
    }

    if (index === 0) {
        console.log('');
        return;
    }
    console.log(array[0].slice(0, index + 1));
}

longestCommonPrefix(["colorado", "color", "cold"]);
longestCommonPrefix(["a", "b", "c"]);
longestCommonPrefix(["spot", "spotty", "spotted"]);