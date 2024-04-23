// write a js program to check number is perfect square or not
let a = 5;
let issquare =true;
for(i = 1; i<=Math.sqrt(a);i++){
    if(i*i===a){
        console.log("this is a perfect square");
        issquare =false;
        break;
    }
}
if(issquare){
    console.log("this is not perfect square");
}