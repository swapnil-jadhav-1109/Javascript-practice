// write a program using while loop to calculate number of digits present in a number.

let n = 123;
let count = 0;
// if(n === 0){
//     count = 1;
// }
// while(n !== 0){
//     n = Math.floor(n/10);
//     console.log(n);
//     count++;
// }
// console.log("Number of digits is",count);

do {
    n = Math.floor(n/10);
     count++;
}while(n!== 0)
console.log(count);