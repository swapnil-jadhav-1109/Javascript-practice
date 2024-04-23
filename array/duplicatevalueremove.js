// write a program in js to input an array and remove duplicates from the array without using any other kind of data structure 
let arr = [1,3,5,3,"Rome","Italy","Rome"];
for (let i = 0; i < arr.length; i++)
{
    let ch = arr[i];
    for(let j = i + 1; j < arr.length; j++)
    {
        if(ch === arr[j])
        {
            arr.splice(j, 1);
            j--;
        }
    }
}
console.log(arr);