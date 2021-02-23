// function twoSum(array, target) {
//     for (let i = 0; i < array.length - 1; i++) {
//         for (let j = 1; j < array.length; j++) {
//             let sum = array[i] + array[j];
//             console.log(array[i] + '+' + array[j] + '=' + sum);
//             if(sum === target) {
//                 console.log(true);
//             }
//         }
//     }
// }

function twoSum(array, target) {
    if(array.length === 0) {
        console.log(false);
        return ;
    }

    let item = array[0];

    for (let i = 1; i < array.length; i++) {
        let sum = item + array[i];
        // console.log(item + '+' + array[i] + '=' + sum);
        if(sum === target) {
            console.log(true);
            return ;
        }
    }

    return twoSum(array.slice(1, array.length), target);
}

twoSum([1, 3, 8, 2], 10);
twoSum([3, 9, 13, 7], 8);
twoSum([4, 2, 6, 5, 2], 4);