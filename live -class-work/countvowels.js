// wap in js to count the no of vowels in a string. 
let str = "Swapnil Jadhav";
let count = 0;
for (let i = 0; i < str.length; i++) {
    let vowelscount = str[i].toLowerCase();
    if (vowelscount === "a" || vowelscount === "e" || vowelscount === "i" || vowelscount === "o" || vowelscount === "u") {
        count++;
    }
}
console.log(count);