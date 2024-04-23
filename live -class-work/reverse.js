// write a js program to print the reverse  number
let num = 234;
let reverse = 0;
let n;
while (num !== 0) {
    n = num % 10;
    reverse = reverse * 10 + n;
    num = Math.floor(num / 10);
}
console.log(reverse);
