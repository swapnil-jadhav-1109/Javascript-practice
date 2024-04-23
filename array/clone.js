// write a program in js to clone an array.
let arr = ["apple", "mango","apple", "orange", "mango", "mango","cherry"];
 
function removeDuplicates(arr) {
 
    let unique = [];
 
    for (i = 0; i < arr.length; i++) {
 
        if (unique.indexOf(arr[i]) === -1) {
 
            unique.push(arr[i]);
 
        }
 
    }
 
    return unique;
}
console.log(removeDuplicates(arr));