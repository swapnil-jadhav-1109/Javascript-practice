
let arr = [1,2,3,4,5,6,7,8,9,10];
let d=5;

let rotateArry = (arr,d)=>{
    let result=[];
    for(i=d;i<arr.length;i++){
        result.push(arr[i]);
    }
    for(j=0;j<d;j++){
        result.push(arr[j]);
    }
    return result;
}
console.log(rotateArry(arr,d));















