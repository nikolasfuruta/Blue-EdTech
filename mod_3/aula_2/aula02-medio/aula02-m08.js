/*Agora, imprima todas as tabuadas do número 1 ao 10.*/

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

nums.forEach((num) => {
    let n = 10;
    while (n > 0) {
        console.log(`${num} X ${10 - n} = ${num * (10 - n)}`);
        n -= 1;
    }
    console.log('')
});
