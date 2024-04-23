//write a js program to check wheather a number is prime or not.
let prime = 13;
 let isprime = true;
for(i=2;i<prime;i++){
    if(prime % i === 0){
        console.log("this is not a prime number");
     isprime = false;
     break;
    }
}
if(isprime){
    console.log("this is a prime number");
}