var nestedArray = [5,3,4,[1, 2], [3, 4], [5, 6]];
var flattenedArray = [];
for (var i = 0; i < nestedArray.length; i++) {
  for (var j = 0; j < nestedArray[i].length; j++) {
    flattenedArray.push(nestedArray[i][j]);
  }
}

console.log(flattenedArray);