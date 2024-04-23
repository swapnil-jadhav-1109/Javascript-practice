// write in js to check whether a year is leap or not 

let year = 2004;
if(year%400 === 0 ||( year%4 === 0 && year%100 !== 0)){
  console.log("this is a leap year");
}
else{
    console.log("this is not leap year");
}