 


 // 6.2 Make the image element appear and disappear when you click the corresponding button.
//  $(document).ready(function() {

//   $("#hideBtn").click(function() {
//     $("#exercise6_1 img").hide();
//   });
//   $("#showBtn").click(function() {
//     $("#exercise6_1 img").show();
//   });
// })



// #6 Make the appearance of h1 element switch between two style sets when it is Double Clicked.
$(document).ready(function() {
  $("#exercise6_3 h1").dblclick(function() {
    $("#exercise6_3 h1").toggleClass("styleSwitch");
  });
}
// Question 1a: Concatenation: combining things in JavaScript

// var string1 = 'Hello ';
// var string2 = 'my name is ';
// var string3 = 'DC';
// // // What do you expect the final message to be?
// var combinedStrings = string1 + string2 + string3;
// console.log(combinedStrings);
// What happens here? Hello my name is DC


// Question 1b:
// What happens here? Answer 85260 (since 8 is in quotations its treated like a string )
// var num1 = '8';
// var num2 = 52;
// var num3 = 60;
// // // What do you expect the final message to be?
// var combinedNumbers = num1 + num2 + num3;
// console.log(combinedNumbers);



//  Question 7.1c:
// What happens here? Answer 1010ten 
// var mixedNum1 = 10;
// var mixedString1 = "ten";
// var mixedNum2 = "10";
// // // // What do you expect the final message to be? Answer: 1010ten
// var mixedConcatenation = mixedNum1 + mixedNum2 + mixedString1;
// console.log(mixedConcatenation);


// If / Else If / Else - Checking for True or False
//  Question 7.2a:
// Given these variables
// var num4 = 5; 
// var num5 = 0;
// // What do you expect the console message to be? Answer: Num4 is greater than 1
// if (num4 > 1) { 
// console.log("Num4 is greater than 1"); 
// } else { 
// console.log("Num4 is NOT greater than 1"); 
// };

//  Question 7.2b:
// Given these variables
// var num4 = 5; 
// var num5 = 0;
// // What do you expect the console message to be? Answer: Else statement Ran
// if (num4 < num5 || num4 === num5 && true) { 
// console.log("If statement ran!"); 
// } else { 
// console.log("Else statement ran"); 
// };


//  Question 7.2c:
// Given these variables
// var num4 = 5; 
// var num5 = 0;
// What do you expect the console message to be? Answer: Else statement ran
// if (num4 < num5 || num4 === num5) { 
// console.log("If statement ran!"); 
// } else if (num5 === "0" || true) { 
// console.log("Else if statement ran"); 
// } else { 
// console.log("Else statement ran"); 
// };

 // Question 7.2c:
// Given these variables
// var num4 = 5; 
// var num5 = 0;
// What do you expect the console message to be? Answer: Else if statement ran
// if (num4 > num5 && num4 === num5) { 
// console.log("If statement ran!"); 
// } else if (num5 === "0" || true) { 
// console.log("Else if statement ran"); 
// } else { 
// console.log("Else statement ran"); 
// };


 // Question 7.3:For Loop - Looking into Arrays
// Given this variable
// var array1 = ["this", "is", "an", "array", "of", "strings"]; 

// What do you expect the console message to be?
    // each line starting from 0 will have a worrd 
    // 0 "this"
    // 1 "is"
    // 2 "an"
    // 3 "array"
    // 4 "of"
    // 5 "strings"

// for (var i = 0; i < array1.length; i = i + 1) { 
// console.log(i, array1[i]); 
// };

 // Question 7.4a
// Given these variable
// var array2 = [1, 3, 5, 7, 9]; 
// var total = 0;
// What do you expect the console message to be? 25 as that is the total of Array one and var total 
// for (var i = 0; i < array2.length; i = i + 1) { 
// total = total + array2[i]; 
// }; 
// console.log(total);

 // Question 7.4b
// Given this variable
// var array3 = [11, 33, 55, 77, 99];
// // What do you expect the console message to be?
// for (var i = 0; i < array2.length; i = i + 1) { 
// if(array3[i] >= 55 || array3[i] <= 100){ 
// console.log(array3, array3[i]); 
// }; 
// };



 // Question 7.5
// Given this function
// function testStuff (a, b) { 
// if(a > 25 && b < 100){ 
// console.log(a + " is greater than 25 and " + b + " is less then 100"); 
// } else { 
// console.log(a + " is NOT greater than 25 and " + b + " is NOT less then 100"); 
// }; 
// };
// // What do you expect the console message to be for each?
// testStuff(10, 101); 	Answer: 10 is NOT greater than 25 and 101is NOT less then 100
// testStuff(26, 99); 	Answer: 26 is greater than 25 and 99 is less then 100
// testStuff(100, 25); 	Answer: 100 is greater than 25 and 25 is less then 100

// Week 7 Bonus: Fizz Buzz
// for (i=1; i <= 100; i=i+1) {
// 	if( ( i % 3 == 0 ) && ( i % 5 == 0 ) ){
//         console.log("fizzbuzz")
//     }
// 	else if( i % 3 == 0 ) {
//         console.log('fizz')
//     }
//     else if ( i % 5 == 0 ){
//         console.log("buzz")
//     }
//     else {
//     	console.log(i)
//     }
// }

