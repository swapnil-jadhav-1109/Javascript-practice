//write a program in js to capitalize every alternate character of a string given that character in the string will only be letters or spaces.

let str = "i am learn for javascript";
let result = "";
for (let i = 0; i < str.length; i++) {
  if (i % 2 === 0) {
    result += str[i].toUpperCase();
  } else {
    result += str[i];
  }
}
console.log(result);