//  10.1 Create an array with 5 different strings. Log the length of your array

var stringArray = ["chris", "david", "dylan", "nick", "sam"];
console.log(stringArray);
//    Log the length of each of the strings in your array.
for (var i = 0; i < stringArray.length; i++) {
  console.log(stringArray[i].length);
};
//    Finally, reverse the array and console the array again
stringArray.reverse();
console.log(stringArray);

// #4 Create an array of at least 5 numbers. Sort the array numerically, in ascending order (smallest to biggest).
var numbersArray = [33, 12, 55, 99, 88];
numbersArray.sort(function(a, b) {
  // look at values as it sorts
  console.log(a, b);
  return a - b;
});
