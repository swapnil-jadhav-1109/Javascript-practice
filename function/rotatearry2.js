/*Rotate the array anticlockwise by d times.
 input: [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]; d = 4; 
 output: [14, 16, 18, 20, 2, 4, 6, 8 , 10, 12];*/

let arr = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
let d = 4;
let rotate = (arr,d)=>{
    let result = [];
    for(i=arr.length-d;i<arr.length;i++){
        result.push(arr[i]);
    }
    for(j=0;j<arr.length-d;j++){
        result.push(arr[j]);
    }
    return result;
}
console.log(rotate(arr,d));
