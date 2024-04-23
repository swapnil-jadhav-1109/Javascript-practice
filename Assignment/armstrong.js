//Write a program to check whether a number is Armstrong or not.
//Example: 153 :  1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153.
let num =153;
let que =num;
let sum =0;
let remainder;
while(que!==0){
  remainder = que%10;
  que = Math.floor(que/10);
  sum += Math.pow(remainder,3);
}
if(sum === num){
  console.log("It is an armstrong number");
}
else{
  console.log("It is not a armstrong number");
}