//write a program in js to find maximum between 3 numbers.
let x = 10;
let y = 20;
let z = 30;

// using else if
if(x > y)
{
    console.log(`${x} is greater than ${y} and ${z}`);
}
else if(y < z)
{
    console.log(`${z} is greater than ${x} and ${y} `);
}
else
{
    console.log(`${y} is greater than ${x} and ${z}`);
}
 // using nested if else
// if(x>y){
//     if(x>z){
//         console.log(`${x} is greater than ${y} and ${z}`);
//     }
//     else{
//         console.log(`${z} is greater than ${x} and ${y} `);
//     }
// }
// else{
//     if(y>z){
//         console.log(`${y} is greater than ${x} and ${z}`);
//     }
//     else{
//         console.log(`${z} is greater than ${x} and ${y} `);
//     }
// }

