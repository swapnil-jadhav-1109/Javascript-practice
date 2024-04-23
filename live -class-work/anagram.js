
//Question 21 - WAP in Javascript to check if two strings are anagrams or not
 
var str1 = "Night" , str2 = "Thing"
var s1 = str1.toLowerCase;
var s2 = str2.toLowerCase;
 
if(s1.length !== s2.length) {
  console.log("They are not anagram");
}
else {
var count1 = [], count2 = [];
  for(var i=0;i<256;i++) {
    count1[i] = 0;
    count2[i] = 0;
  }
 
  for(var i=0;i<s1.length;i++) {
    var ch1 = s1.charCodeAt(i);
    var ch2 = s2.charCodeAt(i); 
    count1[ch1]++;
    count2[ch2]++;
  }
 
  var flag = true;
 
  for(var i=0;i<256;i++){
    if(count1[i] !== count2[i]) {
      console.log("They are not anagrams");
      flag = false;
      break;
    }
  }
 
  if(flag) {
    console.log("They are anagrams");
  }
 
}