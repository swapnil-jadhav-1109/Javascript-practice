// write a js program to count the vowels in a string.
let str = "Swapnil Jadhav";
let vowelcount = 0;
for (i = 0; i < str.length; i++) {
    let vowels = str[i].toLowerCase();
    if (vowels === "a" || vowels === "e" || vowels === "i" || vowels === "o" || vowels === "u") {
        vowelcount++;
    }
}
console.log("Number of vowels in string is:", vowelcount);