// wap in js to validate if a string is capital or not.
let str = "Swapnil Jadhav";
let capitalized = true;

for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) !== str.charAt(i).toUpperCase()) {
        capitalized= false;
        break;
    }
}

if (capitalized) {
    console.log("All characters are capitalized.");
} else {
    console.log("Not all characters are capitalized.");
}
