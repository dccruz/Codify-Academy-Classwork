//Exercise 7.1
var testOne = "What kind of variable is this?";
console.log("testOne is a: " + typeof(testOne));
var testTwo = 256;
console.log("testTwo is a: " + typeof(testTwo));
var testThree = ["What", "kind", "of", "variable", "am", "I?"];
console.log("testThree is a: " + typeof(testThree)); // we know this as an array and will look at objects next week
var testFour = false;
console.log("testFour is a: " + typeof(testFour));
var testFive = [1, 2, 5];
console.log("testFive is a: " + typeof(testFive)); // we know this as an array and will look at objects next week
var testSix = 128;
console.log("testSix is a: " + typeof(testSix));
var testSeven = "What am I?"
console.log("testSeven is a: " + typeof(testSeven));
var testEight = true;
console.log("testEight is a: " + typeof(testEight));
var testNine = ["What kind of variable is this?", 2, 5, 19]; // we know this as an array and will look at objects next week
console.log("testNine is a: " + typeof(testNine));


  //#7.2 Concatenation (combining things in JavaScript)
  // 7.2a Given these variables
  var string1 = 'Hello ';
  var string2 = 'my name is ';
  var string3 = 'you name here';
  var combinedStrings = string1 + string2 + string3;
  console.log("result of combinedStrings is: " + combinedStrings);


  // 7.2b Given these variables
  var num1 = 8;
  var num2 = 52;
  var num3 = 60;
  var combinedNumbers = num1 + num2 + num3;
  console.log("result of combinedNumbers is: " + combinedNumbers);

  // 7.2c Given these variables
  var mixedNum1 = 10;
  var mixedString1 = "ten";
  var mixedNum2 = "10";
  var mixedConcatenation = mixedNum1 + mixedNum2 + mixedString1;
  console.log(mixedConcatenation);
  
  // #3 IF / ELSE IF / ELSE - Checking True or False
  // 7.3a Given these variables
  var num4 = 5;
  var num5 = 0;
  if (num4 > 1) {
    console.log("Num4 is greater than 1");
  } else {
    console.log("Num4 is NOT greater than 1");
  };

  // 7.3b Given these variables
  var num4 = 5;
  var num5 = 0;
  if (num4 < num5 || num4 === num5 && true) {
    console.log("If statement ran!");
  } else {
    console.log("Else statement ran");
  };