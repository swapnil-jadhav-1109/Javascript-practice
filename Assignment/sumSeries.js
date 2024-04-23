//Write a program in js to calculate the sum of the series  9+99+999+9999 .... n.
let num = 9;
let series = 10;
let sum = 0;
for(let i = 1; i<= series; i++){
    sum += num;
    console.log("the series of",num);
    num = num * 10 + 9;
}
console.log("sum of series is", sum);


