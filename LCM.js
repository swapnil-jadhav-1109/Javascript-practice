// javascript program to find LCM

let n1 = 6;
let n2 = 8;
let min = (n1 > n2) ? n1 : n2;
while (true)  
{
    if (min % n1 === 0 && min % n2 === 0)   
     {
        console.log(`the LCM of ${n1} and ${n2} is ${min}`);
        break;
    }
    min++;
}

