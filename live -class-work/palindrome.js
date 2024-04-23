// write a js program to check string is palindrome or not
let string = "madam";
let reverseString = "";
for( let i=string.length-1; i>=0;i--){
    let char =string.charAt(i);
    reverseString = reverseString + char;
}
if(string === reverseString){
    console.log("the string is palindrome");
}
else{
    console.log("the string is not palindrome");
}