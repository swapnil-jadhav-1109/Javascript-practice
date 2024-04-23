
//Write a program in js to calculate the hcf of two numbers.
let num1 = 550;
let num2 = 450;
let hcf;
for(i = 1; i<= num1 && i <= num2; i++){
    if(num1 % i === 0 && num2 % i === 0){
        hcf = i;
    }
}
console.log(hcf);