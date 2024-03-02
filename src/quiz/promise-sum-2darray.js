function sum2DArray(arr, index) {
    return new Promise((resolve, reject) => {
        if (arr.length > index) {
            setTimeout(() => {
                let sum = 0;
                for (let i = 0; i < arr.length; i++) {
                    sum += arr[index][i];
                }
                resolve(sum);
            }, 0);
        } else {
            reject("BAD INPUT: Expected array as input");
        }
    });
}

const array2D = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

const sumPromise1 = sum2DArray(array2D, 0);
const sumPromise2 = sum2DArray(array2D, 1);
const sumPromise3 = sum2DArray(array2D, 2);

Promise.all([sumPromise1, sumPromise2, sumPromise3])
    .then((rowSums) => {
        let tot = 0;
        rowSums.forEach((row) => {
            tot += row;
        });
        console.log("SUM : " + tot);
    })
    .catch((err) => {
        console.log("ERROR : ", err);
    });